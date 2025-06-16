import { Injectable } from '@angular/core';

export interface Artisan {
  id: number;
  nom: string;
  specialite: string;
  localisation: string;
  note: number;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  private artisans: Artisan[] = [
    { id: 1, nom: 'MaçonneRire', specialite: 'Maçon', localisation: 'Lyon', note: 3 },
    { id: 2, nom: 'Boulange&Moi', specialite: 'Boulanger', localisation: 'Paris', note: 4 },
    { id: 3, nom: 'Patis.Jaune', specialite: 'Patissier', localisation: 'Calais', note: 4 },
    { id: 4, nom: 'Me-nuit-serie', specialite: 'Menuisier', localisation: 'Dieppe ', note: 4 },
    { id: 5, nom: 'Électri.Sien', specialite: 'Tableau électrique', localisation: 'Marseille', note: 4 },
    { id: 6, nom: 'Plomb-Moi', specialite: 'Chauffe-eau', localisation: 'Bretagne', note: 4 },];

  constructor() {}

  getAll(): Artisan[] {
    return this.artisans;
  }

  getById(id: number): Artisan | undefined {
    return this.artisans.find(artisan => artisan.id === id);
  }
}
   