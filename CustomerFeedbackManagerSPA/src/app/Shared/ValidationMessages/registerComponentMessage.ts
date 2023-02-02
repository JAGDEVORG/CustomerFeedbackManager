import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class reisterComponentMessages {
    validationMessages = {
        'name': {
            'required': 'Name is required.',
        },
        'email': {
            'required': 'Email is required.',
            'pattern': 'Please enter valid Email'
        },
        'password': {
            'required': 'Password is required.',
            'passwordStrengthValidator': 'Enter valid Password',
        },
    }
}