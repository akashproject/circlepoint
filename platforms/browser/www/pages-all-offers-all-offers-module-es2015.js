(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-offers-all-offers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-offers/all-offers.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-offers/all-offers.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Offers')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div *ngFor=\"let item of dummy\" style=\"margin-bottom: 10px;\">\n    <ion-skeleton-text animated style=\"width: 100%;height: 100px; border-radius: 5px;\"></ion-skeleton-text>\n  </div>\n\n  <div class=\"card\" *ngFor=\"let item of list\">\n    <div class=\"back_image\" [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n      (click)=\"openLink(item)\">\n      <div class=\"overlay_div\" *ngIf=\"item.message\">\n        <ion-label> {{item.message}} </ion-label>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/all-offers/all-offers-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/all-offers/all-offers-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AllOffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOffersPageRoutingModule", function() { return AllOffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _all_offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-offers.page */ "./src/app/pages/all-offers/all-offers.page.ts");

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
        component: _all_offers_page__WEBPACK_IMPORTED_MODULE_3__["AllOffersPage"]
    }
];
let AllOffersPageRoutingModule = class AllOffersPageRoutingModule {
};
AllOffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllOffersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/all-offers/all-offers.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/all-offers/all-offers.module.ts ***!
  \*******************************************************/
/*! exports provided: AllOffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOffersPageModule", function() { return AllOffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _all_offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-offers-routing.module */ "./src/app/pages/all-offers/all-offers-routing.module.ts");
/* harmony import */ var _all_offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-offers.page */ "./src/app/pages/all-offers/all-offers.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let AllOffersPageModule = class AllOffersPageModule {
};
AllOffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _all_offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllOffersPageRoutingModule"]
        ],
        declarations: [_all_offers_page__WEBPACK_IMPORTED_MODULE_6__["AllOffersPage"]]
    })
], AllOffersPageModule);



/***/ }),

/***/ "./src/app/pages/all-offers/all-offers.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/all-offers/all-offers.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.card {\n  width: 100%;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.card .back_image {\n  height: 120px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.card .back_image .overlay_div {\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 70%;\n  right: 0;\n  padding: 10px;\n}\n.card .back_image .overlay_div ion-label {\n  color: white;\n  text-align: right;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxsLW9mZmVycy9hbGwtb2ZmZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWxsLW9mZmVycy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXGFsbC1vZmZlcnNcXGFsbC1vZmZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURFSjtBQ0FJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtBRENSO0FDQ1E7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FEQ1o7QUNDWTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRENoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsbC1vZmZlcnMvYWxsLW9mZmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNhcmQgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDEyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZCAuYmFja19pbWFnZSAub3ZlcmxheV9kaXYge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDcwJTtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2FyZCAuYmFja19pbWFnZSAub3ZlcmxheV9kaXYgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXG4gICAgICAgIC5vdmVybGF5X2RpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/all-offers/all-offers.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/all-offers/all-offers.page.ts ***!
  \*****************************************************/
/*! exports provided: AllOffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOffersPage", function() { return AllOffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let AllOffersPage = class AllOffersPage {
    constructor(api, util, router, navCtrl, iab) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.dummy = Array(10);
        this.list = [];
        this.getOffers();
    }
    getOffers() {
        this.api.get('banners').subscribe((data) => {
            this.dummy = [];
            this.list = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                data.data.forEach(element => {
                    if (element && element.status === '1') {
                        this.list.push(element);
                    }
                });
            }
        }, error => {
            console.log(error);
            this.util.errorToast(this.util.getString('Something went wrong'));
            this.dummy = [];
            this.list = [];
        });
    }
    ngOnInit() {
    }
    openLink(item) {
        if (item.type === '0') {
            console.log('open category');
            const param = {
                queryParams: {
                    id: item.link,
                    name: 'Category'
                }
            };
            this.router.navigate(['tabs/home/sub-category'], param);
        }
        else if (item.type === '1') {
            // product
            console.log('open product');
            const param = {
                queryParams: {
                    id: item.link
                }
            };
            this.router.navigate(['tabs/categories/product'], param);
        }
        else {
            // link
            // console.log('open link');
            this.iab.create(item.link, '_blank');
        }
    }
    back() {
        this.navCtrl.back();
    }
};
AllOffersPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] }
];
AllOffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-offers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./all-offers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-offers/all-offers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./all-offers.page.scss */ "./src/app/pages/all-offers/all-offers.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]])
], AllOffersPage);



/***/ })

}]);
//# sourceMappingURL=pages-all-offers-all-offers-module-es2015.js.map