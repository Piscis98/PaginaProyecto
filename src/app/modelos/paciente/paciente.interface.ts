

export interface Paciente{

  id_paciente?: string;
  tiposangre?: string;
  numero_caso_paciente: number;  /* formulario update */
  estado_paciente: string;  /* formulario update */
  nacionalidad_paciente?: string;
  departamento_caso?: string;
  municipio_caso?: string;
  fecha_notificacion?: Date;
  fecha_ultimo_diagnostico: Date;  /* formulario update */
  nombres_paciente?: string;
  apellidos_paciente?: string;
  edad_paciente?: number;
  genero_paciente?: string;
  tipo_contagio?: string;
  fecha_muerte?: Date;  /* formulario update */
  fecha_recuperacion?: Date;  /* formulario update */
  tipo_recuperacion?: string;  /* formulario update */
  pertenencia_etnica?: string;
  nombre_grupo_etnico?: string;
  documento_identidad?: string;
  tipo_documento_identidad?: string;
  lugar_trato_caso: string;  /* formulario update */
  nombre_lugar_trato_caso?: string;  /* formulario update */
  direccion_residencia_paciente?: string;
  correo_contacto_paciente?: string;
  telefono_paciente?: string;
  celular_paciente?: string;

}
