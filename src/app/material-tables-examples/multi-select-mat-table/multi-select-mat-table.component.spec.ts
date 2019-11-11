import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectMatTableComponent } from './multi-select-mat-table.component';
import { MatTableModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';

describe('MultiSelectMatTableComponent', () => {
  let component: MultiSelectMatTableComponent;
  let fixture: ComponentFixture<MultiSelectMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectMatTableComponent ],
      imports: [
        MatTableModule,
        MatCheckboxModule,
        MatTooltipModule
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
});
