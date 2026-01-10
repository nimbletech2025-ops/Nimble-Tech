import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../common/navbar/navbar.component';
import { FooterComponent } from '../common/footer/footer.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [NavbarComponent, FooterComponent, RouterOutlet],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
