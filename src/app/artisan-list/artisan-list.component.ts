import { Component } from '@angular/core';
import { Artisan } from '../models/artisan.model';
import { ArtisanService } from '../services/artisan.service';

@Component({
  selector: 'app-artisan-list',
  imports: [],
  templateUrl: './artisan-list.component.html',
  styleUrl: './artisan-list.component.scss'
})
export class ArtisanListComponent {
  artisans: Artisan[] = [];
  selectedCategory: string = '';

  constructor(private artisanService: ArtisanService) {
    this.loadArtisans();
  }

  loadArtisans() {
    this.artisanService.getArtisans().subscribe(data => {
      this.artisans = data;
    });
  }
}
