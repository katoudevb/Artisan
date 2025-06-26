import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Propriété publique représentant la liste des artisans mis en avant ce mois-ci
  artisansDuMois = [
    {
      nom: "Boulange&Moi",          // Nom de l'artisan
      specialite: "Boulanger",      // Spécialité métier
      localisation: "Paris",        // Localisation géographique
      note: 4                      // Note sur 5 (sera utilisée pour l'affichage des étoiles)
    },
    {
      nom: "MaçonneRire",
      specialite: "Maçonnerie",
      localisation: "Lyon",
      note: 3
    },
    {
      nom: "Électri.Sien",
      specialite: "Électricité",
      localisation: "Marseille",
      note: 4
    }
  ];
}

