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
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

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
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    // Handle fragment navigation on route changes
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const fragment = this.router.parseUrl(this.router.url).fragment;
      if (fragment) {
        setTimeout(() => {
          this.scrollToFragment(fragment);
        }, 100);
      }
    });
  }

  tabs: { name: string; icon: any; path: string; fragment?: string }[] = [
    {
      name: 'Home',
      icon: Home,
      path: '/',
    },
    {
      name: 'About',
      icon: Info,
      path: '/',
      fragment: 'about',
    },
    {
      name: 'Services',
      icon: Briefcase,
      path: '/',
      fragment: 'services',
    },
    {
      name: 'Contact',
      icon: Mail,
      path: '/',
      fragment: 'contact',
    },
    {
      name: 'Projects',
      icon: MonitorCloud,
      path: '/',
      fragment: 'Projects',
    },
  ];

  navigateTo(path: string, fragment?: string) {
    if (fragment) {
      this.router.navigate([path], { fragment: fragment }).then(() => {
        this.scrollToFragment(fragment);
      });
    } else {
      this.router.navigate([path]).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  scrollToFragment(fragment: string) {
    setTimeout(() => {
      const element = document.getElementById(fragment);
      if (element) {
        const offset = 100; // Offset for fixed navbar at bottom
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  }

  socialLinks: { name: string; icon: any; url: string }[] = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61586092841748',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/nimbletech2025/',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contat@nimble-tech.solutions',
    },
  ];

  navigateToSocial(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit() {}
}
