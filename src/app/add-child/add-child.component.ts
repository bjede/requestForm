import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss']
})
export class AddChildComponent implements OnInit {

  days: any[] = [];
  months: string[] = ['Jan.', 'Feb.', 'Mär.', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.']
  years: any[] = [];
  child: number[] = [];
  count: number = 2;

  constructor() { }

  /**
   *  Init the functions.
   */
  ngOnInit(): void {
    this.getDays();
    this.getYears();
  }

  /**
   * Child input field will be added. Event action is prevented. The amount will be increased and then pushed into the array.
   * 
   * @param {Event} $event - Event action
   * @param {number} amount - number 
   */
  addInputChild($event: Event, amount: number) {
    $event.preventDefault();
    (this.child.length === 0) ? this.count = 2 : amount = this.count++;
    this.child.push(amount)
  }


  /**
   * When clicked, the specific child input field will be removed.
   * 
   * @param {Event} $event - Event
   * @param {number} index - The index of the input field.
   */
  removeInputChild($event: Event, index: number) {
    $event.preventDefault();
    this.child.splice(index, 1);
  }


  /**
   *  The current year will be determined and calculates 19 years back and pushes the years into the array.
   */
  getYears() {
    let currentYear = new Date().getFullYear();
    for (let i = 19; i > 0; i--) {
      this.years.push(currentYear--);
    }
  }


  /**
   * Create days 1-31 and push them into the array
   */
  getDays() {
    for (let i = 1; i < 32; i++) {
      this.days.push(i);
    }
  }
}
