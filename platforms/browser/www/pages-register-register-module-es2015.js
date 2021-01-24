(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"iconDiv\">\n      <img src=\"assets/imgs/icon.png\" alt=\"\" class=\"icon\" />\n    </div>\n    <div class=\"form_div\" *ngIf=\"!showOtp\">\n      <ion-label class=\"main_head\"> {{util.getString('Sign Up')}} </ion-label>\n      <ion-input\n        type=\"number\"\n        [placeholder]=\"util.getString('Mobile')\"\n        [(ngModel)]=\"mobile\"\n      >\n        <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <div class=\"div_chk\">\n        <ion-checkbox\n          [checked]=\"check\"\n          [(ngModel)]=\"check\"\n          color=\"light\"\n          class=\"chk\"\n        ></ion-checkbox>\n        <ion-label class=\"lbl_police\"\n          ><span class=\"span_term\">\n            {{util.getString('By clicking on the I agree button click, download\n            or if you use the Application, you agree to be bound by the')}}\n          </span>\n          <u>\n            <a style=\"color: white\" (click)=\"open('eula')\">\n              {{util.getString('EULA certificate')}}\n            </a>\n          </u>\n          {{util.getString('and')}}\n          <u>\n            <a style=\"color: white\" (click)=\"open('privacy')\">\n              {{util.getString('Privacy Policy')}}\n            </a>\n          </u>\n          {{util.getString('of this app')}}.\n        </ion-label>\n      </div>\n      <ion-button expand=\"block\" (click)=\"sendOtp(false)\" [disabled]=\"loggedIn\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('Next')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n\n      <ion-label class=\"lbl\" (click)=\"goToLogin()\">\n        {{util.getString('Already have an account ?')}}\n        <span class=\"signup_span\"> {{util.getString('Sign In')}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"form_div_otp\" *ngIf=\"showOtp\">\n      <ion-label class=\"main_head\">\n        {{util.getString('Verify OTP')}}\n      </ion-label>\n      <ion-label class=\"lbl_police\">\n        <span class=\"span_term\">\n          {{util.getString('We have sent you one time password to your mobile\n          number')}}\n        </span>\n      </ion-label>\n      <ion-input\n        type=\"number\"\n        [placeholder]=\"util.getString('Enter Otp')\"\n        [(ngModel)]=\"otp_value\"\n      >\n        <ion-icon name=\"call\" slot=\"icon-only\"></ion-icon>\n      </ion-input>\n\n      <ion-button expand=\"block\" (click)=\"verifyOtp()\" [disabled]=\"loggedIn\">\n        <span *ngIf=\"!loggedIn\"> {{util.getString('Verify otp')}} </span>\n        <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n      </ion-button>\n      <ion-label class=\"lbl\" (click)=\"sendOtp(true)\">\n        {{util.getString('Did not get otp ?')}}\n        <span class=\"signup_span\"> {{util.getString('Resend Otp')}} </span>\n      </ion-label>\n      <ion-label class=\"lbl\" (click)=\"goToLogin()\">\n        {{util.getString('Already have an account ?')}}\n        <span class=\"signup_span\"> {{util.getString('Sign In')}} </span>\n      </ion-label>\n    </div>\n  </div>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-content {\n  --background: var(--ion-color-primary);\n}\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div,\n.main_content_div .form_div_otp {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head,\n.main_content_div .form_div_otp .main_head {\n  display: block;\n  text-align: left;\n  color: white;\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label,\n.main_content_div .form_div_otp ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot,\n.main_content_div .form_div_otp .forgot {\n  display: block;\n  text-align: right;\n  color: white;\n}\n.main_content_div .form_div ion-input,\n.main_content_div .form_div_otp ion-input {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n}\n.main_content_div .form_div .cCode,\n.main_content_div .form_div_otp .cCode {\n  padding: 0px 10px;\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 5px;\n}\n.main_content_div .form_div .cCode .ccLbl,\n.main_content_div .form_div_otp .cCode .ccLbl {\n  margin: 0px;\n  color: white;\n  padding: 5px;\n}\n.main_content_div .form_div ion-item,\n.main_content_div .form_div_otp ion-item {\n  --border-radius: 20px;\n}\n.main_content_div .form_div ion-item ion-label,\n.main_content_div .form_div_otp ion-item ion-label {\n  color: gray !important;\n}\n.main_content_div .form_div ion-item ion-icon,\n.main_content_div .form_div_otp ion-item ion-icon {\n  padding: 0px !important;\n}\n.main_content_div .form_div ion-button,\n.main_content_div .form_div_otp ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: white;\n  --color: var(--ion-color-primary);\n  font-family: muli-bold;\n}\n.main_content_div .form_div .tri,\n.main_content_div .form_div_otp .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl,\n.main_content_div .form_div_otp .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span,\n.main_content_div .form_div_otp .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .form_div .div_chk,\n.main_content_div .form_div_otp .div_chk {\n  width: 100%;\n  margin: 20px 0px;\n  position: relative;\n}\n.main_content_div .form_div .div_chk .lbl_police,\n.main_content_div .form_div_otp .div_chk .lbl_police {\n  font-size: 10px;\n  margin-left: 40px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.main_content_div .form_div .div_chk .span_term,\n.main_content_div .form_div_otp .div_chk .span_term {\n  color: white;\n  margin-right: 10px;\n}\n.main_content_div .form_div .div_chk .chk,\n.main_content_div .form_div_otp .div_chk .chk {\n  --size: 20px;\n  --border-radius: 5px !important;\n  --border-color-checked: var(--ion-color-primary);\n}\n.main_content_div .form_div .div_chk .lbl_by,\n.main_content_div .form_div_otp .div_chk .lbl_by {\n  display: block;\n  font-size: 10px;\n  color: black;\n  margin-top: 10px;\n}\n.main_content_div .form_div .div_chk .span_termm,\n.main_content_div .form_div_otp .div_chk .span_termm {\n  color: #8992aa;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDRSxzQ0FBQTtBREVGO0FDQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBREVGO0FDQUU7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FERUo7QUNBRTtFQUVFLGtCQUFBO0FEQ0o7QUNBSTtFQUVFLFdBQUE7QURDTjtBQ0VFOztFQUVFLGFBQUE7RUFFQSxrQkFBQTtBRERKO0FDRUk7O0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURDTjtBQ0NJOztFQUNFLGVBQUE7RUFDQSxZQUFBO0FERU47QUNDSTs7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FERU47QUNBSTs7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FER047QUNBSTs7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QURHTjtBQ0ZNOztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBREtSO0FDREk7O0VBQ0UscUJBQUE7QURJTjtBQ0hNOztFQUNFLHNCQUFBO0FETVI7QUNKTTs7RUFDRSx1QkFBQTtBRE9SO0FDSEk7O0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBRE1OO0FDSkk7O0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURPTjtBQ0xJOztFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRFFOO0FDTkk7O0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRFNOO0FDUEk7O0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURVTjtBQ1JNOztFQUNFLGVBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FEVVI7QUNQTTs7RUFDRSxZQUFBO0VBRUEsa0JBQUE7QURTUjtBQ05NOztFQUNFLFlBQUE7RUFFQSwrQkFBQTtFQUNBLGdEQUFBO0FEUVI7QUNOTTs7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRFNSO0FDUE07O0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FEVVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ1JTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmljb25EaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaWNvbkRpdiAuaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2LFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubWFpbl9oZWFkLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAubWFpbl9oZWFkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWxhYmVsLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZm9yZ290LFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAuZm9yZ290IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWlucHV0LFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCBpb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmNDb2RlLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAuY0NvZGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5jQ29kZSAuY2NMYmwsXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5jQ29kZSAuY2NMYmwge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWl0ZW0sXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pdGVtIGlvbi1sYWJlbCxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24taXRlbSBpb24taWNvbixcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiBpb24tYnV0dG9uLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLnRyaSxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLnRyaSB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmxibCxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLmxibCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuc2lnbnVwX3NwYW4sXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5zaWdudXBfc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5kaXZfY2hrLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAuZGl2X2NoayB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmRpdl9jaGsgLmxibF9wb2xpY2UsXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5kaXZfY2hrIC5sYmxfcG9saWNlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5kaXZfY2hrIC5zcGFuX3Rlcm0sXG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXZfb3RwIC5kaXZfY2hrIC5zcGFuX3Rlcm0ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2NoayAuY2hrLFxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2X290cCAuZGl2X2NoayAuY2hrIHtcbiAgLS1zaXplOiAyMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmRpdl9jaGsgLmxibF9ieSxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLmRpdl9jaGsgLmxibF9ieSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuZGl2X2NoayAuc3Bhbl90ZXJtbSxcbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2Rpdl9vdHAgLmRpdl9jaGsgLnNwYW5fdGVybW0ge1xuICBjb2xvcjogIzg5OTJhYTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDUlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5pY29uRGl2IHtcbiAgICAvLyBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAuaWNvbiB7XG4gICAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICB9XG4gIH1cbiAgLmZvcm1fZGl2LFxuICAuZm9ybV9kaXZfb3RwIHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5tYWluX2hlYWQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZm9yZ290IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1pbnB1dCB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIH1cblxuICAgIC5jQ29kZSB7XG4gICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAuY2NMYmwge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgfVxuICAgIC50cmkge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTVweDtcbiAgICB9XG4gICAgLmxibCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5zaWdudXBfc3BhbiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuZGl2X2NoayB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5sYmxfcG9saWNlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAvLyBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICB9XG5cbiAgICAgIC5zcGFuX3Rlcm0ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8vIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuY2hrIHtcbiAgICAgICAgLS1zaXplOiAyMHB4O1xuICAgICAgICAvLyAtLWJhY2tncm91bmQgOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICB9XG4gICAgICAubGJsX2J5IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgICAgLnNwYW5fdGVybW0ge1xuICAgICAgICBjb2xvcjogIzg5OTJhYTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */");

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
        this.ccCode = "91";
        this.countries = [];
        this.showOtp = false;
        this.otp_value = "";
        this.hidden_otp_value = "";
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
    sendOtp(resend) {
        if (!this.mobile) {
            this.util.showToast(this.util.getString("All Fields are required"), "dark", "bottom");
            return false;
        }
        const param = {
            mobile: "+91" + this.mobile,
        };
        if (!resend) {
            this.showOtp = true;
        }
        this.api.post("users/sendRegistrationOtp", param).subscribe((data) => {
            if (data && data.status === 200) {
                this.showOtp = true;
                this.hidden_otp_value = data.data.otp_value;
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
    verifyOtp() {
        if (this.hidden_otp_value == this.otp_value) {
            //this.navCtrl.navigateRoot([""]);
            this.registration();
        }
        else {
            this.util.errorToast("invalid one time password");
        }
    }
    registration() {
        if (!this.check) {
            this.util.showToast(this.util.getString("Please accept terms and conditions"), "dark", "bottom");
            return false;
        }
        console.log("registration");
        const param = {
            fcm_token: localStorage.getItem("fcm")
                ? localStorage.getItem("fcm")
                : "NA",
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
            stripe_key: "",
        };
        console.log("param", param);
        this.loggedIn = true;
        this.api.post("users/registerUserByOtp", param).subscribe((data) => {
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