import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';

import { ProfissionalPageComponent } from './pages/profissional-page/profissional-page.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { PerfilComponent } from './pages/perfil/perfil.component';
import { BuscarPageComponent } from './pages/buscar-page/buscar-page.component';


const routes: Routes = [

     //home
     {
        path: '',
        component: HomePageComponent
    },

    // Profissional
    {
        path: 'profissional',
        component: ProfissionalPageComponent
    },  

    // Perfil
    {
        path: 'perfil',
        component: PerfilComponent
    },

    //busca
    {
        path: 'buscar',
        component: BuscarPageComponent
    }      


];

export const RoutingModule = RouterModule.forRoot(routes);
