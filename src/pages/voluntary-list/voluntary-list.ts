import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VoluntaryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voluntary-list',
  templateUrl: 'voluntary-list.html',
})
export class VoluntaryListPage {
  data : any = {
    "title": "HeaderTitle",
    "description": "HeaderSubtitle",
    "shortDescription": "35:72",
    "iconLike": "icon-thumb-up",
    "iconFavorite": "icon-heart",
    "iconShare": "icon-share-variant",
    "iconPlay": "icon-play-circle-outline",
    "items": [
        {
            "id": 1,
            "title": "봉사활동 1",
            "description": "봉사활동 1 압나다.",
            "shortDescription": "진행중",
            "image": "assets/images/sample/0001.png",
            "iconDelate": "icon-delete",
            "iconUndo": "icon-undo-variant"
        },
        {
            "id": 2,
            "title": "봉사활동 2",
            "description": "봉사활동 2 입니다.",
            "shortDescription": "진행중",
            "image": "assets/images/sample/0002.jpeg",
            "iconDelate": "icon-delete",
            "iconUndo": "icon-undo-variant"
        },
        {
            "id": 3,
            "title": "봉사활동 3",
            "description": "봉사활동 3 입니다.",
            "shortDescription": "진행중",
            "image": "assets/images/sample/0003.jpg",
            "iconDelate": "icon-delete",
            "iconUndo": "icon-undo-variant"
        },
        {
            "id": 4,
            "title": "봉사활동 4",
            "description": "봉사활동 4 입니다.",
            "shortDescription": "3:42",
            "image": "assets/images/sample/0004.jpeg",
            "iconDelate": "icon-delete",
            "iconUndo": "icon-undo-variant"
        },
        {
            "id": 5,
            "title": "봉사활동 5",
            "description": "봉사활동 5 입니다.",
            "shortDescription": "진행중",
            "image": "assets/images/sample/0005.jpeg",
            "iconDelate": "icon-delete",
            "iconUndo": "icon-undo-variant"
        },
        {
            "id": 6,
            "title": "봉사활동 6",
            "description": "봉사활동 6 입니다.",
            "shortDescription": "완료",
            "image": "assets/images/sample/0006.jpg",
            "iconDelate": "icon-delete",
            "iconUndo": "icon-undo-variant"
        },
        {
            "id": 7,
            "title": "봉사활동 7",
            "description": "봉사활동 7 입니다.",
            "shortDescription": "완료",
            "image": "assets/images/sample/0007.jpg",
            "iconDelate": "icon-delete",
            "iconUndo": "icon-undo-variant"
        },
        {
            "id": 8,
            "title": "봉사활동 8",
            "description": "봉사활동 8 입니다.",
            "shortDescription": "완료",
            "image": "assets/images/sample/0008.jpg",
            "iconDelate": "icon-delete",
            "iconUndo": "icon-undo-variant"
        }
    ]
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoluntaryListPage');
  }

}
