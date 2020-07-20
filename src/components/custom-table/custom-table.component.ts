import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, TemplateRef } from '@angular/core';
import { CustomTemplateDirective } from '../../directives/custom-template.directive';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit, AfterContentInit {

  @ContentChildren(CustomTemplateDirective) templates: QueryList<CustomTemplateDirective>;
  templatesMap: Map<string, TemplateRef<any>>;
  headerTemp: TemplateRef<any>;
  constructor() { }
  ngAfterContentInit(): void {
    console.log(this.templates);
    this.templatesMap = this.templates.reduce((map, template) => {
      map.set(template.getTemplateName(), template.getTemplateReference());
      return map;
    }, new Map());
  }

  getTemplateRef(key: string): TemplateRef<any> {
    return this.templatesMap.get(key);
  }

  ngOnInit(): void {
  }

}
