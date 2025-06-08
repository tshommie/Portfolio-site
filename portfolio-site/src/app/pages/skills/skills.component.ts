import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'Firebase', level: 65 },
    { name: 'Data Analysis', level: 70 }
  ];
}
