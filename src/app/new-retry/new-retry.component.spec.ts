import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRetryComponent } from './new-retry.component';

describe('NewRetryComponent', () => {
  let component: NewRetryComponent;
  let fixture: ComponentFixture<NewRetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
