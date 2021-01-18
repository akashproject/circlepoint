(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"iconDiv\">\n      <img src=\"assets/imgs/icon.png\" alt=\"\" class=\"icon\" />\n    </div>\n    <div class=\"form_div\" *ngIf=\"!showOtp\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign Up')}} </ion-label>\n\n      <ion-input\n        [placeholder]=\"util.getString('Select your Country')\"\n        type=\"text\"\n        (ionChange)=\"onCountryInput($event)\"\n        [(ngModel)]=\"cc\"\n      >\n      </ion-input>\n      <div\n        *ngFor=\"let item of countries\"\n        class=\"cCode\"\n        (click)=\"selectedCC(item)\"\n      >\n        <p class=\"ccLbl\">+{{item.dialling_code}} {{item.country_name}}</p>\n      </div>\n      <ion-input\n        type=\"number\"\n        [placeholder]=\"util.getString('Mobile')\"\n        [(ngModel)]=\"mobile\"\n      >\n        <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <div class=\"div_chk\">\n        <ion-checkbox\n          [checked]=\"check\"\n          [(ngModel)]=\"check\"\n          color=\"light\"\n          class=\"chk\"\n        ></ion-checkbox>\n        <ion-label class=\"lbl_police\"\n          ><span class=\"span_term\">\n            {{util.getString('By clicking on the I agree button click, download\n            or if you use the Application, you agree to be bound by the')}}\n          </span>\n          <u>\n            <a style=\"color: white\" (click)=\"open('eula')\">\n              {{util.getString('EULA certificate')}}\n            </a>\n          </u>\n          {{util.getString('and')}}\n          <u>\n            <a style=\"color: white\" (click)=\"open('privacy')\">\n              {{util.getString('Privacy Policy')}}\n            </a>\n          </u>\n          {{util.getString('of this app')}}.\n        </ion-label>\n      </div>\n      <ion-button expand=\"block\" (click)=\"login()\" [disabled]=\"loggedIn\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN UP')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"goToLogin()\">\n        {{util.getString('Already have an account ?')}}\n        <span class=\"signup_span\"> {{util.getString('Sign In')}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"form_div_otp\" *ngIf=\"showOtp\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign Up')}} </ion-label>\n\n      <ion-input\n        [placeholder]=\"util.getString('Select your Country')\"\n        type=\"text\"\n        (ionChange)=\"onCountryInput($event)\"\n        [(ngModel)]=\"cc\"\n      >\n      </ion-input>\n      <div\n        *ngFor=\"let item of countries\"\n        class=\"cCode\"\n        (click)=\"selectedCC(item)\"\n      >\n        <p class=\"ccLbl\">+{{item.dialling_code}} {{item.country_name}}</p>\n      </div>\n      <ion-input\n        type=\"number\"\n        [placeholder]=\"util.getString('Mobile')\"\n        [(ngModel)]=\"mobile\"\n      >\n        <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <div class=\"div_chk\">\n        <ion-checkbox\n          [checked]=\"check\"\n          [(ngModel)]=\"check\"\n          color=\"light\"\n          class=\"chk\"\n        ></ion-checkbox>\n        <ion-label class=\"lbl_police\"\n          ><span class=\"span_term\">\n            {{util.getString('By clicking on the I agree button click, download\n            or if you use the Application, you agree to be bound by the')}}\n          </span>\n          <u>\n            <a style=\"color: white\" (click)=\"open('eula')\">\n              {{util.getString('EULA certificate')}}\n            </a>\n          </u>\n          {{util.getString('and')}}\n          <u>\n            <a style=\"color: white\" (click)=\"open('privacy')\">\n              {{util.getString('Privacy Policy')}}\n            </a>\n          </u>\n          {{util.getString('of this app')}}.\n        </ion-label>\n      </div>\n      <ion-button expand=\"block\" (click)=\"login()\" [disabled]=\"loggedIn\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN UP')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"goToLogin()\">\n        {{util.getString('Already have an account ?')}}\n        <span class=\"signup_span\"> {{util.getString('Sign In')}} </span>\n      </ion-label>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/register/register-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");

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
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/pages/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-content {\n  --background: var(--ion-color-primary);\n}\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div,\n.main_content_div .form_div_otp {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head,\n.main_content_div .form_div_otp .main_head {\n  display: block;\n  text-align: left;\n  color: white;\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label,\n.main_content_div .form_div_otp ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot,\n.main_content_div .form_div_otp .forgot {\n  display: block;\n  text-align: right;\n  color: white;\n}\n.main_content_div .form_div ion-input,\n.main_content_div .form_div_otp ion-input {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n}\n.main_content_div .form_div .cCode,\n.main_content_div .form_div_otp .cCode {\n  padding: 0px 10px;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 5px;\n}\n.main_content_div .form_div .cCode .ccLbl,\n.main_content_div .form_div_otp .cCode .ccLbl {\n  margin: 0px;\n  color: white;\n  padding: 5px;\n}\n.main_content_div .form_div ion-item,\n.main_content_div .form_div_otp ion-item {\n  --border-radius: 20px;\n}\n.main_content_div .form_div ion-item ion-label,\n.main_content_div .form_div_otp ion-item ion-label {\n  color: gray !important;\n}\n.main_content_div .form_div ion-item ion-icon,\n.main_content_div .form_div_otp ion-item ion-icon {\n  padding: 0px !important;\n}\n.main_content_div .form_div ion-button,\n.main_content_div .form_div_otp ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: white;\n  --color: var(--ion-color-primary);\n  font-family: muli-bold;\n}\n.main_content_div .form_div .tri,\n.main_content_div .form_div_otp .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl,\n.main_content_div .form_div_otp .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span,\n.main_content_div .form_div_otp .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .form_div .div_chk,\n.main_content_div .form_div_otp .div_chk {\n  width: 100%;\n  margin: 20px 0px;\n  position: relative;\n}\n.main_content_div .form_div .div_chk .lbl_police,\n.main_content_div .form_div_otp .div_chk .lbl_police {\n  font-size: 10px;\n  margin-left: 40px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .form_div .div_chk .span_term,\n.main_content_div .form_div_otp .div_chk .span_term {\n  color: white;\n  margin-right: 10px;\n}\n.main_content_div .form_div .div_chk .chk,\n.main_content_div .form_div_otp .div_chk .chk {\n  --size: 20px;\n  --border-radius: 5px !important;\n  --border-color-checked: var(--ion-color-primary);\n}\n.main_content_div .form_div .div_chk .lbl_by,\n.main_content_div .form_div_otp .div_chk .lbl_by {\n  display: block;\n  font-size: 10px;\n  color: black;\n  margin-top: 10px;\n}\n.main_content_div .form_div .div_chk .span_termm,\n.main_content_div .form_div_otp .div_chk .span_termm {\n  color: #8992aa;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9FOlxcSW9uaWNcXFVzZXIvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0Usc0NBQUE7QURFRjtBQ0NBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QURFRjtBQ0FFO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBREVKO0FDQUU7RUFFRSxrQkFBQTtBRENKO0FDQUk7RUFFRSxXQUFBO0FEQ047QUNFRTs7RUFFRSxhQUFBO0VBRUEsa0JBQUE7QURESjtBQ0VJOztFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEQ047QUNDSTs7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBREVOO0FDQ0k7O0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBREVOO0FDQUk7O0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBREdOO0FDQUk7O0VBQ0UsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FER047QUNGTTs7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURLUjtBQ0RJOztFQUNFLHFCQUFBO0FESU47QUNITTs7RUFDRSxzQkFBQTtBRE1SO0FDSk07O0VBQ0UsdUJBQUE7QURPUjtBQ0hJOztFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7QURNTjtBQ0pJOztFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FET047QUNMSTs7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURRTjtBQ05JOztFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURTTjtBQ1BJOztFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEVU47QUNSTTs7RUFDRSxlQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBRFVSO0FDUE07O0VBQ0UsWUFBQTtFQUVBLGtCQUFBO0FEU1I7QUNOTTs7RUFDRSxZQUFBO0VBRUEsK0JBQUE7RUFDQSxnREFBQTtBRFFSO0FDTk07O0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURTUjtBQ1BNOztFQUNFLGNBQUE7RUFDQSxrQkFBQTtBRFVSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5pY29uRGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmljb25EaXYgLmljb24ge1xuICB3aWR0aDogNjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdixcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAge1xuICBwYWRkaW5nOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLm1haW5faGVhZCxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLm1haW5faGVhZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1sYWJlbCxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmZvcmdvdCxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLmZvcmdvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pbnB1dCxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5jQ29kZSxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLmNDb2RlIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuY0NvZGUgLmNjTGJsLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAuY0NvZGUgLmNjTGJsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pdGVtLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24taXRlbSBpb24tbGFiZWwsXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWl0ZW0gaW9uLWljb24sXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWJ1dHRvbixcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC50cmksXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC50cmkge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5sYmwsXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5sYmwge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLnNpZ251cF9zcGFuLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAuc2lnbnVwX3NwYW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2Noayxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLmRpdl9jaGsge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5kaXZfY2hrIC5sYmxfcG9saWNlLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAuZGl2X2NoayAubGJsX3BvbGljZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2NoayAuc3Bhbl90ZXJtLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAuZGl2X2NoayAuc3Bhbl90ZXJtIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmRpdl9jaGsgLmNoayxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLmRpdl9jaGsgLmNoayB7XG4gIC0tc2l6ZTogMjBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5kaXZfY2hrIC5sYmxfYnksXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5kaXZfY2hrIC5sYmxfYnkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmRpdl9jaGsgLnNwYW5fdGVybW0sXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5kaXZfY2hrIC5zcGFuX3Rlcm1tIHtcbiAgY29sb3I6ICM4OTkyYWE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAuaWNvbkRpdiB7XG4gICAgLy8gbWFyZ2luLXRvcDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLmljb24ge1xuICAgICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgfVxuICB9XG4gIC5mb3JtX2RpdixcbiAgLmZvcm1fZGl2X290cCB7XG4gICAgcGFkZGluZzogMjVweDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAubWFpbl9oZWFkIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmZvcmdvdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpb24taW5wdXQge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICB9XG5cbiAgICAuY0NvZGUge1xuICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgLmNjTGJsIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgIH1cbiAgICAudHJpIHtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB3aGl0ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTE1cHg7XG4gICAgfVxuICAgIC5sYmwge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuc2lnbnVwX3NwYW4ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLmRpdl9jaGsge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAubGJsX3BvbGljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgLy8gY29sb3I6IGJsYWNrO1xuICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICAuc3Bhbl90ZXJtIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAvLyBvcGFjaXR5OiAwLjU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmNoayB7XG4gICAgICAgIC0tc2l6ZTogMjBweDtcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kIDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgLmxibF9ieSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5zcGFuX3Rlcm1tIHtcbiAgICAgICAgY29sb3I6ICM4OTkyYWE7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../verify/verify.page */ "./src/app/pages/verify/verify.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let RegisterPage = class RegisterPage {
    constructor(navCtrl, util, router, api, iab, modalCtrl) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.router = router;
        this.api = api;
        this.iab = iab;
        this.modalCtrl = modalCtrl;
        this.mobile = "";
        this.cc = "";
        this.ccCode = "";
        this.countries = [];
        this.showOtp = true;
        this.dummy = [];
        this.dummy = this.util.countrys;
    }
    ngOnInit() { }
    openModal(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
                componentProps: { code: this.ccCode, mobile: this.mobile, uid: userId },
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
            });
            modal.present();
        });
    }
    login() {
        console.log("login");
        if (!this.check) {
            this.util.showToast(this.util.getString("Please accept terms and conditions"), "dark", "bottom");
            return false;
        }
        if (!this.mobile || this.ccCode === "" || !this.ccCode) {
            this.util.showToast(this.util.getString("All Fields are required"), "dark", "bottom");
            return false;
        }
        const param = {
            fcm_token: localStorage.getItem("fcm")
                ? localStorage.getItem("fcm")
                : "NA",
            type: "user",
            lat: "",
            lng: "",
            cover: "NA",
            mobile: "+" + this.ccCode + this.mobile,
            status: this.util.twillo === "1" ? 0 : 1,
            verified: 0,
            others: 1,
            date: moment__WEBPACK_IMPORTED_MODULE_5__().format("YYYY-MM-DD"),
            stripe_key: "",
        };
        console.log("param", param);
        this.loggedIn = true;
        this.api.post("users/registerUser", param).subscribe((data) => {
            this.loggedIn = false;
            console.log(data);
            if (data && data.status === 200) {
                this.util.userInfo = data.data;
                if (this.util.twillo === "1") {
                    console.log("open model=>>>");
                    localStorage.setItem("uMobile", "+" + this.ccCode + this.mobile);
                    this.openModal(data.data.id);
                }
                else {
                    localStorage.setItem("uid", data.data.id);
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
                    // this.sendVerification(
                    //   this.email,
                    //   this.api.baseUrl + "users/verify?uid=" + data.data.id
                    // );
                    this.navCtrl.navigateRoot([""]);
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
    goToLogin() {
        this.router.navigate(["/login"]);
    }
    sendVerification(mail, link) {
        const param = {
            email: mail,
            url: link,
        };
        this.api.post("users/sendVerificationMail", param).subscribe((data) => {
            console.log("mail", data);
        }, (error) => {
            console.log(error);
        });
    }
    onCountryInput(events) {
        console.log(events.detail.value);
        if (events.value !== "") {
            this.countries = this.dummy.filter((item) => {
                return (item.country_name
                    .toLowerCase()
                    .indexOf(events.detail.value.toLowerCase()) > -1);
            });
        }
        else {
            this.countries = [];
        }
    }
    selectedCC(item) {
        this.countries = [];
        console.log(item);
        this.cc = "+" + item.dialling_code + " " + item.country_name;
        this.ccCode = item.dialling_code;
    }
    open(type) {
        // https://initappz.com/groceryeeaagya/privacy.html
        // https://initappz.com/groceryeeaagya/eula.html
        if (type === "eula") {
            this.iab.create("https://initappz.com/groceryeeaagya/eula.html");
        }
        else {
            this.iab.create("https://initappz.com/groceryeeaagya/privacy.html");
        }
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map