import { Injectable } from '@angular/core';
import {FormArray, FormGroup, AbstractControl} from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

  markAllFormFieldsAsTouched(form: AbstractControl): void {
    form.markAsTouched({onlySelf: true});
    if (form instanceof FormArray || form instanceof FormGroup) {
      Object.values(form.controls).forEach(this.markAllFormFieldsAsTouched);
    }
  }
}
