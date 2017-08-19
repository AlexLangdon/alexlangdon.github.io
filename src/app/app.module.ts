import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule,
         MdButtonModule,
         MaterialModule,
         MdIconModule,
         MdGridListModule,
         MdListModule,
         MdToolbarModule } from '@angular/material';

import { ProjectCard } from '../project-card/project-card.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCard
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MaterialModule,
    MdIconModule,
    MdGridListModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
