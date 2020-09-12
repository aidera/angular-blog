import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './modules/material.module';
import {HttpClientModule} from '@angular/common/http';
import { TextInputComponent } from './components/form-controls/text-input/text-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ValidationComponent } from './components/form-controls/validation/validation.component';
import {ValidationService} from './services/validation.service';
import {AbstractFormControlComponent} from './components/form-controls/abstract-form-control.component';
import { CheckboxComponent } from './components/form-controls/checkbox/checkbox.component';
import { TextareaComponent } from './components/form-controls/textarea/textarea.component';
import {QuillModule} from 'ngx-quill';

const modules: any[] = [
  CommonModule,
  HttpClientModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [TextInputComponent, ValidationComponent, AbstractFormControlComponent, CheckboxComponent, TextareaComponent],
  imports: [...modules, QuillModule.forRoot({
    modules: {
      toolbar: [
        ['bold', 'italic'],
        [{ list: 'ordered'}, { list: 'bullet' }],
        [{ script: 'sub'}, { script: 'super' }],
      ]
    }
  })],
  exports: [...modules, QuillModule, TextInputComponent, CheckboxComponent, TextareaComponent],
  providers: [ValidationService]
})
export class SharedModule { }
