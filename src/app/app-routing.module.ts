import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTES
import { HomeComponent } from './componentes/principal/home/home/home.component';
import { ChatComponent } from './componentes/aportes/componentes/chat/chat/chat.component';
import { LoginComponent } from './componentes/aportes/componentes/login/login/login.component';
import { Page404Component } from './componentes/paginaerror/page404/page404.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'loginaportes', component: LoginComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
