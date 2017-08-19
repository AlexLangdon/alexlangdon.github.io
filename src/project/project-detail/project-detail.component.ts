import { Component, Inject } from '@angular/core';
import { ProjectModel } from '../project.model';
import { MD_DIALOG_DATA, MdDialog } from '@angular/material';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetail {
  constructor(@Inject(MD_DIALOG_DATA) public data: ProjectModel) {}
}
