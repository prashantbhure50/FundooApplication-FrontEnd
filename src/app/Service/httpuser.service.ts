import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HTTPUserService {

  
constructor(private httpservice: HttpService) {}
static url = 'https://localhost:4200/api/';

registration = (data: any) => {
  return this.httpservice.post(`${HTTPUserService.url}User/Register`, data);
};
login = (data: any) => {
  return this.httpservice.post(`${HTTPUserService.url}User/Login`, data);
};
}

