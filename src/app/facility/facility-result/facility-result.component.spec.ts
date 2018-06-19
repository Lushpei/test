import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityResultComponent } from './facility-result.component';

describe('FacilityResultComponent', () => {
  let component: FacilityResultComponent;
  let fixture: ComponentFixture<FacilityResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
