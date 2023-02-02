import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment'
import { User } from '../Account/model/User';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  
  getAll() {
    return this.http.get<User[]>(`${environment.API_URL}/users`);
}

getById(id: number) {
    return this.http.get<User>(`${environment.API_URL}/users/${id}`);
}
}
