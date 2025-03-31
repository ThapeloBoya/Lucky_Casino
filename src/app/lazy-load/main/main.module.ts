import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from '@coreui/angular';

import { HeaderComponent } from '../../directives/header/header.component';
import { FooterComponent } from '../../directives/footer/footer.component';

import { HomeComponent } from '../../pages/home/home.component';

import { AboutComponent } from '../../pages/about/about.component';
import { SupportComponent } from '../../pages/support/support.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule,
    SlickCarouselModule,
    HeaderComponent,
    FooterComponent,
    SupportComponent,
    AboutComponent,
  ]
})
export class MainModule { }
