import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

export class customValidator {

    constructor() { }

    public regex = {
        email: '^[0-9a-z]+(?:\.[0-9a-z]+)*@[a-z0-9]{2,}(?:\.[a-z]{2,})+$'
    }            

    public markFormGroupTouched(formGroup: FormGroup) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(c => this.markFormGroupTouched(c));
            }
        });
    }

    getValidationErrors(group: FormGroup, validationMessages: Object, checkDirty?: boolean): any {
        var formErrors = {};

        Object.keys(group.controls).forEach((key: string) => {
            formErrors[key] = '';
            const abstractControl = group.get(key);

            if (abstractControl && !abstractControl.valid) {
                const messages = validationMessages[key];
                if (!checkDirty || (abstractControl.dirty || abstractControl.touched)) {

                    for (const errorKey in abstractControl.errors) {
                        if (errorKey) {
                            formErrors[key] += messages[errorKey] + ' ';
                        }
                    }
                }
            }
            if (abstractControl instanceof FormGroup) {
                let groupError = this.getValidationErrors(abstractControl, validationMessages);
                formErrors = { ...formErrors, ...groupError }
            }
        });
        return formErrors
    }
     
    passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
        let value: string = control.value || '';

        if (!value) {
            return null
        }

        let upperCaseCharacters = /[A-Z]+/g
        if (!upperCaseCharacters.test(value)) {
            return { passwordStrengthValidator: true };
        }

        let lowerCaseCharacters = /[a-z]+/g
        if (!lowerCaseCharacters.test(value)) {
            return { passwordStrengthValidator: true };
        }


        let numberCharacters = /[0-9]+/g
        if (!numberCharacters.test(value)) {
            return { passwordStrengthValidator: true };
        }

        let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
        if (!specialCharacters.test(value)) {
            return { passwordStrengthValidator: true };
        }
        return null;
    }

   
}