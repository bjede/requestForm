import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class RequestFormValidation {

    fb = new FormBuilder();

    // Create required to be input field startDate
    startDate = new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9ä\*-T:.Z\(\)\+ ]+')
    ]);

    // Create required to be input field endDate
    endDate = new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9ä\*-T:.Z\(\)\+ ]+')
    ]);

    // Create required to be input field amountOfAdults
    amountOfAdults = new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+')
    ]);

    // Create required to be input field childName
    childName = new FormControl('', [
        Validators.required,
        Validators.pattern('[^0-9\*!<>():-?.]+')
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
        Validators.required,
        Validators.pattern('[^0-9\*!<>():-?.]+')
    ]);


    // Create required to be input field lastName
    lastName = new FormControl('', [
        Validators.required,
        Validators.pattern('[^0-9\*!<>():-?.]+')
    ]);

    // Create required to be input field email
    email = new FormControl('', [
        Validators.required,
        Validators.email
    ]);

    // Create required to be input field street
    street = new FormControl('', [
        Validators.required,
        Validators.pattern('^([^\*!<>():-?.])+')
    ]);

    // Create required to be input field phoneNumber
    phoneNumber = new FormControl('', [
        Validators.pattern('[^a-zA-Z\*?:<>.]+')
    ]);

    // Create required to be input field zipCode
    zipCode = new FormControl('', [
        Validators.required,
        Validators.pattern('[^a-zA-Z\*!<>():-?.]+')
    ]);

    // Create required to be input field city
    city = new FormControl('', [
        Validators.required,
        Validators.pattern('[^0-9\*!<>():-?.]+')
    ]);

    // Create required to be input field country
    country = new FormControl(null, [
        Validators.required
    ]);

    // Create input to be field message without required field
    message = new FormControl('', [
        Validators.pattern('^[a-zA-Z0-9äöüÄÖÜß\n\r\*!?.\+\\- ]+')
    ]);

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
            childName: ['', [Validators.required, Validators.pattern('[^0-9\*!<>():-?.]+')]],
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
    removeChildInputSection(i: number) {
        (<FormArray>this.requestForm.get('children')).removeAt(i);
    }


    /**
   *  Remove all controls from the array children
   */
    removeChildrenFromArray() {
        (<FormArray>this.requestForm.get('children')).clear();
    }

}
