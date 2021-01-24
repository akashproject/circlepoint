(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-top-stores-top-stores-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/top-stores/top-stores.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/top-stores/top-stores.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Top Stores</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"search()\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar mode=\"ios\" *ngIf=\"haveSearch\" (ionCancel)=\"search()\" [placeholder]=\"util.getString('Search')\"\n    type=\"text\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" showCancelButton=\"always\">\n  </ion-searchbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div *ngFor=\"let item of dummy\" style=\"margin-bottom: 10px;\">\n    <ion-skeleton-text animated style=\"width: 100%;height: 100px;\"></ion-skeleton-text>\n  </div>\n\n  <div class=\"content_div\" *ngFor=\"let item of stores\">\n    <div class=\"card_div\">\n      <div class=\"image_div\" (click)=\"openStore(item)\"\n        [ngStyle]=\"{'background-image':'url('+ api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\">\n        <img src=\"assets/imgs/open.png\" class=\"isOpen\" alt=\"Veg\" *ngIf=\"item.isOpen && item.isClosed ==='1'\">\n        <img src=\"assets/imgs/close.png\" class=\"isOpen\" alt=\"Non Veg\" *ngIf=\"!item.isOpen || item.isClosed === '0'\">\n      </div>\n      <div class=\"desc_div\" (click)=\"openStore(item)\">\n        <ion-label class=\"pro_name\">\n          {{ (item.name.length>12)? (item.name | slice:0:12)+'..':(item.name) }}</ion-label>\n        <ion-label class=\"pro_detail\">\n          {{ (item.address.length>20)? (item.address | slice:0:20)+'..':(item.address) }}\n        </ion-label>\n        <ion-label class=\"price_lbl\"> {{getTime(item.open_time)}} - {{getTime(item.close_time)}} </ion-label>\n\n        <div class=\"small_flex\">\n          <div class=\"btnBtm\">\n            <div class=\"ion-activatable ripple-parent\">\n              {{util.getString('View')}}\n              <ion-ripple-effect></ion-ripple-effect>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/top-stores/top-stores-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/top-stores/top-stores-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TopStoresPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopStoresPageRoutingModule", function() { return TopStoresPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _top_stores_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-stores.page */ "./src/app/pages/top-stores/top-stores.page.ts");

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
        component: _top_stores_page__WEBPACK_IMPORTED_MODULE_3__["TopStoresPage"]
    }
];
let TopStoresPageRoutingModule = class TopStoresPageRoutingModule {
};
TopStoresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TopStoresPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/top-stores/top-stores.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/top-stores/top-stores.module.ts ***!
  \*******************************************************/
/*! exports provided: TopStoresPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopStoresPageModule", function() { return TopStoresPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _top_stores_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-stores-routing.module */ "./src/app/pages/top-stores/top-stores-routing.module.ts");
/* harmony import */ var _top_stores_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-stores.page */ "./src/app/pages/top-stores/top-stores.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let TopStoresPageModule = class TopStoresPageModule {
};
TopStoresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _top_stores_routing_module__WEBPACK_IMPORTED_MODULE_5__["TopStoresPageRoutingModule"]
        ],
        declarations: [_top_stores_page__WEBPACK_IMPORTED_MODULE_6__["TopStoresPage"]]
    })
], TopStoresPageModule);



/***/ }),

/***/ "./src/app/pages/top-stores/top-stores.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/top-stores/top-stores.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.content_div {\n  width: 100%;\n}\n.content_div .card_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  margin-bottom: 16px;\n  border: 1px solid lightgray;\n}\n.content_div .card_div .offer_tag {\n  width: 35px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}\n.content_div .card_div .off_lbl {\n  font-family: muli-bold;\n  position: absolute;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  font-size: 9px;\n  top: 4px;\n  left: 8px;\n  text-align: center;\n  color: white;\n  z-index: 999;\n}\n.content_div .card_div .image_div {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin: 5px;\n}\n.content_div .card_div .image_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.content_div .card_div .image_div .isOpen {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.content_div .card_div .image_div img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.content_div .card_div .desc_div {\n  text-align: right;\n  padding: 10px;\n}\n.content_div .card_div .desc_div ion-label {\n  display: block !important;\n}\n.content_div .card_div .desc_div .pro_name {\n  font-size: 15px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.content_div .card_div .desc_div .pro_detail {\n  font-size: 11px;\n  color: gray;\n  margin-bottom: 5px;\n}\n.content_div .card_div .desc_div .price_lbl {\n  font-weight: 400;\n  font-size: 11px;\n}\n.content_div .card_div .desc_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.content_div .card_div .desc_div .price_lbl .sell {\n  font-weight: bold;\n}\n.content_div .card_div .desc_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 11px;\n}\n.content_div .card_div .desc_div .small_flex {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.content_div .card_div .desc_div .small_flex .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 12px;\n}\n.content_div .card_div .desc_div .small_flex .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.content_div .card_div .desc_div .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.content_div .card_div .desc_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.content_div .card_div .desc_div .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdG9wLXN0b3Jlcy90b3Atc3RvcmVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdG9wLXN0b3Jlcy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXHRvcC1zdG9yZXNcXHRvcC1zdG9yZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksV0FBQTtBREVKO0FDREk7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FERVI7QUNEUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBREdaO0FDQVE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBREVaO0FDQ1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FEQ1o7QUNBWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBREVoQjtBQ0FZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FERWhCO0FDQVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QURFaEI7QUNFUTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBREFaO0FDQ1k7RUFDSSx5QkFBQTtBRENoQjtBQ0NZO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QURDaEI7QUNDWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURDaEI7QUNDWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBRENoQjtBQ0FnQjtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBREVwQjtBQ0FnQjtFQUNJLGlCQUFBO0FERXBCO0FDQWdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FERXBCO0FDQ1k7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBRENoQjtBQ0FnQjtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QURFcEI7QUNEb0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FER3hCO0FDY1k7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURaaEI7QUNjZ0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FEWnBCO0FDZWdCO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QURicEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90b3Atc3RvcmVzL3RvcC1zdG9yZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNoYWRvdzogM3B4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLm9mZmVyX3RhZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5vZmZfbGJsIHtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0b3A6IDRweDtcbiAgbGVmdDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuaW1hZ2VfZGl2IHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuaW1hZ2VfZGl2IC5raW5kIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiAuaXNPcGVuIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcm9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByb19kZXRhaWwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByaWNlX2xibCAuc2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuc21hbGxfZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IC5idG5CdG0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IC5idG5CdG0gLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuYWJzX2FkZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLmFic19hZGQgaW1nIHtcbiAgY29sb3I6ICNGRjhFODA7XG4gIHdpZHRoOiAyNXB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmNhcmRfZGl2e1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBib3gtc2hhZG93OiAzcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAub2ZmZXJfdGFne1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIH1cblxuICAgICAgICAub2ZmX2xibHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICAgIHRvcDogNHB4O1xuICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlX2RpdntcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIC5raW5ke1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pc09wZW57XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NfZGl2e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb19uYW1le1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcm9fZGV0YWlse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2VfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIC5vcmlnaW5hbHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNlbGx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGljb3VudHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfZmxleHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIC5idG5CdG17XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAubGVmdHtcbiAgICAgICAgICAgICAgICAvLyAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAvLyAgICAgaW1ne1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFic19hZGR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/top-stores/top-stores.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/top-stores/top-stores.page.ts ***!
  \*****************************************************/
/*! exports provided: TopStoresPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopStoresPage", function() { return TopStoresPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let TopStoresPage = class TopStoresPage {
    constructor(navCtrl, api, util, router) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.router = router;
        this.dummy = Array(10);
        this.dummyStores = [];
        this.stores = [];
        this.haveSearch = false;
        this.getStores();
    }
    ngOnInit() {
    }
    search() {
        this.haveSearch = !this.haveSearch;
    }
    onSearchChange(event) {
        if (event.detail.value) {
            this.stores = this.dummyStores.filter((item) => {
                return item.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
            });
        }
        else {
            this.stores = this.dummyStores;
        }
    }
    openStore(item) {
        console.log('open store', item);
        const param = {
            queryParams: {
                id: item.uid,
                name: item.name
            }
        };
        this.router.navigate(['tabs/home/store'], param);
    }
    getTime(time) {
        // const date = moment().format('DD-MM-YYYY');
        // return moment(date + ' ' + time).format('hh:mm a');
        return moment__WEBPACK_IMPORTED_MODULE_6__(time, ['h:mm A']).format('hh:mm A');
    }
    getStores() {
        const param = {
            id: localStorage.getItem('city')
        };
        this.api.post('stores/getByCity', param).subscribe((stores) => {
            console.log('stores by city', stores);
            this.stores = [];
            this.dummy = [];
            if (stores && stores.status === 200 && stores.data && stores.data.length) {
                this.stores = stores.data;
                this.dummy = [];
                this.stores.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    element['isOpen'] = yield this.isOpen(element.open_time, element.close_time);
                }));
                this.dummyStores = this.stores;
            }
        }, error => {
            console.log(error);
            this.util.errorToast(this.util.getString('Something went wrong'));
            this.dummy = [];
            this.dummyStores = [];
            this.stores = [];
        });
    }
    isOpen(start, end) {
        const format = 'H:mm:ss';
        const ctime = moment__WEBPACK_IMPORTED_MODULE_6__().format('HH:mm:ss');
        const time = moment__WEBPACK_IMPORTED_MODULE_6__(ctime, format);
        const beforeTime = moment__WEBPACK_IMPORTED_MODULE_6__(start, format);
        const afterTime = moment__WEBPACK_IMPORTED_MODULE_6__(end, format);
        if (time.isBetween(beforeTime, afterTime)) {
            return true;
        }
        return false;
    }
    back() {
        this.navCtrl.back();
    }
};
TopStoresPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
TopStoresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-top-stores',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./top-stores.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/top-stores/top-stores.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./top-stores.page.scss */ "./src/app/pages/top-stores/top-stores.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], TopStoresPage);



/***/ })

}]);
//# sourceMappingURL=pages-top-stores-top-stores-module-es2015.js.map