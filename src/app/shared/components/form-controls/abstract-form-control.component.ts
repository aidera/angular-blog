import { Component, OnInit, DoCheck, Input } from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {LABELS} from '../../constants/labels';

@Component({
  template: '',
})
export class AbstractFormControlComponent implements OnInit, DoCheck {
  @Input() fieldId: string | null = null;
  @Input() control: FormControl | AbstractControl | null = null;
  @Input() label?: string;

  validationErrors: object = null;

  ngOnInit(): void {
    if (this.label === undefined) {
      this.label = LABELS[this.fieldId] ? LABELS[this.fieldId] : '';
    }
  }

  ngDoCheck(): void {
    this.validationErrors = this.control && this.control.touched && this.control.invalid ? this.control.errors : null;
  }
}
