import { TestBed } from '@angular/core/testing';

import { LoginadministradorService } from './loginadministrador.service';

describe('LoginadministradorService', () => {
  let service: LoginadministradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginadministradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
