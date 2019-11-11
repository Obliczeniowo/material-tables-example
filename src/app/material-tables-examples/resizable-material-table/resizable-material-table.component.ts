import { StudentsService } from './../mat-table-examples/Services/students.service';
import { Component, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { AbstractResizableMaterialTableComponent } from './abstract-resizable-material-table/abstract-resizable-material-table.component';
import { Student } from '../Interfaces/student';

/**
 * This component show example of resizable material table
 */
@Component({
  selector: 'app-resizable-material-table',
  templateUrl: './resizable-material-table.component.html',
  styleUrls: ['./resizable-material-table.component.scss']
})
export class ResizableMaterialTableComponent extends AbstractResizableMaterialTableComponent implements OnInit, AfterViewInit {

  /**
   * Contain material datasource template object that contain table data
   */
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  /**
   * @param renderer needed for parent abstract class constructor for access to events from this class html DOM
   * @param studnetsService contains data for table
   */
  constructor(
    protected renderer: Renderer2,
    private studnetsService: StudentsService
    ) {
    super(renderer);

    this.dataSource.data = this.studnetsService.data;

    this.columns = [
      {
        field: 'name',
        width: 100
      },
      {
        field: 'surname',
        width: 350
      },
      {
        field: 'age',
        width: 250
      }
    ];
  }

  /**
   * Reference to sorting object
   */
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  /**
   * Run method from base class to set table columns
   */
  ngOnInit() {
    this.setDisplayedColumns();
  }

  /**
   * Set sorting object on [dataSource]{@link ResizableMaterialTableComponent#dataSource} field
   */
  ngAfterViewInit() {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
    this.dataSource.sort = this.sort;
  }

}
