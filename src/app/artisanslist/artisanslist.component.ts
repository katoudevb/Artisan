import { Component } from '@angular/core';

@Component({
  selector: 'app-artisanslist',
  imports: [],
  templateUrl: './artisanslist.component.html',
  styleUrl: './artisanslist.component.scss'
})
export class ArtisanslistComponent {
  artisansDuMois = [
    { nom: 'Dupont', specialite: 'Plombier', localisation: 'Lyon', note: 4 },
    { nom: 'Martin', specialite: 'Électricien', localisation: 'Paris', note: 5 },
    // autres artisans...
  ];

  artisansFiltres = [...this.artisansDuMois];

  onSearch(term: string): void {
    const recherche = term.trim().toLowerCase();

    if (!recherche) {
      this.artisansFiltres = [...this.artisansDuMois];
      return;
    }

    this.artisansFiltres = this.artisansDuMois.filter(artisan =>
      artisan.nom.toLowerCase().includes(recherche) ||
      artisan.specialite.toLowerCase().includes(recherche) ||
      artisan.localisation.toLowerCase().includes(recherche)
    );
  }
}
