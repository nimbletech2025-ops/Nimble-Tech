import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, HostListener, signal } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroSectionComponent implements OnInit {
  heroImages = [
    {
      src: 'hardware.png',
      mobileSrc: 'hardware-mobile.png', // Mobile version
      alt: 'Technology Hero 1',
    },
    {
      src: 'software.png',
      mobileSrc: 'software-mobile.png', // Mobile version
      alt: 'Technology Hero 2',
    },
  ];

  screenWidth = signal(window.innerWidth);

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
  }

  ngOnInit() {
    this.screenWidth.set(window.innerWidth);
  }
}
