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

import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-support',
  imports: [
    CommonModule,
    HeaderComponent,
    CarouselModule,
    FooterComponent,
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
