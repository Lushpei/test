import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccReadComponent } from './acc-read.component';

describe('AccReadComponent', () => {
  let component: AccReadComponent;
  let fixture: ComponentFixture<AccReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
