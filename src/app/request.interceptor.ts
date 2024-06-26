import { HttpInterceptorFn } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders({token: '12345fhvffnkjv'});
  const newreq = req.clone({headers: headers});
  console.log('Request Interceptor:', newreq)
  return next(newreq);
};
