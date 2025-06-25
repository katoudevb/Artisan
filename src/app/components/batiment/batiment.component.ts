import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-batiment',
  imports: [RouterModule, CommonModule],
  templateUrl: './batiment.component.html',
  styleUrl: './batiment.component.scss'
})
export class BatimentComponent {
  artisans = [
    {id: 1, name: 'Astérix', description: 'Figurine en résine, dimension de 20cm' , price: 29.99, imageUrl :'assets/images/Asterix.png'},
    {id: 2, name: 'Obélix', description: 'Figurine en résine, dimension de 30cm' , price: 39.99, imageUrl :'assets/images/Obelix.png'},
  ];
  categoryFilter: string = '';
  }

