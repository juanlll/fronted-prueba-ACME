import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MainInterceptorService {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    /* let request = req.clone({
      setHeaders: {
        'Accept': 'application/json',
        'Content-Type' : 'application/json; charset=utf-8'
      },
      url: "http://127.0.0.1:8000/" + req.url,
    });
 */
    return next.handle(req);
  }
}
