import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[event-prevent-default]'
})
export class EventPreventDefaultDirective {

  /**
   * Prevents refreshing the page when clicking.
   * 
   * @param $event - Event
   * @returns - $event.preventDefault()
   */
  @HostListener('click', ['$event'])
  onClick($event: Event){
    return $event.preventDefault();
  }
}
