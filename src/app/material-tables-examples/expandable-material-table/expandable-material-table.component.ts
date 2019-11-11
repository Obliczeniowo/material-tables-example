import { StudentsService } from './../mat-table-examples/Services/students.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';
import { Student } from '../Interfaces/student';

/**
 * This class inheritance DataSource class to override returned data for expandable table
 */
export class ExampleDataSource<RECORD_TYPE> extends DataSource<RECORD_TYPE> {

  /**
   * table data
   */
  data: RECORD_TYPE[] = [];

  /**
   * override method that was triggered to get data to display in table
   */
  connect(): Observable<RECORD_TYPE[]> {
    const rows = [];
    this.data.forEach(element => rows.push(element, { detailRow: true, element }));
    return of(rows);
  }

  disconnect() { }
}

/**
 * This component is expample of expandable table
 */
@Component({
  selector: 'app-expandable-material-table',
  templateUrl: './expandable-material-table.component.html',
  styleUrls: ['./expandable-material-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ExpandableMaterialTableComponent implements OnInit {
  /**
   * material table columns names
   */
  displayedColumns = ['name', 'surname', 'age'];


  expandedElement: any;

  /**
   * material table data template object that contain data to display in table
   */
  dataSource = new ExampleDataSource<Student>();

  /**
   * this field contain method that is triggered to checkout if table element have some extra data
   */
  isExpansionDetailRow = (i: number, row: any) => row.hasOwnProperty('detailRow');

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

}
