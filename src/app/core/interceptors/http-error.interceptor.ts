import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {

        let message = 'Something went wrong';

        if (error.error?.message) {
          message = error.error.message;
        } else if (error.status === 0) {
          message = 'Backend server not reachable';
        } else if (error.status === 404) {
          message = 'API not found';
        } else if (error.status === 500) {
          message = 'Server error';
        }

        alert(message); // you can replace with snackbar/toast later

        return throwError(() => error);
      })
    );
  }
}
