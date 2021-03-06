import { Component, OnInit } from '@angular/core';

import { ChatService } from '../../../../../servicios/chat/chat.service';
import { LoginaportesService } from '../../../../../servicios/loginaportes/loginaportes.service';
import { VerificacionLoginService } from '../../../../../servicios/verificacionLogin/verificacion-login.service';

import {Mensaje} from '../../../../../modelos/mensaje/mensaje.interface';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string= "";
  public chats: Mensaje[] = [];

  constructor(public chatService: ChatService, public loginaportesSevice: LoginaportesService, public verificacionService: VerificacionLoginService) {

  this.cargarMessage();

  }


  cargarMessage(){
    this.chatService.cargarMensajes()
    .subscribe((mensajes: Mensaje[])=>{
      this.chats= mensajes;
    });
  }

  /* public isLogged : boolean =this.loginaportesSevice.isLogged; */

  ngOnInit(): void {
    this.verificacionService.getCurrentUser("aportes");
  }


  enviar_mensaje(){

    if(this.mensaje.length == 0){

      return;

    }
    this.chatService.agregarMensaje(this.mensaje)
    .then(() => this.mensaje="")
    .catch((err)=> console.error('Error al enviar: ', err));

  }

  onLogout() {
    this.loginaportesSevice.onLogout();
  }


}
