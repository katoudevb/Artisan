import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fabrication',
  imports: [CommonModule],
  templateUrl: './fabrication.component.html',
  styleUrls: ['./fabrication.component.scss']
})
export class FabricationComponent implements OnInit {
  fabricationArtisans: Artisan[] = [];

  constructor(private ArtisansService: ArtisansService,
    private router: Router ) { }

  ngOnInit(): void {
        this.fabricationArtisans = this.ArtisansService.getArtisansByCategory('Fabrication')
          .map((artisan: any) => ({
            ...artisan,
            note: Number(artisan.note)
          }));
      }
      detailArtisan(artisanId: string) {
        this.router.navigate(['/artisan', artisanId])
      }
}

