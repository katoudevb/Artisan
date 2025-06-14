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
  artisansDuMois = [
    {
      nom: "Boulange&Moi",
      specialite: "Boulanger",
      localisation: "Paris",
      note: 4
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

