import { TestBed } from '@angular/core/testing';

import { FunkoService } from './funko.service';

describe('FunkoService', () => {
  let service: FunkoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunkoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
