import { NgModule } from '@angular/core';
import { CustomTableComponent } from './custom-table.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        CustomTableComponent
    ],
    imports: [
        RouterModule.forChild([{
            path: '', component: CustomTableComponent
        }])
    ],
    providers: []
})
export class CustomTableModule { }
