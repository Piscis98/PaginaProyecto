import { TestBed } from '@angular/core/testing';

import { LoginaportesService } from './loginaportes.service';

describe('LoginaportesService', () => {
  let service: LoginaportesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginaportesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
