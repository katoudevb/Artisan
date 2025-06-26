// Importation des modules et services nécessaires
import { Component } from '@angular/core';               // Décorateur pour définir un composant Angular
import { OnInit } from '@angular/core';                  // Interface du cycle de vie Angular (hook ngOnInit)
import { Router } from '@angular/router';                // Service de navigation pour rediriger vers une autre route
import { ArtisansService } from '../../../services/artisan.service';  // Service métier pour manipuler les artisans
import { Artisan } from '../../models/artisan.model';    // Modèle de données représentant un artisan
import { CommonModule } from '@angular/common';          // Module Angular de base (ngIf, ngFor, etc.)
import { FormsModule } from '@angular/forms';            // Module pour les formulaires Angular (ngModel)
import { CategoryFilterPipe } from '../../../pipe/category-filter.pipe'; // Pipe pour filtrer les

@Component({
  selector: 'app-batiment',
  imports: [CommonModule, FormsModule, CategoryFilterPipe],
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.scss'],
})
export class BatimentComponent implements OnInit {

  batimentArtisans: Artisan[] = [];
  // Tableau qui stocke la liste des artisans filtrés par catégorie "Bâtiment"
  selectedCategory: string = '';
  
  constructor(
    private ArtisansService: ArtisansService,
    // Injection du service pour récupérer les artisans

    private router: Router
    // Injection du routeur pour navigation
  ) { }

  ngOnInit(): void {
    // Au démarrage du composant, on récupère la liste des artisans dans la catégorie "Bâtiment"
    // La méthode getArtisansByCategory est supposée renvoyer un tableau filtré synchronement
    this.batimentArtisans = this.ArtisansService.getArtisansByCategory('Bâtiment')
      .map((artisan: any) => ({
        ...artisan,
        note: Number(artisan.note) // Assure que la note est bien un nombre (casting)
      }));
  }

  // Méthode appelée au clic sur un artisan pour naviguer vers sa page détail
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId]);
  }
}
