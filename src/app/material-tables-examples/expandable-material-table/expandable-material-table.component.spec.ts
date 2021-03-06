import { MaterialModule } from './../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableMaterialTableComponent } from './expandable-material-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ExpandableMaterialTableComponent', () => {
  let component: ExpandableMaterialTableComponent;
  let fixture: ComponentFixture<ExpandableMaterialTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableMaterialTableComponent ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableMaterialTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
