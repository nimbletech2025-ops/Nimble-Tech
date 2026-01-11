import { Component, OnInit } from '@angular/core';
import { LucideAngularModule, Check } from 'lucide-angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [LucideAngularModule],
})
export class AboutComponent implements OnInit {
  icon = {
    check: Check,
  };

  features = [
    'Technology solutions aligned with modern standards',
    'Experienced professionals across development and engineering',
    'Tailored software solutions for diverse requirements',
    'Integrated hardware and system support',
    'Responsive technical support and maintenance',
    'Infrastructure designed for scalability and reliability',
  ];

  constructor() {}

  ngOnInit() {}
}
