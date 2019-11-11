import { StudentsService } from './../mat-table-examples/Services/students.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingMaterialTableComponent } from './sorting-material-table.component';
import { MatTableModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('SortingMaterialTableComponent', () => {
  let component: SortingMaterialTableComponent;
  let fixture: ComponentFixture<SortingMaterialTableComponent>;
  const studentsService: StudentsService = new StudentsService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortingMaterialTableComponent],
      imports: [
        MatTableModule
      ],
      providers: [
        StudentsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have some data', () => {
    expect(fixture.elementRef.nativeElement.querySelector('mat-table').innerText).toContain(studentsService.data[0].name);
  });

  describe('sorting Age column', () => {

    beforeEach(() => {
      const column: DebugElement = fixture.debugElement.query(By.css('.mat-header-cell.mat-column-age'));
      column.triggerEventHandler('click', {});
      fixture.detectChanges();
    });

    it('Should be sorted', () => {
      const data: DebugElement[] = fixture.debugElement.queryAll(By.css('.mat-cell.cdk-column-age'));
      const sortedData: DebugElement[] =
        data.sort((a, b) => parseInt(a.nativeElement.innerText, 10) - parseInt(b.nativeElement.innerText, 10));

      for (let i = 0; i < data.length; i++) {
        console.log(data[i].nativeElement.innerText, sortedData[i].nativeElement.innerText);
        if (JSON.stringify(data[i].nativeElement.innerText) !== JSON.stringify(sortedData[i].nativeElement.innerText)) {
          expect(false).toBeTruthy();
          break;
        }
      }
      expect(true).toBeTruthy();
    });

  });

});
