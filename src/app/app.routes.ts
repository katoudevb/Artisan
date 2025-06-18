import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BatimentsComponent } from './pages/batiments/batiments.component';
import { ServicesComponent } from './pages/services/services.component';
import { FabricationComponent } from './pages/fabrication/fabrication.component';
import { AlimentationComponent } from './pages/alimentation/alimentation.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { ConfidentialiteComponent } from './pages/confidentialite/confidentialite.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
//import { FicheArtisanComponent } from './pages/fiche-artisans/fiche-artisas.component';



export const routes: Routes = [
    { path: '', component: HomeComponent }, // Route d'accueil
    { path: 'batiments', component: BatimentsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'fabrication', component: FabricationComponent },
    { path: 'alimentation', component: AlimentationComponent },
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    { path: 'cgu', component: CguComponent },
    { path: 'confidentialite', component: ConfidentialiteComponent },
    { path: 'cookies', component: CookiesComponent },
   // { path: 'fiche-artisan/:id', component: FicheArtisanComponent },
    { path: '**', component: NotFoundComponent } // Page 404
];
