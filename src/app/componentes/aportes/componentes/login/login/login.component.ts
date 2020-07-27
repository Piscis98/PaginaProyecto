import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { LoginaportesService } from '../../../../../servicios/loginaportes/loginaportes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginAportesService: LoginaportesService, public router: Router) { }

  ngOnInit(): void {
  }


  onLoginGoogle(): void{
    this.loginAportesService.onLoginGoogle().then((res)=> {
      this.router.navigate(['/chat']);
    }).catch(err=> console.log('err', err));

  }

}
