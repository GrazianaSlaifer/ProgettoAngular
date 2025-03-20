import { Routes } from '@angular/router';
import { DettaglioComponent } from './features/dettaglio/dettaglio.component';
import { HomeComponent } from './features/home/home.component';
import { RicercaComponent } from './features/ricerca/ricerca.component';

export const routes: Routes = [

    {
        path:"libreria",
        component: HomeComponent
    },

    {
        path:"ricerca",
        component: RicercaComponent
    },

    {
        path:"dettaglio",
        component: DettaglioComponent
    },

    {
        path:"**",
        redirectTo: "libreria"
    },
];
