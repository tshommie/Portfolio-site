import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built using Angular.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      link: 'https://github.com/yourusername/portfolio-site'
    },
    {
      title: 'Data Dashboard',
      description: 'Interactive dashboard showing analytics for a business.',
      technologies: ['Firebase', 'Charts.js', 'HTML/CSS'],
      link: ''
    }
  ];
}
