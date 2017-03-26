import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { environment } from "../environments/environment";

@Injectable()
export class AppService {

  /**
   * Base url to API
   */
  public apiUrl: string;

  constructor(private http: Http) {
    this.apiUrl = environment.host;
  }

  /**
   * GET test
   */
  getTest() {
    return this.http.get(this.apiUrl);
  }
}
