// Importation des modules Angular nécessaires
import { Component } from '@angular/core';               // Permet de déclarer un composant Angular
import { OnInit } from '@angular/core';                  // Interface du cycle de vie : méthode ngOnInit()
import { Router } from '@angular/router';                // Permet de naviguer entre les routes (pages)

// Importation du service personnalisé de gestion des artisans
import { ArtisansService } from '../../../services/artisan.service';

// Importation du modèle Artisan pour typage strict et IntelliSense
import { Artisan } from '../../models/artisan.model';

// Module commun requis si le composant est standalone (directives Angular de base : ngIf, ngFor, etc.)
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alimentaire',                          // Nom de la balise HTML du composant
  imports: [CommonModule],         // Importation des modules nécessaires à ce composant (standalone component)
  templateUrl: './alimentaire.component.html',          // Fichier HTML associé (vue)
  styleUrls: ['./alimentaire.component.scss']           // Fichier SCSS associé (style local)
})
export class AlimentaireComponent implements OnInit {    // Déclaration de la classe avec interface de cycle de vie

  alimentationArtisans: Artisan[] = [];                  // Propriété contenant la liste des artisans filtrés par catégorie "Alimentation"

  // Constructeur avec injection des dépendances :
  // - artisanService : service métier pour accéder aux données
  // - router : service Angular pour la navigation entre les routes
  constructor(
    private artisanService: ArtisansService,
    private router: Router
  ) { }

  // Méthode appelée automatiquement à l'initialisation du composant
  ngOnInit(): void {
    // Récupération des artisans de la catégorie "Alimentation" via le service
    // On convertit explicitement les notes en nombre (au cas où elles seraient des chaînes)
    this.alimentationArtisans = this.artisanService
      .getArtisansByCategory('Alimentation')            // Appel du service pour filtrer par catégorie
      .map((artisan: any) => ({                         // Transformation des objets artisans si besoin
        ...artisan,                                     // On conserve toutes les propriétés
        note: Number(artisan.note)                      // Conversion explicite de la note en number
      }));
  }

  // Méthode appelée au clic sur le bouton "En savoir plus"
  // Redirige l'utilisateur vers la page de détails d’un artisan (ex: /artisan/123)
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId]);      // Navigation vers une route paramétrée
  }

}
