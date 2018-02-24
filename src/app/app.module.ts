import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { FooterComponent } from './footer/footer.component';
import { PrecoComponent } from './preco/preco.component';
import { ReviewComponent } from './review/review.component';
import { HomeComponent } from './home/home.component';
import { ServicosComponent } from './servicos/servicos.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfissionalPageComponent } from './pages/profissional-page/profissional-page.component';
import { RoutingModule } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreComponent,
    ProfissionaisComponent,
    FooterComponent,
    PrecoComponent,
    ReviewComponent,
    HomeComponent,
    ServicosComponent,
    HomePageComponent,
    ProfissionalPageComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
