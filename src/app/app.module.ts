import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HTTP } from '@ionic-native/http';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppSettings } from '../services/app-settings'
import { ToastService } from '../services/toast-service'
import { LoadingService } from '../services/loading-service'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { GatewayProvider } from '../providers/gateway/gateway';
import { AlertProvider } from '../providers/alert/alert';
import { MenuProvider } from '../providers/menu/menu';
import { LoadingProvider } from '../providers/loading/loading';
import { AppSettingProvider } from '../providers/app-setting/app-setting';

@NgModule({
    declarations: [MyApp],
    providers: [
        StatusBar, SplashScreen, BarcodeScanner, Camera, 
        ToastService, LoadingService,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
    GatewayProvider,
    HTTP,
    AlertProvider,
    MenuProvider,
    LoadingProvider,
    AppSettingProvider,
    ],
    imports: [
        BrowserModule,
        HttpModule, HttpClientModule,
      //  AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
      //  AngularFireDatabaseModule, AngularFireAuthModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [MyApp],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
