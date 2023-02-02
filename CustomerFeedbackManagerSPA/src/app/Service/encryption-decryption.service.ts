import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionDecryptionService {

  key = CryptoJS.enc.Utf8.parse('9YQYlM!pPLBy@n@9');
  iv = CryptoJS.enc.Utf8.parse('8080808080808080');
  passwordString = '9YQYlM!pPLBy@n@9';

  createPasswordSalt() {
    return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(this.passwordString), this.key,
      {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })

  }
  // Encryption Method
  encrypt(passwordstring): string {
    return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(passwordstring), this.key,
      {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      })

  }

  // Decryption Method
  decrypt(passwordstring): string {
    return CryptoJS.AES.decrypt(passwordstring, this.key,
      {
        keySize: 128 / 8,
        iv: this.iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8)

  }


}
