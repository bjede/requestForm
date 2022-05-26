import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form } from '../models/form';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  form = new Form();

  constructor() { }

  ngOnInit(): void {
  }

  startDate = new FormControl('', [
    Validators.required
  ]);

  endDate = new FormControl('', [
    Validators.required
  ]);

  amountOfAdults = new FormControl('', [
    Validators.required
  ]);

  childName = new FormControl('', [
    Validators.required
  ]);

  birthday = new FormControl(null, [
    Validators.required
  ]);

  monthOfBirth = new FormControl(null, [
    Validators.required
  ]);

  yearOfBirth = new FormControl(null, [
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

  phoneNumber = new FormControl('', [
    Validators.pattern('^[0-9]+')
  ]);
  
  zipCode = new FormControl('', [
    Validators.required
  ]);

  city = new FormControl('', [
    Validators.required
  ]);

  country = new FormControl(null, [
    Validators.required
  ]);

  message = new FormControl('');

  questionForm = new FormGroup({
    startDate: this.startDate,
    endDate: this.endDate,
    adults: this.amountOfAdults,
    childName: this.childName,
    birthday: this.birthday,
    monthOfBirth: this.monthOfBirth,
    yearOfBirth: this.yearOfBirth,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    street: this.street,
    phoneNumber: this.phoneNumber,
    zipCode: this.zipCode,
    city: this.city,
    country: this.country,
    message: this.message,
  });

  send() {
    this.form.noValid = true;
    this.questionForm.disabled;
    if (this.questionForm.valid) {
      this.form.noValid = false;
      console.log(this.questionForm.value);
      this.questionForm.reset();
      return;
    }
    this.form.color = 'alert';
    this.form.message = this.form.errorMessage;

  }
}
