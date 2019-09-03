import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {

  loading:any;
  constructor(private loadingCtrl: LoadingController) {}

  show() {
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });
    this.loading.present();
  }

  hide() {
    this.loading.dismiss();
  }

}
