function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<app-closed *ngIf=\"util.appClosed\"></app-closed>\n\n<ion-content *ngIf=\"!util.appClosed\">\n  <div class=\"main_div\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <div class=\"user_img\" [ngStyle]=\"{'background-image':'url('+getProfile()+'),url(assets/bg.png)'}\">\n        </div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <p class=\"username\">{{getName()}}</p>\n        <p class=\"email\">{{getEmail()}}</p>\n        <ion-button (click)=\"editProfile()\" shape=\"round\" size=\"small\" color=\"light\"> {{util.getString('Edit Profile')}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"options\">\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"orders()\">\n      <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{util.getString('Orders')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goToFav()\">\n      <ion-icon name=\"heart-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('Favourite')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goToAddress()\">\n      <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('Address')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"reset()\">\n      <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{util.getString('Change Password')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goToAbout()\">\n      <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('About Us')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goToContact()\">\n      <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('Contact Us')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goLangs()\">\n      <ion-icon name=\"language-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('Languages')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goToChats()\">\n      <ion-icon name=\"chatbubbles-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('Chats')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goFaqs()\">\n      <ion-icon name=\"flag-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('FAQs')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goHelp()\">\n      <ion-icon name=\"help-circle-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('Help')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"logout()\">\n      <ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('Log Out')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/account/account-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/account/account-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AccountPageRoutingModule */

  /***/
  function srcAppPagesAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
      return AccountPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account.page */
    "./src/app/pages/account/account.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }];

    var AccountPageRoutingModule = function AccountPageRoutingModule() {
      _classCallCheck(this, AccountPageRoutingModule);
    };

    AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/account/account.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/account/account.module.ts ***!
    \*************************************************/

  /*! exports provided: AccountPageModule */

  /***/
  function srcAppPagesAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
      return AccountPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/pages/account/account-routing.module.ts");
    /* harmony import */


    var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./account.page */
    "./src/app/pages/account/account.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AccountPageModule = function AccountPageModule() {
      _classCallCheck(this, AccountPageModule);
    };

    AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })], AccountPageModule);
    /***/
  },

  /***/
  "./src/app/pages/account/account.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/account/account.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_div {\n  padding: 23px;\n  background: var(--ion-color-primary);\n}\n.main_div .menuBtn {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.main_div .menuBtn .menuIcon {\n  width: 25px;\n}\n.main_div .profilePic {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  border: 4px solid white;\n}\n.main_div .user_img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  border: 3px solid var(--ion-color-primary);\n  margin: auto;\n  margin-bottom: 30px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 90px;\n  position: relative;\n}\n.main_div .username {\n  margin: 0px;\n  margin-top: 10px;\n  font-size: 1.3rem;\n  font-weight: bold;\n  color: white;\n}\n.main_div .email {\n  margin: 0px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  color: white;\n}\n.options {\n  padding: 10px;\n}\n.options ion-item {\n  border-bottom: 1px solid lightgray;\n  height: 60px;\n  display: flex;\n}\n.options ion-item ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXGFjY291bnRcXGFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksYUFBQTtFQUNBLG9DQUFBO0FERUo7QUNESTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QURHUjtBQ0ZTO0VBRUcsV0FBQTtBREdaO0FDQUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QURFUjtBQ0FJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FERVI7QUNBSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FERVI7QUNDSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEQ1I7QUNHQTtFQUNJLGFBQUE7QURBSjtBQ0NJO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRENSO0FDQ1E7RUFDRSwrQkFBQTtFQUNBLGVBQUE7QURDViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fZGl2IHtcbiAgcGFkZGluZzogMjNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW5fZGl2IC5tZW51QnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cbi5tYWluX2RpdiAubWVudUJ0biAubWVudUljb24ge1xuICB3aWR0aDogMjVweDtcbn1cbi5tYWluX2RpdiAucHJvZmlsZVBpYyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbn1cbi5tYWluX2RpdiAudXNlcl9pbWcge1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogOTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fZGl2IC51c2VybmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2RpdiAuZW1haWwge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5vcHRpb25zIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5vcHRpb25zIGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm9wdGlvbnMgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDIycHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2RpdntcbiAgICBwYWRkaW5nOiAyM3B4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAubWVudUJ0bntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgIC5tZW51SWNvbntcbiAgICAgICAgICAgIC8vIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wcm9maWxlUGlje1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gICAgfVxuICAgIC51c2VyX2ltZ3tcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnVzZXJuYW1le1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmVtYWlse1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4ub3B0aW9uc3tcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGlvbi1pdGVte1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/account/account.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/account/account.page.ts ***!
    \***********************************************/

  /*! exports provided: AccountPage */

  /***/
  function srcAppPagesAccountAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
      return AccountPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AccountPage = /*#__PURE__*/function () {
      function AccountPage(router, navCtrl, util, api, cart) {
        _classCallCheck(this, AccountPage);

        this.router = router;
        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.cart = cart;
      }

      _createClass(AccountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.util.openMenu();
        }
      }, {
        key: "ditProfile",
        value: function ditProfile() {
          this.router.navigate(['/edit-profile']);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.cart.cart = [];
          this.cart.itemId = [];
          this.cart.totalPrice = 0;
          this.cart.grandTotal = 0;
          this.cart.coupon = null;
          this.cart.discount = null;
          this.util.clearKeys('cart');
          this.navCtrl.navigateRoot(['/tabs/home']);
        }
      }, {
        key: "orders",
        value: function orders() {
          this.router.navigate(['/tabs/orders']);
        }
      }, {
        key: "goToFav",
        value: function goToFav() {
          this.router.navigate(['/favorite']);
        }
      }, {
        key: "goToMethods",
        value: function goToMethods() {
          this.router.navigate(['/payment-method']);
        }
      }, {
        key: "goToHistory",
        value: function goToHistory() {
          this.router.navigate(['/payment-history']);
        }
      }, {
        key: "goToAbout",
        value: function goToAbout() {
          this.router.navigate(['/tabs/account/about']);
        }
      }, {
        key: "editProfile",
        value: function editProfile() {
          this.router.navigate(['/tabs/account/profile']);
        }
      }, {
        key: "getName",
        value: function getName() {
          return this.util.userInfo && this.util.userInfo.first_name ? this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : 'Groceryee';
        }
      }, {
        key: "getEmail",
        value: function getEmail() {
          return this.util.userInfo && this.util.userInfo.email ? this.util.userInfo.email : 'info@groceryee.com';
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          return this.util.userInfo && this.util.userInfo.cover ? this.api.mediaURL + this.util.userInfo.cover : 'assets/imgs/user.png';
        }
      }, {
        key: "goLangs",
        value: function goLangs() {
          this.router.navigate(['languages']);
        }
      }, {
        key: "goToAddress",
        value: function goToAddress() {
          var param = {
            queryParams: {
              from: 'account'
            }
          };
          this.router.navigate(['address'], param);
        }
      }, {
        key: "goToContact",
        value: function goToContact() {
          this.router.navigate(['tabs/account/contacts']);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.router.navigate(['reset-password']);
        }
      }, {
        key: "goToChats",
        value: function goToChats() {
          this.router.navigate(['chats']);
        }
      }, {
        key: "goFaqs",
        value: function goFaqs() {
          this.router.navigate(['tabs/account/faqs']);
        }
      }, {
        key: "goHelp",
        value: function goHelp() {
          this.router.navigate(['tabs/account/help']);
        }
      }]);

      return AccountPage;
    }();

    AccountPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
      }];
    };

    AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-account',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./account.page.scss */
      "./src/app/pages/account/account.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]])], AccountPage);
    /***/
  }
}]);
//# sourceMappingURL=account-account-module-es5.js.map