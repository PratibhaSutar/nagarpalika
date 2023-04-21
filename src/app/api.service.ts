import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "http://localhost:8081/";
  constructor(private http:HttpClient) { }
  get(api:String)
  {
   
    return this.http.get(this.baseurl + api);
  }

  post(api:String, data:any)
  {
    const headers = {'content-type':'application/json'};
    const body = JSON.stringify(data);
    return this.http.post(this.baseurl + api, body, {'headers' : headers});
  }

  put(api:String, data:any)
  {
    const headers = {'content-type':'application/json'};
    const body = JSON.stringify(data);
    return this.http.put(this.baseurl + api, body, {'headers' : headers});
  }

  delete(api:String)
  {
  
    return this.http.delete(this.baseurl + api);
  }
 
  
}
