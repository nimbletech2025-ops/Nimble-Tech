import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductsComponent } from './products/products.component';
import { SoftwaresComponent } from './softwares/softwares.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    HeroSectionComponent,
    ProductsComponent,
    SoftwaresComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
