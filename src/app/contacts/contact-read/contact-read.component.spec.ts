import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactReadComponent } from './contact-read.component';

describe('ContactReadComponent', () => {
  let component: ContactReadComponent;
  let fixture: ComponentFixture<ContactReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
