import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginadministradorComponent } from './loginadministrador.component';

describe('LoginadministradorComponent', () => {
  let component: LoginadministradorComponent;
  let fixture: ComponentFixture<LoginadministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginadministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
