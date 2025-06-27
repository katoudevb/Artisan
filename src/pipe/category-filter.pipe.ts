// Importation des décorateurs et interfaces nécessaires depuis Angular core
import { Pipe, PipeTransform } from '@angular/core';
// Import du modèle Artisan, représentant la structure des objets artisans dans l'application
import { Artisan } from '../app/models/artisan.model'; // adapter le chemin selon la structure du projet

// Déclaration d'un pipe Angular nommé 'categoryFilter', marqué comme standalone (indépendant des modules)
@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {
  
  // Méthode transform obligatoire pour un pipe, qui filtre un tableau d'artisans selon une catégorie donnée
  transform(artisans: Artisan[], category: string): Artisan[] {
  if (!category || category === 'all') {
    return artisans; // Affiche tout si aucune catégorie sélectionnée
  }
  return artisans.filter(a => a.category.toLowerCase() === category.toLowerCase());
  }
}
