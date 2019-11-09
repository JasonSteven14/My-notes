import { TestBed } from '@angular/core/testing';

import { HttpmsgService } from './httpmsg.service';

describe('HttpmsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpmsgService = TestBed.get(HttpmsgService);
    expect(service).toBeTruthy();
  });
});
