import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { artisan } from '../models/artisan.model'; 
import { ArtisansService } from '../; 


@Component({
  selector: 'app-recherche',
  imports: [],
  templateUrl: './recherche.component.html',
  styleUrl: './recherche.component.scss'
})
export class RechercheComponent implements OnInit {
viewDetails(arg0: string, string: any) {
throw new Error('Method not implemented.');
}
  artisans: artisan[] = [];
  searchQuery: string = '';
  filteredArtisans: artisan[] = [];

  constructor(private route: ActivatedRoute,
    private ArtisanServices: ArtisansService,
  private router: Router) { }

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.searchQuery = params['query'] || '';
        this.performSearch();
      });
    }

    performSearch(): void {
      if (this.searchQuery) {
        this.ArtisanServices.searchArtisans(this.searchQuery).subscribe((data: artisan[]) => {
          this.artisans = data;
          this.filteredArtisans = data ;
        });
      }
    }
    viewsDetails(id: string): void {
      this.router.navigate(['/artisan',id]);
    }
}{

}
