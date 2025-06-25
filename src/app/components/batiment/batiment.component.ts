import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisansService } from '../../services/artisans-service.service';
import { artisan } from '../../models/artisan.model';

@Component({
  selector: 'app-batiment',
  imports: [],
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss'
})
export class BatimentComponent implements OnInit {
  batimentArtisans: artisan[] = [];

  constructor(private ArtisansServices: ArtisansService,
    private router: Router ) { }
  
  ngOnInit(): void {
    this.batimentArtisans = this.ArtisansServices.getArtisansByCategory('Bâtiment');
  }
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId])
  }
}