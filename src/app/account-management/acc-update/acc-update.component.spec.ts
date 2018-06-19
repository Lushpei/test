import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccUpdateComponent } from './acc-update.component';

describe('AccUpdateComponent', () => {
  let component: AccUpdateComponent;
  let fixture: ComponentFixture<AccUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
