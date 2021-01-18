(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-details-order-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Order Details')}} ##{{id}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n\n\n    <ion-label class=\"titles\"> {{util.getString('Orders')}} </ion-label>\n    <div class=\"desc_div\">\n      <div *ngIf=\"orders?.length\" class=\"border_bottom\">\n        <div *ngFor=\"let item of orders\">\n          <p class=\"storeName\">\n            <span class=\"name\"> {{getStoreName(item.id)}} </span>\n            <span class=\"status\"> {{getOrderStatus(item.id)}} </span>\n          </p>\n          <p *ngFor=\"let order of item.order;let ol = index\" class=\"items\">\n            <span *ngIf=\"!order.size\">{{order.name}} -\n              <span *ngIf=\"order.have_gram === '1'\"> {{order.gram}} grams </span>\n              <span *ngIf=\"order.have_kg === '1'\"> {{order.kg}} kg </span>\n              <span *ngIf=\"order.have_liter ==='1'\"> {{order.liter}} ltr </span>\n              <span *ngIf=\"order.have_ml ==='1'\"> {{order.ml}} ml</span>\n              <span *ngIf=\"order.have_pcs === '1'\"> {{order.pcs}} pcs </span>\n              <span *ngIf=\"util.cside ==='left'\">\n                {{util.currecny}} {{order.discount ==='0' ? order.original_price : order.sell_price}}\n              </span>\n              <span *ngIf=\"util.cside ==='right'\">\n                {{order.discount ==='0' ? order.original_price : order.sell_price}} {{util.currecny}}\n              </span>\n            </span>\n            <span *ngIf=\"order.size ==='0'\">{{order.name}} -\n              <span *ngIf=\"order.have_gram === '1'\"> {{order.gram}} {{util.getString('grams')}} </span>\n              <span *ngIf=\"order.have_kg === '1'\"> {{order.kg}} {{util.getString('kg')}} </span>\n              <span *ngIf=\"order.have_liter ==='1'\"> {{order.liter}} {{util.getString('ltr')}} </span>\n              <span *ngIf=\"order.have_ml ==='1'\"> {{order.ml}} {{util.getString('ml')}} </span>\n              <span *ngIf=\"order.have_pcs === '1'\"> {{order.pcs}} {{util.getString('pcs')}} </span>\n            </span>\n            <span *ngIf=\"order.size ==='1'\">\n              {{order.name}} - <span> {{order.variations[0].items[order.variant].title}} </span>\n            </span>\n            <span>X {{order.quantiy}}</span>\n          </p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex_div\">\n      <ion-label> {{util.getString('Deliver to')}} </ion-label>\n      <ion-label class=\"values\">{{orderAt}}</ion-label>\n    </div>\n    <div class=\"flex_div\" *ngIf=\"orderAt ==='home'\">\n      <ion-label class=\"values\">\n        <ion-icon slot=\"start\" name=\"location-outline\" color=\"primary\"></ion-icon> {{address}}\n      </ion-label>\n\n    </div>\n\n    <ion-label class=\"titles\"> {{util.getString('Basic Details')}} </ion-label>\n    <div class=\"flex_div\">\n      <ion-label> {{util.getString('Order ID')}} </ion-label>\n      <ion-label class=\"values\">{{id}}</ion-label>\n    </div>\n\n    <div class=\"flex_div\">\n      <ion-label> {{util.getString('Payment Method')}} </ion-label>\n      <ion-label class=\"values\"> {{payMethod}} </ion-label>\n    </div>\n\n    <div class=\"flex_div\">\n      <ion-label> {{util.getString('Delivery On')}} </ion-label>\n      <ion-label class=\"values\"> {{datetime}} </ion-label>\n    </div>\n\n\n    <ion-label class=\"titles\"> {{util.getString('Order Tracking')}} </ion-label>\n\n    <div class=\"tracking_div\">\n\n      <div class=\"left\">\n        <span *ngFor=\"let item of orderDetail\">\n          <div class=\"line_div\" [class.line_div_darkgray]=\"item.status === 1\"></div>\n          <ion-icon *ngIf=\"item.status === 1\" name=\"checkmark-sharp\"></ion-icon>\n        </span>\n\n      </div>\n\n      <div class=\"right\">\n        <span *ngFor=\"let item of orderDetail\">\n          <div class=\"line_div\">\n            <ion-label [class.round_div_red]=\"item.status === 1\" [class.round_div_darkgray]=\"item.status === 1\">\n              {{item.time}}</ion-label>\n          </div>\n          <div class=\"round_div_gray\" [class.round_div_red]=\"item.status === 1\"\n            [class.round_div_darkgray]=\"item.status === 1\">\n            {{item.value}}\n          </div>\n        </span>\n      </div>\n\n    </div>\n\n    <ion-label class=\"titles\" *ngIf=\"driverInfo && driverInfo.length\"> {{util.getString('Driver Informations')}}\n    </ion-label>\n\n    <div *ngFor=\"let item of driverInfo\">\n      <div class=\"card_div\">\n        <div class=\"resto_detail\">\n          <div class=\"back_image\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"></div>\n          <div style=\"margin-left: 10px;\" (click)=\"contanctDriver(item)\">\n            <ion-label class=\"res_name\">{{item.first_name}} {{item.last_name}}</ion-label>\n            <ion-label class=\"res_location\">\n              <ion-icon name=\"mail-outline\"></ion-icon> {{item.email}}\n            </ion-label>\n            <ion-label class=\"res_location\">\n              <ion-icon name=\"call-outline\"></ion-icon> {{item.mobile}}\n            </ion-label>\n          </div>\n          <ion-fab class=\"directionBtn\" (click)=\"direction(item,'driver')\"\n            *ngIf=\"getOrderStatusFromDriver(item.id) ==='ongoing' || getOrderStatusFromDriver(item.id) ==='accepted' \">\n            <ion-fab-button color=\"light\" size=\"small\">\n              <ion-icon name=\"compass-outline\"></ion-icon>\n            </ion-fab-button>\n          </ion-fab>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"stores && stores?.length\">\n      <ion-label class=\"titles\" *ngIf=\"stores\"> {{util.getString('Stores Informations')}} </ion-label>\n      <div *ngFor=\"let item of stores\">\n        <div class=\"card_div\">\n          <div class=\"resto_detail\">\n            <div class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\">\n            </div>\n            <div style=\"margin-left: 10px;\" (click)=\"contanct(item)\">\n              <ion-label class=\"res_name\">{{item.name}}</ion-label>\n              <ion-label class=\"res_location\">\n                <ion-icon name=\"mail-outline\"></ion-icon> {{item.email}}\n              </ion-label>\n              <ion-label class=\"res_location\">\n                <ion-icon name=\"call-outline\"></ion-icon> {{item.mobile}}\n              </ion-label>\n              <ion-label class=\"res_location\">\n                <ion-icon name=\"location-outline\"></ion-icon>{{item.address}}\n              </ion-label>\n            </div>\n            <ion-fab class=\"directionBtn\" (click)=\"direction(item,'store')\"\n              *ngIf=\"getOrderStatus(item.uid) ==='ongoing' || getOrderStatus(item.uid) ==='accepted' \">\n              <ion-fab-button color=\"light\" size=\"small\">\n                <ion-icon name=\"compass-outline\"></ion-icon>\n              </ion-fab-button>\n            </ion-fab>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\">\n      <ion-button *ngIf=\"isDelivered\" (click)=\"presentAlertConfirm()\" class=\"ratae\">\n        <ion-icon name=\"star\" color=\"light\" slot=\"start\"></ion-icon>\n        {{util.getString('Rate Order')}}\n      </ion-button>\n      <ion-button *ngIf=\"canCancle\" (click)=\"changeStatus()\" class=\"reject\">\n        {{util.getString('Cancel Order')}}\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/order-details/order-details-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/order-details/order-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function() { return OrderDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");

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
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
    }
];
let OrderDetailsPageRoutingModule = class OrderDetailsPageRoutingModule {
};
OrderDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/order-details/order-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-details-routing.module */ "./src/app/pages/order-details/order-details-routing.module.ts");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let OrderDetailsPageModule = class OrderDetailsPageModule {
};
OrderDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"]
        ],
        declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]]
    })
], OrderDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div .card_div {\n  padding: 20px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .directionBtn {\n  position: absolute;\n  right: 0px;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .card_div2 {\n  padding: 10px 20px;\n}\n.main_content_div .card_div2 .personal_detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div2 .personal_detail ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .card_div2 .personal_detail ion-button {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .personal_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div2 .order_detail .head_gray {\n  color: gray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n}\n.main_content_div .card_div2 .order_detail .prize1 {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.main_content_div .titles {\n  font-size: 15px;\n  font-weight: bold;\n  margin: 20px 0px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .desc_div {\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom {\n  padding-bottom: 10px;\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom .storeName {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .storeName .name {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .storeName .status {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .items {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: 0.5px dashed lightgray;\n  margin-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .itemss {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  padding-bottom: 10px;\n}\n.main_content_div .flex_div .values {\n  font-weight: bold;\n  text-transform: capitalize;\n}\n.main_content_div .hr_line_div {\n  margin-top: 15px;\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n}\n.main_content_div .tracking_div {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.main_content_div .tracking_div .left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20%;\n}\n.main_content_div .tracking_div .left .line_div {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #E8E8E8;\n}\n.main_content_div .tracking_div .left .line_div_darkgray {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #C8C7CE;\n}\n.main_content_div .tracking_div .left .round_div_gray {\n  height: 20px;\n  width: 20px;\n  background-color: #E8E8E8;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_darkgray {\n  height: 20px;\n  width: 20px;\n  background-color: #C8C7CE;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_red {\n  height: 20px;\n  width: 20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left ion-icon {\n  font-size: 20px;\n  margin-left: -7px;\n  color: var(--ion-color-primary);\n  background: #f4f5f8;\n  border-radius: 50%;\n}\n.main_content_div .tracking_div .right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 80%;\n}\n.main_content_div .tracking_div .right .line_div {\n  height: 45px;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n}\n.main_content_div .tracking_div .right .round_div_gray {\n  height: 20px;\n  width: 100% px;\n  color: #C8C7CE;\n}\n.main_content_div .tracking_div .right .round_div_red {\n  height: 20px;\n  width: 100% px;\n  color: var(--ion-color-main);\n}\n.main_content_div .tracking_div .right .round_div_darkgray {\n  height: 20px;\n  width: 100%;\n  color: gray;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.btn_div .reject {\n  --background:var(--ion-color-danger);\n}\n.btn_div .accept {\n  --background: var(--ion-color-primary);\n}\n.status_div {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div ion-select {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-top: 3px;\n  --padding-bottom:3px;\n  width: 100%;\n}\n.status_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.green {\n  display: block;\n  text-align: center;\n  color: green;\n  font-weight: 600;\n}\n.red {\n  display: block;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9FOlxcSW9uaWNcXFVzZXIvc3JjXFxhcHBcXHBhZ2VzXFxvcmRlci1kZXRhaWxzXFxvcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FERUo7QUNESTtFQUNJLGFBQUE7QURHUjtBQ0RRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREdaO0FDRFk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FER2hCO0FDRFk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QURHaEI7QUNBWTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBREVkO0FDQVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBREVoQjtBQ0NZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FEQ2hCO0FDQ2dCO0VBQ0csaUJBQUE7QURDbkI7QUNJSTtFQUNJLGtCQUFBO0FERlI7QUNHUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUREWjtBQ0dZO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FERGhCO0FDR1k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FERGhCO0FDR2E7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUREZDtBQ01ZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBREpoQjtBQ01ZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FESmhCO0FDT1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QURMaEI7QUNRWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRE5oQjtBQ1VZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURSaEI7QUNZSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBRFZSO0FDWUk7RUFDSSxjQUFBO0FEVlI7QUNhSztFQUNHLFdBQUE7QURYUjtBQ1lRO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FEVlo7QUNXWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBRFRoQjtBQ1VnQjtFQUNJLGlCQUFBO0FEUnBCO0FDVWdCO0VBQ0ksaUJBQUE7QURScEI7QUNXWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBRFRoQjtBQ1dZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURUaEI7QUNnQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUVBLGVBQUE7RUFDQSxvQkFBQTtBRGZSO0FDZ0JRO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBRGRaO0FDa0JJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEaEJSO0FDbUJJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURqQlI7QUNvQlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QURsQlo7QUNtQlk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FEakJoQjtBQ29CWTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURsQmhCO0FDcUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURuQmhCO0FDcUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURuQmhCO0FDcUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURuQmhCO0FDc0JZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEcEJoQjtBQ3dCUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBRHRCWjtBQ3dCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FEdEJoQjtBQ3lCWTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRHZCaEI7QUN5Qlk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FEdkJoQjtBQ3lCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtBRHhCaEI7QUM4QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUQzQko7QUM2Qkk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FEM0JSO0FDOEJJO0VBQ0ksb0NBQUE7QUQ1QlI7QUM4Qkk7RUFDSSxzQ0FBQTtBRDVCUjtBQ2dDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRDdCSjtBQytCSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBRDdCUjtBQ2dDSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUQ5QlI7QUNrQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUQvQko7QUNpQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FEOUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAuZGlyZWN0aW9uQnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJlc19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJlc19sb2NhdGlvbiB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAub3JkZXJfaWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAub3JkZXJfaWQgaW9uLWxhYmVsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLnBlcnNvbmFsX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLmhlYWRfZ3JheSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAucHJpemUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAucHJpemUxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAuc21hbGxfbGJsMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50aXRsZXMge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLnN0b3JlTmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLnN0b3JlTmFtZSAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5zdG9yZU5hbWUgLnN0YXR1cyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5pdGVtcyB7XG4gIG1hcmdpbjogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLml0ZW1zcyB7XG4gIG1hcmdpbjogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAudmFsdWVzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhyX2xpbmVfZGl2IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAubGluZV9kaXYge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5saW5lX2Rpdl9kYXJrZ3JheSB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0M4QzdDRTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgLnJvdW5kX2Rpdl9ncmF5IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTlweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgLnJvdW5kX2Rpdl9kYXJrZ3JheSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOEM3Q0U7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5yb3VuZF9kaXZfcmVkIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA4MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCAubGluZV9kaXYge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCAucm91bmRfZGl2X2dyYXkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlIHB4O1xuICBjb2xvcjogI0M4QzdDRTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLnJpZ2h0IC5yb3VuZF9kaXZfcmVkIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJSBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLnJpZ2h0IC5yb3VuZF9kaXZfZGFya2dyYXkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmJ0bl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5idG5fZGl2IGlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5idG5fZGl2IC5yZWplY3Qge1xuICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG4uYnRuX2RpdiAuYWNjZXB0IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zdGF0dXNfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3RhdHVzX2RpdiBpb24tc2VsZWN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tcGFkZGluZy10b3A6IDNweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTozcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0YXR1c19kaXYgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZ3JlZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5yZWQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIC5jYXJkX2RpdntcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICAucmVzdG9fZGV0YWlse1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBcbiAgICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGlyZWN0aW9uQnRue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVzX25hbWV7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC5yZXNfbG9jYXRpb257XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3JkZXJfaWR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZF9kaXYye1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIC5wZXJzb25hbF9kZXRhaWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAucmVzX25hbWV7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIC5vcmRlcl9kZXRhaWx7XG4gICAgICAgICAgICAuaGVhZF9ncmF5e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaXple1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpemUxe1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zbWFsbF9sYmwye1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlc3tcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgICAuZGVzY19kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAuYm9yZGVyX2JvdHRvbXtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAuc3RvcmVOYW1le1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zdGF0dXN7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pdGVtc3tcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IC41cHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLml0ZW1zc3tcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIC5mbGV4X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAvLyBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIC52YWx1ZXN7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmhyX2xpbmVfZGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICB9XG5cbiAgICAudHJhY2tpbmdfZGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuXG4gICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIC5saW5lX2RpdntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEU4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGluZV9kaXZfZGFya2dyYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0M4QzdDRTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9ncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZGFya2dyYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEM3Q0U7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9yZWR7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTlweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmlnaHR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcblxuICAgICAgICAgICAgLmxpbmVfZGl2e1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZ3JheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0M4QzdDRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfcmVke1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X2RhcmtncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogI0M4QzdDRTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJ0bl9kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAvLyB3aWR0aDogMTMwcHg7XG4gICAgfVxuICAgIC5yZWplY3R7XG4gICAgICAgIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICB9XG4gICAgLmFjY2VwdHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7O1xuICAgIH1cbn1cblxuLnN0YXR1c19kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGlvbi1zZWxlY3R7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b20gOjNweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxufVxuXG4uZ3JlZW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnJlZHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function() { return OrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/







let OrderDetailsPage = class OrderDetailsPage {
    constructor(route, util, api, navCtrl, alertController, router, iab) {
        this.route = route;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.iab = iab;
        this.orderDetail = [];
        this.orders = [];
        this.status = [];
        this.driverInfo = [];
        this.stores = [];
        this.assigneeDriver = [];
        this.route.queryParams.subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                this.id = data.id;
                this.loaded = false;
                this.getOrder();
            }
            else {
                this.navCtrl.back();
            }
        });
    }
    back() {
        this.navCtrl.back();
    }
    getOrder() {
        const param = {
            id: this.id
        };
        this.api.post('orders/getById', param).subscribe((data) => {
            console.log(data);
            this.loaded = true;
            if (data && data.status === 200 && data.data.length > 0) {
                const info = data.data[0];
                console.log(info);
                this.orderDetail = JSON.parse(info.notes);
                console.log('driver???? ======>', this.orderDetail);
                const order = JSON.parse(info.orders);
                console.log('order=====>>', order);
                const finalOrder = [];
                if (info.assignee && info.assignee !== '') {
                    this.assigneeDriver = JSON.parse(info.assignee);
                    console.log('ASSSIGNEE---->>>>', this.assigneeDriver);
                }
                const ids = [...new Set(order.map(item => item.store_id))];
                ids.forEach(element => {
                    const param = {
                        id: element,
                        order: []
                    };
                    finalOrder.push(param);
                });
                ids.forEach((element, index) => {
                    order.forEach(cart => {
                        console.log('cart->>>???', cart);
                        if (cart.variations && cart.variations !== '' && typeof cart.variations === 'string') {
                            cart.variations = JSON.parse(cart.variations);
                            console.log(cart['variant']);
                            if (cart["variant"] === undefined) {
                                cart['variant'] = 0;
                            }
                        }
                        if (cart.store_id === element) {
                            finalOrder[index].order.push(cart);
                        }
                    });
                });
                console.log('final order', finalOrder);
                this.orders = finalOrder;
                this.status = JSON.parse(info.status);
                console.log('order status--------------------', this.status);
                const status = this.status.filter(x => x.status === 'created');
                if (status.length === this.status.length) {
                    this.canCancle = true;
                }
                else {
                    this.canCancle = false;
                }
                const delivered = this.status.filter(x => x.status === 'delivered');
                if (delivered.length === this.status.length) {
                    this.isDelivered = true;
                }
                else {
                    this.isDelivered = false;
                }
                // if()
                this.datetime = moment__WEBPACK_IMPORTED_MODULE_7__(info.date_time).format('dddd, MMMM Do YYYY');
                this.payMethod = info.paid_method === 'cod' ? 'COD' : 'PAID';
                this.orderAt = info.order_to;
                this.driverId = info.driver_id;
                if (this.driverId && this.driverId !== '') {
                    const userinfo = {
                        id: this.driverId
                    };
                    this.api.post('drivers/getDriversData', userinfo).subscribe((data) => {
                        console.log('driverid>', data);
                        if (data && data.status === 200 && data.data && data.data.length) {
                            this.driverInfo = data.data;
                            console.log(this.driverInfo);
                        }
                    }, error => {
                        console.log(error);
                    });
                }
                const stores = {
                    id: info.store_id
                };
                this.api.post('stores/getStoresData', stores).subscribe((data) => {
                    console.log('store=-============>>', data);
                    console.log('store=-============>>', data);
                    if (data && data.status === 200 && data.data.length) {
                        this.stores = data.data;
                    }
                    else {
                        this.util.showToast(this.util.getString('No Stores Found'), 'danger', 'bottom');
                        this.back();
                    }
                }, error => {
                    console.log('error', error);
                    this.util.showToast(this.util.getString('Something went wrong'), 'danger', 'bottom');
                });
                if (this.orderAt === 'home') {
                    const address = JSON.parse(info.address);
                    console.log('---address', address);
                    if (address && address.address) {
                        this.userLat = address.lat;
                        this.userLng = address.lng;
                        this.address = address.landmark + ' ' + address.house + ' ' + address.address + ' ' + address.pincode;
                    }
                }
            }
            else {
                this.util.errorToast(this.util.getString('Something went wrong'));
            }
        }, error => {
            console.log(error);
            this.loaded = true;
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    ngOnInit() {
    }
    call() {
        if (this.userInfo.mobile) {
            // window.open('tel:' + this.userInfo.mobile);
            this.iab.create('tel:' + this.userInfo.mobile, '_blank');
        }
        else {
            this.util.errorToast(this.util.getString('Number not found'));
        }
    }
    email() {
        if (this.userInfo.email) {
            // window.open('mailto:' + this.userInfo.email);
            this.iab.create('mailto:' + this.userInfo.email, '_blank');
        }
        else {
            this.util.errorToast(this.util.getString('Email not found'));
        }
    }
    callStore(item) {
        if (item) {
            // window.open('tel:' + item);
            this.iab.create('tel:' + item, '_blank');
        }
        else {
            this.util.errorToast(this.util.getString('Number not found'));
        }
    }
    emailStore(item) {
        if (item) {
            // window.open('mailto:' + item);
            this.iab.create('mailto:' + item, '_blank');
        }
        else {
            this.util.errorToast(this.util.getString('Email not found'));
        }
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.util.getString('How was your experience?'),
                message: this.util.getString('Rate your experience with stores and driver'),
                mode: 'ios',
                buttons: [
                    {
                        text: this.util.getString('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: this.util.getString('Yes'),
                        handler: () => {
                            console.log('Confirm Okay');
                            // this.util.setOrders(this.orderData);
                            const param = {
                                queryParams: {
                                    id: this.id
                                }
                            };
                            this.router.navigate(['order-rating'], param);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    changeStatus() {
        console.log('status');
        const newOrderNotes = {
            status: 1,
            value: this.util.getString('Order ') + this.util.getString('cancelled by you'),
            time: moment__WEBPACK_IMPORTED_MODULE_7__().format('lll'),
        };
        this.orderDetail.push(newOrderNotes);
        this.status.forEach(element => {
            if (element.status === 'created') {
                element.status = 'cancelled';
            }
        });
        this.util.show();
        const param = {
            id: this.id,
            notes: JSON.stringify(this.orderDetail),
            status: JSON.stringify(this.status),
        };
        console.log('---->', this.status);
        this.api.post('orders/editList', param).subscribe((data) => {
            console.log('order', data);
            this.util.hide();
            if (this.orderAt === 'home' && this.driverId !== '0') {
                this.updateDriver(this.driverId, 'active');
            }
            if (data && data.status === 200) {
                this.sendNotification('cancelled');
                this.back();
            }
            else {
                this.util.errorToast(this.util.getString('Something went wrong'));
            }
        }, error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    sendNotification(value) {
        if (this.userInfo && this.userInfo.fcm_token) {
            this.api.sendNotification(this.util.getString('Your order #') + this.id + ' ' + value, this.util.getString('Order')
                + ' ' + value, this.userInfo.fcm_token)
                .subscribe((data) => {
                console.log('onesignal', data);
            }, error => {
                console.log('onesignal error', error);
            });
        }
    }
    updateDriver(uid, value) {
        const param = {
            id: uid,
            current: value
        };
        console.log('param', param);
        this.api.post('drivers/edit_profile', param).subscribe((data) => {
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    getStoreName(id) {
        const item = this.stores.filter(x => x.uid === id);
        if (item && item.length) {
            return item[0].name;
        }
        return 'Store';
    }
    getOrderStatus(id) {
        const item = this.status.filter(x => x.id === id);
        if (item && item.length) {
            return this.util.getString(item[0].status);
        }
        return 'created';
    }
    getOrderStatusFromDriver(id) {
        const item = this.assigneeDriver.filter(x => x.driver === id);
        if (item && item.length) {
            return this.getOrderStatus(item[0].assignee);
        }
        return 'rejected';
    }
    contanct(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(item);
            const alert = yield this.alertController.create({
                header: this.util.getString('Contact') + ' ' + item.name,
                inputs: [
                    {
                        name: 'mail',
                        type: 'radio',
                        label: this.util.getString('Email'),
                        value: 'mail',
                    },
                    {
                        name: 'call',
                        type: 'radio',
                        label: this.util.getString('Call'),
                        value: 'call'
                    },
                    {
                        name: 'msg',
                        type: 'radio',
                        label: this.util.getString('Message'),
                        value: 'msg'
                    },
                ],
                buttons: [
                    {
                        text: this.util.getString('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: this.util.getString('Ok'),
                        handler: (data) => {
                            console.log('Confirm Ok', data);
                            if (data && data === 'mail') {
                                this.emailStore(item.email);
                            }
                            else if (data && data === 'call') {
                                this.callStore(item.mobile);
                            }
                            else if (data && data === 'msg') {
                                console.log('none');
                                const param = {
                                    queryParams: {
                                        id: item.uid,
                                        name: item.name,
                                        uid: localStorage.getItem('uid')
                                    }
                                };
                                this.router.navigate(['inbox'], param);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    contanctDriver(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(item);
            const alert = yield this.alertController.create({
                header: this.util.getString('Contact') + ' ' + item.first_name,
                inputs: [
                    {
                        name: 'mail',
                        type: 'radio',
                        label: this.util.getString('Email'),
                        value: 'mail',
                    },
                    {
                        name: 'call',
                        type: 'radio',
                        label: this.util.getString('Call'),
                        value: 'call'
                    },
                ],
                buttons: [
                    {
                        text: this.util.getString('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: this.util.getString('Ok'),
                        handler: (data) => {
                            console.log('Confirm Ok', data);
                            if (data && data === 'mail') {
                                this.emailStore(item.email);
                            }
                            else if (data && data === 'call') {
                                this.callStore(item.mobile);
                            }
                            else {
                                console.log('none');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    direction(item, type) {
        console.log(item, type);
        const navData = {
            queryParams: {
                lat: item.lat,
                lng: item.lng,
                who: type,
                id: type === 'store' ? item.uid : item.id,
                orderAt: this.orderAt,
                homeLat: this.userLat ? this.userLat : 'none',
                homeLng: this.userLng ? this.userLng : 'none',
                orderId: this.id
            }
        };
        this.router.navigate(['direction'], navData);
    }
};
OrderDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] }
];
OrderDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-details.page.scss */ "./src/app/pages/order-details/order-details.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]])
], OrderDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-details-order-details-module-es2015.js.map