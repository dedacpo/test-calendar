import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HTTPStatus } from './shared/services/httpInterceptor/http.interceptor';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let storeStub = {
    dispatch: () => { }
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        HTTPStatus,
        { provide: Store, useValue: storeStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set clientHeit to 500', () => {
    component.onResized();
    expect(component.clientHeight).toEqual(window.innerHeight);
  });

  it('should set scroll to 0,0', () => {
    const spy = spyOn(window, 'scroll');
    component.onActivate();
    expect(spy).toHaveBeenCalledWith(0, 0);
  });
});
