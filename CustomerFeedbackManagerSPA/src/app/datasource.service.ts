import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResDataModal } from './datamodel/resDataModel';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
 
  apiUrl = 'https://reqres.in/api/users?page=2';

  constructor(private http: HttpClient) { }

  getData(): Observable<ResDataModal> {
    return this.http.get<ResDataModal>(this.apiUrl);
  }
}
