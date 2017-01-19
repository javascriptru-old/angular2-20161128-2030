import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn  } from '@angular/forms';


export class SimpleValidator{
     static EmailValidate(control: AbstractControl): any {
        let val = (control.value || '');
        
        var EMAIL_REGEXP = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (val === "" || val.length <= 5 || !EMAIL_REGEXP.test(val)) {
            return { "invalidEmailAddress": true };
        }
        return null;
    }

}