import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {LocalstorageService} from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class VerificacionLoginService {

  public usuario: any= {};

  constructor(public afAuth: AngularFireAuth, public router: Router, public localStorage: LocalstorageService) { }


  getCurrentUser(tipo: string){
   if(tipo == "aportes"){
    this.isAuth().subscribe(auth => {
      if(auth){
        this.router.navigate(['/chat'])

      } else {
        this.router.navigate(['/loginaportes'])
      }
    });
   }

   if(tipo == "admin"){

    this.isAuth().subscribe(auth => {
      if(auth){
        this.router.navigate(['/panelcontrol'])

      } else {
        this.router.navigate(['/loginadministrador'])
      }
    });

   }else {console.log('Verifique el metodo de autentificación')}

    }

  isAuth(){
      return this.afAuth.authState.pipe(map(auth => auth));
  }


}
