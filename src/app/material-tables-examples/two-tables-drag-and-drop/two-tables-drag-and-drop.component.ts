import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TableDragAndDropComponent } from './table-drag-and-drop/table-drag-and-drop.component';
import { StudentsService } from '../mat-table-examples/Services/students.service';
import { timer } from 'rxjs';

/**
 * This component show example of using drag and drop of two material tables
 */
@Component({
  selector: 'app-two-tables-drag-and-drop',
  templateUrl: './two-tables-drag-and-drop.component.html',
  styleUrls: ['./two-tables-drag-and-drop.component.scss']
})
export class TwoTablesDragAndDropComponent implements OnInit, AfterViewInit {

  /**
   * This is reference of [TableDragAndDropComponent]{@link TableDragAndDropComponent} that will used to drag
   * elements from / to this table
   */
  @ViewChild('firstTable', { static: false }) firstTable: TableDragAndDropComponent;

  /**
   * This is reference of [TableDragAndDropComponent]{@link TableDragAndDropComponent} that will used to drag
   * elements from / to this table
   */
  @ViewChild('secondTable', { static: false }) secondTable: TableDragAndDropComponent;

  /**
   * @param studentsService service that contain data needed for material table
   */
  constructor(
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
  }

  /**
   * Initialize data table
   */
  ngAfterViewInit() {

    timer(1).subscribe(() => {
      this.secondTable.dataSource.data = this.studentsService.data;
      this.secondTable.secondTable = this.firstTable;
      this.firstTable.secondTable = this.secondTable;
    });

  }

  /**
   * This method move data to [right table]{@link TwoTablesDragAndDropComponent#firstTable}
   * from [left table]{@link TwoTablesDragAndDropComponent#secondTable}
   */
  moveDataToRightTable() {
    this.secondTable.dataSource.data = [...this.secondTable.dataSource.data, ...this.firstTable.dataSource.data];
    this.firstTable.dataSource.data = [];
  }

  /**
   * This method move data to [left table]{@link TwoTablesDragAndDropComponent#secondTable}
   * from [right table]{@link TwoTablesDragAndDropComponent#firstTable}
   */
  moveDataToLeftTable() {
    this.firstTable.dataSource.data = [...this.firstTable.dataSource.data, ...this.secondTable.dataSource.data];
    this.secondTable.dataSource.data = [];
  }

}
