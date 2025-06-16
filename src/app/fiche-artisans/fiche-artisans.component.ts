import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fiche-artisan',
  imports: [CommonModule],
  templateUrl: './fiche-artisans.component.html',
  styleUrls: ['./fiche-artisans.component.scss'],
  standalone: true
})
export class FicheArtisanComponent {
  @Input() artisan!: {
    id: string;
    nom: string;
    note: number;
    specialite: string;
    localisation: string;
  };

  constructor(private router: Router) {}

  navigateToFiche() {
    // Redirige vers la fiche complète de l'artisan avec son id
    this.router.navigate(['/fiche-artisan', this.artisan.id]);
  }
}
