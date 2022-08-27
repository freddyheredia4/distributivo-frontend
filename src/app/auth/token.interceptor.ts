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
        headers: request.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczMzQ0NTUxMCwicm9sIjoiVVNVQVJJT19FTElNSU5BUiJ9.vaZELyc7df-d3C9IOToRzla89kkg2Of7SfrMqRvfVQXRffeSGLF9XAJHqLFoJxgF6w8vk2HFZzncwGeqorOS_w')

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
