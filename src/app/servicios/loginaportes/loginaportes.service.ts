import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router} from '@angular/router';
import {map} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginaportesService {

  public usuario: any= {};

  constructor(public afAuth: AngularFireAuth, public router: Router) {
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

  public isLogged : boolean = true;


  onLoginGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.getCurrentUser();
  }

  onLoginFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  onLoginTwitter() {
    this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  }

  onLogout() {
    this.afAuth.auth.signOut();
  }

  getCurrentUser(){
    this.isAuth().subscribe(auth => {
      if(auth){
        this.isLogged=true;
        this.router.navigate(['/chat'])

      } else {
        this.isLogged=false;
        this.router.navigate(['/loginaportes'])
      }
    });
    }

  isAuth(){
      return this.afAuth.authState.pipe(map(auth => auth));
  }

}
