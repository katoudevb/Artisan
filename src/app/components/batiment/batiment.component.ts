import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batiment',
  imports: [CommonModule],
  templateUrl: './batiment.component.html',
  styleUrls: ['./batiment.component.scss']
})
export class BatimentComponent implements OnInit {
  batimentArtisans: Artisan[] = [];

  constructor(private ArtisansServices: ArtisansService,
    private router: Router ) { }
  
  ngOnInit(): void {
        this.batimentArtisans = this.ArtisansServices.getArtisansByCategory('Bâtiment')
          .map((artisan: any) => ({
            ...artisan,
            note: Number(artisan.note)
          }));
      }
      detailArtisan(artisanId: string) {
        this.router.navigate(['/artisan', artisanId])
      }
}