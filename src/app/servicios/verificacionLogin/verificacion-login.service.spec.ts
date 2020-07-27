import { TestBed } from '@angular/core/testing';

import { VerificacionLoginService } from './verificacion-login.service';

describe('VerificacionLoginService', () => {
  let service: VerificacionLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificacionLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
