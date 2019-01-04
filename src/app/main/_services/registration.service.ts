import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Registration } from '../_models/index';
import { environment } from '../../../environments/environment';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Registration[]>(environment.apiURL + '/registration');
  }

  getById(id: string) {
    return this.http.get<Registration>(environment.apiURL + '/registration/' + id);
  }

  create(objRegistration: Registration) {    
    return this.http.post(environment.apiURL + '/registration', objRegistration);
  }

  update(objRegistration: Registration) {    
    return this.http.put(environment.apiURL + '/registration', objRegistration);
  }

  delete(id: number) {
    return this.http.delete(environment.apiURL + '/registration/' + id);
  }
}
