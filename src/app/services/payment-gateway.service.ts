import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class PaymentGatewayService {

  constructor() { }

  get nativeWindow(): any {
    return _window();
  }
}
