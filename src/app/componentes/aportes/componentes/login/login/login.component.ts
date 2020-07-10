import { Component, OnInit } from '@angular/core';
import { LoginaportesService } from '../../../../../servicios/loginaportes/loginaportes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginAportesService: LoginaportesService) { }

  ngOnInit(): void {
  }


  ingresar(proveedor: string){
    this.loginAportesService.onLoginGoogle();
  }

}
