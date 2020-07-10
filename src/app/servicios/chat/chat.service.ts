import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import {Mensaje} from '../../interfaces/mensaje/mensaje.interface';

// import {} from '../../modelos/mensaje/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsColletion: AngularFirestoreCollection<Mensaje>

  public chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore) { }

  cargarMensajes(){
    this.itemsColletion= this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc'));
    return this.itemsColletion.valueChanges();
  }

  agregarMensaje(texto : string){

    let mensaje: Mensaje = {

      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    }
    return this.itemsColletion.add(mensaje);

  }

}
