import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BatimentsComponent } from './pages/batiments/batiments.component';
import { ServicesComponent } from './pages/services/services.component';
import { FabricationComponent } from './pages/fabrication/fabrication.component';
import { AlimentationComponent } from './pages/alimentation/alimentation.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Route d'accueil
    { path: 'batiments', component: BatimentsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'fabrication', component: FabricationComponent },
    { path: 'alimentation', component: AlimentationComponent },
    { path: '**', component: NotFoundComponent } // Page 404
];
