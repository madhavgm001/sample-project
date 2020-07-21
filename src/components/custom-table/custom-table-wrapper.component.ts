import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TableDesign } from './models/custom-table';

@Component({
  selector: 'custom-table-wrapper',
  templateUrl: './custom-table-wrapper.component.html',
  styleUrls: ['./custom-table-wrapper.component.scss']
})
export class CustomTableWrapperComponent implements OnInit, AfterContentInit {

  header = [
    {
      doubleCheck: {check: {value: 'A'}}
    },
    {
      doubleCheck: {check: {value: 'B'}}
    },
    {
      doubleCheck: {check: {value: 'C'}}
    },
    {
      doubleCheck: {check: {value: 'D'}}
    },
    {
      doubleCheck: {check: {value: 'E'}}
    }
  ];
  headerData: TableDesign = {value: this.header, bindLabel: 'doubleCheck.check.value'};
  constructor() { }
  ngAfterContentInit(): void {
  }

  ngOnInit(): void {
  }

}
