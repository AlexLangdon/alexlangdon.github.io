import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    MdDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ProjectDetail
  ]
})
export class AppModule {}
