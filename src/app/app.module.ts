import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { ImageUploadModule } from "angular2-image-upload";


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './review/review.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfissionalPageComponent } from './pages/profissional-page/profissional-page.component';
import { RoutingModule } from './app.router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { BuscarPageComponent } from './pages/buscar-page/buscar-page.component';
import { BuscaFormComponent } from './busca-form/busca-form.component';
import { ListaProfissionalComponent } from './lista-profissional/lista-profissional.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreComponent,
    ProfissionaisComponent,
    FooterComponent,
    ReviewComponent,
    HomeComponent,
    ServicosComponent,
    HomePageComponent,
    ProfissionalPageComponent,
    PerfilComponent,
    BuscarPageComponent,
    BuscaFormComponent,
    ListaProfissionalComponent,


  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatStepperModule, 
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),ImageUploadModule.forRoot(),
    ReactiveFormsModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
