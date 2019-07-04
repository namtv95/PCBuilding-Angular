import { TestBed } from '@angular/core/testing';

import { FileutilService } from './fileutil.service';

describe('FileutilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileutilService = TestBed.get(FileutilService);
    expect(service).toBeTruthy();
  });
});
