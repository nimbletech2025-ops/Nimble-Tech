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
      title: 'Hardware Solutions',
      description:
        'High-performance computer components and hardware designed for reliability and modern computing needs.',
      categories: ['Processors', 'Graphics Cards', 'Motherboards', 'Storage', 'Memory'],
    },
    {
      src: 'software.png',
      mobileSrc: 'software-mobile.png', // Mobile version
      alt: 'Technology Hero 2',
      title: 'Software Solutions',
      description:
        'Innovative software applications and digital solutions to power your business and enhance productivity.',
      categories: ['Web Development', 'Mobile Apps', 'Cloud Services', 'Enterprise Software'],
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
