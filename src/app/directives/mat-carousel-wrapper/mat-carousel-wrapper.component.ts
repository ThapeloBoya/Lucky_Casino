import { Component, OnInit, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../../directives/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatStepperModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isBrowser: boolean;
  isDesktopView: boolean = true;
  activeSlideIndex = 0;

  slides = [
    {
      id: 1,
      image: 'assets/images/clic-desktop-slider1.webp',
      text: 'RECEVEZ JUSQU\'A 300€ BONUS + 30 TOURS GRATUITS'
    },
    {
      id: 2,
      image: 'assets/images/CLC_GalaxyBlast_DesktopSlider.webp',
      text: 'New Game: Galaxy Blast'
    },
    {
      id: 3,
      image: 'assets/images/CLC_July_GOTM_EagleShadow_Pc-Slider.webp',
      text: 'Experience the thrill of Eagle Shadow'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isDesktopView = window.innerWidth >= 768;
    console.log('Screen Size Updated → isDesktopView:', this.isDesktopView);
  }

  ngOnInit(): void {
    this.checkScreenSize();
    this.autoSlide();
  }

  autoSlide() {
    setInterval(() => {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
    }, 5000);
  }

  goToSlide(index: number) {
    this.activeSlideIndex = index;
  }
}
