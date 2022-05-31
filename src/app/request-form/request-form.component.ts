import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Form } from '../models/form';
import { RequestFormValidation } from '../models/request-form-validation';
import { BackendService } from '../services/backend.service';
import { IRequestData } from '../shared/interfaces/irequest-data';


@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit, OnDestroy {

  form = new Form();
  formValidation = new RequestFormValidation();
  isSumbited = false;
  requestData: any = [];
  getDataFromBackend$!: Subscription;
  saveDataToBackend$!: Subscription;

  constructor(private backend: BackendService) { }

  // Unsubscribe
  ngOnDestroy(): void {
    this.saveDataToBackend$.unsubscribe();
    this.getDataFromBackend$.unsubscribe();
  }


  ngOnInit(): void {
    this.getDataFromBackend();
  }


  /**
   *  If form validation is true, display form values to the console. 
   *  Show error message if validation is false. 
   *  Show success message if validation is true. 
   *  After form validation is true, reset the form fields.
   */
  send() {
    this.afterClickingSubmitSetTrue();
    if (this.formValidation.requestForm.valid) {
      this.processFormData();
      return;
    }
    this.showErrorMessage();
  }

  /**
   *  Processing form data. Save data to the backend and show success message.
   *  Reset all form input fields
   */
  processFormData() {
    this.saveDataToBackend(this.formValidation.requestForm.value);
    this.resetFormInputFields();
    this.showSuccessMessage();
  }


  /**
   *  Reset all form input fields and set the variables to true or false.
   */
  resetFormInputFields() {
    this.form.noValid = false;
    this.isSumbited = true;
    this.formValidation.requestForm.reset();
    (<FormArray>this.formValidation.requestForm.get('children')).clear();
  }


  /**
   *  Show error message and set the color to red.
   */
  showErrorMessage() {
    this.form.color = 'alert';
    this.form.message = this.form.errorMessage;
  }


  /**
   *  Show success message and set the color to green.
   *  After 4 seconds hide the alert component.
   */
  showSuccessMessage() {
    this.form.color = 'success';
    this.form.message = this.form.successMessage;
    this.hideAlertComponent();
  }


  /**
   * After 4 seconds hide the alert component.
   */
  hideAlertComponent() {
    setTimeout(() => { this.isSumbited = false; }, 4000);
  }


  /**
   *  After clicking the Submit button, set variable to true
   */
  afterClickingSubmitSetTrue() {
    this.form.noValid = true;
  }

  /**
   *  Get request data from the backend and push it into the array.
   */
  getDataFromBackend() {
    this.getDataFromBackend$ = this.backend.getDataFromBackend()
      .subscribe({
        next: (data) => { this.requestData = data ?? []; console.log(data); },
        error: (error) => {
          if (!error.ok) { console.log('Oops, something went wrong! Try again later.'); }
        }
      });
  }

  /**
   * Save request data to the backend.
   * 
   * @param body - requestForm<IRequestData>
   */
  saveDataToBackend(body: IRequestData) {
    this.requestData.push(body);
    this.saveDataToBackend$ = this.backend.saveDataToBackend(this.requestData).subscribe();
  }
}
