import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../app/models/artisan.model'; // adapte selon ton projet

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {
  transform(artisans: Artisan[], category: string): Artisan[] {
    if (!category || !artisans) return [];

    return artisans.filter(artisan => artisan.category === category);
  }
}
