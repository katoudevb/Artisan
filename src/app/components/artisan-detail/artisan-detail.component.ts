import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ArtisansService } from '../../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-artisan-detail',
  templateUrl: './artisan-detail.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ArtisanDetailComponent implements OnInit{

  artisan: artisan | undefined;
  //Formulaire
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  

  constructor(private route: ActivatedRoute,private router: Router,
    private ArtisanServices: ArtisansService, private fb:FormBuilder) {

      //form
      this.contactForm = this.fb.group({
        name: ['',[Validators.required,Validators.minLength(3)]],
        subject: ['',[Validators.required, Validators.minLength(5)]],
        message: ['',[Validators.required, Validators.minLength(10)]]
      });
    }
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) { 
        this.ArtisanServices.getArtisanId(id).subscribe((data: artisan | undefined) => {
          this.artisan = data;
        });
      }
    }
    //button detail
    viewDetails(id:string) {
      this.router.navigate(['/artisan',id])
    }
    //form
    onSubmit(): void {
      this.submitted = true ;
      //verifie si le formulaire est valide
      if (this.contactForm.invalid) {
        this.errorMessage = 'Veuillez remplir tous les champs correctement.';
        return;
      }
      //simuler l'envoie dun mail
      this.successMessage = 'Message envoyé avec succès';
      this.errorMessage = '';
      this.contactForm.reset();
      this.submitted = false;
    }
    //get pour acceder facilement au formulaire du template 
    get formControls() {
      return this.contactForm.controls;
    }
  }