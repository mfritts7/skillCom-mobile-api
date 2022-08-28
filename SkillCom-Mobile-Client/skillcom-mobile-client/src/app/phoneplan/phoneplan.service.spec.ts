import { TestBed } from '@angular/core/testing';

import { PhoneplanService } from './phoneplan.service';

describe('PhoneplanService', () => {
  let service: PhoneplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
