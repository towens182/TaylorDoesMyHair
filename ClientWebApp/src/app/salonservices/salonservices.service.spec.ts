import { TestBed } from '@angular/core/testing';

import { SalonservicesService } from './salonservices.service';

describe('SalonservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalonservicesService = TestBed.get(SalonservicesService);
    expect(service).toBeTruthy();
  });
});
