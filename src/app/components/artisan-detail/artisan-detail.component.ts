import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-artisan-detail',
  templateUrl: './artisan-detail.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ArtisanDetailComponent implements OnInit {
  artisan: Artisan[] = [];
  filteredArtisans: Artisan[] = [];
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private artisansService: ArtisansService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.artisansService.getArtisanById(+id).subscribe((a: Artisan) => this.artisan = [a]);
  }
}


