import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule,
         MdButtonModule,
         MaterialModule,
         MdIconModule,
         MdGridListModule,
         MdListModule,
         MdToolbarModule,
         MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProjectCard } from '../project/project-card/project-card.component';
import { ProjectDetail } from '../project/project-detail/project-detail.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCard,
    ProjectDetail
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MaterialModule,
    MdIconModule,
    MdGridListModule,
    MdListModule,
    MdDialogModule,
    // TODO No router is needed for one page app
    RouterModule.forRoot([{ path: '', component: AppComponent}]),
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ProjectDetail
  ]
})
export class AppModule {}
