import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicModule } from '../dynamic/dynamic.module';
import { TextboxComponent } from './textbox/textbox.component';
import { LabelComponent } from './label/label.component';
import { TableComponent } from './table/table.component';
import { GroupComponent } from './group/group.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { PasswordComponent } from './password/password.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    DynamicModule,
    FormlyModule,
    FormlyBootstrapModule,
  ],
  declarations: [
    TextboxComponent,
    LabelComponent,
    TableComponent,
    GroupComponent,
    PasswordComponent
  ],
  exports: [
    TextboxComponent,
    LabelComponent,
    TableComponent,
    GroupComponent,
    FormsModule,
    ReactiveFormsModule,
    PasswordComponent,
    FormlyModule,
    FormlyBootstrapModule,
    
  ],
  entryComponents: [
    PasswordComponent
  ]
})
export class ControlsModule { }
