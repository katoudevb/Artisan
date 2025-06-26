import { Component, OnInit } from '@angular/core';              // Ajout de OnInit pour cycle de vie
import { Router, ActivatedRoute } from '@angular/router';
import { Artisan } from '../../models/artisan.model';              // Import du modèle artisan
import { ArtisansService } from '../../../services/artisan.service'; // Correction du chemin d'import du service
import { CommonModule } from '@angular/common'; // Import du module commun pour les directives de base
import { FormsModule } from '@angular/forms'; // Import des formulaires pour ngModel
import { CategoryFilterPipe } from '../../../pipe/category-filter.pipe'; // Import du pipe de filtrage des catégories

@Component({
  selector: 'app-recherche',
  imports: [CommonModule, FormsModule, CategoryFilterPipe], // Importation du module commun pour les directives de base
  standalone: true,        // Ajout de standalone: true si c'est un composant
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.scss'],
  providers: [ArtisansService] // Ajout du provider pour l'injection du service
})
export class RechercheComponent implements OnInit {

  artisans: Artisan[] = [];            // Tableau complet des artisans récupérés
  searchQuery: string = '';            // Requête de recherche extraite des query params
  filteredArtisans: Artisan[] = [];   // Résultats filtrés (ici identiques à artisans)
  selectedCategory: string = ''; // Catégorie sélectionnée pour le filtrage (non utilisée dans ce composant, mais peut être utile pour l'avenir)

  // Injection des services nécessaires via le constructeur
  constructor(
    private route: ActivatedRoute,
    private artisansService: ArtisansService,  // Service pour récupérer les artisans
    private router: Router
  ) { }

  ngOnInit(): void {
    // Souscription aux paramètres de requête pour récupérer la recherche
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.performSearch();
    });
  }

  // Méthode pour déclencher la recherche via le service
  performSearch(): void {
    if (this.searchQuery) {
      this.artisansService.searchArtisans(this.searchQuery).subscribe((data: any[]) => {
        // Mappez les objets reçus pour correspondre au modèle Artisan
        const mappedData: Artisan[] = data.map(item => ({
          ...item,
          note: Number(item.note)
        }));
        this.artisans = mappedData;
        this.filteredArtisans = mappedData;  // Ici on copie la même liste, peut être filtrée ici si besoin
      });
    } else {
      // Si pas de recherche, vider la liste
      this.artisans = [];
      this.filteredArtisans = [];
    }
  }

  // Méthode appelée lors du clic sur un artisan, navigation vers la page détail
  viewsDetails(id: string): void {
    this.router.navigate(['/artisan', id]);
  }
}
