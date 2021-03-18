import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoProjectsComponent } from './to-do-projects/to-do-projects.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoProjectsComponent,
    ToDoItemsComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
