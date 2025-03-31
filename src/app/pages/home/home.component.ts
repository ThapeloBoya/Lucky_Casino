import {
  Component,
  OnInit,
  HostListener,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../../directives/header/header.component';
import { FooterComponent } from '../../directives/footer/footer.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { FaqComponent } from '../../components/faq/faq.component';
import { GameMenuComponent } from '../../directives/game-menu/game-menu.component';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CarouselModule,
    FooterComponent,
    FaqComponent,
    GameMenuComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  isMobile: boolean = false;
  isBrowser: boolean = true;
  isDesktopView: boolean = true;

  winners: any[] = [];
  testimonials: any[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private dataService: DataService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }



  desktopSlides = [
    {
      image: 'assets/images/DesktopBanner.jpeg',
      title: '',
      subTitle: '',
    },
  ];

  mobileSlides = [
    {
      image: 'assets/images/DesktopBanner.jpeg',
      title: '',
      subTitle: '',
    },
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    // margin: 3,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    lazyLoad: true,
    autoWidth: true,
    autoHeight: true,
    responsive: {
      0: { items: 1, stagePadding: 20 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };

  promoDesktopSlides = [
    {
      image: 'assets/images/EN_Dec_Xmas_SpinTheWheel_VueLobbyPC.jpeg',
      alt: 'Desktop Promo 1',
    }
  ];

  promoMobileSlides = [
    { image: 'assets/images/EN_Dec_Xmas_SpinTheWheel_VueLobbyPC.jpeg', alt: 'Mobile Promo 1' },
  ];

  promoCarouselOptions: OwlOptions = {
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoWidth: true,
    responsive: {
      0: { items: 1, autoWidth: true, stagePadding: 0 },
      600: { items: 1, autoWidth: true, stagePadding: 0 },
      1000: { items: 1, stagePadding: 50 },
    },
  };
    // Add topWinners property
    topWinners: any[] = [
      {
        first_name: 'John Doe',
        amount: 5,
        game_belly_art_url: 'assets/images/logo.jpg',
        external_game_name: 'Slot Machine'
      },
      {
        first_name: 'Jane Smith',
        amount: 7.25,
        game_belly_art_url: 'assets/images/logo.jpg',
        external_game_name: 'Poker'
      },
      {
        first_name: 'Alice Brown',
        amount: 4.35,
        game_belly_art_url: 'assets/images/logo.jpg',
        external_game_name: 'Roulette'
      }
    ];

  ngOnInit(): void {
    this.checkScreenSize();
    this.winners = this.dataService.getWinners();
    this.testimonials = this.dataService.getTestimonials();
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }

  // ✅ OWL Carousel Options for Winners
  winnerCarouselOptions: OwlOptions = {
    loop: true,
    margin: 1,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },     /* ✅ 1 Winner per slide on mobile */
      600: { items: 2 },   /* ✅ 2 Winners per slide on tablets */
      1000: { items: 3 }   /* ✅ 3 Winners per slide on desktop */
    }
  };

  // ✅ OWL Carousel Options for Testimonials
  testimonialCarouselOptions: OwlOptions = {
    loop: true,
    margin: 1,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },     /* ✅ 1 Testimonial per slide on mobile */
      600: { items: 2 },   /* ✅ 2 Testimonials per slide on tablets */
      1000: { items: 3 }   /* ✅ 3 Testimonials per slide on desktop */
    }
  };


  lobbyRedirect(page: string): void {
    console.log(`Redirecting to ${page} page...`);
    window.location.href = `/${page}`;
  }

  downloadCasinoApp(): void {
    console.log('Redirecting to app download...');
    window.location.href = '/download';
  }
  // ✅ FIX NG0955 WARNING: Duplicate Keys in *ngFor
  trackByIndex(index: number, item: any): string {
    return item.avatar ? item.avatar : index.toString();
  }
}
