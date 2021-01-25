function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-title color=\"light\" (click)=\"changeCity()\" class=\"ion-text-left\">\n      <div class=\"ion-activatable\" *ngIf=\"util && util.city && util.city.name\">\n        <ion-icon slot=\"start\" name=\"location\"></ion-icon>\n        {{ util.city.name }}\n        <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\" />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"iconDiv\">\n      <img src=\"assets/imgs/icon.png\" alt=\"\" class=\"icon\" />\n    </div>\n    <div class=\"form_div\" *ngIf=\"!showOtp\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign Up')}} </ion-label>\n      <ion-input\n        type=\"number\"\n        [placeholder]=\"util.getString('Mobile')\"\n        [(ngModel)]=\"mobile\"\n      >\n        <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <div class=\"div_chk\">\n        <ion-checkbox\n          [checked]=\"check\"\n          [(ngModel)]=\"check\"\n          color=\"light\"\n          class=\"chk\"\n        ></ion-checkbox>\n        <ion-label class=\"lbl_police\"\n          ><span class=\"span_term\">\n            {{util.getString('By clicking on the I agree button click, download\n            or if you use the Application, you agree to be bound by the')}}\n          </span>\n          <u>\n            <a style=\"color: white\" (click)=\"open('eula')\">\n              {{util.getString('EULA certificate')}}\n            </a>\n          </u>\n          {{util.getString('and')}}\n          <u>\n            <a style=\"color: white\" (click)=\"open('privacy')\">\n              {{util.getString('Privacy Policy')}}\n            </a>\n          </u>\n          {{util.getString('of this app')}}.\n        </ion-label>\n      </div>\n      <ion-button expand=\"block\" (click)=\"sendOtp(false)\" [disabled]=\"loggedIn\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('Next')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"goToLogin()\">\n        {{util.getString('Already have an account ?')}}\n        <span class=\"signup_span\"> {{util.getString('Sign In')}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"form_div_otp\" *ngIf=\"showOtp\">\n      <ion-label class=\"main_head\">\n        {{util.getString('Verify OTP')}}\n      </ion-label>\n      <ion-label class=\"lbl_police\">\n        <span class=\"span_term\">\n          {{util.getString('We have sent you one time password to your mobile\n          number')}}\n        </span>\n      </ion-label>\n      <ion-input\n        type=\"number\"\n        [placeholder]=\"util.getString('Enter Otp')\"\n        [(ngModel)]=\"otp_value\"\n      >\n        <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <ion-button expand=\"block\" (click)=\"verifyOtp()\" [disabled]=\"loggedIn\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('Verify otp')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n      <ion-label class=\"lbl\" (click)=\"sendOtp(true)\">\n        {{util.getString('Did not get otp ?')}}\n        <span class=\"signup_span\"> {{util.getString('Resend Otp')}} </span>\n      </ion-label>\n      <ion-label class=\"lbl\" (click)=\"goToLogin()\">\n        {{util.getString('Already have an account ?')}}\n        <span class=\"signup_span\"> {{util.getString('Sign In')}} </span>\n      </ion-label>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/register/register-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/register/register-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppPagesRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
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


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");
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
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
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


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/pages/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-content {\n  --background: var(--ion-color-primary);\n}\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div,\n.main_content_div .form_div_otp {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head,\n.main_content_div .form_div_otp .main_head {\n  display: block;\n  text-align: left;\n  color: white;\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label,\n.main_content_div .form_div_otp ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot,\n.main_content_div .form_div_otp .forgot {\n  display: block;\n  text-align: right;\n  color: white;\n}\n.main_content_div .form_div ion-input,\n.main_content_div .form_div_otp ion-input {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n}\n.main_content_div .form_div .cCode,\n.main_content_div .form_div_otp .cCode {\n  padding: 0px 10px;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 5px;\n}\n.main_content_div .form_div .cCode .ccLbl,\n.main_content_div .form_div_otp .cCode .ccLbl {\n  margin: 0px;\n  color: white;\n  padding: 5px;\n}\n.main_content_div .form_div ion-item,\n.main_content_div .form_div_otp ion-item {\n  --border-radius: 20px;\n}\n.main_content_div .form_div ion-item ion-label,\n.main_content_div .form_div_otp ion-item ion-label {\n  color: gray !important;\n}\n.main_content_div .form_div ion-item ion-icon,\n.main_content_div .form_div_otp ion-item ion-icon {\n  padding: 0px !important;\n}\n.main_content_div .form_div ion-button,\n.main_content_div .form_div_otp ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: white;\n  --color: var(--ion-color-primary);\n  font-family: muli-bold;\n}\n.main_content_div .form_div .tri,\n.main_content_div .form_div_otp .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl,\n.main_content_div .form_div_otp .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span,\n.main_content_div .form_div_otp .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .form_div .div_chk,\n.main_content_div .form_div_otp .div_chk {\n  width: 100%;\n  margin: 20px 0px;\n  position: relative;\n}\n.main_content_div .form_div .div_chk .lbl_police,\n.main_content_div .form_div_otp .div_chk .lbl_police {\n  font-size: 10px;\n  margin-left: 40px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .form_div .div_chk .span_term,\n.main_content_div .form_div_otp .div_chk .span_term {\n  color: white;\n  margin-right: 10px;\n}\n.main_content_div .form_div .div_chk .chk,\n.main_content_div .form_div_otp .div_chk .chk {\n  --size: 20px;\n  --border-radius: 5px !important;\n  --border-color-checked: var(--ion-color-primary);\n}\n.main_content_div .form_div .div_chk .lbl_by,\n.main_content_div .form_div_otp .div_chk .lbl_by {\n  display: block;\n  font-size: 10px;\n  color: black;\n  margin-top: 10px;\n}\n.main_content_div .form_div .div_chk .span_termm,\n.main_content_div .form_div_otp .div_chk .span_termm {\n  color: #8992aa;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9FOlxcSW9uaWNcXGNpcmNsZXBvaW50L3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNFLHNDQUFBO0FERUY7QUNDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FERUY7QUNBRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QURFSjtBQ0FFO0VBRUUsa0JBQUE7QURDSjtBQ0FJO0VBRUUsV0FBQTtBRENOO0FDRUU7O0VBRUUsYUFBQTtFQUVBLGtCQUFBO0FEREo7QUNFSTs7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRENOO0FDQ0k7O0VBQ0UsZUFBQTtFQUNBLFlBQUE7QURFTjtBQ0NJOztFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QURFTjtBQ0FJOztFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QURHTjtBQ0FJOztFQUNFLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBREdOO0FDRk07O0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FES1I7QUNESTs7RUFDRSxxQkFBQTtBRElOO0FDSE07O0VBQ0Usc0JBQUE7QURNUjtBQ0pNOztFQUNFLHVCQUFBO0FET1I7QUNISTs7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0FETU47QUNKSTs7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRE9OO0FDTEk7O0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEUU47QUNOSTs7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEU047QUNQSTs7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRFVOO0FDUk07O0VBQ0UsZUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QURVUjtBQ1BNOztFQUNFLFlBQUE7RUFFQSxrQkFBQTtBRFNSO0FDTk07O0VBQ0UsWUFBQTtFQUVBLCtCQUFBO0VBQ0EsZ0RBQUE7QURRUjtBQ05NOztFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEU1I7QUNQTTs7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QURVUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaWNvbkRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5pY29uRGl2IC5pY29uIHtcbiAgd2lkdGg6IDYwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYsXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIHtcbiAgcGFkZGluZzogMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5tYWluX2hlYWQsXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5tYWluX2hlYWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24tbGFiZWwsXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5mb3Jnb3QsXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5mb3Jnb3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24taW5wdXQsXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIGlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuY0NvZGUsXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5jQ29kZSB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmNDb2RlIC5jY0xibCxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLmNDb2RlIC5jY0xibCB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24taXRlbSxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWl0ZW0gaW9uLWxhYmVsLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pdGVtIGlvbi1pY29uLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCBpb24taXRlbSBpb24taWNvbiB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1idXR0b24sXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAudHJpLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAudHJpIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubGJsLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAubGJsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5zaWdudXBfc3Bhbixcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLnNpZ251cF9zcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmRpdl9jaGssXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5kaXZfY2hrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2NoayAubGJsX3BvbGljZSxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLmRpdl9jaGsgLmxibF9wb2xpY2Uge1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmRpdl9jaGsgLnNwYW5fdGVybSxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLmRpdl9jaGsgLnNwYW5fdGVybSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5kaXZfY2hrIC5jaGssXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5kaXZfY2hrIC5jaGsge1xuICAtLXNpemU6IDIwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2NoayAubGJsX2J5LFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAuZGl2X2NoayAubGJsX2J5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5kaXZfY2hrIC5zcGFuX3Rlcm1tLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAuZGl2X2NoayAuc3Bhbl90ZXJtbSB7XG4gIGNvbG9yOiAjODk5MmFhO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmljb25EaXYge1xuICAgIC8vIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5pY29uIHtcbiAgICAgIC8vIGhlaWdodDogNTBweDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgfVxuICAuZm9ybV9kaXYsXG4gIC5mb3JtX2Rpdl9vdHAge1xuICAgIHBhZGRpbmc6IDI1cHg7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLm1haW5faGVhZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5mb3Jnb3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWlucHV0IHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmNDb2RlIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIC5jY0xibCB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICB9XG4gICAgLnRyaSB7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0xNXB4O1xuICAgIH1cbiAgICAubGJsIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnNpZ251cF9zcGFuIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5kaXZfY2hrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgLmxibF9wb2xpY2Uge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIC8vIGNvbG9yOiBibGFjaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIH1cblxuICAgICAgLnNwYW5fdGVybSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLy8gb3BhY2l0eTogMC41O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5jaGsge1xuICAgICAgICAtLXNpemU6IDIwcHg7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZCA6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICAgIC5sYmxfYnkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgICAuc3Bhbl90ZXJtbSB7XG4gICAgICAgIGNvbG9yOiAjODk5MmFhO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../verify/verify.page */
    "./src/app/pages/verify/verify.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(navCtrl, util, router, api, iab, modalCtrl) {
        _classCallCheck(this, RegisterPage);

        this.navCtrl = navCtrl;
        this.util = util;
        this.router = router;
        this.api = api;
        this.iab = iab;
        this.modalCtrl = modalCtrl;
        this.mobile = "";
        this.cc = "";
        this.ccCode = "91";
        this.countries = [];
        this.showOtp = false;
        this.otp_value = "";
        this.hidden_otp_value = "";
        this.dummy = [];
        this.dummy = this.util.countrys;
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.util.openMenu();
        }
      }, {
        key: "openModal",
        value: function openModal(userId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
                      componentProps: {
                        code: this.ccCode,
                        mobile: this.mobile,
                        uid: userId
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log(data);
                    });
                    modal.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "sendOtp",
        value: function sendOtp(resend) {
          var _this = this;

          if (!this.mobile) {
            this.util.showToast(this.util.getString("All Fields are required"), "dark", "bottom");
            return false;
          }

          var param = {
            mobile: "+91" + this.mobile
          };

          if (!resend) {
            this.showOtp = true;
          }

          this.api.post("users/sendRegistrationOtp", param).subscribe(function (data) {
            if (data && data.status === 200) {
              _this.showOtp = true;
              _this.hidden_otp_value = data.data.otp_value;
            } else if (data && data.status === 500) {
              _this.util.errorToast(data.data.message);
            } else {
              _this.util.errorToast(_this.util.getString("Something went wrong"));
            }
          }, function (error) {
            console.log(error);
            _this.loggedIn = false;

            _this.util.errorToast(_this.util.getString("Something went wrong"));
          });
        }
      }, {
        key: "verifyOtp",
        value: function verifyOtp() {
          if (this.hidden_otp_value == this.otp_value) {
            //this.navCtrl.navigateRoot([""]);
            this.registration();
          } else {
            this.util.errorToast("invalid one time password");
          }
        }
      }, {
        key: "registration",
        value: function registration() {
          var _this2 = this;

          if (!this.check) {
            this.util.showToast(this.util.getString("Please accept terms and conditions"), "dark", "bottom");
            return false;
          }

          console.log("registration");
          var param = {
            fcm_token: localStorage.getItem("fcm") ? localStorage.getItem("fcm") : "NA",
            type: "user",
            lat: "",
            lng: "",
            cover: "NA",
            ccCode: "+91",
            mobile: this.mobile,
            status: this.util.twillo === "1" ? 0 : 1,
            verified: 0,
            others: 1,
            date: moment__WEBPACK_IMPORTED_MODULE_5__().format("YYYY-MM-DD"),
            stripe_key: ""
          };
          console.log("param", param);
          this.loggedIn = true;
          this.api.post("users/registerUserByOtp", param).subscribe(function (data) {
            _this2.loggedIn = false;
            console.log(data);

            if (data && data.status === 200) {
              _this2.util.userInfo = data.data;

              if (_this2.util.twillo === "1") {
                console.log("open model=>>>");
                localStorage.setItem("uMobile", "+" + _this2.ccCode + _this2.mobile);

                _this2.openModal(data.data.id);
              } else {
                localStorage.setItem("uid", data.data.id);
                var fcm = localStorage.getItem("fcm");

                if (fcm && fcm !== null && fcm !== "null") {
                  var updateParam = {
                    id: data.data.id,
                    fcm_token: fcm
                  };

                  _this2.api.post("users/edit_profile", updateParam).subscribe(function (data) {
                    console.log("user info=>", data);
                  }, function (error) {
                    console.log(error);
                  });
                } // this.sendVerification(
                //   this.email,
                //   this.api.baseUrl + "users/verify?uid=" + data.data.id
                // );


                _this2.navCtrl.navigateRoot([""]);
              }
            } else if (data && data.status === 500) {
              _this2.util.errorToast(data.data.message);
            } else {
              _this2.util.errorToast(_this2.util.getString("Something went wrong"));
            }
          }, function (error) {
            console.log(error);
            _this2.loggedIn = false;

            _this2.util.errorToast(_this2.util.getString("Something went wrong"));
          });
        }
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.router.navigate(["/login"]);
        }
      }, {
        key: "sendVerification",
        value: function sendVerification(mail, link) {
          var param = {
            email: mail,
            url: link
          };
          this.api.post("users/sendVerificationMail", param).subscribe(function (data) {
            console.log("mail", data);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onCountryInput",
        value: function onCountryInput(events) {
          console.log(events.detail.value);

          if (events.value !== "") {
            this.countries = this.dummy.filter(function (item) {
              return item.country_name.toLowerCase().indexOf(events.detail.value.toLowerCase()) > -1;
            });
          } else {
            this.countries = [];
          }
        }
      }, {
        key: "selectedCC",
        value: function selectedCC(item) {
          this.countries = [];
          console.log(item);
          this.cc = "+" + item.dialling_code + " " + item.country_name;
          this.ccCode = item.dialling_code;
        }
      }, {
        key: "open",
        value: function open(type) {
          // https://initappz.com/groceryeeaagya/privacy.html
          // https://initappz.com/groceryeeaagya/eula.html
          if (type === "eula") {
            this.iab.create("https://initappz.com/groceryeeaagya/eula.html");
          } else {
            this.iab.create("https://initappz.com/groceryeeaagya/privacy.html");
          }
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-register",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/register/register.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map