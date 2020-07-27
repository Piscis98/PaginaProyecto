import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelagregarpacienteComponent } from './panelagregarpaciente.component';

describe('PanelagregarpacienteComponent', () => {
  let component: PanelagregarpacienteComponent;
  let fixture: ComponentFixture<PanelagregarpacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelagregarpacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelagregarpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
