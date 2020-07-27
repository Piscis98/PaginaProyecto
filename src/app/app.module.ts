import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//FIREBASE
import{ AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireAuthModule} from 'angularfire2/auth';
import{ environment } from '../environments/environment';

import { FormsModule} from '@angular/forms';


//Elementos web
import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//LIBRERIAS EXTERNAS
import { NgxSpinnerModule } from 'ngx-spinner'

//SERVICIOS
import { ChatService } from './servicios/chat/chat.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { Page404Component } from './componentes/paginaerror/page404/page404.component';
import { FooterComponent } from './componentes/principal/footer/footer/footer.component';
import { MenuComponent } from './componentes/principal/menu/menu/menu.component';
import { HomeComponent } from './componentes/principal/home/home/home.component';
import { PrincipalComponent } from './componentes/principal/principal/principal/principal.component';
import { ChatComponent } from './componentes/aportes/componentes/chat/chat/chat.component';
import { from } from 'rxjs';
import { ConceptoComponent } from './componentes/informacion/concepto/concepto/concepto.component';
import { CausasComponent } from './componentes/informacion/causas/causas/causas.component';
import { LoginComponent } from './componentes/aportes/componentes/login/login/login.component';
import { LoginadministradorComponent } from './componentes/administrador/loginadministrador/loginadministrador.component';
import { PanelcontrolComponent } from './componentes/administrador/panelcontrol/panelcontrol.component';
import { PanelagregarpacienteComponent } from './componentes/administrador/panelagregarpaciente/panelagregarpaciente.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    PrincipalComponent,
    ChatComponent,
    ConceptoComponent,
    CausasComponent,
    LoginComponent,
    LoginadministradorComponent,
    PanelcontrolComponent,
    PanelagregarpacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [
    ChatService,
    {provide: ErrorHandler},
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
