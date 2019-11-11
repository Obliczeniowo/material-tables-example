import { Student } from './../Interfaces/student';
import { AbstractMulitSelectMatTableComponent } from './abstract-mulit-select-mat-table/abstract-mulit-select-mat-table.component';
import { StudentsService } from './../mat-table-examples/Services/students.service';
import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-multi-select-mat-table',
  templateUrl: './multi-select-mat-table.component.html',
  styleUrls: ['./multi-select-mat-table.component.scss']
})
export class MultiSelectMatTableComponent extends AbstractMulitSelectMatTableComponent<Student> implements OnInit {

  /**
   * @param studentsService service that contains data to display in table
   */
  constructor(
    private studentsService: StudentsService
  ) {
    super();
  }

  /**
   * initialize base class object
   */
  ngOnInit() {
    this.displayedColumns = [
      'select',
      'name',
      'surname',
      'age'
    ];

    this.dataSource.data = this.studentsService.data;
    this.selection = new SelectionModel<Student>(true, []);
  }

}
