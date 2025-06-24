import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-artisan-detail',
  templateUrl: './artisan-detail.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ArtisanDetailComponent implements OnInit {
  artisan: Artisan | undefined;
  contactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private artisansService: ArtisansService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: [''],
      subject: [''],
      message: ['']
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.artisansService.getArtisanById(id).subscribe(a => this.artisan = a);
  }

  sendEmail() {
    const { name, subject, message } = this.contactForm.value;
    this.http.post('http://localhost:3000/api/contact', {
      to: this.artisan?.email,
      subject,
      message: `De : ${name}\n\n${message}`
    }).subscribe(() => {
      alert("E-mail envoyé !");
      this.contactForm.reset();
    });
  }
}


