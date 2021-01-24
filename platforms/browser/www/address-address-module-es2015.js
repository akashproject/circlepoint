(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-list lines=\"none\">\n  <ion-item (click)=\"select('edit')\">\n    <ion-label color=\"secondary\"> {{util.getString('EDIT')}} </ion-label>\n  </ion-item>\n  <ion-item (click)=\"select('delete')\">\n    <ion-label color=\"danger\"> {{util.getString('DELETE')}} </ion-label>\n  </ion-item>\n</ion-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title *ngIf=\"from ==='cart'\"> {{util.getString('Delivery Address')}} </ion-title>\n    <ion-title *ngIf=\"from ==='account'\"> {{util.getString('Manage Address')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"group\">\n    <div class=\"mainContent\">\n      <ion-button (click)=\"addNew()\" expand=\"block\" fill=\"clear\">\n        <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n        {{util.getString('Add Address')}}\n      </ion-button>\n      <div class=\"noData\" *ngIf=\"!dummy?.length && !myaddress?.length\"\n        [style.backgroundImage]=\"'url(assets/imgs/nothing.png)'\">\n      </div>\n      <div *ngFor=\"let item of dummy\">\n        <ion-list lines=\"none\">\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <ion-list *ngIf=\"from ==='cart'\">\n        <ion-radio-group [(ngModel)]=\"selectedAddress\">\n          <ion-item *ngFor=\"let item of myaddress\" class=\"list\">\n            <ion-label class=\"title\">{{item.title}} <br>\n              <span class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}</span></ion-label>\n            <!-- <ion-label class=\"name\"></ion-label> -->\n            <ion-radio [value]=\"item.id\" slot=\"start\" mode=\"md\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <div *ngIf=\"from ==='account'\">\n        <div class=\"list\" *ngFor=\"let item of myaddress\" scrollX=\"true\">\n          <ion-label class=\"title\">{{item.title}}</ion-label>\n          <ion-label class=\"name\">{{item.house}} {{item.landmark}} {{item.address}}\n          </ion-label>\n          <ion-icon class=\"moreIcon\" (click)=\"openMenu(item,$event)\" name=\"ellipsis-vertical-outline\">\n          </ion-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectedAddress\" (click)=\"selectAddress()\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/components/popover/popover.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popover/popover.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9wb3ZlclxccG9wb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovIiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi8iXX0= */");

/***/ }),

/***/ "./src/app/components/popover/popover.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popover/popover.component.ts ***!
  \*********************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/




let PopoverComponent = class PopoverComponent {
    constructor(popoverController, util) {
        this.popoverController = popoverController;
        this.util = util;
    }
    ngOnInit() { }
    select(type) {
        this.popoverController.dismiss(type);
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
];
PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./popover.component.scss */ "./src/app/components/popover/popover.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
], PopoverComponent);



/***/ }),

/***/ "./src/app/pages/address/address-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/address/address-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function() { return AddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address.page */ "./src/app/pages/address/address.page.ts");

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
        component: _address_page__WEBPACK_IMPORTED_MODULE_3__["AddressPage"]
    }
];
let AddressPageRoutingModule = class AddressPageRoutingModule {
};
AddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddressPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/address/address.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.module.ts ***!
  \*************************************************/
/*! exports provided: AddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-routing.module */ "./src/app/pages/address/address-routing.module.ts");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/pages/address/address.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let AddressPageModule = class AddressPageModule {
};
AddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressPageRoutingModule"]
        ],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })
], AddressPageModule);



/***/ }),

/***/ "./src/app/pages/address/address.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-label {\n  display: block;\n}\n.group {\n  padding: 10px 15px;\n  width: 100%;\n  background: #fff !important;\n}\n.group .mainContent {\n  padding: 5px 10px;\n}\n.group .mainContent .savedTitle {\n  font-weight: bold;\n}\n.group .mainContent .noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n.group .mainContent .list {\n  margin-top: 20px;\n  position: relative;\n  overflow-x: auto;\n}\n.group .mainContent .list::-webkit-scrollbar {\n  display: none;\n}\n.group .mainContent .list .scroll-item {\n  flex: 0 0 auto;\n}\n.group .mainContent .list .title {\n  font-weight: bold;\n  color: black;\n  font-size: 0.8rem;\n  white-space: pre-wrap;\n  text-transform: capitalize;\n}\n.group .mainContent .list .name {\n  color: lightgray;\n  font-size: 0.7rem;\n}\n.group .mainContent .list .moreIcon {\n  position: absolute;\n  right: 0px;\n  top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkcmVzcy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXGFkZHJlc3NcXGFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksY0FBQTtBREVKO0FDQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBREdKO0FDRkk7RUFDSSxpQkFBQTtBRElSO0FDSFE7RUFDSSxpQkFBQTtBREtaO0FDSFE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FES1o7QUNIUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFHQSxnQkFBQTtBREdaO0FDRlk7RUFDSSxhQUFBO0FESWhCO0FDRlk7RUFDSSxjQUFBO0FESWhCO0FDRlk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMEJBQUE7QURJaEI7QUNGWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QURJaEI7QUNGWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QURJaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGRyZXNzL2FkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZ3JvdXAge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5zYXZlZFRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5ub0RhdGEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5saXN0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLmdyb3VwIC5tYWluQ29udGVudCAubGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmdyb3VwIC5tYWluQ29udGVudCAubGlzdCAuc2Nyb2xsLWl0ZW0ge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbi5ncm91cCAubWFpbkNvbnRlbnQgLmxpc3QgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5saXN0IC5uYW1lIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG4uZ3JvdXAgLm1haW5Db250ZW50IC5saXN0IC5tb3JlSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAxcHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1sYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uZ3JvdXAge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgLm1haW5Db250ZW50e1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgLnNhdmVkVGl0bGV7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgICBcbiAgICAgICAgfVxuICAgICAgICAubm9EYXRhe1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxpc3R7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIC8vIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNjcm9sbC1pdGVtIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb3JlSWNvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/address/address.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/address/address.page.ts ***!
  \***********************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/popover/popover.component */ "./src/app/components/popover/popover.component.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let AddressPage = class AddressPage {
    constructor(navCtrl, api, util, router, route, popoverController, cart) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.router = router;
        this.route = route;
        this.popoverController = popoverController;
        this.cart = cart;
        this.myaddress = [];
        this.dummy = Array(10);
        this.route.queryParams.subscribe(data => {
            console.log(data);
            if (data && data.from) {
                this.from = data.from;
            }
        });
        this.getAddress();
        this.util.subscribeNewAddress().subscribe((data) => {
            console.log('subscribe master address');
            this.getAddress();
        });
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.back();
    }
    getAddress() {
        const param = {
            id: localStorage.getItem('uid')
        };
        this.myaddress = [];
        this.dummy = Array(10);
        this.api.post('address/getByUid', param).subscribe((data) => {
            console.log(data);
            this.dummy = [];
            if (data && data.status === 200 && data.data.length) {
                this.myaddress = data.data;
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    ionViewWillEnter() {
        // this.getAddress();
    }
    addNew() {
        this.router.navigate(['add-address']);
    }
    selectAddress() {
        if (this.from === 'cart') {
            const selecte = this.myaddress.filter(x => x.id === this.selectedAddress);
            const item = selecte[0];
            console.log('item', item);
            this.cart.deliveryAddress = item;
            this.cart.calcuate();
            this.router.navigate(['/tabs/cart/payment']);
        }
    }
    openMenu(item, events) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"],
                event: events,
                mode: 'ios',
            });
            popover.onDidDismiss().then(data => {
                console.log(data.data);
                if (data && data.data) {
                    if (data.data === 'edit') {
                        const navData = {
                            queryParams: {
                                from: 'edit',
                                data: JSON.stringify(item)
                            }
                        };
                        this.router.navigate(['add-address'], navData);
                    }
                    else if (data.data === 'delete') {
                        console.log(item);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            title: 'Are you sure?',
                            text: 'to delete this address',
                            icon: 'question',
                            confirmButtonText: 'Yes',
                            backdrop: false,
                            background: 'white',
                            showCancelButton: true,
                            showConfirmButton: true,
                            cancelButtonText: 'cancel'
                        }).then(data => {
                            console.log(data);
                            if (data && data.value) {
                                this.util.show();
                                const param = {
                                    id: item.id
                                };
                                this.api.post('address/deleteList', param).subscribe(info => {
                                    console.log(info);
                                    this.util.hide();
                                    this.getAddress();
                                }, error => {
                                    console.log(error);
                                    this.util.hide();
                                    this.util.errorToast(this.util.getString('Something went wrong'));
                                });
                            }
                        });
                    }
                }
            });
            yield popover.present();
        });
    }
};
AddressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] }
];
AddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./address.page.scss */ "./src/app/pages/address/address.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]])
], AddressPage);



/***/ })

}]);
//# sourceMappingURL=address-address-module-es2015.js.map