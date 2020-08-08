import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PacienteService } from '../../../servicios/paciente/paciente.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panelagregarpaciente',
  templateUrl: './panelagregarpaciente.component.html',
  styleUrls: ['./panelagregarpaciente.component.css']
})
export class PanelagregarpacienteComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  createFormGroup(){
    return new FormGroup({

      /* id_paciente?: string; */
      tiposangre: new FormControl(''),
      numero_caso_paciente: new FormControl(''),
      estado_paciente: new FormControl(''),
      nacionalidad_paciente: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      departamento_caso: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      municipio_caso: new FormControl('',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      fecha_notificacion: new FormControl(''),
      fecha_ultimo_diagnostico: new FormControl(''),
      nombres_paciente: new FormControl('',
      [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      apellidos_paciente: new FormControl('',
      [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      edad_paciente: new FormControl('',
      [Validators.required, Validators.minLength(1), Validators.maxLength(3),
         Validators.pattern(/^[0-9]+$/)]),
      genero_paciente: new FormControl(''),
      tipo_contagio: new FormControl(''),
      /* fecha_muerte?: Date;  */ /* formulario update */
      /* fecha_recuperacion?: Date; */  /* formulario update */
      /* tipo_recuperacion?: string; */
      pertenencia_etnica: new FormControl(''),
      nombre_grupo_etnico: new FormControl(''),
      documento_identidad: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^[0-9a-z]+$/)]),
      tipo_documento_identidad: new FormControl(''),
      lugar_trato_caso: new FormControl(''),
      nombre_lugar_trato_caso: new FormControl(''),
      direccion_residencia_paciente: new FormControl('',
      [Validators.required, Validators.minLength(6), Validators.maxLength(40)]),
      correo_contacto_paciente: new FormControl('',
      [Validators.minLength(6), Validators.maxLength(30),
        Validators.pattern(this.emailPattern)]),
      telefono_paciente: new FormControl('',  [Validators.minLength(3), Validators.maxLength(20)]),
      celular_paciente: new FormControl('', [Validators.minLength(3), Validators.maxLength(20)]),

    });
  }

  pacientForm: FormGroup;

  constructor(public router: Router, private pacienteService: PacienteService) {

    this.pacientForm = this.createFormGroup();

  }

  ngOnInit(): void {
  }

  onResetForm(){
    this.pacientForm.reset();
  }

  guardarPaciente(){


   if(this.pacientForm.valid){
    this.pacienteService.guardarPaciente(this.pacientForm.value);
    this.onResetForm();
   }else{
     console.log('No valido');
   }

  }

  get nacionalidad_paciente(){
    return this.pacientForm.get('nacionalidad_paciente');
  }
  get departamento_caso(){
    return this.pacientForm.get('departamento_caso');
  }

  get municipio_caso(){
    return this.pacientForm.get('municipio_caso');
  }
  get nombres_paciente(){
    return this.pacientForm.get('nombres_paciente');
  }
  get apellidos_paciente(){
    return this.pacientForm.get('apellidos_paciente');
  }
  get edad_paciente(){
    return this.pacientForm.get('edad_paciente');
  }

  get documento_identidad(){
    return this.pacientForm.get('documento_identidad');
  }
  get direccion_residencia_paciente(){
    return this.pacientForm.get('direccion_residencia_paciente');
  }

  get correo_contacto_paciente(){
    return this.pacientForm.get('correo_contacto_paciente');
  }

  get telefono_paciente(){
    return this.pacientForm.get('telefono_paciente');
  }
  get celular_paciente(){
    return this.pacientForm.get('celular_paciente');
  }


}
