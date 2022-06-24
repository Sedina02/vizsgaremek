import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDessertComponent } from './add-edit-dessert.component';

describe('AddEditDessertComponent', () => {
  let component: AddEditDessertComponent;
  let fixture: ComponentFixture<AddEditDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDessertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
