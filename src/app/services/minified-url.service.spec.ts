import { TestBed } from '@angular/core/testing';

import { MinifiedUrlService } from './minified-url.service';

describe('MinifiedUrlService', () => {
  let service: MinifiedUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinifiedUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
