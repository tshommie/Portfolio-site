import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./pages/skills/skills.component').then(m => m.SkillsComponent)
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent)
  }
];
