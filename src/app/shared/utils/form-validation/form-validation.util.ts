import { AbstractControl } from "@angular/forms";
import { PATTERN, REQUIRED, SAMECLUB } from "@sharedCustomType/index";

export function shouldShowErrorMessage(formControl: AbstractControl, isSubmitted?: boolean): boolean {
    if (formControl) {
        return (formControl.errors && (formControl.dirty || formControl.touched || isSubmitted)) ? true : false;
    }
    return false;
}


export function getErrorMessage(InputLabel:string,  formControl: AbstractControl): string {
    const errorKey = formControl.errors;

    if (!errorKey ) return '';
    if(errorKey[REQUIRED])  return `${InputLabel} is required`;
    if(errorKey[SAMECLUB])   return `selected home and ${InputLabel} as same`;
    if(errorKey[PATTERN])  return `${InputLabel} pattern does not match`;
    return '';

}
