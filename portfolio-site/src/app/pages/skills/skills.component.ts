import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  skills$!: Observable<any[]>;

  ngOnInit() {
    const skillsRef = collection(this.firestore, 'skills');
    this.skills$ = collectionData(skillsRef);
  }
}
