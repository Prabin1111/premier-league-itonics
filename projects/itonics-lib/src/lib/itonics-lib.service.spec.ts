import { TestBed } from '@angular/core/testing';

import { ItonicsLibService } from './itonics-lib.service';

describe('ItonicsLibService', () => {
  let service: ItonicsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItonicsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
