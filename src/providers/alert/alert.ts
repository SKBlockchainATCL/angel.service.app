import { Injectable } from '@angular/core';
import { AlertController, Platform } from 'ionic-angular';

@Injectable()
export class AlertProvider {

    exitAlertShown: boolean = false;
    status: string = 'off';

    constructor(
        public alertCtrl: AlertController,
        public platform: Platform
    ) {
        console.log('Hello AlertProvider Provider');
    }

    show(title: string, message: string, buttons: Array<object>) {
        let alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: buttons,
            enableBackdropDismiss: false
        });
        alert.onDidDismiss(() => {
            this.status = 'off';
        });
        this.status = 'on';
        alert.present();
    }

    showExitAlert() {
        if (!this.exitAlertShown) {
            let alert = this.alertCtrl.create({
                title: '앱 종료',
                message: '앱을 종료하시겠습니까?',
                buttons: [{
                    text: '아니오',
                    handler: () => {
                        this.exitAlertShown = false;
                    }
                }, {
                    text: '예',
                    handler: () => {
                        this.platform.exitApp();
                    }
                }],
                enableBackdropDismiss: false
            });
            alert.present();
            this.exitAlertShown = true;
        }
    }

}
