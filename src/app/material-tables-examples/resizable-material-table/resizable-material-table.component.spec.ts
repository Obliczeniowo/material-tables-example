import { StudentsService } from './../mat-table-examples/Services/students.service';
import { MaterialModule } from './../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizableMaterialTableComponent } from './resizable-material-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ResizableMaterialTableComponent', () => {
  let component: ResizableMaterialTableComponent;
  let fixture: ComponentFixture<ResizableMaterialTableComponent>;
  const studentsService: StudentsService = new StudentsService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizableMaterialTableComponent ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
        StudentsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizableMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have some data', () => {
    expect(fixture.elementRef.nativeElement.querySelector('mat-table').innerText).toContain(studentsService.data[0].name);
  });
});
