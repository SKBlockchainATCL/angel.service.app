
# SVNS-APP
## Framework
- Ionic 3 (https://ionicframework.com/docs/v3/)
## Install
* Ionic 3.19.1 (npm global 설치 :  npm i -g ionic@3.19.1)
* Cordova 8.1.0 (npm global 설치 : npm i -g cordova@8.1.0)
* Android (기기 빌드 안 할시 pass)
    * JDK (v1.8.x)
    * Android SDK (Android Studio:https://developer.android.com/studio)
    * Gradle (https://gradle.org/install/) 
* iOS (기기 빌드 안 할시 pass)
    * XCode


## 테스트
* 로컬 웹서버
~~~bash
ionic serve
~~~
* Android
    * Andorid Studio 시뮬레이터 :
아래처럼 빌드 후, Android Studio 에서 빌드 프로젝트(프로젝트명>platforms>android)를 불러와서 테스트
Android Studio 에서 불러올 때 Gradle 업그레이드 관련 창이 뜨면 업그레이드 하지 말 것.(하게 되면 꼬임)

~~~bash
ionic cordova build android
~~~

    * 디바이스 에서 테스트 :
디바이스를 usb 연결하고, 아래의 command 수행. 이때, 해당 기기의 설정> 개발자 옵션 > USB 디버깅 을 활성화 해줘야 함. 

~~~bash
ionic cordova run android --device
~~~

* iOS
    * XCode 시뮬레이터 > 디바이스에서 테스트

## 주요 folder structure


    ├── platforms               # 플랫폼별 빌드 폴더 (android / ios)
    ├── pugins                  # cordova 플러그인 설치 폴더   
    ├── resources               # 플랫폼별 디폴트 이미지 폴더
    ├── src                     # 앱 소스
    |   ├── app                 # App 기본 컴포넌트
    |   ├── pages               # 화면 페이지 
    |   ├── components          # 컴포넌트 모듈 (template용 컴포넌튿들)
    |   ├── config              # 환경 설정 모듈 (template 에서만 사용)
    |   ├── providers           # 공통 Provider 모듈
    |   ├── services            # 서비스 모듈(tempalte 에서 사용하는 임시 데이터)
    |   └── theme               # 스타일 테마 폴더
    |   
    ├── config.xml              # App 환경설정 파일
    └── README.md   




## Page 생성
일반적인 화면 단위를 page 라고 정의합니다. 
Ionic3 에서는 아래의 명령어를 수행 시 pages 폴더 하위로  페이지명에 해당하는 폴더가 생기며 그에 따른 파일들이 자동 생성됩니다.
~~~bash
ionic g page 페이지명
~~~
페이지당 자동생성되는 파일 목록
* *.html : 렌더링 될 마크업 파일
* *.scss(또는 css)  : 스타일 파일
* *ts : 스크립트(typescript) 파일
* *.moudle.ts : 모듈 스크립트(typescript) 파일


* 현재 svns 에서 사용중인 페이지 (나머지는 템플릿용 화면)
    * pages/home
    * pages/login
    * pages/post-create
    * pages/voluntary-list
    * pages/volunteer-log

## Provider 생성
Provider 는 각 페이지에서 사용할 서비스 제공자입니다.

주로, 화면 구성 요소가 없는 서비스를 생성하여 사용합니다. 

Ionic3 에서는 아래의 명령어를 수행 시 providers 폴더 하위로  프로바이더명에 해당하는 폴더가 생기며 그에 따른 파일들이 자동 생성됩니다.

~~~bash
ionic g provider 프로바이더명
~~~

## Component 생성
Component 는 주로 화면 구성 요소를 포함한 컴포넌트 단위를 생성하여 사용합니다. 

Ionic3 에서는 아래의 명령어를 수행 시 components 폴더 하위로 컴포넌트명에 해당하는 폴더가 생기며 그에 따른 파일들이 자동 생성됩니다.

또한, components 폴더에는 components.module.ts 파일이 자동생성되며, 컴포넌트 모듈을 관리합니다. 

~~~bash
ionic g component 컴포넌트명
~~~

## 구현 시 참고 예제 소스
* /src/pages/volunteer-log/volunteer-log.ts



## 구매한 Template 오리지널 소스
* /ionic-3-ui-themetemplate-blue-light.zip

## 템플릿 화면 확인하기
* 템플릿 화면 미리보기 : AppStore 나 구글 플레이에서 'ionic3 material design blue light' 를 다운
* 텝플릿앱을 직접 구동시켜 메뉴명에 따른 화면 소스를 찾아야 합니다. 
* 템플릿의 메뉴 데이터는 /src/services/menu-service.ts 에 나열되어 있습니다. 

## SVNS 메뉴 데이터
* 실제 SVNS 에서 사용하는 메뉴 관리는 /src/providers/menu/menu.ts 에 설정되어있습니다. (템플릿의 menu-service.ts 를 참고하여..)