(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"iconDiv\">\n      <img src=\"assets/imgs/icon.png\" alt=\"\" class=\"icon\" />\n    </div>\n    <div class=\"form_div\" *ngIf=\"!showOtp\">\n      <ion-input\n        type=\"number\"\n        [placeholder]=\"util.getString('Mobile')\"\n        [(ngModel)]=\"mobile\"\n      >\n        <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <ion-button expand=\"block\" (click)=\"sendOtp(false)\" [disabled]=\"loggedIn\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('Next')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <!-- <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"login()\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN IN')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>-->\n\n      <ion-label class=\"lbl\" (click)=\"create()\">\n        {{util.getString(\"Don't have an account ?\")}}\n        <span class=\"signup_span\"> {{util.getString('Sign Up')}} </span>\n      </ion-label>\n    </div>\n    <div class=\"form_div_otp\" *ngIf=\"showOtp\">\n      <ion-label class=\"main_head\">\n        {{util.getString('Verify OTP')}}\n      </ion-label>\n      <ion-label class=\"lbl_police\">\n        <span class=\"span_term\">\n          {{util.getString('We have sent you one time password to your mobile\n          number')}}\n        </span>\n      </ion-label>\n      <ion-input\n        type=\"number\"\n        [placeholder]=\"util.getString('Enter Otp')\"\n        [(ngModel)]=\"otp_value\"\n      >\n        <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <ion-button expand=\"block\" (click)=\"verifyOtp()\" [disabled]=\"loggedIn\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('Verify otp')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n      <ion-label class=\"lbl\" (click)=\"sendOtp(true)\">\n        {{util.getString('Did not get otp ?')}}\n        <span class=\"signup_span\"> {{util.getString('Resend Otp')}} </span>\n      </ion-label>\n      <ion-label class=\"lbl\" (click)=\"create()\">\n        {{util.getString(\"Don't have an account ?\")}}\n        <span class=\"signup_span\"> {{util.getString('Sign Up')}} </span>\n      </ion-label>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-content {\n  --background: var(--ion-color-primary);\n}\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div,\n.main_content_div .form_div_otp {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head,\n.main_content_div .form_div_otp .main_head {\n  display: block;\n  color: white;\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label,\n.main_content_div .form_div_otp ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot,\n.main_content_div .form_div_otp .forgot {\n  display: block;\n  text-align: right;\n  color: white;\n}\n.main_content_div .form_div ion-input,\n.main_content_div .form_div_otp ion-input {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n}\n.main_content_div .form_div ion-button,\n.main_content_div .form_div_otp ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: white;\n  --color: var(--ion-color-primary);\n  font-family: muli-bold;\n}\n.main_content_div .form_div .tri,\n.main_content_div .form_div_otp .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl,\n.main_content_div .form_div_otp .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span,\n.main_content_div .form_div_otp .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDRSxzQ0FBQTtBREVGO0FDQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBREVGO0FDQUU7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FERUo7QUNBRTtFQUVFLGtCQUFBO0FEQ0o7QUNBSTtFQUVFLFdBQUE7QURDTjtBQ0VFOztFQUVFLGFBQUE7RUFFQSxrQkFBQTtBRERKO0FDRUk7O0VBQ0UsY0FBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEQU47QUNFSTs7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBRENOO0FDRUk7O0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRENOO0FDQ0k7O0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBREVOO0FDQ0k7O0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBREVOO0FDQUk7O0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURHTjtBQ0RJOztFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRElOO0FDRkk7O0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBREtOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5pY29uRGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmljb25EaXYgLmljb24ge1xuICB3aWR0aDogNjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdixcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAge1xuICBwYWRkaW5nOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLm1haW5faGVhZCxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLm1haW5faGVhZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1sYWJlbCxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmZvcmdvdCxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLmZvcmdvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pbnB1dCxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1idXR0b24sXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAudHJpLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAudHJpIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubGJsLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAubGJsIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5zaWdudXBfc3Bhbixcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLnNpZ251cF9zcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmljb25EaXYge1xuICAgIC8vIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5pY29uIHtcbiAgICAgIC8vIGhlaWdodDogNTBweDtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cbiAgfVxuICAuZm9ybV9kaXYsXG4gIC5mb3JtX2Rpdl9vdHAge1xuICAgIHBhZGRpbmc6IDI1cHg7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLm1haW5faGVhZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIC8vIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5mb3Jnb3Qge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgaW9uLWlucHV0IHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgfVxuICAgIC50cmkge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTVweDtcbiAgICB9XG4gICAgLmxibCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5zaWdudXBfc3BhbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let LoginPage = class LoginPage {
    constructor(router, util, navCtrl, api) {
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.api = api;
        this.email = "";
        this.mobile = "";
        this.showOtp = false;
        this.otp_value = "";
        this.hidden_otp_value = "";
    }
    ngOnInit() { }
    sendOtp(resend) {
        if (!this.mobile) {
            this.util.showToast(this.util.getString("Mobile number are required"), "dark", "bottom");
            return false;
        }
        let mobile = new String(this.mobile);
        console.log(mobile);
        console.log("Length " + mobile.length);
        if (mobile.length != 10) {
            this.util.showToast(this.util.getString("invalid Mobile number"), "dark", "bottom");
            return false;
        }
        const param = {
            mobile: this.mobile,
        };
        this.api.post("users/sendLoginOtp", param).subscribe((data) => {
            if (data && data.status === 200) {
                if (!resend) {
                    this.showOtp = true;
                }
                this.hidden_otp_value = data.data.otp_value;
            }
            else if (data && data.status === 500) {
                console.log("500");
                this.util.errorToast(data.data.message);
            }
            else {
                console.log("wrong");
                this.util.errorToast(this.util.getString("Something went wrong"));
            }
        }, (error) => {
            console.log(error);
            this.loggedIn = false;
            this.util.errorToast(this.util.getString("Something went wrong"));
        });
    }
    verifyOtp() {
        if (this.hidden_otp_value == this.otp_value) {
            this.login();
        }
        else {
            this.util.errorToast("invalid one time password");
        }
    }
    login() {
        console.log("login");
        this.loggedIn = true;
        const param = {
            mobile: this.mobile,
        };
        this.api.post("users/login", param).subscribe((data) => {
            this.loggedIn = false;
            console.log(data);
            if (data && data.status === 200) {
                if (data && data.data && data.data.type === "user") {
                    if (data.data.status === "1") {
                        localStorage.setItem("uid", data.data.id);
                        this.util.userInfo = data.data;
                        const fcm = localStorage.getItem("fcm");
                        if (fcm && fcm !== null && fcm !== "null") {
                            const updateParam = {
                                id: data.data.id,
                                fcm_token: fcm,
                            };
                            this.api.post("users/edit_profile", updateParam).subscribe((data) => {
                                console.log("user info=>", data);
                            }, (error) => {
                                console.log(error);
                            });
                        }
                        const favParam = {
                            id: data.data.id,
                        };
                        this.api.post("favourite/getByUid", favParam).subscribe((data) => {
                            console.log("fav data", data);
                            if (data && data.status === 200 && data.data.length > 0) {
                                this.util.haveFav = true;
                                try {
                                    this.util.favIds = data.data[0].ids.split(",");
                                }
                                catch (error) {
                                    console.log("eroor", error);
                                }
                            }
                            else {
                                this.util.haveFav = false;
                            }
                        }, (error) => {
                            this.util.haveFav = false;
                            console.log("fav error", error);
                        });
                        this.navCtrl.navigateRoot([""]);
                    }
                    else {
                        console.log("not valid");
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: this.util.getString("Error"),
                            text: this.util.getString("Your are blocked please contact administrator"),
                            icon: "error",
                            showConfirmButton: true,
                            showCancelButton: true,
                            confirmButtonText: this.util.getString("Need Help?"),
                            backdrop: false,
                            background: "white",
                        }).then((status) => {
                            if (status && status.value) {
                                // localStorage.setItem('helpId', data.data.id);
                                // this.router.navigate(['inbox']);
                                const inboxParam = {
                                    queryParams: {
                                        id: 0,
                                        name: "Support",
                                        uid: data.data.id,
                                    },
                                };
                                this.router.navigate(["inbox"], inboxParam);
                            }
                        });
                    }
                }
                else {
                    this.util.errorToast(this.util.getString("Not valid user"));
                    this.mobile = "";
                }
            }
            else if (data && data.status === 500) {
                this.util.errorToast(data.data.message);
            }
            else {
                this.util.errorToast(this.util.getString("Something went wrong"));
            }
        }, (error) => {
            console.log(error);
            this.loggedIn = false;
            this.util.errorToast(this.util.getString("Something went wrong"));
        });
    }
    ionViewDidEnter() {
        console.log("enter");
    }
    create() {
        this.router.navigate(["register"]);
    }
    reset() {
        this.router.navigate(["reset-password"]);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map