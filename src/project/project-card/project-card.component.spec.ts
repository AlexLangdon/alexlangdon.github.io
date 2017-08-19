import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard } from './project-card.component';

describe('ProjectCardComponent', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
