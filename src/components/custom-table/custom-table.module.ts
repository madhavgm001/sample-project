import { NgModule } from '@angular/core';
import { CustomTableComponent } from './custom-table.component';
import { CustomTableWrapperComponent } from './custom-table-wrapper.component';
import { RouterModule } from '@angular/router';
import { CustomTemplateDirective } from '../../directives/custom-template.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CustomTableComponent,
        CustomTemplateDirective,
        CustomTableWrapperComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: CustomTableWrapperComponent
        }])
    ],
    providers: [],
    exports: [CustomTemplateDirective, CommonModule]
})
export class CustomTableModule { }
