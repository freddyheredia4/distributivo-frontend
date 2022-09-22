import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let tokenRequest = request.clone(
      {
        headers : request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczMzUyODEwNywicm9sIjoiVVNVQVJJT19FTElNSU5BUiJ9.Z3k-6kMVJN2nl3cresHpQ8hIY27YGKuzCukbl83G0J7Ei2Xu71Fw_9wX4HWxYdhJnGIGP9RsnL3cSyJdvBE7Lg')
      }
    )

    return next.handle(tokenRequest);
    
    if (sessionStorage.getItem("seguridad_token")!=null && request.url!="http://localhost:8080/login"){
      let tokenRequest = request.clone(
        {
          headers: request.headers.set('Authorization', String(sessionStorage.getItem('seguridad_token')))
        }
      );
      return next.handle(tokenRequest);
    }
    return next.handle(request);

  }

}
