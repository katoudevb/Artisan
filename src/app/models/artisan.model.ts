export interface Artisan {
  id: string;
  name: string;
  specialty: string;
  note: number; // attention, c’est une string dans le JSON, on la convertira
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}
