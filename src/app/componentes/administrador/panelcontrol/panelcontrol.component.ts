import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router} from '@angular/router';
import { VerificacionLoginService } from '../../../servicios/verificacionLogin/verificacion-login.service';
import { LoginadministradorService } from '../../../servicios/loginadministrador/loginadministrador.service';

@Component({
  selector: 'app-panelcontrol',
  templateUrl: './panelcontrol.component.html',
  styleUrls: ['./panelcontrol.component.css']
})
export class PanelcontrolComponent implements OnInit {

  public usuario: any= {};

  public isAdmin : boolean = true;


  constructor(public router: Router, public loginadministradorSevice: LoginadministradorService, public verificacionService: VerificacionLoginService) { }

 /*  public isLogged : boolean =this.loginadministradorSevice.isLogged; */

  ngOnInit(): void {

   /*  this.verificacionService.getCurrentUser("admin"); */

  }

  onLogout() {

    this.loginadministradorSevice.onLogout();
  }

}
