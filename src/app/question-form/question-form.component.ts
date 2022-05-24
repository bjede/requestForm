import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  noValid: boolean = false;
  days: any[] = [];
  months: string[] = ['Jan.', 'Feb.', 'Mär.', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.']
  years: any[] = [];
  isFocus: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.getDays();
    this.getYears();
  }

  amountOfAdults = new FormControl('', [
    Validators.required
  ]);

  childName = new FormControl('', [
    Validators.required
  ]);

  birthday = new FormControl('', [
    Validators.required
  ]);

  monthOfBirth = new FormControl('', [
    Validators.required
  ]);

  yearOfBirth = new FormControl('', [
    Validators.required
  ]);

  firstName = new FormControl('', [
    Validators.required
  ]);

  lastName = new FormControl('', [
    Validators.required
  ]);

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  street = new FormControl('', [
    Validators.required
  ]);

  zipCode = new FormControl('', [
    Validators.required
  ]);

  city = new FormControl('', [
    Validators.required
  ]);

  country = new FormControl('', [
    Validators.required
  ]);

  questionForm = new FormGroup({
    adults: this.amountOfAdults,
    childName: this.childName,
    birthday: this.birthday,
    monthOfBirth: this.monthOfBirth,
    yearOfBirth: this.yearOfBirth,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    street: this.street,
    zipCode: this.zipCode,
    city: this.city,
    country: this.country,
  });

  send() {
    this.noValid = true;
    if(this.questionForm.valid){
      this.noValid = false;
  
      console.log(this.questionForm.value);
      this.questionForm.reset();
      this.questionForm.disable
    }
    
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
