import { TestBed, async, fakeAsync } from '@angular/core/testing';

import { HTTPStatus } from './http.interceptor';

import { HTTPListener } from './http.interceptor';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HTTP_INTERCEPTORS,  HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiGeocodeService } from '../api-geocode/api-geocode.service';

describe('HTTPStatus', () => {
    let service: HTTPStatus;
    const subjectMock = new BehaviorSubject<boolean>(undefined)



    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                HTTPStatus
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HTTPStatus);
    });

    it('should setHttp status', () => {
        const value = true;
        service.setHttpStatus(value);
        subjectMock
            .pipe(filter(res => !!res))
            .subscribe(res => expect(res).toBeTruthy());

        subjectMock.next(value);
    })


});

describe('HTTPListener', () => {
    let service: HTTPListener;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                HTTPStatus, ApiGeocodeService,
                HTTPListener,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: HTTPListener,
                    multi: true,
                },
            ]
        });
        service = TestBed.inject(HTTPListener);

    });


    it('should call setHttpStatus with true', () => {
        const serviceHttpStatus = TestBed.inject(HTTPStatus);
        const spy = spyOn(serviceHttpStatus, 'setHttpStatus');
        TestBed.inject(ApiGeocodeService).getCity('Americana').subscribe((data) => { });

        expect(spy).toHaveBeenCalledWith(true);
    });

    it('should call setHttpStatus with false', () => {
        const serviceHttpStatus = TestBed.inject(HTTPStatus);
        const spy = spyOn(serviceHttpStatus, 'setHttpStatus');
        TestBed.inject(ApiGeocodeService).getCity('Americana').subscribe((data) => { });

        expect(spy).toHaveBeenCalledWith(true);
    });



    it('should finalize and call setHttpStatus with false', fakeAsync(() => {

        const next: any = {
            handle: () => {
                return Observable.create(subscriber => {
                    subscriber.complete();
                });
            }
        };
        const requestMock = new HttpRequest('GET', '/test');
        const serviceHttpStatus = TestBed.inject(HTTPStatus);

        const spy = spyOn(serviceHttpStatus, 'setHttpStatus');

        service.intercept(requestMock, next).subscribe(() => {
            expect(spy).toHaveBeenCalledWith(false);
        });

    }));

});