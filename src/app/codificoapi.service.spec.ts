import { TestBed } from '@angular/core/testing';

import { CodificoapiService } from './codificoapi.service';

describe('CodificoapiService', () => {
  let service: CodificoapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodificoapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
