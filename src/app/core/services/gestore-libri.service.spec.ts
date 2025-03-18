import { TestBed } from '@angular/core/testing';

import { GestoreLibriService } from './gestore-libri.service';

describe('GestoreLibriService', () => {
  let service: GestoreLibriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestoreLibriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
