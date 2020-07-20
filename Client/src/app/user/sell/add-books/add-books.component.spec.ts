import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBooksComponent } from './add-books.component';

describe('AddBooksComponent', () => {
  let component: AddBooksComponent;
  let fixture: ComponentFixture<AddBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
