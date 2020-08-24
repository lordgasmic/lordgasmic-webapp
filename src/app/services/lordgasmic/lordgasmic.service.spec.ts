import { TestBed } from '@angular/core/testing';

import { LordgasmicService } from './lordgasmic.service';

describe('LordgasmicService', () => {
  let service: LordgasmicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LordgasmicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
