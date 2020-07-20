import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLpageComponent } from './user-lpage.component';

describe('UserLpageComponent', () => {
  let component: UserLpageComponent;
  let fixture: ComponentFixture<UserLpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
