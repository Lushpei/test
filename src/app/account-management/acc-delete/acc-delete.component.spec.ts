import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDeleteComponent } from './acc-delete.component';

describe('AccDeleteComponent', () => {
  let component: AccDeleteComponent;
  let fixture: ComponentFixture<AccDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
