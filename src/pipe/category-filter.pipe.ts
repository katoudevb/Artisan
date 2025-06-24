import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../app/models/artisan.model';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  transform(artisans: Artisan[], category: string): Artisan[] {
  if (!category || category === 'all') {
    // Pas de catégorie sélectionnée => ne rien afficher
    return [];
  }
  return artisans.filter(a => a.category.toLowerCase() === category.toLowerCase());
  }

}
