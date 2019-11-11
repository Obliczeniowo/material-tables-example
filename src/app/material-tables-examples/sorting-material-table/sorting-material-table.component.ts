import { Student } from './../Interfaces/student';
import { StudentsService } from './../mat-table-examples/Services/students.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-sorting-material-table',
  templateUrl: './sorting-material-table.component.html',
  styleUrls: ['./sorting-material-table.component.scss']
})
export class SortingMaterialTableComponent implements OnInit, AfterViewInit {
  /**
   * Columns to display
   */
  displayedColumns: string[] = ['name', 'surname', 'age'];

  /**
   * Material table datasource template object that contain table data
   */
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  /**
   * @param studentsService service that contains data for table
   */
  constructor(
    private studentsService: StudentsService
  ) {
    this.dataSource.data = this.studentsService.data;
  }

  ngOnInit() {
  }

  /**
   * In this case set sorting object on [dataSource]{@link SortingMaterialTableComponent#dataSource}
   */
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  /**
   * Method triggered, when sorted column was clicked
   * @param sortEvent event that contain basic data about clicked column and a way it should be sorted
   * @example after click column surname it will display in browser console: Object { active: \"surname\", direction: \"desc\" }
   */
  sorting(sortEvent) {
    console.log(sortEvent);
  }

}
