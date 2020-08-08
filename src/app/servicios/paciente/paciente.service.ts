import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Paciente } from '../../modelos/paciente/paciente.interface';



@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private pacienteCollection : AngularFirestoreCollection<Paciente>;
  private historialPacienteCollection : AngularFirestoreCollection<Paciente>;

  constructor(private afs: AngularFirestore) {

    this.pacienteCollection = afs.collection<Paciente>('pacientes');
    this.historialPacienteCollection = afs.collection<Paciente>('historialPacientes');

   }

   guardarPaciente(newPacient: Paciente): void{

   this.pacienteCollection.add(newPacient);

   }

   guardarHistorialPaciente(newHistorial: Paciente): void{

    this.historialPacienteCollection.add(newHistorial);

    }


}
