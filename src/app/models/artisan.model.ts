//Définition du modèle Artisan
export interface artisan {
  id: string;
  name: string;
  specialty: string;
  note: number | string;      
  location: string;   
  about: string;      
  email: string;
  website: string;
  category: string;   
  top: boolean;
}