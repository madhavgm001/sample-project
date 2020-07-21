import { NgModule } from '@angular/core';
import { CustomInputComponent } from './custom-input.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        CustomInputComponent,
    ],
    imports: [
        RouterModule.forChild([{
            path: '',
            component: CustomInputComponent
        }]),
        FormsModule
    ],
    providers: [],
    exports: []
})
export class CustomInputModule { }
