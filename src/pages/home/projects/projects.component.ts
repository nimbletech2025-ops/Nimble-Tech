import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { LucideAngularModule, Star, Users, Briefcase, Award, CheckCircle } from 'lucide-angular';

register();

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [LucideAngularModule],
})
export class ProjectsComponent implements OnInit {
  icon = {
    star: Star,
    users: Users,
    briefcase: Briefcase,
    award: Award,
    checkCircle: CheckCircle,
  };

  projects = [
    {
      id: 1,
      image: '/projects/sng.png',
      title: 'Sikkim Newar Guthi – Community & Membership Platform',
      description:
        'A secure digital platform for managing verified community members, Sakha-based directories, and transparent membership payments, built to support long-term community governance.',
      status: 'Completed',
      category: 'Web Platform Development',
      link: 'https://sikkimnewarguthi.com/',
    },
    {
      id: 2,
      image: '/projects/sikkim-inspires.png',
      title: 'Sikkim Inspires – Tourism & Civil Aviation Initiatives Portal',
      description:
        'An official digital showcase platform highlighting initiatives, projects, and programmes undertaken by the Department of Tourism and Civil Aviation, Government of Sikkim. The platform presents developmental efforts, innovations, and public-facing initiatives through a structured and accessible web experience.',
      status: 'Completed',
      category: 'Government Web Platform',
      link: 'https://sikkiminspires.in/',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
