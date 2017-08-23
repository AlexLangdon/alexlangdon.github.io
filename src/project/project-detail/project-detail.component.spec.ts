import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectDetail } from './project-detail.component';

describe('ProjectDetailComponent', () => {
  let component: ProjectDetail;
  let fixture: ComponentFixture<ProjectDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetail ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
