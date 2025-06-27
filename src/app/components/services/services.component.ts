import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { CommonModule } from '@angular/common';
import { CategoryFilterPipe } from '../../../pipe/category-filter.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-services',
  imports: [CommonModule, CategoryFilterPipe,FormsModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [ArtisansService]
})
export class ServicesComponent implements OnInit {
  
  servicesArtisans: Artisan[] = [];
selectedCategory: any;

  constructor(private ArtisansService: ArtisansService,
    private router: Router ) { }
    
  ngOnInit(): void {
    this.servicesArtisans = this.ArtisansService.getArtisansByCategory('Services')
      .map((Artisan: any) => ({
        ...Artisan,
        note: Number(Artisan.note)
      }));
  }
  detailArtisan(artisanId: string) {
    this.router.navigate(['/artisan', artisanId])
  }
}
