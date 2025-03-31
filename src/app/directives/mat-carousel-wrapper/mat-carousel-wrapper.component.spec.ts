import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCarouselWrapperComponent } from './mat-carousel-wrapper.component';

describe('MatCarouselWrapperComponent', () => {
  let component: MatCarouselWrapperComponent;
  let fixture: ComponentFixture<MatCarouselWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCarouselWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatCarouselWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
