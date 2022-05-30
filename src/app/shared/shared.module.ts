import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { EventPreventDefaultDirective } from './events/event-prevent-default.directive';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AlertComponent,
    EventPreventDefaultDirective,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    FooterComponent,
    EventPreventDefaultDirective
  ]
})
export class SharedModule { }
