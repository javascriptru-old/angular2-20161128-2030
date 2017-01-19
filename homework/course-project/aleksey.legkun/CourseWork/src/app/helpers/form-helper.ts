import { FormGroup, FormControl  } from '@angular/forms';


 export class FormHelper  {

 public static setValue(form: FormGroup, obj: any){
    if(!obj || !form)
      return;

    form.reset();
    for(let cntrl in form.controls)
    {
      if(obj.hasOwnProperty(cntrl))
      {
        let value = obj[cntrl]
        form.controls[cntrl].setValue(value);
      }
    }
  }

 public static setEnable(form: FormGroup, isEnableForm: boolean){
    if(!form)
      return;

    for(let cntrl in form.controls)
    {
       if(isEnableForm)
         form.controls[cntrl].enable();
       else
         form.controls[cntrl].disable();
    }
  }

 public static setTouched(form: FormGroup, touched: boolean){
    if(!form)
      return;

    for(let cntrl in form.controls)
    {
     if (touched)
       form.controls[cntrl].markAsTouched();
     else
       form.controls[cntrl].markAsUntouched();
    }  
  }  



}