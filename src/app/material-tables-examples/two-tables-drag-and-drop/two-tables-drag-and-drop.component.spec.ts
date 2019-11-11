import { MaterialModule } from './../../material/material.module';
import { TableDragAndDropComponent } from './table-drag-and-drop/table-drag-and-drop.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoTablesDragAndDropComponent } from './two-tables-drag-and-drop.component';

describe('TwoTablesDragAndDropComponent', () => {
  let component: TwoTablesDragAndDropComponent;
  let fixture: ComponentFixture<TwoTablesDragAndDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoTablesDragAndDropComponent, TableDragAndDropComponent ],
      imports: [
        MaterialModule
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
});
