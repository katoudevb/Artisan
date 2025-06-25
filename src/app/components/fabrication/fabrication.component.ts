import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisansService } from '../../services/artisans-service.service';
import { artisan } from '../../models/artisan.model';

@Component({
  selector: 'app-fabrication',
  imports: [],
  templateUrl: './fabrication.component.html',
  styleUrl: './fabrication.component.scss'
})
export class FabricationComponent implements OnInit {

  fabricationArtisans: artisan[] = [];

  constructor(private ArtisansService: ArtisansService,
    private router: Router ) { }

  ngOnInit(): void {
        this.fabricationArtisans = this.ArtisansService.getArtisansByCategory('Fabrication');
      }
      detailArtisan(artisanId: string) {
        this.router.navigate(['/artisan', artisanId])
      }
}

