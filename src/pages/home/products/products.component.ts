import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'Monitor',
      image: '/hardware/p1.png',
      category: 'MONITOR',
    },
    {
      id: 2,
      name: 'Mouse',
      image: '/hardware/p2.png',
      category: 'MOUSE',
    },
    {
      id: 3,
      name: 'Keyboard',
      image: '/hardware/p3.png',
      category: 'KEYBOARD',
    },
    {
      id: 4,
      name: 'CPU',
      image: '/hardware/p4.png',
      category: 'CPU',
    },
    {
      id: 5,
      name: 'Printer',
      image: '/hardware/p5.png',
      category: 'PRINTER',
    },
    {
      id: 6,
      name: 'Processor',
      image: '/hardware/p6.png',
      category: 'PROCESSOR',
    },
    {
      id: 7,
      name: 'SSD',
      image: '/hardware/p7.png',
      category: 'SSD',
    },
    {
      id: 8,
      name: 'UPS',
      image: '/hardware/p8.png',
      category: 'UPS',
    },
    {
      id: 9,
      name: 'RAM',
      image: '/hardware/p9.png',
      category: 'RAM',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
