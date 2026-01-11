import { Component, OnInit } from '@angular/core';
import {
  LucideAngularModule,
  Shield,
  Code,
  Users,
  ArrowRight,
  Check,
  ServerIcon,
  Settings,
  Wrench,
  Server,
  Cpu,
} from 'lucide-angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  imports: [LucideAngularModule],
})
export class ServicesComponent implements OnInit {
  icon = {
    shield: Shield,
    code: Code,
    users: Users,
    arrowRight: ArrowRight,
    check: Check,
    serverIcon: ServerIcon,
    settings: Settings,
  };

  services = [
    {
      id: 1,
      number: '01',
      icon: Code,
      title: 'Software Development Solutions',
      description:
        'Design and development of custom software solutions tailored to operational needs, supporting efficient workflows and scalable digital platforms.',
      features: [
        'Web and desktop application development',
        'Custom software modules and system integrations',
        'Secure and scalable software architecture',
      ],
    },
    {
      id: 2,
      number: '02',
      icon: Cpu,
      title: 'Hardware Supply & Support',
      description:
        'Provision and support of reliable hardware solutions designed to meet organizational and infrastructure requirements.',
      features: [
        'IT hardware supply and installation',
        'System setup and configuration',
        'Hardware maintenance and support services',
      ],
    },
    {
      id: 3,
      number: '03',
      icon: Server,
      title: 'Software & Hardware Integration',
      description:
        'Seamless integration of software systems with hardware infrastructure to ensure stable performance and smooth data flow.',
      features: [
        'System and device integration',
        'Infrastructure configuration and optimization',
        'Reliable and secure system connectivity',
      ],
    },
    {
      id: 4,
      number: '04',
      icon: Wrench,
      title: 'AMC & Ongoing Support',
      description:
        'Annual Maintenance Contract (AMC) services providing continuous support, updates, and maintenance for both software and hardware systems.',
      features: [
        'Software maintenance and version updates',
        'Hardware servicing and issue resolution',
        'Ongoing technical support and system monitoring',
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
