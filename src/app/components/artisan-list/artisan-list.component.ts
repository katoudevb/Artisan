import { Component } from '@angular/core';
import { Artisan } from '../../../services/artisan.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryFilterPipe } from '../../../pipe/category-filter.pipe';


@Component({
  selector: 'app-artisan-list',
  imports: [CommonModule, FormsModule, CategoryFilterPipe, ReactiveFormsModule],
  templateUrl: './artisan-list.component.html'
})
export class ArtisanListComponent implements OnInit {
  
  artisans: artisan[] = [];

constructor(private ArtisansDataServices: ArtisansService,
  private router: Router, ) { }

ngOnInit(): void {
  this.ArtisansDataServices.getArtisans().subscribe((data: artisan[]) => {
    this.artisans = data;
  });
}



viewDetails(id: string) {
  this.router.navigate(['/artisan', id]);
}
}{
  artisans: Artisan[] = []; // liste chargée depuis un fichier ou un service
  selectedCategory: string = '';
  categories: string[] = ['Bâtiment', 'Services', 'Fabrication', 'Alimentation'];
}
