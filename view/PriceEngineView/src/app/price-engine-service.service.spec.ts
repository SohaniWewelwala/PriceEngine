import { TestBed, inject } from '@angular/core/testing';

import { PriceEngineServiceService } from './price-engine-service.service';

describe('PriceEngineServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceEngineServiceService]
    });
  });

  it('should be created', inject([PriceEngineServiceService], (service: PriceEngineServiceService) => {
    expect(service).toBeTruthy();
  }));
});
