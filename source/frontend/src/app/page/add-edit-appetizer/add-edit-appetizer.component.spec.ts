import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAppetizerComponent } from './add-edit-appetizer.component';

describe('AddEditAppetizerComponent', () => {
  let component: AddEditAppetizerComponent;
  let fixture: ComponentFixture<AddEditAppetizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAppetizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAppetizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
