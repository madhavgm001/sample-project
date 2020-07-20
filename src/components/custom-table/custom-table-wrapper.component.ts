import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CustomTemplateDirective } from '../../directives/custom-template.directive';

@Component({
  selector: 'custom-table-wrapper',
  templateUrl: './custom-table-wrapper.component.html',
  styleUrls: ['./custom-table-wrapper.component.scss']
})
export class CustomTableWrapperComponent implements OnInit, AfterContentInit {

  constructor() { }
  ngAfterContentInit(): void {
  }

  ngOnInit(): void {
  }

}
