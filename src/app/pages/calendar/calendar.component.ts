import {
  Component,
  OnInit,
  HostListener,
  Inject,
  PLATFORM_ID,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from '../../directives/header/header.component';
import { FooterComponent } from '../../directives/footer/footer.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../../services/data.service';
import { DialogModalService } from '../../services/dialog-modal.service';
import { SEOMetaService } from '../../services/seo-meta.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; // Import Location service
import * as promoData from '../../../assets/javascript/weekly-calendar.json';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog

interface IPromos {
  day: string;
  date: string;
  offer: {
    title: string;
    description: string;
    details: string;
    backgroundImage: string;
    modalBackgroundImage: string;
    active: boolean;
    isAvailable: boolean; // Ensure isAvailable is a part of the offer
  };
  isPast: boolean;
  isFuture: boolean;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  imports: [
    CommonModule,
    HeaderComponent,
    CarouselModule,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add schema if you're using custom elements
})
export class CalendarComponent implements OnInit {
  state$: any;
  backgroundImg: string = 'url("assets/images/paper-bg.webp")';
  promotions: IPromos[] = [];

  isLoggedIn: boolean = false; // Track if the user is logged in
  todayDay!: string;
  todayDate!: number;
  todayYear!: number;
  todayMonth!: string; // Add a property for the current month

  constructor(
    private modalService: DialogModalService,
    private seoService: SEOMetaService,
    public activatedRoute: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog // Inject MatDialog
  ) {}

  ngOnInit(): void {
    this.seoService.setCanonicalURL('https://www.luckycasinocasino.org/en/promotional-calendar');
    this.state$ = this.location.getState();
    if (this.state$.id) {
      this.modalService.openPromoIdDialog(this.state$.id);
    }

    // Get today's day, date, year, and month
    const today = new Date();
    this.todayDay = today.toLocaleDateString('en-US', { weekday: 'long' });
    this.todayDate = today.getDate();
    this.todayYear = today.getFullYear();
    this.todayMonth = today.toLocaleDateString('en-US', { month: 'short' }); // Get the full month name

    this.promotions = (promoData as any).default.filter((promo: { date: any; day: any; }, index: any, self: any[]) =>
      index === self.findIndex((t: { date: any; day: any; }) => t.date === promo.date && t.day === promo.day)
    ).map((promo: { date: string; offer: { active: boolean; isAvailable: boolean; }; }) => {
      // Set active flag based on whether it's the current date
      if (this.isCurrentAPromoDate(promo.date)) {
        promo.offer.active = true;
      }

      // Set availability based on whether the promo is future or current
      promo.offer.isAvailable = !this.isFutureDate(promo.date);

      return promo;
    });
  }

  /**
   * Verify if the current date is a promo day
   * @param selectedDate
   * @returns true if the date is a promo date
   */
  isCurrentAPromoDate(selectedDate: string): boolean {
    const today = new Date();
    const promoDate = new Date(selectedDate);
    return promoDate.toDateString() === today.toDateString();
  }

  /**
   * Verify if the given date is in the future
   * @param selectedDate
   * @returns true if the date is in the future
   */
  isFutureDate(selectedDate: string): boolean {
    const today = new Date();
    const promoDate = new Date(selectedDate);
    return promoDate > today; // Return true if the promo date is in the future
  }

  openDialogModal($event: Event, promoId: any): void {
    $event.preventDefault();
    this.modalService.openPromoCalendar(promoId);
  }

  /**
   * Check if a given date is a past date
   * @param dateString
   * @returns true if the date is in the past
   */
  isPastDate(dateString: string): boolean {
    const today = new Date();
    const promoDate = new Date(dateString);
    return promoDate < new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
  }

  // Add a method to toggle the login state
  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
