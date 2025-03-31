import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DialogModalService } from '../../services/dialog-modal.service';
import { SEOMetaService } from '../../services/seo-meta.service';
import { LoaderService } from '../../services/loader.service';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser, Location, CommonModule, } from '@angular/common';
import { NavbarComponent } from '../../directives/navbar/navbar.component';
import { FooterComponent } from '../../directives/footer/footer.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { HeaderComponent } from '../../directives/header/header.component';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  imports: [
    CommonModule,
    HeaderComponent,
    CarouselModule,
    FooterComponent,
  ],
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit, AfterViewInit {
  state$: any;
  isBrowser: boolean;

  constructor(
    private modalService: DialogModalService,
    private seoService: SEOMetaService,
    private loaderService: LoaderService,
    public activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private location: Location,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Check if we are on the browser platform and if loaderService is initialized
    if (this.isBrowser) {
      if (this.loaderService && this.loaderService.isLoading) {
        console.log('LoaderService is loading:', this.loaderService.isLoading);
        this.loaderService.isLoading.next(true);  // Set loading state to true
      } else {
        console.error('LoaderService or isLoading is not initialized!');
      }
    }
  }

  closeLoader(): void {
    if (this.loaderService && this.loaderService.isLoading) {
      console.log('Closing loader');
      this.loaderService.isLoading.next(false);  // Set loading state to false
    }
  }

  ngOnInit(): void {
    // Setting up SEO Meta data and canonical URL
    this.seoService.setCanonicalURL('https://www.luckycasinocasino.org/en/promotions');

    // Get location state (this can be used to open a promo dialog if provided)
    this.state$ = this.location.getState();
    if (this.state$?.id) {
      console.log('Opening promo modal with ID:', this.state$.id);
      this.modalService.openPromoIdDialog(this.state$.id);
    }
  }

  ngAfterViewInit(): void {
    // Ensuring Angular change detection runs after view initialization
    this.cdr.detectChanges();
  }

  openDialogModal($event: { preventDefault: () => void; }, promoId: number): void {
    $event.preventDefault();
    console.log('Opening promo modal with promoId:', promoId);
    this.modalService.openPromoIdDialog(promoId);
  }
}
