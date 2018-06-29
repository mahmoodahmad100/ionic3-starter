import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {

  baseUrl:string = "http://api-provider-here.com/api/";
  headers:object;
  options:object;

  constructor(private http: HttpClient) {
      this.headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem("token"));
      this.options = {headers: this.headers}; 	
  }

  post(endpoint:string, body){
  	return this.http.post(this.baseUrl+endpoint, body, this.options);
  }

  put(endpoint:string, body){
  	return this.http.put(this.baseUrl+endpoint, body, this.options);
  }

  patch(endpoint:string, body){
  	return this.http.patch(this.baseUrl+endpoint, body, this.options);
  }

  get(endpoint:string){
  	return this.http.get(this.baseUrl+endpoint, this.options);
  }

  delete(endpoint:string){
  	return this.http.delete(this.baseUrl+endpoint, this.options);
  }

  login(body)
  {
  	return this.post('auth/login', body);
  }

  auth()
  {
  	return this.get('auth/me'); 	
  }

}
