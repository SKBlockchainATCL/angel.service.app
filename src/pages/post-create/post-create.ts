import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-create',
  templateUrl: 'post-create.html',
})
export class PostCreatePage {
  data :any = {
        "title":"Your New Post",
        "rateTitle":"",
        "descriptionPlaceholder":"글을 작성하여 주세요",
        "btnSubmit": "Send Post",
        "btnAddPhotoOrVideo":"Add Photo",
        "pgData" : {
          "title":"내가 속한 봉사활동",
          "items" : [{
            "id" : "1",
            "title" : "title1",
            "subtitle" : "subtitle1"
          },
          {
            "id" : "2",
            "title" : "title2",
            "subtitle" : "subtitle2"
          },
          {
            "id" : "3",
            "title" : "title3",
            "subtitle" : "subtitle3"
          }
          ]
        }
    };
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostCreatePage');
  }

}
