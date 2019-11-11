import { StudentsService } from './../mat-table-examples/Services/students.service';
import { MaterialModule } from './../../material/material.module';
import { TableDragAndDropComponent } from './table-drag-and-drop/table-drag-and-drop.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoTablesDragAndDropComponent } from './two-tables-drag-and-drop.component';

describe('TwoTablesDragAndDropComponent', () => {
  let component: TwoTablesDragAndDropComponent;
  let fixture: ComponentFixture<TwoTablesDragAndDropComponent>;
  const studentsService: StudentsService = new StudentsService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoTablesDragAndDropComponent, TableDragAndDropComponent ],
      imports: [
        MaterialModule
      ],
      providers: [
        StudentsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoTablesDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TwoTablesDragAndDropComponent', () => {
    beforeEach(() => {
      component.secondTable.dataSource.data = studentsService.data;
      fixture.detectChanges();
    });

    it('should contain some data', () => {
      return expect(fixture.elementRef.nativeElement.querySelectorAll('mat-table')[1].innerText).toContain(studentsService.data[0].name);
    });
  });
});
