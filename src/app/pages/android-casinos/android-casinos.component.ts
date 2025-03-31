import {
  Component,OnInit,
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
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-android-casinos',
  imports: [
    CommonModule,
    HeaderComponent,
    CarouselModule,
    FooterComponent,
    FaqComponent,
  ],
  templateUrl: './android-casinos.component.html',
  styleUrl: './android-casinos.component.css'
})
export class AndroidCasinosComponent {

}
