import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material';
import { Student } from '../../Interfaces/student';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';

/**
 * This component have drag and drop table and methods
 */
@Component({
  selector: 'app-table-drag-and-drop',
  templateUrl: './table-drag-and-drop.component.html',
  styleUrls: ['./table-drag-and-drop.component.scss']
})
export class TableDragAndDropComponent implements OnInit {

  /**
   * This field contain reference to HTMLElemnt object whitch is MatTable
   */
  @ViewChild(MatTable, { static: false }) matTable: MatTable<Student>;

  /**
   * This field contain reference to cdkDropList directive, to which access is needed
   * to make drag-drop functionality
   */
  @ViewChild(CdkDropList, { static: false }) cdkDropList: CdkDropList;

  /**
   * This field should contain reference to another TableDragAndDropComponent object
   */
  @Input() secondTable: TableDragAndDropComponent = null;

  /**
   * Table of columns to display
   */
  displayedColumns: string[] = [
    'name',
    'surname',
    'age'
  ];

  /**
   * this field is material table source specjal object, that contain table data
   */
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * This method is triggered, when element is dropped on table
   * @param event CdkDragDwop object that contains array of Student object
   */
  drop(event: CdkDragDrop<Student[]>) {
    if (event.previousContainer === event.container) {
      const prevIndex = event.container.data.findIndex((d) => d === event.item.data);
      moveItemInArray(event.container.data, prevIndex, event.currentIndex);
      this.matTable.renderRows();
    } else {
      const prevIndex = event.previousContainer.data.findIndex((d) => d === event.item.data);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        prevIndex,
        event.currentIndex);
      this.matTable.renderRows();
      this.secondTable.matTable.renderRows();
    }
  }

  /**
   * This method is used to move index from one table to another
   * @param index index of item in array of Student object that was displayed in table
   */
  moveItem(index: number) {
    const element: Student[] = this.dataSource.data.splice(index, 1);
    this.matTable.renderRows();
    this.secondTable.dataSource.data.push(element[0]);
    this.secondTable.matTable.renderRows();
  }

}
