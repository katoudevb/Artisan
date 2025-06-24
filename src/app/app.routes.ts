import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { ConfidentialiteComponent } from './pages/confidentialite/confidentialite.component';
import { CookiesComponent } from './pages/cookies/cookies.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Route d'accueil
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    { path: 'cgu', component: CguComponent },
    { path: 'confidentialite', component: ConfidentialiteComponent },
    { path: 'cookies', component: CookiesComponent },
    {
      path: 'fiche/:id',
      loadComponent: () => import('../app/components/fiche-artisans/fiche-artisans.component').then(m => m.FicheArtisanComponent)
    },
    { path: '**', component: NotFoundComponent } // Page 404
];
