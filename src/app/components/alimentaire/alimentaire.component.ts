// Importation des modules Angular nécessaires
import { Component } from '@angular/core';               // Permet de déclarer un composant Angular
import { OnInit } from '@angular/core';                  // Interface du cycle de vie : méthode ngOnInit()
import { Router } from '@angular/router';                // Permet de naviguer entre les routes (pages)

// Importation du service personnalisé de gestion des artisans
import { ArtisansService } from '../../../services/artisan.service';

// Importation du modèle Artisan pour typage strict et IntelliSense
import { artisan } from '../../models/artisan.model';

// Module commun requis si le composant est standalone (directives Angular de base : ngIf, ngFor, etc.)
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryFilterPipe } from '../../../pipe/category-filter.pipe';

@Component({
  selector: 'app-alimentaire',                          // Nom de la balise HTML du composant
  imports: [CommonModule,FormsModule,CategoryFilterPipe],         // Importation des modules nécessaires à ce composant (standalone component)
  templateUrl: './alimentaire.component.html',          // Fichier HTML associé (vue)
  styleUrls: ['./alimentaire.component.scss'],           // Fichier SCSS associé (style local)                         // Service à fournir (optionnel si déjà fourni au niveau supérieur)
})
export class AlimentaireComponent implements OnInit {    // Déclaration de la classe avec interface de cycle de vie

  alimentationArtisans: artisan[] = [];
  selectedCategory: string = '';

  constructor(private ArtisansService: ArtisansService,
    private router: Router ) { }
    
  ngOnInit(): void {
    this.alimentationArtisans = this.ArtisansService.getArtisansByCategory('Alimentation')
      .map((artisan: any) => ({
        ...artisan,
        note: Number(artisan.note)
      }));
  }
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId])
  }
}
