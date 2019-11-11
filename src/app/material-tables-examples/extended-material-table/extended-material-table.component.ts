import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Student } from '../Interfaces/student';

/**
 * this component is example of extended material table
 */
@Component({
  selector: 'app-extended-material-table',
  templateUrl: './extended-material-table.component.html',
  styleUrls: ['./extended-material-table.component.scss']
})
export class ExtendedMaterialTableComponent implements OnInit {

  /**
   * column table to display
   */
  displayedColumns: string[] = [
    'name',
    'surname',
    'age'
  ];

  /**
   * data to display in table (extended by one extra field called extended)
   */
  data: Student[] = [
    {
      name: 'Czarna lista studenciaków',
      extended: true
    } as unknown as Student,
    {
      id: 1,
      name: 'Grzegorz',
      surname: 'Brzęczyszczykiewicz',
      age: 22
    },
    {
      id: 2,
      name: 'Biała lista studenciaków',
      extended: true
    } as unknown as Student,
    {
      id: 3,
      name: 'Grzegorz',
      surname: 'Brzęczyszczykiewicz',
      age: 22
    }
  ];

  /**
   * material table data template object that contain displayed in table data
   */
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  /**
   * this field contain method that will return true if element is extended or false if not
   */
  isExtended = (index, element) => element.extended;

  constructor() {
  }

  /**
   * Initialize table data
   */
  ngOnInit() {
    this.dataSource.data = this.data;
  }

}
