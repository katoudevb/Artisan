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
      nom: "Éco Plomberie",
      specialite: "Plomberie",
      localisation: "Lyon",
      note: 5
    },
    {
      nom: "Menuiserie Bois & Design",
      specialite: "Menuiserie",
      localisation: "Toulouse",
      note: 4
    },
    {
      nom: "ÉlecPro Services",
      specialite: "Électricité",
      localisation: "Marseille",
      note: 4
    }
  ];
}

