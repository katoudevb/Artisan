import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alimentaire',
  imports: [CommonModule],
  templateUrl: './alimentaire.component.html',
  styleUrls: ['./alimentaire.component.scss']
})
export class AlimentaireComponent  implements OnInit {

  alimentationArtisans: Artisan[]= [];

  constructor(private artisanService: ArtisansService,
    private router: Router ) { }

  ngOnInit(): void {
    this.alimentationArtisans = this.artisanService.getArtisansByCategory('Alimentation')
      .map((artisan: any) => ({
        ...artisan,
        note: Number(artisan.note)
      }));
  }
  
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId])
  }

}{

}
