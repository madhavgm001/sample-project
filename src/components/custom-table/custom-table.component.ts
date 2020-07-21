import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, TemplateRef, Input } from '@angular/core';
import { CustomTemplateDirective } from '../../directives/custom-template.directive';
import { TableDesign } from './models/custom-table';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit, AfterContentInit {

  @Input() header: TableDesign;
  @Input() body: TableDesign;
  @Input() footer: TableDesign;
  @ContentChildren(CustomTemplateDirective) templates: QueryList<CustomTemplateDirective>;
  templatesMap: Map<string, TemplateRef<any>>;
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

  /**
   * Method to dynamically generate the content. This method is a recurrsive function, be careful before using it.
   * @param value It will contain each value to be provided.
   * @param bindLabel This is the parameter which will go upto the nth level and provide the content.
   * @returns content to be shown.
   */
  generateContent(value, bindLabel): any {
    const label = typeof bindLabel === 'string' ? bindLabel.split('.') : bindLabel;
    const l = label.shift();
    if (label.length > 0) {
      return this.generateContent(value[l], label);
    } else {
      return value[l];
    }
  }
}
