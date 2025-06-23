import { Component } from '@angular/core';
import { Artisan } from '../models/artisan.model';
import { ArtisanService } from '../artisan.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryFilterPipe } from "../category-filter.pipe";

@Component({
  selector: 'app-artisans-list',
  imports: [CommonModule, RouterModule, FormsModule, CategoryFilterPipe],
  templateUrl: './artisans-list.component.html',
  styleUrls: ['./artisans-list.component.scss'],
  standalone: true
})
export class ArtisansListComponent implements OnInit{
Math: any;
goToDetail(arg0: any) {
throw new Error('Method not implemented.');
}
  artisans: Artisan[] = [];
  filtered: Artisan[] = [];
  categories: string[] = [];
  search = '';
  selectedCategory = '';

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getAll().subscribe(data => {
      this.artisans = data;
      this.categories = this.artisanService.getCategories(data);
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filtered = this.artisans.filter(a =>
      a.name.toLowerCase().includes(this.search.toLowerCase()) &&
      (!this.selectedCategory || a.category === this.selectedCategory)
    );
  }

  getStarsArray(note: number): number[] {
  const roundedNote = Math.round(note);
  return Array(5).fill(0).map((_, i) => i < roundedNote ? 1 : 0);
}
}
