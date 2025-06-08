import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  projects$!: Observable<any[]>;

  ngOnInit() {
    const projectRef = collection(this.firestore, 'projects');
    this.projects$ = collectionData(projectRef);
  }
}
