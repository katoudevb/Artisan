import { Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { ConfidentialiteComponent } from './pages/confidentialite/confidentialite.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { ArtisanListComponent } from './components/artisan-list/artisan-list.component';
import { ArtisanDetailComponent } from './components/artisan-detail/artisan-detail.component';


export const routes: Routes = [
    { path: '', component: HomeComponent }, // Route d'accueil
    { path: '', component: ArtisanListComponent },
    { path: 'artisan/:id', component: ArtisanDetailComponent },
    { path: 'mentions-legales', component: MentionsLegalesComponent },
    { path: 'cgu', component: CguComponent },
    { path: 'confidentialite', component: ConfidentialiteComponent },
    { path: 'cookies', component: CookiesComponent },
    { path: '**', component: NotFoundComponent } // Page 404
];
