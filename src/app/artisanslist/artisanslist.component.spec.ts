import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanslistComponent } from './artisanslist.component';

describe('ArtisanslistComponent', () => {
  let component: ArtisanslistComponent;
  let fixture: ComponentFixture<ArtisanslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
