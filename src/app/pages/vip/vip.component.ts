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

@Component({
  selector: 'app-vip',
  imports: [
    CommonModule,
    HeaderComponent,
    CarouselModule,
    FooterComponent,
  ],
  templateUrl: './vip.component.html',
  styleUrl: './vip.component.css'
})
export class VipComponent {

}
