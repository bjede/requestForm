import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { Form } from '../models/form';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {

  form = new Form();
  isSumbited = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  // Create required to be input field startDate
  startDate = new FormControl('', [
    Validators.required
  ]);

  // Create required to be input field endDate
  endDate = new FormControl('', [
    Validators.required
  ]);

  // Create required to be input field amountOfAdults
  amountOfAdults = new FormControl('', [
    Validators.required
  ]);

  // Create required to be input field childName
  childName = new FormControl('', [
    Validators.required
  ]);

  // Create required to be input field birthday
  birthday = new FormControl(null, [
    Validators.required
  ]);

  // Create required to be inputcfield monthOfBirth
  monthOfBirth = new FormControl(null, [
    Validators.required
  ]);

  // Create required to be input field yearOfBirth
  yearOfBirth = new FormControl(null, [
    Validators.required
  ]);

  // Create required to be input field firstName
  firstName = new FormControl('', [
    Validators.required
  ]);


  // Create required to be input field lastName
  lastName = new FormControl('', [
    Validators.required
  ]);

  // Create required to be input field email
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  // Create required to be input field street
  street = new FormControl('', [
    Validators.required
  ]);

  // Create required to be input field phoneNumber
  phoneNumber = new FormControl('', [
    Validators.pattern('^[0-9]+')
  ]);

  // Create required to be input field zipCode
  zipCode = new FormControl('', [
    Validators.required
  ]);

  // Create required to be input field city
  city = new FormControl('', [
    Validators.required
  ]);

  // Create required to be input field country
  country = new FormControl(null, [
    Validators.required
  ]);

  // Create input to be field message without required field
  message = new FormControl('');

  /**
   *  Create FormGroup instance.
   *  Tracks the value and validity state of a group of FormControl instances.
   */
  requestForm = new FormGroup({
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
    children: this.fb.array([])
  });

/**
 * 
 * Create new child input fields incl. validation. Name, Birthday, Month of Birthday, Year of Birth.
 * focus property is important for the focus event.
 * 
 * @returns - FormGroup 
 */
  createNewChildInputFields(): FormGroup {
    return this.fb.group({
      childName: ['', Validators.required],
      childBirthday: [null, Validators.required],
      childMonth: [null, Validators.required],
      childYear: [null, Validators.required],
      focus: false,
    });
  }


  /**
   *  Returns the "children" array.
   */
  get childControl(): AbstractControl[] {
    return (<FormArray>this.requestForm.get('children')).controls;
  }


  /**
   *  Add new fields for the child and push them into the array
   */
  addNewChilrensdFields() {
    const control = (<FormArray>this.requestForm.get('children'));
    control.push(this.createNewChildInputFields());
  }


  /**
   * Remove the correct input fields from the children array.
   *  
   * @param i - number The index to be removed from the children array.
   */
   removeChildInputSection($event: Event, i: number) {
    $event.preventDefault();
    (<FormArray>this.requestForm.get('children')).removeAt(i);
  }


  /**
   *  If form validation is true, display form values to the console. 
   *  Show error message if validation is false. 
   *  Show success message if validation is true. 
   *  After form validation is true, reset the form fields.
   */
  send() {
    this.setFormValidiatonToTrue();
    if (this.requestForm.valid) {
      console.log(this.requestForm.value);
      this.resetFormInputFields();
      this.showSuccessMessage();
      return;
    }
    this.showErrorMessage();
  }


  /**
   *  Reset all form input fields.
   */
  resetFormInputFields() {
    this.form.noValid = false;
    this.isSumbited = true;
    this.requestForm.reset();
    (<FormArray>this.requestForm.get('children')).clear();
  }


  /**
   *  Show error message.
   */
  showErrorMessage() {
    this.form.color = 'alert';
    this.form.message = this.form.errorMessage;
  }


  /**
   *  Show success message.
   */
  showSuccessMessage() {
    this.form.color = 'success';
    this.form.message = this.form.successMessage;
  }


  /**
   *  Set form validation to true.
   */
  setFormValidiatonToTrue() {
    this.form.noValid = true;
  }
}
