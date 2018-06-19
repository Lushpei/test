import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressReadComponent } from './address-read.component';

describe('AddressReadComponent', () => {
  let component: AddressReadComponent;
  let fixture: ComponentFixture<AddressReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
