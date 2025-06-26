import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [ArtisansService]
})
export class ServicesComponent implements OnInit {
  
  servicesArtisans: Artisan[] = [];

  constructor(private ArtisansService: ArtisansService,
    private router: Router ) { }
    
  ngOnInit(): void {
    this.servicesArtisans = this.ArtisansService.getArtisansByCategory('Services')
      .map((artisan: any) => ({
        ...artisan,
        note: Number(artisan.note)
      }));
  }
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId])
  }
}
