import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}

onSearch(query: string) {
    if (query && query.trim() !== '') {
      this.router.navigate(['/recherche'], { queryParams: { query } });
    }
  }
}
