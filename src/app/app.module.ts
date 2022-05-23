import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { AlertComponent } from './shared/alert/alert.component';
import { AddChildComponent } from './add-child/add-child.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    AlertComponent,
    AddChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
