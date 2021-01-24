(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stripe-payments-stripe-payments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Pay with Stripe')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdd()\">\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_content\">\n    <div *ngIf=\"!cards?.length\">\n      <p class=\"ion-text-center\"> {{util.getString('No Card Found Please Add Card')}} </p>\n    </div>\n    <ion-radio-group [(ngModel)]=\"token\">\n      <ion-item class=\"div_inner\" lines=\"none\" *ngFor=\"let card of cards;let i = index\">\n        <ion-thumbnail slot=\"end\">\n          {{card.brand}}\n        </ion-thumbnail>\n        <ion-radio (ionSelect)=\"changeMethod(card.id)\" [value]=\"card.id\" slot=\"start\"></ion-radio>\n        <ion-label>XXXX{{card.last4}} <br> {{util.getString('Expiry')}} {{card.exp_month}} / {{card.exp_year}}\n        </ion-label>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button expand=\"block\" *ngIf=\"cards?.length\" class=\"btn_addcard\" (click)=\"payment()\">\n      {{util.getString('Payment')}} &nbsp;\n      <span *ngIf=\"util.cside ==='left'\">\n        {{util.currecny}} {{cart.grandTotal}}\n      </span>\n      <span *ngIf=\"util.cside ==='right'\">\n        {{cart.grandTotal}} {{util.currecny}}\n      </span>\n    </ion-button>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/stripe-payments/stripe-payments-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: StripePaymentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentsPageRoutingModule", function() { return StripePaymentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stripe-payments.page */ "./src/app/pages/stripe-payments/stripe-payments.page.ts");

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
        component: _stripe_payments_page__WEBPACK_IMPORTED_MODULE_3__["StripePaymentsPage"]
    }
];
let StripePaymentsPageRoutingModule = class StripePaymentsPageRoutingModule {
};
StripePaymentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StripePaymentsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/stripe-payments/stripe-payments.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments.module.ts ***!
  \*****************************************************************/
/*! exports provided: StripePaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentsPageModule", function() { return StripePaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stripe-payments-routing.module */ "./src/app/pages/stripe-payments/stripe-payments-routing.module.ts");
/* harmony import */ var _stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stripe-payments.page */ "./src/app/pages/stripe-payments/stripe-payments.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let StripePaymentsPageModule = class StripePaymentsPageModule {
};
StripePaymentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _stripe_payments_routing_module__WEBPACK_IMPORTED_MODULE_5__["StripePaymentsPageRoutingModule"]
        ],
        declarations: [_stripe_payments_page__WEBPACK_IMPORTED_MODULE_6__["StripePaymentsPage"]]
    })
], StripePaymentsPageModule);



/***/ }),

/***/ "./src/app/pages/stripe-payments/stripe-payments.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.btn_right {\n  position: relative;\n  z-index: 999999;\n}\n.img_menu {\n  width: 17px;\n  position: absolute;\n  right: 20px;\n}\n.div_content {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.div_content .div_inner {\n  width: 100%;\n  margin-top: 15px;\n  padding-bottom: 15px;\n}\n.div_content .div_inner .r {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.div_content .div_inner .lbl_number {\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n}\n.div_content .div_inner .img_visa {\n  float: right;\n  position: absolute;\n  top: 50%;\n  display: block;\n  font-size: 17px;\n  color: gray;\n  margin-left: 10px;\n  transform: translateY(-50%);\n  height: 15px !important;\n  width: 50px !important;\n}\n.btn_addcard {\n  margin-top: 30px;\n  --box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RyaXBlLXBheW1lbnRzL3N0cmlwZS1wYXltZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N0cmlwZS1wYXltZW50cy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50L3NyY1xcYXBwXFxwYWdlc1xcc3RyaXBlLXBheW1lbnRzXFxzdHJpcGUtcGF5bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FERUo7QUNBQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURHSjtBQ0RBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURJSjtBQ0ZJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QURJUjtBQ0ZRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QURJWjtBQ0ZRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QURJWjtBQ0ZRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FESVo7QUNBQTtFQUNJLGdCQUFBO0VBQ0EsNkJBQUE7QURHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0cmlwZS1wYXltZW50cy9zdHJpcGUtcGF5bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5idG5fcmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTk5OTtcbn1cblxuLmltZ19tZW51IHtcbiAgd2lkdGg6IDE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5kaXZfY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5kaXZfY29udGVudCAuZGl2X2lubmVyIC5yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuLmRpdl9jb250ZW50IC5kaXZfaW5uZXIgLmxibF9udW1iZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZGl2X2NvbnRlbnQgLmRpdl9pbm5lciAuaW1nX3Zpc2Ege1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bl9hZGRjYXJkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5idG5fcmlnaHR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDk5OTk5OTtcbn1cbi5pbWdfbWVudXtcbiAgICB3aWR0aDogMTdweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG59XG4uZGl2X2NvbnRlbnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAuZGl2X2lubmVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgLnJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAubGJsX251bWJlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nX3Zpc2F7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5idG5fYWRkY2FyZHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/stripe-payments/stripe-payments.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/stripe-payments/stripe-payments.page.ts ***!
  \***************************************************************/
/*! exports provided: StripePaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentsPage", function() { return StripePaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let StripePaymentsPage = class StripePaymentsPage {
    constructor(router, api, util, navCtrl, cart) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.cards = [];
        // const items = this.cart.cart;
    }
    ngOnInit() {
    }
    getCards() {
        console.log(this.util.userInfo.stripe_key);
        this.api.httpGet('https://api.stripe.com/v1/customers/' + this.util.userInfo.stripe_key +
            '/sources?object=card', this.util.stripe).subscribe((cards) => {
            console.log(cards);
            if (cards && cards.data) {
                this.cards = cards.data;
                this.token = this.cards[0].id;
            }
        }, (error) => {
            console.log(error);
            if (error && error.error && error.error.error && error.error.error.message) {
                this.util.showErrorAlert(error.error.error.message);
                return false;
            }
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    payment() {
        console.log('place order');
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: this.util.getString('Are you sure?'),
            text: this.util.getString('Orders once placed cannot be cancelled and are non-refundable'),
            icon: 'question',
            confirmButtonText: this.util.getString('Yes'),
            cancelButtonText: this.util.getString('cancel'),
            showCancelButton: true,
            backdrop: false,
            background: 'white'
        }).then((data) => {
            console.log(data);
            if (data && data.value) {
                console.log('go to procesed,,');
                const options = {
                    amount: this.cart.grandTotal * 100,
                    currency: this.util.stripeCode,
                    customer: this.util.userInfo.stripe_key,
                    card: this.token,
                };
                console.log('options', options);
                const url = 'https://api.stripe.com/v1/charges';
                this.util.show();
                this.api.externalPost(url, options, this.util.stripe).subscribe((data) => {
                    console.log('------------------------->', data);
                    this.paykey = data.id;
                    this.util.hide();
                    this.util.showToast(this.util.getString('Payment Success'), 'success', 'bottom');
                    this.createOrder();
                }, (error) => {
                    this.util.hide();
                    console.log(error);
                    this.util.hide();
                    if (error && error.error && error.error.error && error.error.error.message) {
                        this.util.showErrorAlert(error.error.error.message);
                        return false;
                    }
                    this.util.errorToast(this.util.getString('Something went wrong'));
                });
            }
        });
    }
    createOrder() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // 2020-07-23 14:09:19
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
                    time: moment__WEBPACK_IMPORTED_MODULE_8__().format('lll'),
                }
            ];
            const param = {
                uid: localStorage.getItem('uid'),
                store_id: storeId.join(),
                date_time: this.cart.datetime === 'today' ? moment__WEBPACK_IMPORTED_MODULE_8__().format('YYYY-MM-DD HH:mm:ss') : moment__WEBPACK_IMPORTED_MODULE_8__().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                paid_method: 'stripe',
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
                this.navCtrl.navigateRoot(['/tabs/orders']);
            }, error => {
                console.log(error);
                this.util.hide();
                this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
            });
        });
    }
    onAdd() {
        this.router.navigate(['tabs/cart/add-card']);
    }
    back() {
        this.navCtrl.back();
    }
    changeMethod(id) {
        this.token = id;
    }
    ionViewWillEnter() {
        if (this.util.userInfo && this.util.userInfo.stripe_key) {
            this.getCards();
        }
    }
};
StripePaymentsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"] }
];
StripePaymentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stripe-payments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stripe-payments.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/stripe-payments/stripe-payments.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stripe-payments.page.scss */ "./src/app/pages/stripe-payments/stripe-payments.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]])
], StripePaymentsPage);



/***/ })

}]);
//# sourceMappingURL=stripe-payments-stripe-payments-module-es2015.js.map