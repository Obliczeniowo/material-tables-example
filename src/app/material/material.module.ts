import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatButtonToggleModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule,
  MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    FlexLayoutModule,
    DragDropModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  exports: [
    MatTableModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatIconModule,
    MatTooltipModule,
    DragDropModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
