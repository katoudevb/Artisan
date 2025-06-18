import { Component } from '@angular/core';
import { FicheArtisanComponent } from "../../fiche-artisans/fiche-artisans.component";

@Component({
  selector: 'app-batiments',
  standalone: true,
  imports: [FicheArtisanComponent],
  templateUrl: './batiments.component.html',
  styleUrls: ['./batiments.component.scss']
})
export class BatimentsComponent {
  artisans = [
    {
      id: '1',
      name: 'Vallis Bellemare',
      specialty: 'Plombier',
      note: '4',
      location: 'Vienne',
      about: 'Lorem ipsum dolor sit amet...',
      email: 'v.bellemare@gmail.com',
      website: 'https://plomberie-bellemare.com',
      category: 'Bâtiment',
      top: false,
    },
    // Tu peux ajouter d'autres artisans ici
  ];
}
