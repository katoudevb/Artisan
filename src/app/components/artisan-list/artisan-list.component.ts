import { Component, OnInit } from '@angular/core';
// Import du décorateur Component pour définir un composant Angular

import { artisan } from '../../../services/artisan.service';
// Import du modèle Artisan (typage des données)
import { ArtisansService } from '../../../services/artisan.service';
// Import du service pour récupérer les artisans
import { Router } from '@angular/router';
// Import du Router Angular pour la navigation

import { CommonModule } from '@angular/common';
// Module Angular avec directives de base (ngIf, ngFor...)

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules pour gérer les formulaires (template-driven et réactifs)


@Component({
  selector: 'app-artisan-list', 
  // Sélecteur HTML pour utiliser ce composant dans les templates

  imports: [CommonModule, FormsModule, ReactiveFormsModule], 
  // Modules et pipes utilisés dans ce composant standalone

  templateUrl: './artisan-list.component.html' 
  // Fichier HTML associé au template
})
export class ArtisanListComponent implements OnInit {

  artisans: artisan[] = []; 
  // Tableau d'artisans qui sera alimenté via un service (initialement vide)

  selectedCategory: string = ''; 
  // Variable qui stocke la catégorie sélectionnée pour filtrage (initialement vide)

  categories: string[] = ['Bâtiment', 'Services', 'Fabrication', 'Alimentation']; 
  // Liste des catégories disponibles pour filtrer la liste des artisans

  constructor(
    private ArtisansDataServices: ArtisansService, 
    // Injection du service qui récupère les données des artisans

    private router: Router 
    // Injection du routeur Angular pour naviguer entre les pages
  ) { }

  ngOnInit(): void {
    // Au chargement du composant, on récupère la liste des artisans via le service
    this.ArtisansDataServices.getArtisans().subscribe((data: artisan[]) => {
      this.artisans = data; 
      // Remplissage du tableau avec les données reçues (Observable)
    });
  }

  // Méthode appelée pour naviguer vers la page détail d’un artisan
  viewDetails(id: string) {
    this.router.navigate(['/artisan', id]);
  }
}
