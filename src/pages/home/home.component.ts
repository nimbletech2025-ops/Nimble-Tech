import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductsComponent } from './products/products.component';
import { SoftwaresComponent } from './softwares/softwares.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeroSectionComponent, ProductsComponent, SoftwaresComponent],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
