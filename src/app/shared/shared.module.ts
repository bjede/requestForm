import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { EventPreventDefaultDirective } from './events/event-prevent-default.directive';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlertComponent,
    EventPreventDefaultDirective,
    FooterComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertComponent,
    FooterComponent,
    EventPreventDefaultDirective,
    InputComponent
  ]
})
export class SharedModule { }
