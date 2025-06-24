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
export class ArtisanListComponent {
  artisans: Artisan[] = []; // liste chargée depuis un fichier ou un service
  selectedCategory: string = '';
  categories: string[] = ['Bâtiment', 'Services', 'Fabrication', 'Alimentation'];
}
