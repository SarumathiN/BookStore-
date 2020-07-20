import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdetailsComponent } from './bookdetails.component';

describe('BookdetailsComponent', () => {
  let component: BookdetailsComponent;
  let fixture: ComponentFixture<BookdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
