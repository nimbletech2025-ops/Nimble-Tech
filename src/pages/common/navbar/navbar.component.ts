import { Component, OnInit } from '@angular/core';
import {
  LucideAngularModule,
  Home,
  Info,
  Briefcase,
  Mail,
  Facebook,
  Instagram,
  MonitorCloud,
} from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [LucideAngularModule],
})
export class NavbarComponent implements OnInit {
  icon = {
    home: Home,
    about: Info,
    services: Briefcase,
    contact: Mail,
    facebook: Facebook,
    instagram: Instagram,
    mail: Mail,
    work: MonitorCloud,
  };
  currentPath: string = '';
  constructor(private router: Router) {}

  tabs: { name: string; icon: any; path: string }[] = [
    {
      name: 'Home',
      icon: Home,
      path: '/',
    },
    {
      name: 'About',
      icon: Info,
      path: '/about',
    },
    {
      name: 'Services',
      icon: Briefcase,
      path: '/services',
    },
    {
      name: 'Contact',
      icon: Mail,
      path: '/contact',
    },
    {
      name: 'Work',
      icon: MonitorCloud,
      path: '/work',
    },
  ];

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  socialLinks: { name: string; icon: any; url: string }[] = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@nimbletech.com',
    },
  ];

  navigateToSocial(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit() {}
}
