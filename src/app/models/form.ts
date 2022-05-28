export class Form {

    minDate = new Date();
    noValid: boolean = false;
    color: string = 'invalid';
    message: string = '';
    days: any[] = [];
    months: string[] = ['Jan.', 'Feb.', 'Mär.', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.']
    years: any[] = [];
    isFocusAdults: boolean = false;
    isFocusChild: boolean = false;
    isFocusFirstName: boolean = false;
    isFocusLastName: boolean = false;
    isFocusEmail: boolean = false;
    isFocusStreet: boolean = false;
    isFocusPhoneNumber: boolean = false;
    isFocusZipCode: boolean = false;
    isFocusCity: boolean = false;
    isFocusMessage: boolean = false;

    constructor() {
        this.getYears();
        this.getDays();
    }

    /**
    *  The current year will be determined and calculates 19 years back and pushes the years into the array.
    */
    private getYears() {
        let currentYear = new Date().getFullYear();
        for (let i = 19; i > 0; i--) {
            this.years.push(currentYear--);
        }
    }


    /**
     * Create days 1-31 and push them into the array
     */
    private getDays() {
        for (let i = 1; i < 32; i++) {
            this.days.push(i);
        }
    }


    /**
     * @returns - Shows error message.
     */
    get errorMessage(): string {
        return `<p>Beim Senden des Formulars ist ein Fehler aufgetreten!</p>
                <p>Die ungültigen Felder wurden hervorgehoben.</p>`;
    }


    /**
    * @returns - Shows success message.
    */
    get successMessage(): string {
        return `<p>Vielen Dank! Ihre Nachricht wurde erfolgreich an uns übermittelt.</p>`;
    }
}
