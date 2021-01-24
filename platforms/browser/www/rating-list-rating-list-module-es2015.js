(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rating-list-rating-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating-list/rating-list.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating-list/rating-list.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{name}} 's {{util.getString('Rating')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-button (click)=\"addNew()\" expand=\"full\">\n    {{util.getString('Add New Rating')}}\n  </ion-button>\n  <div class=\"mainItems\">\n    <ion-item *ngFor=\"let item of dummy\" lines=\"none\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated style=\"width: 100%;height: 100px;\"></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </ion-label>\n    </ion-item>\n\n    <ion-item *ngFor=\"let item of ratings\" lines=\"none\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"api.mediaURL+ item.cover\" alt=\"image\" onError=\"this.src='assets/imgs/user.png'\">\n      </ion-thumbnail>\n      <ion-label>\n        <span class=\"name\"> {{item.fname}} {{item.lname}}</span> <br>\n        <span class=\"msg\">{{item.msg}} </span> <br>\n        <span class=\"msg\"> {{getDate(item.timestamp)}} </span>\n      </ion-label>\n\n    </ion-item>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/rating-list/rating-list-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/rating-list/rating-list-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RatingListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingListPageRoutingModule", function() { return RatingListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rating_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rating-list.page */ "./src/app/pages/rating-list/rating-list.page.ts");

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
        component: _rating_list_page__WEBPACK_IMPORTED_MODULE_3__["RatingListPage"]
    }
];
let RatingListPageRoutingModule = class RatingListPageRoutingModule {
};
RatingListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RatingListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/rating-list/rating-list.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/rating-list/rating-list.module.ts ***!
  \*********************************************************/
/*! exports provided: RatingListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingListPageModule", function() { return RatingListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rating_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rating-list-routing.module */ "./src/app/pages/rating-list/rating-list-routing.module.ts");
/* harmony import */ var _rating_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rating-list.page */ "./src/app/pages/rating-list/rating-list.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let RatingListPageModule = class RatingListPageModule {
};
RatingListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rating_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatingListPageRoutingModule"]
        ],
        declarations: [_rating_list_page__WEBPACK_IMPORTED_MODULE_6__["RatingListPage"]]
    })
], RatingListPageModule);



/***/ }),

/***/ "./src/app/pages/rating-list/rating-list.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/rating-list/rating-list.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.mainItems {\n  margin-top: 20px;\n}\n.mainItems ion-item {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  padding: 10px;\n  position: relative;\n  margin-bottom: 20px;\n}\n.mainItems ion-item .name {\n  font-size: 13px;\n  font-weight: bold;\n}\n.mainItems ion-item .msg {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmF0aW5nLWxpc3QvcmF0aW5nLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yYXRpbmctbGlzdC9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXHJhdGluZy1saXN0XFxyYXRpbmctbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxnQkFBQTtBREVKO0FDREk7RUFDSSxrQkFBQTtFQUNBLG9EQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURHUjtBQ0ZRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FESVo7QUNGUTtFQUNJLGVBQUE7QURJWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JhdGluZy1saXN0L3JhdGluZy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbkl0ZW1zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluSXRlbXMgaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluSXRlbXMgaW9uLWl0ZW0gLm5hbWUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5JdGVtcyBpb24taXRlbSAubXNnIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbkl0ZW1ze1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtM3B4IHJnYmEoMzAsIDk4LCAyNTUsIDAuMyk7ICAgICAgICBcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAubmFtZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5tc2d7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/rating-list/rating-list.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/rating-list/rating-list.page.ts ***!
  \*******************************************************/
/*! exports provided: RatingListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingListPage", function() { return RatingListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_rating_product_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product-rating/product-rating.page */ "./src/app/pages/product-rating/product-rating.page.ts");
/* harmony import */ var _store_rating_store_rating_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store-rating/store-rating.page */ "./src/app/pages/store-rating/store-rating.page.ts");
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








let RatingListPage = class RatingListPage {
    constructor(navCtrl, api, util, modalCtrl, route) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.dummy = [];
        this.ratings = [];
        this.route.queryParams.subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                this.id = data.id;
                this.name = data.name;
                this.type = data.type;
                this.getFrom();
            }
        });
    }
    getFrom() {
        // getFromIDs
        const query = this.type === 'product' ? 'pid = ' + this.id : 'sid = ' + this.id;
        const param = {
            id: this.id,
            where: query
        };
        this.dummy = Array(10);
        this.ratings = [];
        this.api.post('rating/getFromIDs', param).subscribe((data) => {
            console.log(data);
            this.dummy = [];
            if (data && data.status === 200) {
                this.ratings = data.data;
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    ngOnInit() {
    }
    back() {
        this.navCtrl.back();
    }
    addNew() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: this.type === 'product' ? _product_rating_product_rating_page__WEBPACK_IMPORTED_MODULE_6__["ProductRatingPage"] : _store_rating_store_rating_page__WEBPACK_IMPORTED_MODULE_7__["StoreRatingPage"],
                cssClass: 'modalContact',
                backdropDismiss: false,
                swipeToClose: true,
                componentProps: {
                    id: this.id,
                    name: this.name,
                    way: 'direct'
                }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data.role);
                if (data && data.role === 'success') {
                    this.getFrom();
                }
            });
            return yield modal.present();
        });
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format('ll');
    }
};
RatingListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
RatingListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rating-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating-list/rating-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rating-list.page.scss */ "./src/app/pages/rating-list/rating-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], RatingListPage);



/***/ })

}]);
//# sourceMappingURL=rating-list-rating-list-module-es2015.js.map