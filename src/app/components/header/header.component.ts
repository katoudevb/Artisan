import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // Méthode placeholder pour la recherche, non implémentée pour l’instant
  onSearch(arg0: string) {
    throw new Error('Method not implemented.');
  }

}
