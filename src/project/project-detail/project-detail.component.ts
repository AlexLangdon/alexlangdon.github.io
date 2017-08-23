import { Component, Inject } from '@angular/core';
import { ProjectModel } from '../project.model';
import { MD_DIALOG_DATA, MdDialog } from '@angular/material';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetail {
  private _currentMedia = 0;

  config = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.next-button',
    prevButton: '.prev-button',
    autoplay: 5000
  };

  constructor(@Inject(MD_DIALOG_DATA) public data: ProjectModel) {
    if (this.data.videoUrl) {
      this.config.autoplay = undefined;
    }
  }

  get currentMedia() {
    return this._currentMedia;
  }

  nextMedia() {
    this._currentMedia = (this._currentMedia + 1) % this.data.imageUrls.length;
  }

  prevMedia() {
    this._currentMedia = this._currentMedia === 0 ? this.data.imageUrls.length - 1 : this._currentMedia - 1;
  }
}
