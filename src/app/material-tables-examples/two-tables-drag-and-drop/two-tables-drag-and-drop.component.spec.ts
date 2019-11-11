import { StudentsService } from './../mat-table-examples/Services/students.service';
import { MaterialModule } from './../../material/material.module';
import { TableDragAndDropComponent } from './table-drag-and-drop/table-drag-and-drop.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoTablesDragAndDropComponent } from './two-tables-drag-and-drop.component';
import { By } from '@angular/platform-browser';

describe('TwoTablesDragAndDropComponent', () => {
  let component: TwoTablesDragAndDropComponent;
  let fixture: ComponentFixture<TwoTablesDragAndDropComponent>;
  const studentsService: StudentsService = new StudentsService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwoTablesDragAndDropComponent, TableDragAndDropComponent],
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
      component.secondTable.dataSource.data = [...studentsService.data];
      fixture.detectChanges();
    });

    it('second table should contain some data', () => {
      expect(fixture.elementRef.nativeElement.querySelectorAll('mat-table')[1].innerText).toContain(studentsService.data[0].name);
    });

    it('first table should not contain any data', () => {
      expect(
        fixture.elementRef.nativeElement.querySelectorAll('mat-table')[0]
          .innerText.search(studentsService.data[0].name) === -1).toBeTruthy();
    });

    // test of first button that move data from right table to left one
    describe('TwoTableDragAndDropComponent -> testing moving table elements from second to first table', () => {
      beforeEach(() => {
        const button: HTMLButtonElement = fixture.elementRef.nativeElement.querySelectorAll('button')[0];
        button.click();
        fixture.detectChanges();
      });

      it('Should first table have data', () => {
        expect(fixture.elementRef.nativeElement.querySelectorAll('mat-table')[0].innerText).toContain(studentsService.data[0].name);
      });

      it('second table should not contain any data', () => {
        expect(
          fixture.elementRef.nativeElement.querySelectorAll('mat-table')[1]
            .innerText.search(studentsService.data[0].name) === -1).toBeTruthy();
      });

      // testing second button that moving data from left table to right one
      describe('TwoTableDragAndDropComponent -> testing moving table elements from first to second table', () => {
        beforeEach(() => {
          const button: HTMLButtonElement = fixture.elementRef.nativeElement.querySelectorAll('button')[1];
          button.click();
          fixture.detectChanges();
        });

        it('Should second table have data', () => {
          expect(fixture.elementRef.nativeElement.querySelectorAll('mat-table')[1].innerText).toContain(studentsService.data[0].name);
        });

        it('first table should not contain any data', () => {
          expect(
            fixture.elementRef.nativeElement.querySelectorAll('mat-table')[0]
              .innerText.search(studentsService.data[0].name) === -1).toBeTruthy();
        });
      });
    });
  });
});
