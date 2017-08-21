import { Component } from '@angular/core';
import { ProjectCard } from '../project/project-card/project-card.component';
import { ProjectModel } from '../project/project.model';
import { PageScrollConfig } from 'ng2-page-scroll';

const projectImgs = './assets/images/projects/';
const projectVids = './assets/vids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // TODO Move this to a separate object
  public academicProjects = [
    new ProjectModel(
      `Rubik's Cube Solver`,
      'C++',
      `The aim of the project was to detect and solve any 3x3 Rubik's cube through
      computer vision and optimal solving algorithms. The final solution used a
      webcam to detect the cube contours via Canny edge and corner tracking.
      It could also estimate the position of any occluded pieces before clustering
      the colours and building a 3D model. The solver had to traverse a space of over 43 quintillion
      (4.3×10^19) combinations to find the unique solution. This required a specialised A* search
      method with pre-generated generated databases.`,
      [projectImgs + 'Cube/Cube1.png']),
    new ProjectModel(
      `Robocode Bot`,
      'Java',
      `In Robocode tank-like robot players battle in team and individual combat on a variety of arena sizes.
      Each combatant's movement, firing and line of sight are solely controlled via Java programs with no user
      input. The end result was an intelligent agent which would minimise loss
      by analysing the statistical correlations in opponent's preferred movement and position.`,
      [projectImgs + 'Robocode/Robocode1.png',
      projectImgs + 'Robocode/Robocode2.png',
      projectImgs + 'Robocode/Robocode3.png']),
    new ProjectModel(
      `Web Payment Manager`,
      'HTML CSS PHP JS SQL',
      `The project was developed as an online, account based payment management system.
      Users could send and complete payment requests, while setting deadlines,
      automating email notifications and choosing fixed sum or proportional bill splitting.`,
      [projectImgs + 'IOU/IOU1.png',
      projectImgs + 'IOU/IOU2.png',
      projectImgs + 'IOU/IOU3.png',
      projectImgs + 'IOU/IOU4.png']),
  ];
  public personalProjects = [
    new ProjectModel(
      'Rotate',
      'Unity C#',
      `Platform: PC Web
      Rotate is a 3D gravity puzzle game developed during a 48 hour Warwick Game Design Hackathon.
      The goal is to connect two cubes by rotating the player camera to change the gravity. The game features
      highscores and 8 levels of increasing skill.`,
      [projectImgs + 'Rotate/Rotate1.png',
      projectImgs + 'Rotate/Rotate2.png',
      projectImgs + 'Rotate/Rotate3.png',
      projectImgs + 'Rotate/Rotate4.png']),
    new ProjectModel(
      'Arcs',
      'Unity C#',
      `Platform: Android, PC, Web
      A casual game based on movement and timing. Players must navigate around moving arcs while trying to
      get as far as possible within the time limit. Uses procedural generation to create unique level structure for
      each run-through, while allowing 360 degree of playable direction for the user.`,
      [projectImgs + 'Arcs/Arcs1.png',
      projectImgs + 'Arcs/Arcs2.png',
      projectImgs + 'Arcs/Arcs3.png',
      projectImgs + 'Arcs/Arcs4.png'],
      [{label: 'Play Store page', url: 'https://play.google.com/store/apps/details?id=com.AlexLangdon.Arcs&hl=en_GB'}]),
    new ProjectModel(
      'Orbit',
      'Java',
      `Platform: PC
      Astro was intended to be a simple clone of a retro style space shooter.
      The project ultimately built on the basic design with some extra features like heat and component managemen.
      While mainly used as a way to learn Java, the project also introduced me to sprite, GUI and animation generation.`,
      [projectImgs + 'Astro/Astro1.png',
      projectImgs + 'Astro/Astro2.png',
      projectImgs + 'Astro/Astro3.png']),
    new ProjectModel(
      'OCR ICT Guide',
      'Matchware Mediator',
      `Platform: PC \n\n
      An interactive revision CD co-developed for the Forest School IT department.
      The final product supplemented the exam preparation for GCSE IT students.`,
      [projectImgs + 'OCR/OCR1.png',
      projectImgs + 'OCR/OCR2.png',
      projectImgs + 'OCR/OCR3.png',
      projectImgs + 'OCR/OCR4.png']),
  ];

  constructor() {
    PageScrollConfig.defaultScrollOffset = 100;
    PageScrollConfig.defaultDuration = 700;
  }
}
