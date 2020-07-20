import { CustomTemplateDirective } from './custom-template.directive';
import { TemplateRef } from '@angular/core';

describe('CustomTemplateDirective', () => {
  it('should create an instance', () => {
    let temp: TemplateRef<any>;
    const directive = new CustomTemplateDirective(temp);
    expect(directive).toBeTruthy();
  });
});
