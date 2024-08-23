import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginmodel, user } from '../model/loginmodel';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  Proceedlogin(_data: loginmodel){


    return this.http.get<user[]>('http://localhost:3000/user?id=' + _data.username + '&&password=' + _data.password);
  }
}
