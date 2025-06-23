import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ArtisanService } from '../../artisan.service';
import { Artisan } from '../../models/artisan.model';

@Component({
  selector: 'app-batiments',
  templateUrl: './batiments.component.html',
  styleUrls: ['./batiments.component.scss']
})
export class BatimentsComponent implements OnInit {
  batimentsArtisans: Artisan[] = [];

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisanService.getAll().subscribe((data: any[]) => {
      this.batimentsArtisans = data.filter(artisan => artisan.category === 'Bâtiment');
    });
  }
}
