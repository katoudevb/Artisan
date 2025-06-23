import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// Update the path below if your artisan.service.ts is located elsewhere
import { ArtisanService } from '../artisan.service';
import { Artisan } from '../models/artisan.model';


@Component({
  selector: 'app-artisan-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.scss'],
  providers: [ArtisanService]
})
export class ArtisanDetailComponent implements OnInit {
  artisan!: Artisan;
  form = {
    name: '',
    subject: '',
    message: ''
  };

  constructor(
    private route: ActivatedRoute,
    @Inject(ArtisanService) private service: ArtisanService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(id).subscribe(data => {
        if (data) {
          this.artisan = data;
        } else {
          this.artisan = {
            id: '',
            name: 'Artisan inconnu',
            specialty: 'Inconnue',
            location: 'Inconnue',
            about: 'Aucune description disponible.',
            email: 'inconnu@example.com',
            note: 0,
            website: '',
            category: '',
            top: false
          };
        }
      });
    }
  }

  sendMessage(): void {
    const body = `
      De: ${this.form.name}
      Objet: ${this.form.subject}
      Message: ${this.form.message}
    `;

    window.location.href = `mailto:${this.artisan.email}?subject=${encodeURIComponent(this.form.subject)}&body=${encodeURIComponent(body)}`;
  }

  getStarsArray(note: number): number[] {
  const roundedNote = Math.round(note);
  return Array(5).fill(0).map((_, i) => i < roundedNote ? 1 : 0);
  }
}