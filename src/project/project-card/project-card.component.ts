import { Component, Input } from '@angular/core';
import { ProjectModel } from '../project.model';
import { ProjectDetail } from '../project-detail/project-detail.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCard {
  @Input()
    project: ProjectModel;

  constructor(public dialog: MdDialog) {}

  showProjectDetails() {
    this.dialog.open(ProjectDetail, {
      data: this.project
    });
  }

}
