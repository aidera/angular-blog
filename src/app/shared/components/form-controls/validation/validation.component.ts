import { Component, Input, OnChanges } from '@angular/core';
import {PATTERNS_LIST} from '../../../constants/validation-patterns-messages';
import {
  EMAIL_PATTERN_MESSAGE,
  MIN_LENGTH_MESSAGE,
  MIN_LENGTH_MESSAGE_2,
  REQUIRED_MESSAGE
} from 'src/app/shared/constants/validation-messages';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnChanges {

  @Input() validationErrors: ValidationErrors | null = null;
  errorMessage: string | null = null;

  ngOnChanges(): void {
    this.errorMessage = this.getErrorMessage();
  }

  getErrorMessage(): string | null {
    const errors = this.validationErrors;

    if (errors) {
      if (errors.required) {
        return REQUIRED_MESSAGE;
      }
      if (errors.email) {
        return EMAIL_PATTERN_MESSAGE;
      }
      if (errors.pattern) {
        return this.getPatternMessage(errors.pattern.requiredPattern);
      }
      if (errors.minlength && !!errors.minlength.requiredLength) {
        return MIN_LENGTH_MESSAGE + errors.minlength.requiredLength + MIN_LENGTH_MESSAGE_2;
      }
      return null;
    }
    return null;
  }

  getPatternMessage(requiredPattern: string): string {
    return PATTERNS_LIST.filter(x => x.PATTERN === requiredPattern)[0].MESSAGE;
  }

}
