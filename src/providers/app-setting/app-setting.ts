import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppSettingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppSettingProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AppSettingProvider Provider');
  }

}
