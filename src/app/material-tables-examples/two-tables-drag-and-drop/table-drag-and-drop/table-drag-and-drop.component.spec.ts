import { StudentsService } from './../../mat-table-examples/Services/students.service';
import { MaterialModule } from './../../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDragAndDropComponent } from './table-drag-and-drop.component';

describe('TableDragAndDropComponent', () => {
  let component: TableDragAndDropComponent;
  let fixture: ComponentFixture<TableDragAndDropComponent>;
  const studentsService: StudentsService = new StudentsService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableDragAndDropComponent],
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
    fixture = TestBed.createComponent(TableDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TableDragAndDropComponent', () => {
    beforeEach(() => {
      component.dataSource.data = [...studentsService.data];
      fixture.detectChanges();
    });

    it('should have some data', () => {
      expect(fixture.elementRef.nativeElement.querySelector('mat-table').innerText).toContain(studentsService.data[0].name);
    });

  });
});
