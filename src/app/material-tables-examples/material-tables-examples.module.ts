import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtendedMaterialTableComponent } from './extended-material-table/extended-material-table.component';
import { MaterialModule } from '../material/material.module';
import { ExampleRoutingModule } from './examples-routing/examples-routing.module';
import { MatTableExamplesComponent } from './mat-table-examples/mat-table-examples.component';
import { BasicMaterialTableComponent } from './basic-material-table/basic-material-table.component';

@NgModule({
  declarations: [ExtendedMaterialTableComponent, MatTableExamplesComponent, BasicMaterialTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ExampleRoutingModule
  ],
  exports: [
    MatTableExamplesComponent
  ]
})
export class MaterialTablesExamplesModule { }
