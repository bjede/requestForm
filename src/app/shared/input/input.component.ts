import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  focus: boolean = false;
  @Input() control: FormControl = new FormControl();
  @Input() form: Form = new Form();
  @Input() type = 'text';
  @Input() alertMessage = '';
  @Input() regExp: string = '';
  @Input() id: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
