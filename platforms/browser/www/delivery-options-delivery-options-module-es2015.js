(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-options-delivery-options-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-options/delivery-options.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-options/delivery-options.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Delivery Options')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"header\"> {{util.getString('Delivery from')}} </p>\n  <ion-list lines=\"none\" class=\"delivery\">\n    <ion-radio-group [(ngModel)]=\"deliveryOption\">\n      <ion-item>\n        <ion-thumbnail>\n          <img src=\"assets/imgs/home.png\" />\n        </ion-thumbnail>\n        <ion-label> {{util.getString('At Home')}} </ion-label>\n        <ion-radio value=\"home\" slot=\"end\" mode=\"md\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-thumbnail>\n          <img src=\"assets/imgs/store.png\" />\n        </ion-thumbnail>\n        <ion-label> {{util.getString('Self Pickup')}} </ion-label>\n        <ion-radio value=\"store\" slot=\"end\" mode=\"md\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <div>\n    <p class=\"header\"> {{util.getString('Receive at')}} </p>\n    <div class=\"ion-activatable\" style=\"position: relative;overflow: hidden;padding: 10px 20px;\"\n      (click)=\"openTime($event)\">\n      <ion-label> {{time}} </ion-label>\n      <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n    </div>\n  </div>\n\n  <div *ngIf=\"deliveryOption === 'store'\">\n    <p class=\"header\"> {{util.getString('Stores')}} </p>\n    <div *ngFor=\"let item of storeAddress\" class=\"stores\">\n      <p class=\"name\">\n        <ion-icon name=\"location-outline\"></ion-icon> {{item.name}}\n      </p>\n      <p class=\"address\"> {{item.address}} </p>\n    </div>\n  </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n  <div class=\"btm\">\n    <p class=\"bottomText\" *ngIf=\"deliveryOption === 'store'\"> <span class=\"bolder\">{{util.getString('Note')}} : </span>\n      {{util.getString(\"Please visit this stores for your grocery , you can find this address in order details as well, if you found more than one address in list then, you have to visit every stores for your grocery\")}}\n    </p>\n    <div (click)=\"payment()\" class=\"btmbar\">\n      <ion-label>{{cart.cart.length}} {{util.getString('Items')}}:\n        <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.totalPrice}}</span>\n        <span *ngIf=\"util.cside ==='right'\">{{cart.totalPrice}} {{util.currecny}} </span>\n      </ion-label>\n      <ion-label>{{util.getString('Payment')}}\n        <ion-icon name=\"exit-outline\"></ion-icon>\n      </ion-label>\n    </div>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DeliveryOptionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOptionsPageRoutingModule", function() { return DeliveryOptionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _delivery_options_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery-options.page */ "./src/app/pages/delivery-options/delivery-options.page.ts");

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
        component: _delivery_options_page__WEBPACK_IMPORTED_MODULE_3__["DeliveryOptionsPage"]
    }
];
let DeliveryOptionsPageRoutingModule = class DeliveryOptionsPageRoutingModule {
};
DeliveryOptionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeliveryOptionsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options.module.ts ***!
  \*******************************************************************/
/*! exports provided: DeliveryOptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOptionsPageModule", function() { return DeliveryOptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _delivery_options_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery-options-routing.module */ "./src/app/pages/delivery-options/delivery-options-routing.module.ts");
/* harmony import */ var _delivery_options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery-options.page */ "./src/app/pages/delivery-options/delivery-options.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/







let DeliveryOptionsPageModule = class DeliveryOptionsPageModule {
};
DeliveryOptionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _delivery_options_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeliveryOptionsPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_delivery_options_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryOptionsPage"]]
    })
], DeliveryOptionsPageModule);



/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-thumbnail {\n  --size: 25px;\n  height: 25px;\n  width: 25px;\n  margin-right: 10px;\n}\n.header {\n  font-size: 16px;\n  font-weight: bold;\n  background: #f3f3f3;\n  margin: 0px;\n  padding: 10px;\n}\n.stores {\n  border-bottom: 1px solid lightgray;\n  padding: 0px 20px;\n  margin-top: 20px;\n}\n.name {\n  font-size: 14px;\n  font-weight: bold;\n  margin: 0px;\n}\n.address {\n  font-size: 12px;\n  margin: 0px;\n  margin-bottom: 5px;\n}\n.btm {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n}\n.btm .bottomText {\n  font-size: 10px;\n  color: gray;\n  padding: 0px 20px;\n}\n.btm .bottomText .bolder {\n  font-size: 12px;\n  font-weight: bold;\n  color: black;\n}\n.btm .btmbar {\n  height: 60px;\n  width: 100%;\n  background: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n}\n.btm .btmbar ion-label {\n  color: white;\n  font-family: muli-bold;\n  display: flex;\n}\n.btm .btmbar ion-label ion-icon {\n  padding-left: 5px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVsaXZlcnktb3B0aW9ucy9kZWxpdmVyeS1vcHRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVsaXZlcnktb3B0aW9ucy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXGRlbGl2ZXJ5LW9wdGlvbnNcXGRlbGl2ZXJ5LW9wdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURFSjtBQ0FBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBREdKO0FDREE7RUFDSSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURJSjtBQ0ZBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBREtKO0FDSEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FETUo7QUNIQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURNSjtBQ0xJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRE9SO0FDTlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FEUVo7QUNMSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FES1I7QUNIUTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QURLWjtBQ0hZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FES2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVsaXZlcnktb3B0aW9ucy9kZWxpdmVyeS1vcHRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tdGh1bWJuYWlsIHtcbiAgLS1zaXplOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnN0b3JlcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJ0bSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ0bSAuYm90dG9tVGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuLmJ0bSAuYm90dG9tVGV4dCAuYm9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJ0bSAuYnRtYmFyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDBweCAxNnB4O1xufVxuLmJ0bSAuYnRtYmFyIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5idG0gLmJ0bWJhciBpb24tbGFiZWwgaW9uLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24tdGh1bWJuYWlsIHtcbiAgICAtLXNpemU6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5oZWFkZXJ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5zdG9yZXN7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm5hbWV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmFkZHJlc3N7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJ0bXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmJvdHRvbVRleHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICAuYm9sZGVye1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ0bWJhcntcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIC8vIGJvdHRvbTogMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/delivery-options/delivery-options.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/delivery-options/delivery-options.page.ts ***!
  \*****************************************************************/
/*! exports provided: DeliveryOptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryOptionsPage", function() { return DeliveryOptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_components_time_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/time/time.component */ "./src/app/components/time/time.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let DeliveryOptionsPage = class DeliveryOptionsPage {
    constructor(navCtrl, api, util, cart, popoverController, router) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.cart = cart;
        this.popoverController = popoverController;
        this.router = router;
        this.deliveryOption = 'home';
        this.storeAddress = [];
        this.getStoreList();
        this.datetime = 'today';
        this.time = this.util.getString('Today - ') + moment__WEBPACK_IMPORTED_MODULE_7__().format('dddd, MMMM Do YYYY');
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.back();
    }
    getStoreList() {
        const info = [...new Set(this.cart.cart.map(item => item.store_id))];
        console.log('store iddss==================>>', info);
        // test
        // info.push(10, 17);
        // test
        const param = {
            id: info.join()
        };
        this.api.post('stores/getStoresData', param).subscribe((data) => {
            console.log(data);
            if (data && data.status === 200 && data.data.length) {
                this.storeAddress = data.data;
                this.cart.stores = this.storeAddress;
            }
            else {
                this.util.showToast(this.util.getString('No Stores Found'), 'danger', 'bottom');
                this.back();
            }
        }, error => {
            console.log('error', error);
            this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
        });
    }
    openTime(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_time_time_component__WEBPACK_IMPORTED_MODULE_6__["TimeComponent"],
                event: ev,
                mode: 'ios',
            });
            popover.onDidDismiss().then(data => {
                console.log(data.data);
                if (data.data) {
                    if (data.data === 'today') {
                        this.datetime = 'today';
                        this.time = this.util.getString('Today - ') + moment__WEBPACK_IMPORTED_MODULE_7__().format('dddd, MMMM Do YYYY');
                    }
                    else {
                        this.datetime = 'tomorrow';
                        this.time = this.util.getString('Tomorrow - ') + moment__WEBPACK_IMPORTED_MODULE_7__().add(1, 'days').format('dddd, MMMM Do YYYY');
                    }
                }
            });
            yield popover.present();
        });
    }
    payment() {
        this.cart.deliveryAt = this.deliveryOption;
        this.cart.datetime = this.datetime;
        if (this.deliveryOption === 'home') {
            console.log('address');
            const param = {
                queryParams: {
                    from: 'cart'
                }
            };
            this.router.navigate(['tabs/cart/address'], param);
        }
        else {
            console.log('payment');
            this.router.navigate(['tabs/cart/payment']);
        }
    }
};
DeliveryOptionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
DeliveryOptionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-options',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delivery-options.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery-options/delivery-options.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./delivery-options.page.scss */ "./src/app/pages/delivery-options/delivery-options.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], DeliveryOptionsPage);



/***/ })

}]);
//# sourceMappingURL=delivery-options-delivery-options-module-es2015.js.map