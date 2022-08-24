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
    console.log(request.url);
    let tokenRequest = request.clone(
      {
        headers: request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2MTM2ODY5Niwicm9sIjoiVVNVQVJJT19FTElNSU5BUiJ9.KDml1r8w8DueJSrS9PIkMIAO9TcSstrorCQa-ZArfKPGvypw4Ng3fhJw2gBJRRrqQA08EgWc0v8PC98OoE0M3g')
      }
    )

    return next.handle(tokenRequest);
  }

}
