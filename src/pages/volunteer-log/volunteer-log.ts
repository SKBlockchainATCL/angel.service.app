

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GatewayProvider } from '../../providers/gateway/gateway';


@IonicPage()
@Component({
  selector: 'page-volunteer-log',
  templateUrl: 'volunteer-log.html'

})
export class VolunteerLogPage {
  data : any = {
    "headerTitle": "Segment Post",
    "segmentButton1": "new offer",
    "segmentButton2": "best offer",
    // Data Page 1
    "page1": {
        "items": [
            {
                "id": 1,
                "image": "assets/images/sample/0001.png",
                "time": "대구 자원 봉사",
                "title": "지역사회 발전을 위한 발걸음~",
                "description": "지역사회 발전을 위한 발걸음~",
                "like": {
                    "icon":"thumbs-up",
                    "number": "12",
                    "isActive": false
                },
                "comment": {
                    "icon":"ios-chatbubbles",
                    "number": "4",
                    "isActive": false
                }
            },
            {
                "id": 2,
                "image": "assets/images/sample/0002.jpeg",
                "time": "깨끗한 강 살리기 봉사",
                "title": "아..너무 더러웠지만 이젠 깨끗해요~",
                "description": "아..너무 더러웠지만 이젠 깨끗해요~",
                "like": {
                    "icon":"thumbs-up",
                    "number": "12",
                    "isActive": false
                },
                "comment": {
                    "icon":"ios-chatbubbles",
                    "number": "4",
                    "isActive": false
                }
            },
            {
                "id": 3,
                "image": "assets/images/sample/0003.jpg",
                "time": "홍수 피해 봉사",
                "title": "어려운 일 당하면 우리집 일 처럼 도와야죠~",
                "description": "It is a long established fact that a reader will be distracted by the readable content",
                "like": {
                    "icon":"thumbs-up",
                    "number": "12",
                    "isActive": false
                },
                "comment": {
                    "icon":"ios-chatbubbles",
                    "number": "4",
                    "isActive": false
                }
            },
            {
                "id": 4,
                "image": "assets/images/sample/0004.jpeg",
                "time": "동네 도로 정비 봉사",
                "title": "우리 동내는 내가 고쳐 산다..",
                "description": "There are many variations of passages of Lorem Ipsum available, but the majority",
                "like": {
                    "icon":"thumbs-up",
                    "number": "12",
                    "isActive": false
                },
                "comment": {
                    "icon":"ios-chatbubbles",
                    "number": "4",
                    "isActive": false
                }
            },
            {
                "id": 5,
                "image": "assets/images/sample/0005.jpeg",
                "time": "농촌 봉사",
                "title": "이젠 나도 농사꾼이야~",
                "description": "If you are going to use a passage of Lorem Ipsum, you need to be sure there",
                "like": {
                    "icon":"thumbs-up",
                    "number": "12",
                    "isActive": false
                },
                "comment": {
                    "icon":"ios-chatbubbles",
                    "number": "4",
                    "isActive": false
                }
            },
            {
                "id": 6,
                "image": "assets/images/sample/0007.jpg",
                "time": "고추 수확 봉사",
                "title": "내 집 네 집 할 것 없이 합심하여 수확하기..풍년일세~",
                "description": "If you are going to use a passage of Lorem Ipsum, you need to be sure there",
                "like": {
                    "icon":"thumbs-up",
                    "number": "12",
                    "isActive": false
                },
                "comment": {
                    "icon":"ios-chatbubbles",
                    "number": "4",
                    "isActive": false
                }
            },
            {
                "id": 7,
                "image": "assets/images/sample/0005.jpeg",
                "time": "학교 행사 봉사",
                "title": "같은 학생들끼리 도우며 샇아야죠~",
                "description": "If you are going to use a passage of Lorem Ipsum, you need to be sure there",
                "like": {
                    "icon":"thumbs-up",
                    "number": "12",
                    "isActive": false
                },
                "comment": {
                    "icon":"ios-chatbubbles",
                    "number": "4",
                    "isActive": false
                }
            }
        ]
    }
};
  
    


  constructor(
    public navCtrl: NavController, 
    public gatewayProvider: GatewayProvider
    ) { 
        
    }
    //화면 렌더링이 다 되었을 때
    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        this.init();
    }

    //초기화
    init(){
        //초기 데이터 로딩

        /**
         * RestAPI 호출 및 응답데이터 리턴 (gatewayProvider.restAPI())
         * @param {string}  fx_name function명 (내부적으로만 사용)
         * @param {string}  type get or post
         * @param {string}  url api url
         * @param {string}  header_type 일반적으로 json
         * @param {object}  header 리퀘스트 헤더 내용
         * @param {object}  data 리퀘스트 POST 데이터 오브젝트
         * @return {object} response 데이터
         */

        let header_type = 'json';
        let header = {
            'Accept' : "application/json",
            'Content-type': "application/json"
        };
        //서버 주소는 src/providers/gateway/gateway.ts 에서 line :18
        // static API_URL :string = 'http://localhost:8081' ; //API 서버 주소 수정
        let url:string =  '/service/entryPosts/belongTo/1?from=lastest&to=123&pageSize=123&pageNo=123&sortFields=123'
        //API 호출하여 data 설정하기 프로젝트 data 구조에 맞게 html 마크업 변경필요
        
        //실제 구현 시 아래 주석 해제
        //this.data = this.gatewayProvider.restAPI('getVolunteerLogList','get',url,header_type,header,{});
    }


}

