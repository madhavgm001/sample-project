import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[customTemplate]'
})
export class CustomTemplateDirective {

  @Input('customTemplate')
  private name: string;

  constructor(public template: TemplateRef<any>) { }

  getTemplateName(): string {
    return this.name;
  }

  getTemplateReference(): TemplateRef<any> {
    return this.template;
  }
}
