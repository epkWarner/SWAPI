import { TestBed } from '@angular/core/testing';

import { SWAPIService } from './swapi.service';

describe('SWAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SWAPIService = TestBed.get(SWAPIService);
    expect(service).toBeTruthy();
  });
});
