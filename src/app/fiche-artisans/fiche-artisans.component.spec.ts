import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheArtisansComponent } from './fiche-artisans.component';

describe('FicheArtisansComponent', () => {
  let component: FicheArtisansComponent;
  let fixture: ComponentFixture<FicheArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheArtisansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
