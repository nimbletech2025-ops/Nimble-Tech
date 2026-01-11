import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-softwares',
  templateUrl: './softwares.component.html',
  styleUrls: ['./softwares.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwaresComponent implements OnInit {
  ngOnInit() {}

  softwares = [
    {
      id: 1,
      image: '/software/s1.png',
      category: 'Full Stack Framework',
    },
    {
      id: 2,
      image: '/software/s2.png',
      category: 'Backend Database',
    },
    {
      id: 3,
      image: '/software/s3.png',
      category: 'Full Stack Framework',
    },
    {
      id: 4,
      image: '/software/s4.png',
      category: 'Backend Database',
    },
    {
      id: 5,
      image: '/software/s5.png',
      category: 'Frontend Framework',
    },
    {
      id: 6,
      image: '/software/s6.png',
      category: 'Frontend Framework',
    },
    {
      id: 7,
      image: '/software/s7.png',
      category: 'Backend Database',
    },
    {
      id: 8,
      image: '/software/s8.png',
      category: 'Backend Database',
    },
  ];

  constructor() {}
}
