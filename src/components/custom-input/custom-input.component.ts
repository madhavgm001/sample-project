import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  inputValue: string;
  constructor() { }

  ngOnInit(): void {
    this.inputValue = 'Place Holder';
  }

}
