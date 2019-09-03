import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, ModalController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuService } from '../services/menu-service';
import { MenuProvider } from '../providers/menu/menu';

import { AppSettings } from '../services/app-settings';

import { IService } from '../services/IService';

@Component({
    templateUrl: 'app.html',
    providers: [MenuService]
})

export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage = "LoginPage";//"VolunteerLogPage";
    pages: any;
    params:any;
    leftMenuTitle: string;

    constructor(
        public platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public menu: MenuController,
        private menuService: MenuService,
        private menuProvider:MenuProvider,
        public modalCtrl: ModalController) {
        this.initializeApp();
        this.pages = menuProvider.getAllThemes();
        this.leftMenuTitle = menuProvider.getTitle();
        this.menuProvider.load(null).subscribe( snapshot => {
            this.params = snapshot;
            if (AppSettings.SHOW_START_WIZARD) {
              this.presentProfileModal();
            }
        });
    }

    presentProfileModal() {
      const profileModal = this.modalCtrl.create("IntroPage");
      profileModal.present();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            localStorage.setItem("mailChimpLocal", "true");
        });
    }

    openPage(page) {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    // if (page.singlePage) {
    //     this.menu.open();
    //     this.nav.push(this.getPageForOpen(page.theme), {
    //       service: this.getServiceForPage(page.theme),
    //       page: page,
    //       componentName: page.theme
    //     });
    // } else {
    //   this.nav.setRoot("ItemsPage", {
    //     componentName: page.theme
    //   });
    // }
    console.log("log:",page)
    this.menu.open();
    this.nav.push(page.page);
  }

  getPageForOpen(value: string): any {
    return null;
  }

  getServiceForPage(value: string): IService {
    return null;
  }
}
