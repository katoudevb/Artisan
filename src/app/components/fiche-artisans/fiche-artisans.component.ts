import { Component, OnInit, inject } from '@angular/core';
import { Artisan } from '../../models/artisan.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../../../services/artisan.service';
import { MailService, MailPayload } from '../../../services/mail.service';

@Component({
  selector: 'app-fiche-artisan',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fiche-artisans.component.html',
  styleUrls: ['./fiche-artisans.component.scss']
})
export class FicheArtisanComponent implements OnInit {
  artisan!: Artisan;
  contactForm: FormGroup;

  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private artisanService = inject(ArtisansService);
  private mailService = inject(MailService);

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artisanService.getArtisanById(id).subscribe({
      next: (artisan) => {
        if (artisan) {
          this.artisan = artisan;
        } else {
          alert('Artisan non trouvé');
        }
      },
      error: (err) => {
        console.error('Erreur chargement artisan:', err);
        alert('Erreur lors du chargement de l’artisan');
      }
    });
  }

  getStars(): ('full' | 'half' | 'empty')[] {
    const note = parseFloat(this.artisan?.note || '0');
    const fullStars = Math.floor(note);
    const halfStar = (note - fullStars) >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return [
      ...Array(fullStars).fill('full'),
      ...Array(halfStar).fill('half'),
      ...Array(emptyStars).fill('empty')
    ];
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const { name, subject, message } = this.contactForm.value;
      const payload: MailPayload = {
        artisanEmail: this.artisan.email,
        name,
        subject,
        message
      }

      this.mailService.sendMail(payload).subscribe({
        next: () => {
          alert('Votre message a été envoyé.');
          this.contactForm.reset();
        },
        error: (err) => {
          console.error('Erreur envoi mail:', err);
          alert('Erreur lors de l’envoi du message.');
        }
      })
    }
}};