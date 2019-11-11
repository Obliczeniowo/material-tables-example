import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * Abstract teamplate class for multiple select columns tables
 */
@Component({
  selector: 'app-abstract-mulit-select-mat-table',
  template: ``
})
export class AbstractMulitSelectMatTableComponent<RECORD_TYPE> implements OnInit {

  /**
   * material table template object that contain table data
   */
  dataSource: MatTableDataSource<RECORD_TYPE> = new MatTableDataSource<RECORD_TYPE>();

  /**
   * table of displayed columns names
   */
  displayedColumns: string[];

  /**
   * object that contain all needed method to make multiple select table
   */
  selection: SelectionModel<RECORD_TYPE>;

  constructor() { }

  /**
   * initialize selection field
   */
  ngOnInit() {
    this.selection = new SelectionModel<RECORD_TYPE>(true, []);
  }

  /**
   * method that check out if all elements of table was selected
   * @return true if all elements was selected, false otherwise
   */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /**
   * Toggle all elements state from selected all to deselected all. If one element is selected
   * then triggering this method will diselect all elements
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /**
   * This method return text to display when user move cursor pointer over checkbox
   * @param row record of table to set a label state
   * @return string for checkbox
   */
  checkboxToolTipText(row: RECORD_TYPE): string {
    if (!row) {
      return `${this.isAllSelected() ? 'odznacz' : 'zaznacz'} wszystkie`;
    }
    return `${this.selection.isSelected(row) ? 'odznacz' : 'zaznacz'} wiersz`;
  }

}
