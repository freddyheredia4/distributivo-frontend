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

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url);
    let tokenRequest = request.clone(
      {
        headers : request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczMzM2ODQ1Nywicm9sIjoiVVNVQVJJT19FTElNSU5BUiJ9.jNFcjRhEdHPbjCffCzDiu8xz1nIu0IhZwrRIFtcG6fEM5hJJ0nv43agvJE9TodsLnhI0baBqMleqQZO4IMS5Rg')
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
