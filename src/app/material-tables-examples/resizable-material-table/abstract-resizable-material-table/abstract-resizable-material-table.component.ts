import { Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';
import { MatTable } from '@angular/material';

/**
 * Abstract class component needed to make resizable table
 */
@Component({
  selector: 'app-abstract-resizable-material-table',
  templateUrl: './abstract-resizable-material-table.component.html',
  styleUrls: ['./abstract-resizable-material-table.component.scss']
})
export class AbstractResizableMaterialTableComponent implements OnInit, AfterViewInit {

  /**
   * contain reference to material table
   */
  @ViewChild(MatTable, { read: ElementRef, static: false }) protected matTableRef: ElementRef;

  /**
   * flag that determine if resize cursor should be displayed or not (depends on current position
   * of mouse pointer over the table header)
   */
  resizeCursor = false;

  /**
   * flag that determinate if mouse button is pressed
   */
  pressed = false;

  /**
   * contains index of column, that was in resize mode
   */
  currentResizeIndex: number;

  /**
   * start point of resizing
   */
  startX: number;
  /**
   * start column width
   */
  startWidth: number;

  isResizingRight: boolean;

  /**
   * abstract field will contain method to listener of mouse move event of inheritance object
   */
  resizableMousemove: () => void;
  /**
   * abstract field will contain method to listener of mouse button up event of inheritance object
   */
  resizableMouseup: () => void;

  /**
   * table columns object
   */
  columns: any[];

  /**
   * Displayed columns table
   */
  displayedColumns: string[] = [];

  /**
   * @param renderer this object give some access to inheritance class
   */
  constructor(protected renderer: Renderer2) { }

  /**
   * Initialize columns
   */
  ngOnInit() {
    this.setDisplayedColumns();
  }

  /**
   * Initialize view
   */
  ngAfterViewInit() {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
  }

  /**
   * @param tableWidth table width
   */
  setTableResize(tableWidth: number) {
    let totWidth = 0;
    this.columns.forEach((column) => {
      totWidth += column.width;
    });
    const scale = (tableWidth - 5) / totWidth;
    this.columns.forEach((column) => {
      column.width *= scale;
      this.setColumnWidth(column);
    });
  }

  /**
   * Set displayed column
   */
  setDisplayedColumns() {
    this.columns.forEach((column, index) => {
      column.index = index;
      this.displayedColumns[index] = column.field;
    });
  }

  /**
   * Method trigerred when mouse is moved ocer the header cell
   * @param event event object
   */
  mouseMoveEvent(event: any) {
    const endPos = event.target.offsetLeft + event.target.clientWidth;

    if (endPos - event.pageX > 10 && endPos - event.pageX >= 0) {
      this.resizeCursor = false;
    } else {
      this.resizeCursor = true;
    }
  }

  /**
   * Method triggered, whem table column was triggered
   * @param event event object
   * @param index index of clicked column
   */
  resizeColumn(event: any, index: number) {
    this.checkResizing(event, index);
    this.currentResizeIndex = index;
    this.startX = event.pageX;
    this.startWidth = event.target.clientWidth;

    const endPos = event.target.offsetLeft + event.target.clientWidth;

    if (endPos - event.pageX > 10 && endPos - event.pageX >= 0) {
      return;
    }

    this.pressed = true;

    event.preventDefault();
    this.mouseMove(index);
  }

  /**
   * Method used in [resizeColumn]{@link AbstractResizableMaterialTableComponent} to check, if column
   * is in resizing mode or not
   * @param event event from resizeColumn method
   * @param index index of clicked column
   */
  protected checkResizing(event, index) {
    const cellData = this.getCellData(index);
    if ((index === 0) || (Math.abs(event.pageX - cellData.right) < cellData.width / 2 && index !== this.columns.length - 1)) {
      this.isResizingRight = true;
    } else {
      this.isResizingRight = false;
    }
  }

  /**
   * Return bouunding rect as DOMRect object
   * @param index index of column
   * @return bouunding rect of index column
   */
  protected getCellData(index: number): DOMRect {
    const headerRow = this.matTableRef.nativeElement.children[0];
    const cell = headerRow.children[index];
    return cell.getBoundingClientRect();
  }

  /**
   * method used on mouse move
   * @param index index of resize mode column
   */
  mouseMove(index: number) {
    this.resizableMousemove = this.renderer.listen('document', 'mousemove', (event) => {
      if (this.pressed && event.buttons) {
        const dx = (this.isResizingRight) ? (event.pageX - this.startX) : (-event.pageX + this.startX);
        const width = this.startWidth + dx;
        if (this.currentResizeIndex === index && width > 50) {
          this.setColumnWidthChanges(index, width);
        }
      }
    });
    this.resizableMouseup = this.renderer.listen('document', 'mouseup', (event) => {
      if (this.pressed) {
        this.pressed = false;
        this.currentResizeIndex = -1;
        this.resizableMousemove();
        this.resizableMouseup();
      }
    });
  }

  /**
   * This method set column width on change mouse pos
   * @param index index of column
   * @param width width of column
   */
  setColumnWidthChanges(index: number, width: number) {
    const orgWidth = this.columns[index].width;
    const dx = width - orgWidth;
    if (dx !== 0) {
      const j = (this.isResizingRight) ? index + 1 : index - 1;
      const newWidth = this.columns[j].width - dx;
      if (newWidth > 50) {
        this.columns[index].width = width;
        this.setColumnWidth(this.columns[index]);
        this.columns[j].width = newWidth;
        this.setColumnWidth(this.columns[j]);
      }
    }
  }

  /**
   * Set colums width by column object
   * @param column column element
   */
  setColumnWidth(column: any) {
    const columnEls = Array.from(document.getElementsByClassName('mat-column-' + column.field));
    columnEls.forEach((el: HTMLDivElement) => {
      el.style.width = column.width + 'px';
    });
  }

  /**
   * Listening on resize event
   * @param event resize event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
  }

}
