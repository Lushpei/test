import { TestBed, inject } from '@angular/core/testing';

import { AppBaseServiceService } from './app-base-service.service';

describe('AppBaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppBaseServiceService]
    });
  });

  it('should be created', inject([AppBaseServiceService], (service: AppBaseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
