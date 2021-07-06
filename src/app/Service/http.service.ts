import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  post(url: string, data: any, isHeaderRequried: any = false, headers= null){
return this.http.post(url, data, isHeaderRequried && headers);
  }
  get(url:string, isHeaderRequried:any = false, headers = null){
    return this.http.get(url,isHeaderRequried && headers);
  }
  put(url:string,data:any,isHeaderRequried:any = false,headers=null){
    return this.http.put(url,data, isHeaderRequried && headers);
  }
}