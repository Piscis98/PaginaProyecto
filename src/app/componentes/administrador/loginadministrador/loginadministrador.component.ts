import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router} from '@angular/router';
import { LoginadministradorService } from '../../../servicios/loginadministrador/loginadministrador.service';


@Component({
  selector: 'app-loginadministrador',
  templateUrl: './loginadministrador.component.html',
  styleUrls: ['./loginadministrador.component.css']
})
export class LoginadministradorComponent implements OnInit {



  constructor(public router: Router, public afAuth: AngularFireAuth, public loginadministradorSevice: LoginadministradorService) { }

  public email: string= '';
  public pass: string = '';

  ngOnInit(): void {
  }

  onLogin(): void{

   this.loginadministradorSevice.onLogin(this.email, this.pass).then((res) =>{
     this.router.navigate(['/panelcontrol']);
   }).catch(err => console.log('err', err.message));

  }


}
