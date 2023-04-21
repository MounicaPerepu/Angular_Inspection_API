import { TestBed } from '@angular/core/testing';

import { CodingFunctionalityService } from '../services/coding-functionality.service';

describe('CodingFunctionalityService', () => {
  let service: CodingFunctionalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodingFunctionalityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
