import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import {Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AlertProvider } from '../../providers/alert/alert';
import { AppSettings } from '../../services/app-settings';

/*
  Generated class for the GatewayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GatewayProvider {
  public userID :string = "admin";
  static API_URL :string = 'http://localhost:8081' ; //API 서버 주소
  
  isMobile: boolean;
  apiUrl: string;
  

  constructor(
    public http: HttpClient, 
    public _http: HTTP,
    private platform: Platform,
    private alertProvider: AlertProvider
    
    ) {
    console.log('Hello GatewayProvider Provider');
    this.apiUrl = GatewayProvider.API_URL;
    

    if (window.location.host == 'localhost:8100') {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }

    
  }
  public setUserID(id:string) {
    this.userID = id;
  }


  /**
   * RestAPI 호출 및 응답데이터 리턴
   * @param {string}  fx_name function명 (내부적으로만 사용)
   * @param {string}  type get or post
   * @param {string}  url api url
   * @param {string}  header_type 일반적으로 json
   * @param {object}  header 리퀘스트 헤더 내용
   * @param {object}  data 리퀘스트 POST 데이터 오브젝트
   * @return {object} response 데이터
   */
  public restAPI(fx_name, type, url, header_type, header, data) {
    console.log(`GatewayProvider :: ${fx_name}() :: url=${url}`);
    console.log(`GatewayProvider :: ${fx_name}() :: req=`, data);
    
   // header['Content-type'] = header['Content-type'] + '; charset=utf-8';
   // console.log('Header::',header)
    url = this.apiUrl+url;


    return new Promise((resolve, reject) => {
      console.log(url)
      if (this.isMobile) {
        
        this._http.acceptAllCerts(true);
        this._http.setDataSerializer(header_type);
        this._http.setRequestTimeout(10);
        this._http[type](url, data, header)
          .then(
            (res) => {
              res = JSON.parse(res.data);
              console.log(`GatewayProvider :: ${fx_name}() :: `, res);
              resolve(res);
            }, (err) => {
              if (err.error && this.IsJsonString(err.error)) {
                err.error = JSON.parse(err.error);
              }
              console.error(`GatewayProvider :: ${fx_name}() :: err=`, err);
              reject(err);
            });
      } else {
        if (type == 'get') {
          this.http.get(url,{}).subscribe(
            (res) => {
              console.log("결과",res);
              resolve(res);
            }
          );

          

        } else {
          this.http[type](url, data, {
              headers: header
            }).subscribe(
              (res) => {
                console.log(`GatewayProvider :: ${fx_name}() :: res=`, res);
                resolve(res);
              }, (err) => {
                console.error(`GatewayProvider :: ${fx_name}() :: err=`, err);
                reject(err);
              });
          }
      }

    });
  }

  public IsJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  //Method
  public getVolunteerLogList(){
    let header_type = 'json';
      let header = {
          'Content-type': "application/json"
      };
      let url:string =  this.apiUrl  +'/web3j/token/address'
      return this.restAPI('getVolunteerLogList','get',url,header_type,header,{});
  }
  
  // public getTokenAddress(){
  //   let header_type = 'json';
  //   let header = {
  //       'Content-type': "application/json"
  //   };
  //   let url:string =  this.apiUrl  +'/web3j/token/address'
  //   return this.restAPI('getTokenAddress','get',url,header_type,header,{});
  // }
  // public getContractABI(){

  //   let header_type = 'json';
  //   let header = {
  //       'Content-type': "json"
  //   };
  //   let url:string =  this.svUrl  +'/contracts/SVCoin.json'
  //  // let url:string =  'https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot';//'assets/contracts/build.json'//'/contracts'
  //   return this.restAPI('getContractABI','get',url,header_type,header,{});
    
  // }
  // public getMyWalletSVCHistory(){
  //   let header_type = 'json';
  //   let header = {
  //       'Content-type': "application/json"
  //   };
  //   let url:string =  this.apiUrl  +'/wallet/'+this.sv_account['id']+'/svchistory';

    
  //   return this.restAPI('getMyWalletSVCHistory','get',url,header_type,header,{});
  // }
  // public getMemberInfo(){
  //   let header_type = 'json';
  //   let header = {
  //       'Content-type': "application/json"
  //   };
  //   let url:string =  this.apiUrl  +'/members/'+this.sv_account['id'];

    
  //   return this.restAPI('getMemberInfo','get',url,header_type,header,{});
  // }
  // public getSVCoin(){
  //   let header_type = 'json';
  //   let header = {
  //       'Content-type': "application/json"
  //   };
  //   let url:string =  this.apiUrl  +'/web3j/svcbalance/'+this.sv_account['address'];

    
  //   return this.restAPI('getSVCoin','get',url,header_type,header,{});
  // }
  // public getSVCHistory(){
  //   let header_type = 'json';
  //   let header = {
  //       'Content-type': "application/json"
  //   };
  //   let url:string =  this.apiUrl  +'/wallet/svchistory';

    
  //   return this.restAPI('getSVCHistory','get',url,header_type,header,{});
  // }

  
  // public getNonce(){
  //   let header_type = 'json';
  //   let header = {
        
  //       'Content-type': "application/json"
  //   };
  //   let url:string =  this.apiUrl  +'/web3j/nonce/'+this.sv_account['address'];

    
  //   return this.restAPI('getNonce','get',url,header_type,header,{});
  // }
}

