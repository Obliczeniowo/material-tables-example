import { StudentsService } from './../Services/students.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Student } from '../../Interfaces/student';

/**
 * This component show example of filtering table
 */
@Component({
  selector: 'app-filtered-mat-table',
  templateUrl: './filtered-mat-table.component.html',
  styleUrls: ['./filtered-mat-table.component.scss']
})
export class FilteredMatTableComponent implements OnInit, AfterViewInit {

  /**
   * columns to display
   */
  displayedColumns: string[] = ['name', 'surname', 'age'];

  /**
   * table template object that contain table data
   */
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  /**
   * Material sort object that is used to sort table
   */
  @ViewChild(MatSort, { static: false }) matSort: MatSort;

  /**
   * @param studentsService service that contain data to display
   */
  constructor(
    private studentsService: StudentsService
  ) { }

  /**
   * Initialize table data and filter
   */
  ngOnInit() {
    this.dataSource.data = this.studentsService.data;

    this.dataSource.filterPredicate = (data: any, query: string) => query !== ''
      ? (data.name + ' ' + data.surname).toLowerCase().search(query.toLocaleLowerCase()) !== -1 : false;
  }

  /**
   * set sorting object on [dataSource]{@link FilteredMatTableComponent#dataSource}
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.matSort;
  }

  /**
   * Method triggered, when query is changed
   * @param query searched string
   */
  queryChanged(query: string) {
    this.dataSource.filter = query;
  }

}
