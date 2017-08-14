import { Component, Input } from '@angular/core';
import { ProjectModel } from './project.model';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCard {
  @Input()
    project: ProjectModel;

  constructor() {}

}
