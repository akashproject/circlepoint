(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header mode=\"ios\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Checkout')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <div class=\"coupones\" (click)=\"openCoupon()\">\n    <img src=\"assets/imgs/discount.png\" class=\"badge\" />\n    <ion-label class=\"title\">{{util.getString('Apply coupon code')}} <br>\n      <p *ngIf=\"cart.coupon\">{{util.getString('Coupon Applied')}} </p>\n    </ion-label>\n  </div>\n\n  <div class=\"billing\">\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTitle\"> {{util.getString('Item Total')}} </ion-label>\n      <ion-label class=\"price\">\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.totalPrice}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.totalPrice}} {{util.currecny}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"singleRow\" *ngIf=\"cart.coupon\">\n      <ion-label class=\"headerTitle\"> {{util.getString('Discount')}} </ion-label>\n      <ion-label class=\"price\">\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.discount}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.discount}} {{util.currecny}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTitle\"> {{util.getString('Taxes & Charges')}} </ion-label>\n      <ion-label class=\"price\">\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.orderTax}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.orderTax}} {{util.currecny}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTitle\"> {{util.getString('Delivery Charges')}} </ion-label>\n      <ion-label class=\"price\">\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.deliveryPrice}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.deliveryPrice}} {{util.currecny}} </span>\n      </ion-label>\n    </div>\n\n    <div class=\"singleRow\">\n      <ion-label class=\"headerTotal boldClass\"> {{util.getString('Grand Total')}} </ion-label>\n      <ion-label class=\"priceTotal boldClass\">\n\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.grandTotal}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.grandTotal}} {{util.currecny}} </span>\n      </ion-label>\n    </div>\n\n  </div>\n  <div class=\"header\">\n    <ion-label class=\"title\"> {{util.getString('Payment with')}} </ion-label>\n  </div>\n  <ion-item (click)=\"openStripe()\" lines=\"none\" *ngIf=\"havePayment && haveStripe\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/stripe.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with Stripe')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"createOrder()\" lines=\"none\" *ngIf=\"havePayment && haveCOD\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/cod.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Cash on Delivery')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"paypalPayment()\" lines=\"none\" *ngIf=\"havePayment && havePayPal\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/paypal.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with PayPal')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"paytm()\" lines=\"none\" *ngIf=\"havePayment && havePayTM\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/paytm.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with PayTM')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n\n  <ion-item (click)=\"instaPay()\" lines=\"none\" *ngIf=\"havePayment && haveInstamojo\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/instamojoapp.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with Instamojo')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"proceed()\" lines=\"none\" *ngIf=\"havePayment && haveRazor\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/razor.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with RazorPay')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"paystackPay()\" lines=\"none\" *ngIf=\"havePayment && havepayStack\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/paystack.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with PayStack')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n\n  <ion-item (click)=\"flutterpay()\" lines=\"none\" *ngIf=\"havePayment && havepayStack\">\n    <ion-thumbnail slot=\"start\">\n      <img src=\"assets/imgs/flutter.png\" />\n    </ion-thumbnail>\n    <ion-label> {{util.getString('Pay with Flutterwave')}} </ion-label>\n    <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/payment/payment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");

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
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/pages/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"],
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.coupones {\n  display: flex;\n  padding: 20px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n.coupones .badge {\n  width: 25px;\n  height: 25px;\n}\n.coupones .title {\n  padding: 0px 10px;\n  color: var(--ion-color-primary);\n}\n.billing {\n  padding: 5px 10px;\n}\n.billing .singleRow {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0px;\n  border-bottom: 1px dashed lightgray;\n}\n.billing .singleRow .headerTitle {\n  font-size: 0.8rem;\n}\n.billing .singleRow .boldClass {\n  font-weight: bold;\n}\n.billing .singleRow .headerTotal {\n  font-size: 1rem;\n}\n.billing .singleRow .priceTotal {\n  font-size: 1rem;\n}\n.billing .singleRow .price {\n  font-size: 0.8rem;\n}\n.header {\n  background: #f3f3f3;\n  padding: 20px;\n  margin-top: 20px;\n}\n.header .title {\n  font-size: 1rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXHBheW1lbnRcXHBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBREVKO0FDREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBREdSO0FDREk7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0FER1I7QUNBQTtFQUNJLGlCQUFBO0FER0o7QUNGSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7QURJUjtBQ0hRO0VBQ0ksaUJBQUE7QURLWjtBQ0hRO0VBQ0ksaUJBQUE7QURLWjtBQ0hRO0VBQ0ksZUFBQTtBREtaO0FDSFE7RUFDSSxlQUFBO0FES1o7QUNIUTtFQUNJLGlCQUFBO0FES1o7QUNBQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FER0o7QUNGSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBRElSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uY291cG9uZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY291cG9uZXMgLmJhZGdlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cbi5jb3Vwb25lcyAudGl0bGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmJpbGxpbmcge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5iaWxsaW5nIC5zaW5nbGVSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbn1cbi5iaWxsaW5nIC5zaW5nbGVSb3cgLmhlYWRlclRpdGxlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uYmlsbGluZyAuc2luZ2xlUm93IC5ib2xkQ2xhc3Mge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5iaWxsaW5nIC5zaW5nbGVSb3cgLmhlYWRlclRvdGFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmJpbGxpbmcgLnNpbmdsZVJvdyAucHJpY2VUb3RhbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5iaWxsaW5nIC5zaW5nbGVSb3cgLnByaWNlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmhlYWRlciAudGl0bGUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uY291cG9uZXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5iYWRnZXtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gICAgLnRpdGxle1xuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTs7XG4gICAgfVxufVxuLmJpbGxpbmd7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgLnNpbmdsZVJvd3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgIC5oZWFkZXJUaXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5ib2xkQ2xhc3N7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyVG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNlVG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnByaWNle1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLnRpdGxle1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let PaymentPage = class PaymentPage {
    constructor(router, navCtrl, cart, util, api, iab) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.util = util;
        this.api = api;
        this.iab = iab;
        this.instamojo = {
            key: '',
            token: '',
            code: ''
        };
        this.paystack = {
            pk: '',
            sk: '',
            code: ''
        };
        this.flutterwave = {
            pk: '',
            code: ''
        };
        console.log('delivery at', this.cart.deliveryAt);
        this.util.getCouponObservable().subscribe((data) => {
            console.log(data);
            this.cart.calcuate();
            console.log(this.cart.discount);
        }, error => {
            console.log(error);
        });
        this.getPayments();
    }
    getPayments() {
        this.util.show();
        this.api.get('payments').subscribe((data) => {
            console.log(data);
            this.util.hide();
            if (data && data.status === 200 && data.data) {
                const info = data.data.filter(x => x.status === '1');
                console.log('total payments', info);
                if (info && info.length > 0) {
                    console.log('---->>', info);
                    this.havePayment = true;
                    const stripe = info.filter(x => x.id === '1');
                    this.haveStripe = stripe && stripe.length > 0 ? true : false;
                    const cod = info.filter(x => x.id === '2');
                    this.haveCOD = cod && cod.length > 0 ? true : false;
                    const payPal = info.filter(x => x.id === '3');
                    this.havePayPal = payPal && payPal.length > 0 ? true : false;
                    const razor = info.filter(x => x.id === '4');
                    this.haveRazor = razor && razor.length > 0 ? true : false;
                    const paytm = info.filter(x => x.id === '5');
                    this.havePayTM = paytm && paytm.length > 0 ? true : false;
                    const insta = info.filter(x => x.id === '6');
                    this.haveInstamojo = insta && insta.length > 0 ? true : false;
                    const paystack = info.filter(x => x.id === '7');
                    this.havepayStack = paystack && paystack.length > 0 ? true : false;
                    const flutterwave = info.filter(x => x.id === '8');
                    this.haveflutterwave = flutterwave && flutterwave.length > 0 ? true : false;
                    if (this.haveStripe) {
                        // this.util.stripe = stripe;
                        if (stripe) {
                            const creds = JSON.parse(stripe[0].creds);
                            if (stripe[0].env === '1') {
                                this.util.stripe = creds.live;
                            }
                            else {
                                this.util.stripe = creds.test;
                            }
                            this.util.stripeCode = creds && creds.code ? creds.code : 'USD';
                        }
                        console.log('============>>', this.util.stripe);
                    }
                    if (this.haveInstamojo) {
                        const datas = info.filter(x => x.id === '6');
                        this.instaENV = datas[0].env;
                        if (insta) {
                            const instaPay = JSON.parse(datas[0].creds);
                            this.instamojo = instaPay;
                            console.log('instaMOJO', this.instamojo);
                        }
                    }
                    if (this.haveRazor) {
                        const razorPay = info.filter(x => x.id === '4');
                        const env = razorPay[0].env;
                        if (razorPay) {
                            const keys = JSON.parse(razorPay[0].creds);
                            console.log('evnof razor pay', env);
                            this.razorKey = env === '0' ? keys.test : keys.live;
                            console.log('----------', this.razorKey);
                        }
                    }
                    if (this.havepayStack) {
                        const keys = JSON.parse(paystack[0].creds);
                        this.paystack = keys;
                        console.log('paystack variables', this.paystack);
                    }
                    if (this.haveflutterwave) {
                        const keys = JSON.parse(flutterwave[0].creds);
                        this.flutterwave = keys;
                        console.log('flutterwave config', this.flutterwave);
                    }
                }
                else {
                    this.havePayment = false;
                    this.util.showToast(this.util.getString('No Payment Found'), 'danger', 'bottom');
                }
            }
            else {
                this.havePayment = false;
                this.util.showToast(this.util.getString('No Payment Found'), 'danger', 'bottom');
            }
        }, error => {
            console.log(error);
            this.util.hide();
            this.havePayment = false;
            this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
        });
    }
    ngOnInit() {
    }
    proceed() {
        // this.util.errorToast('ongoing');
        const options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        const param = {
            key: this.razorKey,
            amount: this.cart.grandTotal ? this.cart.grandTotal * 100 : 5,
            email: this.getEmail(),
            logo: this.api.mediaURL + this.util.logo
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        const url = this.api.baseUrl + 'razorpay?' + this.api.JSON_to_URLEncoded(param);
        const browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(event => {
            console.log('event?;>11', event);
            const navUrl = event.url;
            if (navUrl.includes('success')) {
                console.log('close');
                browser.close();
                const urlItems = new URL(event.url);
                const orderId = urlItems.searchParams.get('id');
                this.makeOrder('razorpay', orderId);
            }
        });
    }
    cardInfo(val) {
    }
    openStripe() {
        this.router.navigate(['tabs/cart/stripe-payments']);
    }
    goToSucess() {
        this.router.navigate(['/success']);
    }
    back() {
        this.navCtrl.back();
    }
    openCoupon() {
        this.router.navigate(['offers']);
    }
    createOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //////////// new
            //////////// new
            const storeId = [...new Set(this.cart.cart.map(item => item.store_id))];
            const orderStatus = [];
            storeId.forEach(element => {
                const info = {
                    id: element,
                    status: 'created'
                };
                orderStatus.push(info);
            });
            const notes = [
                {
                    status: 1,
                    value: 'Order Created',
                    time: moment__WEBPACK_IMPORTED_MODULE_7__().format('lll'),
                }
            ];
            const param = {
                uid: localStorage.getItem('uid'),
                store_id: storeId.join(),
                date_time: this.cart.datetime === 'today' ? moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_7__().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                paid_method: 'cod',
                order_to: this.cart.deliveryAt,
                orders: JSON.stringify(this.cart.cart),
                notes: JSON.stringify(notes),
                address: this.cart.deliveryAt === 'home' ? JSON.stringify(this.cart.deliveryAddress) : '',
                driver_id: '',
                total: this.cart.totalPrice,
                tax: this.cart.orderTax,
                grand_total: this.cart.grandTotal,
                delivery_charge: this.cart.deliveryPrice,
                coupon_code: this.cart.coupon ? JSON.stringify(this.cart.coupon) : '',
                discount: this.cart.discount,
                pay_key: '',
                status: JSON.stringify(orderStatus),
                assignee: ''
            };
            console.log('param----->', param);
            this.util.show();
            this.api.post('orders/save', param).subscribe((data) => {
                console.log(data);
                this.util.hide();
                this.api.createOrderNotification(this.cart.stores);
                this.cart.clearCart();
                this.util.publishNewOrder();
                this.navCtrl.navigateRoot(['/tabs/orders'], { replaceUrl: true, skipLocationChange: true });
            }, error => {
                console.log(error);
                this.util.hide();
                this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
            });
        });
    }
    makeOrder(method, key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //////////// new
            //////////// new
            const storeId = [...new Set(this.cart.cart.map(item => item.store_id))];
            const orderStatus = [];
            storeId.forEach(element => {
                const info = {
                    id: element,
                    status: 'created'
                };
                orderStatus.push(info);
            });
            const notes = [
                {
                    status: 1,
                    value: 'Order Created',
                    time: moment__WEBPACK_IMPORTED_MODULE_7__().format('lll'),
                }
            ];
            const param = {
                uid: localStorage.getItem('uid'),
                store_id: storeId.join(),
                date_time: this.cart.datetime === 'today' ? moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_7__().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                paid_method: method,
                order_to: this.cart.deliveryAt,
                orders: JSON.stringify(this.cart.cart),
                notes: JSON.stringify(notes),
                address: this.cart.deliveryAt === 'home' ? JSON.stringify(this.cart.deliveryAddress) : '',
                driver_id: '',
                total: this.cart.totalPrice,
                tax: this.cart.orderTax,
                grand_total: this.cart.grandTotal,
                delivery_charge: this.cart.deliveryPrice,
                coupon_code: this.cart.coupon ? JSON.stringify(this.cart.coupon) : '',
                discount: this.cart.discount,
                pay_key: key,
                status: JSON.stringify(orderStatus),
                assignee: ''
            };
            console.log('param----->', param);
            this.util.show();
            this.api.post('orders/save', param).subscribe((data) => {
                console.log(data);
                this.util.hide();
                this.api.createOrderNotification(this.cart.stores);
                this.cart.clearCart();
                this.util.publishNewOrder();
                this.navCtrl.navigateRoot(['/tabs/orders'], { replaceUrl: true, skipLocationChange: true });
            }, error => {
                console.log(error);
                this.util.hide();
                this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
            });
        });
    }
    paypalPayment() {
        const options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        const param = {
            uid: localStorage.getItem('uid'),
            itemName: 'groceryee',
            grandTotal: this.cart.grandTotal,
            dateTime: moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD HH:mm'),
            logo: this.api.mediaURL + this.util.logo
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        const url = this.api.baseUrl + 'paypal/buyProduct?' + this.api.JSON_to_URLEncoded(param);
        const browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(event => {
            console.log('event?;>11', event);
            const navUrl = event.url;
            if (navUrl.includes('success') || navUrl.includes('checkout/done')) {
                console.log('close');
                browser.close();
                this.makeOrder('paypal', 'fromApp');
            }
        });
    }
    flutterpay() {
        const options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        const param = {
            key: this.flutterwave.pk,
            amount: this.cart.grandTotal,
            email: this.getEmail(),
            phone: this.util.userInfo.mobile,
            name: this.getName(),
            code: this.flutterwave.code,
            logo: this.api.mediaURL + this.util.logo
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        const url = this.api.baseUrl + 'flutterwave?' + this.api.JSON_to_URLEncoded(param);
        const browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(event => {
            console.log('event?;>11', event);
            const navUrl = event.url;
            if (navUrl.includes('success') || navUrl.includes('closed')) {
                console.log('close');
                browser.close();
                if (navUrl.includes('success')) {
                    const urlItems = new URL(event.url);
                    const orderId = urlItems.searchParams.get('transaction_id');
                    this.makeOrder('flutterwave', orderId);
                }
            }
        });
    }
    paystackPay() {
        const options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        const paykey = '' + Math.floor((Math.random() * 1000000000) + 1);
        const param = {
            key: this.paystack.pk,
            email: this.util.userInfo.email,
            amount: this.cart.grandTotal * 100,
            firstname: this.util.userInfo.first_name,
            lastname: this.util.userInfo.last_name,
            ref: paykey
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        const url = this.api.baseUrl + 'paystack?' + this.api.JSON_to_URLEncoded(param);
        const browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(event => {
            console.log('event?;>11', event);
            const navUrl = event.url;
            if (navUrl.includes('success') || navUrl.includes('close')) {
                console.log('close');
                browser.close();
                if (navUrl.includes('success')) {
                    console.log('closed---->>>>>');
                    this.makeOrder('paystack', paykey);
                }
                else {
                    console.log('closed');
                }
            }
        });
    }
    paytm() {
        const options = {
            location: 'no',
            clearcache: 'yes',
            zoom: 'yes',
            toolbar: 'yes',
            closebuttoncaption: 'close'
        };
        const orderId = this.util.makeid(20);
        const param = {
            ORDER_ID: orderId,
            CUST_ID: localStorage.getItem('uid'),
            INDUSTRY_TYPE_ID: 'Retail',
            CHANNEL_ID: 'WAP',
            TXN_AMOUNT: this.cart.grandTotal ? this.cart.grandTotal : 5
        };
        console.log('to url===>', this.api.JSON_to_URLEncoded(param));
        const url = this.api.baseUrl + 'paytm/pay?' + this.api.JSON_to_URLEncoded(param);
        const browser = this.iab.create(url, '_blank', options);
        browser.on('loadstop').subscribe(event => {
            console.log('event?;>11', event);
            const navUrl = event.url;
            if (navUrl.includes('success')) {
                console.log('close');
                browser.close();
                this.makeOrder('paytm', orderId);
            }
        });
    }
    getName() {
        return this.util.userInfo && this.util.userInfo.first_name ? this.util.userInfo.first_name + ' ' + this.util.userInfo.last_name : 'Groceryee';
    }
    getEmail() {
        return this.util.userInfo && this.util.userInfo.email ? this.util.userInfo.email : 'info@groceryee.com';
    }
    instaPay() {
        let url;
        if (this.instaENV === '0') {
            url = 'https://test.instamojo.com/api/1.1/payment-requests/';
        }
        else {
            url = 'https://www.instamojo.com/api/1.1/payment-requests/';
        }
        ;
        const param = {
            allow_repeated_payments: 'False',
            amount: this.cart.grandTotal,
            buyer_name: this.getName(),
            purpose: 'Groceryee order',
            redirect_url: this.api.baseUrl + 'paypal/success',
            phone: this.util.userInfo && this.util.userInfo.mobile ? this.util.userInfo.mobile : '',
            send_email: 'True',
            webhook: this.api.baseUrl,
            send_sms: 'True',
            email: this.getEmail()
        };
        this.util.show();
        this.api.instaPay(url, param, this.instamojo.key, this.instamojo.token).then((data) => {
            console.log(data);
            this.util.hide();
            console.log(JSON.parse(data.data));
            const info = JSON.parse(data.data);
            console.log('data.status', data.status);
            if (data.status === 201 && info && info.success === true) {
                const options = {
                    location: 'no',
                    clearcache: 'yes',
                    zoom: 'yes',
                    toolbar: 'yes',
                    closebuttoncaption: 'close'
                };
                const browser = this.iab.create(info.payment_request.longurl, '_blank', options);
                browser.on('loadstop').subscribe(event => {
                    const navUrl = event.url;
                    console.log('navURL', navUrl);
                    if (navUrl.includes('success')) {
                        browser.close();
                        const urlItems = new URL(event.url);
                        console.log(urlItems);
                        const orderId = urlItems.searchParams.get('payment_id');
                        this.makeOrder('instamojo', orderId);
                    }
                });
            }
            else {
                const error = JSON.parse(data.error);
                console.log('error message', error);
                if (error && error.message) {
                    this.util.showToast(error.message, 'danger', 'bottom');
                    return false;
                }
                this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
            }
        }, error => {
            console.log(error);
            this.util.hide();
            const message = JSON.parse(error.error);
            console.log('error message', message);
            if (message && message.message) {
                this.util.showToast(message.message, 'danger', 'bottom');
                return false;
            }
            this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
        }).catch(error => {
            console.log(error);
            this.util.hide();
            const message = JSON.parse(error.error);
            console.log('error message', message);
            if (message && message.message) {
                this.util.showToast(message.message, 'danger', 'bottom');
                return false;
            }
            this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"] }
];
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]])
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=payment-payment-module-es2015.js.map