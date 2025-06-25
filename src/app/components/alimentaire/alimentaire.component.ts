import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisanService } from '../../services/artisan-service.service';
import { artisan } from '../../models/artisan.model';

@Component({
  selector: 'app-alimentaire',
  imports: [],
  templateUrl: './alimentaire.component.html',
  styleUrl: './alimentaire.component.scss'
})
export class AlimentaireComponent  implements OnInit {

  alimentationArtisans: artisan[]= [];

  constructor(private ArtisansServices: ArtisanService,
    private router: Router ) { }

  ngOnInit(): void {
    this.alimentationArtisans = this.ArtisansServices.getArtisansByCategory('Alimentation');
  }
  
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId])
  }

}{

}
