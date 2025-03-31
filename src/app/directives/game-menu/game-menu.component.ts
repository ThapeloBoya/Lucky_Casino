import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-game-menu',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './game-menu.component.html',
  styleUrls: ['./game-menu.component.css'],
})
export class GameMenuComponent {
  images: string[] = [
    'https://static.adv.bet/casino/gaminghub-icons/egt_STSlot_L.webp',
    'https://static.adv.bet/casino/gaminghub-icons/egt_TSDSlot_L.webp',
    'https://sa-aardvark-dk3-pragmaticplay-net.advbet.com/game_pic/rec/325/vs5hotburn.png',
    'https://static.adv.bet/casino/pragmatic-animated-icons/vs5joker.svg',
    'https://static.adv.bet/casino/gaminghub-icons/pragmatic_2201_L.webp',
    'https://static.adv.bet/casino/gaminghub-icons/pragmatic_vs20drtgold_L.webp',
  ];

  link = 'https://cdk.luckycasinocasino.org/lobby/?SkinId=3&DID=1775552&downloadid=1775552&affid=293&affid=293&CASINONAME=luckycasino&RTGURL=https://www.cdnfile.eu/dl/TrackSetup/TrackSetup.aspx?DID=1775552%26downloadid=1775552%26affid=293%26CASINONAME=luckycasino&redirect=https://cdk.luckycasinocasino.org/Lobby.aspx/?SkinId=3%26show=login';

  imageCategories: { [key: string]: string[] } = {
    'new-game': ['https://static.adv.bet/casino/gaminghub-icons/egt_STSlot_L.webp',
      'https://static.adv.bet/casino/gaminghub-icons/egt_TSDSlot_L.webp',
      'https://sa-aardvark-dk3-pragmaticplay-net.advbet.com/game_pic/rec/325/vs5hotburn.png',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vs5joker.svg',
      'https://static.adv.bet/casino/gaminghub-icons/pragmatic_2201_L.webp',
      'https://static.adv.bet/casino/gaminghub-icons/pragmatic_vs20drtgold_L.webp'],
    'crash-games': ['https://easybet.co.za/assets/aviator_default-Cuch3g_x.png',
      'https://content.agtsoftware.com/files/promo/agt1.4x1_420-300cycle/100%20Dream%20catcher%206%20reels.webp',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vs20olympgate.svg',
      'https://static.adv.bet/casino/evolution-icons/RngMegaBall00001_L.webp',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vswaysmadame.svg',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vswaysbufking.svg',],
    'pokies-slots': ['https://static.adv.bet/casino/gaminghub-icons/egt_STSlot_L.webp',
      'https://static.adv.bet/casino/gaminghub-icons/egt_TSDSlot_L.webp',
      'https://sa-aardvark-dk3-pragmaticplay-net.advbet.com/game_pic/rec/325/vs5hotburn.png',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vs5joker.svg',
      'https://static.adv.bet/casino/gaminghub-icons/pragmatic_2201_L.webp',
      'https://static.adv.bet/casino/gaminghub-icons/pragmatic_vs20drtgold_L.webp'],
    'progressive-jackpot': ['https://easybet.co.za/assets/aviator_default-Cuch3g_x.png',
      'https://content.agtsoftware.com/files/promo/agt1.4x1_420-300cycle/100%20Dream%20catcher%206%20reels.webp',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vs20olympgate.svg',
      'https://static.adv.bet/casino/evolution-icons/RngMegaBall00001_L.webp',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vswaysmadame.svg',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vswaysbufking.svg',],
    'video-poker': ['https://static.adv.bet/casino/gaminghub-icons/egt_STSlot_L.webp',
      'https://static.adv.bet/casino/gaminghub-icons/egt_TSDSlot_L.webp',
      'https://sa-aardvark-dk3-pragmaticplay-net.advbet.com/game_pic/rec/325/vs5hotburn.png',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vs5joker.svg',
      'https://static.adv.bet/casino/gaminghub-icons/pragmatic_2201_L.webp',
      'https://static.adv.bet/casino/gaminghub-icons/pragmatic_vs20drtgold_L.webp'],
    'table-games': ['https://easybet.co.za/assets/aviator_default-Cuch3g_x.png',
      'https://content.agtsoftware.com/files/promo/agt1.4x1_420-300cycle/100%20Dream%20catcher%206%20reels.webp',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vs20olympgate.svg',
      'https://static.adv.bet/casino/evolution-icons/RngMegaBall00001_L.webp',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vswaysmadame.svg',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vswaysbufking.svg',],
    'roulette-keno': ['https://static.adv.bet/casino/gaminghub-icons/egt_STSlot_L.webp',
      'https://static.adv.bet/casino/gaminghub-icons/egt_TSDSlot_L.webp',
      'https://sa-aardvark-dk3-pragmaticplay-net.advbet.com/game_pic/rec/325/vs5hotburn.png',
      'https://static.adv.bet/casino/pragmatic-animated-icons/vs5joker.svg',
      'https://static.adv.bet/casino/gaminghub-icons/pragmatic_2201_L.webp',
      'https://static.adv.bet/casino/gaminghub-icons/pragmatic_vs20drtgold_L.webp'],
  };

  currentIndex = 1;

  setCategory(event: MouseEvent, category: string) {
    event.preventDefault();  // Prevent default link behavior
    this.images = this.imageCategories[category] || [];
  }

  moveSlider(direction: 'left' | 'right') {
    if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    } else {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }

  getImageClass(index: number) {
    return index === this.currentIndex ? 'image active' : 'image';
  }

  getSliderTransform() {
    const imageWidth = 300;
    const margin = 20;
    return `translateX(${-(this.currentIndex - 1) * (imageWidth + margin)}px)`;
  }

  onImageClick(index: number) {
    if (index === this.currentIndex) {
      window.open(this.link, '_blank');
    }
  }
}
