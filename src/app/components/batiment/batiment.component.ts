import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batiment',
  imports: [CommonModule],
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.scss']
})
export class BatimentComponent implements OnInit {

  batimentArtisans: Artisan[] = [];
  // Tableau qui stocke la liste des artisans filtrés par catégorie "Bâtiment"

  constructor(
    private ArtisansServices: ArtisansService,
    // Injection du service pour récupérer les artisans

    private router: Router
    // Injection du routeur pour navigation
  ) { }

  ngOnInit(): void {
    // Au démarrage du composant, on récupère la liste des artisans dans la catégorie "Bâtiment"
    // La méthode getArtisansByCategory est supposée renvoyer un tableau filtré synchronement
    this.batimentArtisans = this.ArtisansServices.getArtisansByCategory('Bâtiment')
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
