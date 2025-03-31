import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // ✅ Recent Winners Data
  private winners = [
    { name: 'Jackson', amount: '$1,847', game: 'Naughty or Nice II', avatar: 'assets/images/Circleimages1.webp' },
    { name: 'Eden', amount: '$2,430', game: 'Vikings Wins', avatar: 'assets/images/Circleimages2.webp', isChampion: true },
    { name: 'Emma Aria', amount: '$1,674', game: 'Supernova Slots', avatar: 'assets/images/Circleimages3.webp' }
  ];

  // ✅ Happy Customer Messages
  private testimonials = [
    {
      name: 'Vizeh Robert',
      location: 'Warsaw, Poland',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      rating: 4.5,
      avatar: 'assets/images/customer1.jpg'
    },
    {
      name: 'Yessica Christy',
      location: 'Shanxi, China',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      rating: 4.5,
      avatar: 'assets/images/customer2.jpg'
    },
    {
      name: 'Kim Young Jou',
      location: 'Seoul, South Korea',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      rating: 4.5,
      avatar: 'assets/images/customer3.jpg'
    }
  ];

  constructor() {}

  // ✅ Get Winners
  getWinners() {
    return this.winners;
  }

  // ✅ Get Testimonials
  getTestimonials() {
    return this.testimonials;
  }
}
