import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import 'rxjs';


@Injectable()
export class HTTPStatus {
  private requestInFlight$: BehaviorSubject<boolean>;
  
  constructor() {    
    this.requestInFlight$ = new BehaviorSubject(false);
  }

  setHttpStatus(inFlight: boolean) {
    this.requestInFlight$.next(inFlight);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInFlight$.asObservable();
  }
}

@Injectable()
export class HTTPListener implements HttpInterceptor {
  constructor(private status: HTTPStatus) {}
  private numberRequest = 0;
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    window.scroll(0, 0);
    this.numberRequest++;
    this.status.setHttpStatus(true)
    return next.handle(req).pipe(    
        finalize(() =>{
            this.numberRequest--;
            if(this.numberRequest <= 0)
                this.status.setHttpStatus(false)
        })
    );
}
}