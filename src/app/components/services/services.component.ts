import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';


@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [ArtisansService]
})
export class ServicesComponent implements OnInit {
  
  servicesArtisans: Artisan[] = [];

  constructor(private ArtisansService: ArtisansService,
    private router: Router ) { }
    
  ngOnInit(): void {
    this.servicesArtisans = this.ArtisanService.getArtisansByCategory('Services');
  }
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId])
  }
}
