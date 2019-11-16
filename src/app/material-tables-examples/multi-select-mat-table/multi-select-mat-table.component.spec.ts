import { StudentsService } from './../mat-table-examples/Services/students.service';
import { MaterialModule } from './../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectMatTableComponent } from './multi-select-mat-table.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('MultiSelectMatTableComponent', () => {
  let component: MultiSelectMatTableComponent;
  let fixture: ComponentFixture<MultiSelectMatTableComponent>;
  const studentsService: StudentsService = new StudentsService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSelectMatTableComponent],
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
    fixture = TestBed.createComponent(MultiSelectMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have some data', () => {
    expect(fixture.debugElement.query(By.css('mat-table')).nativeElement.innerText).toContain(studentsService.data[0].name);
  });

  describe('on click master toggle button should select all elements', () => {

    beforeEach(() => {
      const element: HTMLElement = fixture.elementRef.nativeElement.querySelector('mat-checkbox').querySelector('label');
      element.click();
      fixture.detectChanges();
    });

    it('Should have selected all elements', () => {
      fixture.whenStable().then(() => {
        expect(component.isAllSelected()).toBeTruthy();
      });
    });

    describe('on click checkbox in first row of table', () => {

      beforeEach(() => {
      });

      it('should have not selected all', () => {
        const firstCheckboxLabel: HTMLElement =
          fixture.elementRef.nativeElement.querySelectorAll('mat-checkbox')[1].querySelector('label');
        firstCheckboxLabel.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(component.isAllSelected()).toBeFalsy();
        });

      });

    });

    describe('on click checkbox in first row of table', () => {

      beforeEach(() => {
        const firstCheckboxLabel: HTMLElement =
          fixture.elementRef.nativeElement.querySelectorAll('mat-checkbox')[1].querySelector('label');
        firstCheckboxLabel.click();
        fixture.detectChanges();
      });

      it('should have mat-checkbox-indeterminate class on master toggle checkbox', () => {
        const firstCheckbox: HTMLElement =
          fixture.elementRef.nativeElement.querySelector('mat-checkbox');
        fixture.whenStable().then(() => {
          expect(firstCheckbox.classList.contains('mat-checkbox-indeterminate')).toBeTruthy();
        });
      });

    });

  });

});
