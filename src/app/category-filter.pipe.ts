import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../models/artisan.model';

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {
  transform(artisans: Artisan[], selectedCategory: string): Artisan[] {
    if (!selectedCategory || selectedCategory === 'Tous') {
      return artisans;
    }
    return artisans.filter(a => a.category.toLowerCase() === selectedCategory.toLowerCase());
  }
}
