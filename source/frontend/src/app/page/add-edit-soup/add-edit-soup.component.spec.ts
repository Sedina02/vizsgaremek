import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSoupComponent } from './add-edit-soup.component';

describe('AddEditSoupComponent', () => {
  let component: AddEditSoupComponent;
  let fixture: ComponentFixture<AddEditSoupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSoupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
