import { Component } from '@angular/core';
import { ProjectCard } from '../project/project-card/project-card.component';
import { PageScrollConfig } from 'ng2-page-scroll';
import * as projectsStore from '../project/projects.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public projects = projectsStore.projects;

  constructor() {
    PageScrollConfig.defaultScrollOffset = 100;
    PageScrollConfig.defaultDuration = 700;
  }
}
