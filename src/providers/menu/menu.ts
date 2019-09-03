import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../../config/app-settings'
import { LoadingProvider } from '../loading/loading'
/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenuProvider {

  constructor(
    public http: HttpClient,
    private loadingProvider:LoadingProvider
    ) {
    console.log('Hello MenuProvider Provider');
  }
  getId = (): string => 'menu';

  getTitle = (): string => 'UIAppTemplate';

  getAllThemes = (): Array<any> => {
    return [
      // {"title" : "Volunteer Log", "theme"  : "listViews",  "icon" : "icon-format-align-justify", "listView" : true, "component": "", "singlePage":false},
      // {"title" : "Activity List", "theme"  : "parallax",  "icon" : "icon-format-line-spacing", "listView" : false, "component":"", "singlePage":false},
      // {"title" : "Message", "theme"  : "login",  "icon" : "icon-content-paste", "listView" : false, "component":"", "singlePage":false},
      // {"title" : "Setting", "theme"  : "register",  "icon" : "icon-cellphone-settings", "listView" : false, "component":"", "singlePage":false},
      {"title" : "자원봉사자 Log", "page"  : "VolunteerLogPage",  "icon" : "icon-format-align-justify"},
      {"title" : "봉사활동 List", "page"  : "VoluntaryListPage",  "icon" : "icon-format-line-spacing"},
      {"title" : "Message", "page"  : "HomePage",  "icon" : "icon-content-paste"},
      {"title" : "Setting", "page"  : "HomePage",  "icon" : "icon-cellphone-settings"}
    ];
    // [
    //   {"title" : "List Views", "theme"  : "listViews",  "icon" : "icon-format-align-justify", "listView" : true, "component": "", "singlePage":false},
    //   {"title" : "Parallax", "theme"  : "parallax",  "icon" : "icon-format-line-spacing", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Login Pages", "theme"  : "login",  "icon" : "icon-lock-open-outline", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Register Pages", "theme"  : "register",  "icon" : "icon-comment-account", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Image Gallery", "theme"  : "imageGallery",  "icon" : "icon-apps", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Splash Screen", "theme"  : "splashScreens",  "icon" : "icon-logout", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Check Boxs", "theme"  : "checkBoxes",  "icon" : "icon-checkbox-marked", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Search Bars", "theme"  : "searchBars",  "icon" : "icon-magnify", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Typo + small components", "theme"  : "textViews",  "icon" : "icon-tumblr", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Wizard", "theme"  : "wizard",  "icon" : "icon-cellphone-settings", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Spinner", "theme"  : "spinner",  "icon" : "icon-image-filter-tilt-shift", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Tabs", "theme"  : "tabs",  "icon" : "icon-view-array", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Maps", "theme"  : "maps",  "icon" : "icon-google-maps", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "QRCode", "theme"  : "qrcode",  "icon" : "icon-qrcode", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Timeline", "theme"  : "timeline",  "icon" : "icon-timer", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Radio Button", "theme"  : "radioButton",  "icon" : "icon-radiobox-marked", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Range", "theme"  : "range",  "icon" : "icon-toggle-switch-off", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Forms", "theme"  : "form",  "icon" : "icon-content-paste", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Toggle", "theme"  : "toggle",  "icon" : "icon-toggle-switch", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Select", "theme"  : "select",  "icon" : "icon-menu-down", "listView" : true, "component":"", "singlePage":false},
    //   {"title" : "Profile", "theme"  : "profile",  "icon" : "icon-account-outline", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Comments", "theme"  : "comment",  "icon" : "icon-comment-outline", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Payment", "theme"  : "payment",  "icon" : "icon-cash", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Segment", "theme"  : "segment",  "icon" : "icon-timelapse", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Action Sheet", "theme"  : "actionSheet",  "icon" : "icon-dots-horizontal", "listView" : false, "component":"", "singlePage":false},
    //   {"title" : "Alert", "theme"  : "alert",  "icon" : "icon-alert", "listView" : false, "component":"", "singlePage":false},
    // ];
  };

  getDataForTheme = (menuItem: any) => {
    return {
      "background": "assets/images/background/16.jpg",
      "image": "assets/images/logo/login-3.png",
      "title": "SVNS - Social Value , Social Network Service"
    };
  };
  getEventsForTheme = (menuItem: any): any => {
    return {};
  };

  prepareParams = (item: any) => {
    return {
      title: item.title,
      data: {},
      events: this.getEventsForTheme(item)
    };
  };

  load(item: any): Observable<any> {
    var that = this;
    that.loadingProvider.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        // this.af
        //   .object('menu')
        //   .valueChanges()
        //   .subscribe(snapshot => {
        //     that.loadingService.hide();
        //     observer.next(snapshot);
        //     observer.complete();
        //   }, err => {
        //     that.loadingService.hide();
        //     observer.error([]);
        //     observer.complete();
        //   });
      });
    } else {
      return new Observable(observer => {
        that.loadingProvider.hide();
        observer.next(this.getDataForTheme(item));
        observer.complete();
      });
    }
  }
}
