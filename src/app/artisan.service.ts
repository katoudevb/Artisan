import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artisan } from './models/artisan.model';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArtisanService {
  private readonly url = 'assets/artisans.json';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.url).pipe(
      map(data => data.map(a => ({
        ...a,
        note: typeof a.note === 'string' ? parseFloat(a.note) : a.note // conversion string -> number if needed
      })))
    );
  }

  getById(id: string): Observable<Artisan | undefined> {
    return this.getAll().pipe(
      map(artisans => artisans.find(a => a.id === id))
    );
  }

  getCategories(artisans: Artisan[]): string[] {
    return Array.from(new Set(artisans.map(a => a.category)));
  }
}
