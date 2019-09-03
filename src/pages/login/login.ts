import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data: any = {
    "username": "Username",
    "password": "Password",
    "register": "Register",
    "login": "Login",
    "skip": "Skip",
    "logo": "assets/images/logo/login.png",
    "errorUser" : "Field can't be empty.",
    "errorPassword" : "Field can't be empty."
};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
