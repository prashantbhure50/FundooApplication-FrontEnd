import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HTTPUserService {

constructor(private httpservice: HttpService) {}
static url = 'http://localhost:40723/api/';

registration = (data: any) => {
  return this.httpservice.post(`${HTTPUserService.url}User`, data);
};
login = (data: any) => {
  return this.httpservice.post(`${HTTPUserService.url}User/login`, data);
};
}

