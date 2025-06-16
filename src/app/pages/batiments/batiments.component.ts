import { Component } from '@angular/core';
import { FicheArtisanComponent } from "../../fiche-artisans/fiche-artisans.component";

@Component({
  selector: 'app-batiments',
  standalone: true,
  imports: [FicheArtisanComponent],
  templateUrl: './batiments.component.html',
  styleUrls: ['./batiments.component.scss']
})
export class BatimentsComponent {

}
