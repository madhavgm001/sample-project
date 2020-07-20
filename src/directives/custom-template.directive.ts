import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[customTemplate]'
})
export class CustomTemplateDirective {

  @Input() type: string;

  @Input('customTemplate') name: string;

  constructor(public template: TemplateRef<any>) {
    console.log(template);
   }

  getTemplateName(): string {
    return this.name;
  }

  getTemplateReference(): TemplateRef<any> {
    return this.template;
  }
}
