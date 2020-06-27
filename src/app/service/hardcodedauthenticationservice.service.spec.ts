import { TestBed } from '@angular/core/testing';

import { HardcodedauthenticationserviceService } from './hardcodedauthenticationservice.service';

describe('HardcodedauthenticationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedauthenticationserviceService = TestBed.get(HardcodedauthenticationserviceService);
    expect(service).toBeTruthy();
  });
});
