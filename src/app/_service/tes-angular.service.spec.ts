import { TestBed } from '@angular/core/testing';

import { TesAngularService } from './tes-angular.service';

describe('TesAngularService', () => {
  let service: TesAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
