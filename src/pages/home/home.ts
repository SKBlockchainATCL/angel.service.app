import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';
import { AppSettings } from '../../services/app-settings';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]

})
export class HomePage {

  data: any = {
    "items": [
        {
            "id": 1,
            "title": "Benton Willis",
            "description": "SINGER",
            "image": "assets/images/avatar/15.jpg",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-heart",
            "iconShare": "icon-share-variant",
            "items": [
                {
                    "id": 1,
                    "title": "Smokestack Lightning",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/10.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 2,
                    "title": "Boogie Chillen",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/11.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 3,
                    "title": "Call It Stormy Mondaye",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/12.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 4,
                    "title": "I’m Tore Down",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/13.jpg",
                    "iconPlay": "icon-play-circle"
                }
            ]
        },
        {
            "id": 2,
            "title": "Jessica Miles",
            "description": "BASSO",
            "image": "assets/images/avatar/2.jpg",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-heart",
            "iconShare": "icon-share-variant",
            "items": [
                {
                    "id": 1,
                    "title": "Bell Bottom Blue",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/14.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 2,
                    "title": "Still Got The Blues",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/15.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 3,
                    "title": "Mustang Sally",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/14.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 4,
                    "title": "Ball N’ Chain",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/13.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 5,
                    "title": "Sweet Home Chicago",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/12.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 6,
                    "title": "Born Under A Bad Sign",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/11.jpg",
                    "iconPlay": "icon-play-circle"
                }
            ]
        },
        {
            "id": 3,
            "title": "Holman Valencia",
            "description": "GUITARIST",
            "image": "assets/images/avatar/3.jpg",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-heart",
            "iconShare": "icon-share-variant",
            "items": [
                {
                    "id": 1,
                    "title": "Dust My Broom",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/11.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 2,
                    "title": "Hold On, I’m Coming",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/12.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 3,
                    "title": "The Little Red Rooster",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/13.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 4,
                    "title": "Bright Lights",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/14.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 5,
                    "title": "Down In The Hole",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/15.jpg",
                    "iconPlay": "icon-play-circle"
                }
            ]
        },
        {
            "id": 4,
            "title": "Natasha Gambl",
            "description": "SINGER",
            "image": "assets/images/avatar/4.jpg",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-heart",
            "iconShare": "icon-share-variant",
            "items": [
                {
                    "id": 1,
                    "title": "Got My Mojo Working",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/0.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 2,
                    "title": "A Little Less Conversation",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/1.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 3,
                    "title": "Life By The Drop",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/2.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 4,
                    "title": "Boom Boom",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/3.jpg",
                    "iconPlay": "icon-play-circle"
                }
            ]
        },
        {
            "id": 5,
            "title": "Carol Kelly",
            "description": "DRUMMER",
            "image": "assets/images/avatar/5.jpg",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-heart",
            "iconShare": "icon-share-variant",
            "items": [
                {
                    "id": 1,
                    "title": "Thing Called Love",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/14.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 2,
                    "title": "Green Onions",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/15.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 3,
                    "title": "The Midnight Special",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/6.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 4,
                    "title": "Mess Around",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/7.jpg",
                    "iconPlay": "icon-play-circle"
                }
            ]
        },
        {
            "id": 6,
            "title": "Mildred Clark",
            "description": "DRUMMER",
            "image": "assets/images/avatar/3.jpg",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-heart",
            "iconShare": "icon-share-variant",
            "items": [
                {
                    "id": 1,
                    "title": "Little Wing",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/14.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 2,
                    "title": "Bad Penny",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/15.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 3,
                    "title": "Farther on Up the Road",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/6.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 4,
                    "title": "Mannish Boy",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/7.jpg",
                    "iconPlay": "icon-play-circle"
                }
            ]
        },
        {
            "id": 7,
            "title": "Megan Singleton",
            "description": "DRUMMER",
            "image": "assets/images/avatar/4.jpg",
            "iconLike": "icon-thumb-up",
            "iconFavorite": "icon-heart",
            "iconShare": "icon-share-variant",
            "items": [
                {
                    "id": 1,
                    "title": "Trouble No More",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/14.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 2,
                    "title": "Hellhound On My Trail",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/15.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 3,
                    "title": "Help Me",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/6.jpg",
                    "iconPlay": "icon-play-circle"
                },
                {
                    "id": 4,
                    "title": "A Man Of Many Words",
                    "description": "Universal, 2016",
                    "image": "assets/images/avatar/7.jpg",
                    "iconPlay": "icon-play-circle"
                }
            ]
        }
    ]
  }
    

  isBuyButtonEnabled = false;

  constructor(public navCtrl: NavController, public service: HomeService) { 
    // service.load().subscribe(snapshot => {
    //   //this.data = snapshot;
    // });
    //this.isBuyButtonEnabled = AppSettings.BUY_BUTTON;
  }

}
