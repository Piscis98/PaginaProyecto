import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router} from '@angular/router';
import { LoginadministradorService } from '../../../servicios/loginadministrador/loginadministrador.service';

@Component({
  selector: 'app-panelcontrol',
  templateUrl: './panelcontrol.component.html',
  styleUrls: ['./panelcontrol.component.css']
})
export class PanelcontrolComponent implements OnInit {

  public usuario: any= {};


  constructor(public loginadministradorSevice: LoginadministradorService) { }

  public isLogged : boolean =this.loginadministradorSevice.isLogged;

  ngOnInit(): void {

   //  this.loginadministradorSevice.getCurrentUser();

  }

  onLogout() {

    this.loginadministradorSevice.onLogout();
  }

}
