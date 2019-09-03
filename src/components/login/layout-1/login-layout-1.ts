import { Component, Input } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GatewayProvider } from '../../../providers/gateway/gateway';
@IonicPage()
@Component({
    selector: 'login-layout-1',
    templateUrl: 'login.html'
})
export class LoginLayout1 {
  @Input() data: any;
  @Input() events: any;

  public username: string;
  public password: string;

  private isUsernameValid: boolean = true;
  private isPasswordValid: boolean = true;

  constructor(
    public navCtrl: NavController,
    public gatewayProvider: GatewayProvider

  ) {
    this.username = this.gatewayProvider.userID;
  }

  onEvent = (event: string): void => {
    if (event == "onLogin" && !this.validate()) {
        return ;
    }
    if (this.events[event]) {
        this.events[event]({
            'username' : this.username,
            'password' : this.password
        });
    }
  }
  goFirstPage() {
    if (!this.validate()) {
        return ;
    }
    this.gatewayProvider.userID = this.username;
    //실제 로그인 리퀘스트 로직 필요
    this.navCtrl.push('VolunteerLogPage');
  }
  validate():boolean {
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    if (!this.username ||this.username.length == 0) {
        this.isUsernameValid = false;
    }

    if (!this.password || this.password.length == 0) {
        this.isPasswordValid = false;
    }
    
    return this.isPasswordValid && this.isUsernameValid;
 }
}
