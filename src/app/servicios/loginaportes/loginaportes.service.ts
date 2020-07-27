import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {LocalstorageService} from '../localstorage/localstorage.service';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginaportesService {

  public usuario: any= {};

  constructor(public afAuth: AngularFireAuth, public router: Router, public localStorage: LocalstorageService) {
/*
    this.afAuth.authState.subscribe(user=> {
      console.log('Estado user: ', user);

      if(!user){
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.foto= user.photoURL;
      this.usuario.uid= user.uid;
    })
*/
  }

  /* public isLogged : boolean = true; */


  onLoginGoogle() {
   return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());

  }

  onLoginFacebook() {
   return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  onLoginTwitter() {
    return this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  }

  onLogout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
    /* this.localStorage.clearStorage(); */
    this.router.navigate(['/loginaportes'])
  }

/*   getCurrentUser(){
    this.isAuth().subscribe(auth => {
      if(auth){
        this.router.navigate(['/chat'])

      } else {
        this.router.navigate(['/loginaportes'])
      }
    });
    }

  isAuth(){
      return this.afAuth.authState.pipe(map(auth => auth));
  } */

}
