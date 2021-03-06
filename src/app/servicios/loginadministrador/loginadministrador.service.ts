import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router} from '@angular/router';
import {map} from 'rxjs/operators';
import { rejects } from 'assert';
import {LocalstorageService} from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginadministradorService {

  public usuario: any= {};

  /* public isLogged : boolean = true; */

  constructor(public afAuth: AngularFireAuth, public router: Router, public localStorage: LocalstorageService) { }


  onLogin(email: string, pass: string){

    return new Promise((resolve, reject) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(userData=> resolve(userData),
      err => reject (err))
    });

  }

  onLogout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
    /* this.localStorage.clearStorage(); */
    this.router.navigate(['/loginadministrador'])
  }

/*   getCurrentUser(){
    this.isAuth().subscribe(auth => {
      if(auth){
        this.router.navigate(['/panelcontrol'])

      } else {
        this.router.navigate(['/loginadministrador'])
      }
    });
    }

  isAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
} */
}
