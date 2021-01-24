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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div .card_div {\n  padding: 20px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .directionBtn {\n  position: absolute;\n  right: 0px;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .card_div2 {\n  padding: 10px 20px;\n}\n.main_content_div .card_div2 .personal_detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div2 .personal_detail ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .card_div2 .personal_detail ion-button {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .personal_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div2 .order_detail .head_gray {\n  color: gray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n}\n.main_content_div .card_div2 .order_detail .prize1 {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.main_content_div .titles {\n  font-size: 15px;\n  font-weight: bold;\n  margin: 20px 0px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .desc_div {\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom {\n  padding-bottom: 10px;\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom .storeName {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .storeName .name {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .storeName .status {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .items {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: 0.5px dashed lightgray;\n  margin-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .itemss {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  padding-bottom: 10px;\n}\n.main_content_div .flex_div .values {\n  font-weight: bold;\n  text-transform: capitalize;\n}\n.main_content_div .hr_line_div {\n  margin-top: 15px;\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n}\n.main_content_div .tracking_div {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.main_content_div .tracking_div .left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20%;\n}\n.main_content_div .tracking_div .left .line_div {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #E8E8E8;\n}\n.main_content_div .tracking_div .left .line_div_darkgray {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #C8C7CE;\n}\n.main_content_div .tracking_div .left .round_div_gray {\n  height: 20px;\n  width: 20px;\n  background-color: #E8E8E8;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_darkgray {\n  height: 20px;\n  width: 20px;\n  background-color: #C8C7CE;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_red {\n  height: 20px;\n  width: 20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left ion-icon {\n  font-size: 20px;\n  margin-left: -7px;\n  color: var(--ion-color-primary);\n  background: #f4f5f8;\n  border-radius: 50%;\n}\n.main_content_div .tracking_div .right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 80%;\n}\n.main_content_div .tracking_div .right .line_div {\n  height: 45px;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n}\n.main_content_div .tracking_div .right .round_div_gray {\n  height: 20px;\n  width: 100% px;\n  color: #C8C7CE;\n}\n.main_content_div .tracking_div .right .round_div_red {\n  height: 20px;\n  width: 100% px;\n  color: var(--ion-color-main);\n}\n.main_content_div .tracking_div .right .round_div_darkgray {\n  height: 20px;\n  width: 100%;\n  color: gray;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.btn_div .reject {\n  --background:var(--ion-color-danger);\n}\n.btn_div .accept {\n  --background: var(--ion-color-primary);\n}\n.status_div {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div ion-select {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-top: 3px;\n  --padding-bottom:3px;\n  width: 100%;\n}\n.status_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.green {\n  display: block;\n  text-align: center;\n  color: green;\n  font-weight: 600;\n}\n.red {\n  display: block;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXG9yZGVyLWRldGFpbHNcXG9yZGVyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QURFSjtBQ0RJO0VBQ0ksYUFBQTtBREdSO0FDRFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FER1o7QUNEWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QURHaEI7QUNEWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBREdoQjtBQ0FZO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FERWQ7QUNBWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FERWhCO0FDQ1k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QURDaEI7QUNDZ0I7RUFDRyxpQkFBQTtBRENuQjtBQ0lJO0VBQ0ksa0JBQUE7QURGUjtBQ0dRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRERaO0FDR1k7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7QUREaEI7QUNHWTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUREaEI7QUNHYTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBRERkO0FDTVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FESmhCO0FDTVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QURKaEI7QUNPWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBRExoQjtBQ1FZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FETmhCO0FDVVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRFJoQjtBQ1lJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FEVlI7QUNZSTtFQUNJLGNBQUE7QURWUjtBQ2FLO0VBQ0csV0FBQTtBRFhSO0FDWVE7RUFDSSxvQkFBQTtFQUNBLFdBQUE7QURWWjtBQ1dZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FEVGhCO0FDVWdCO0VBQ0ksaUJBQUE7QURScEI7QUNVZ0I7RUFDSSxpQkFBQTtBRFJwQjtBQ1dZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FEVGhCO0FDV1k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRFRoQjtBQ2dCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBRUEsZUFBQTtFQUNBLG9CQUFBO0FEZlI7QUNnQlE7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0FEZFo7QUNrQkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURoQlI7QUNtQkk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRGpCUjtBQ29CUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBRGxCWjtBQ21CWTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QURqQmhCO0FDb0JZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRGxCaEI7QUNxQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRG5CaEI7QUNxQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRG5CaEI7QUNxQlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRG5CaEI7QUNzQlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURwQmhCO0FDd0JRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FEdEJaO0FDd0JZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUR0QmhCO0FDeUJZO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FEdkJoQjtBQ3lCWTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUR2QmhCO0FDeUJZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0FEeEJoQjtBQzhCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBRDNCSjtBQzZCSTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUQzQlI7QUM4Qkk7RUFDSSxvQ0FBQTtBRDVCUjtBQzhCSTtFQUNJLHNDQUFBO0FENUJSO0FDZ0NBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FEN0JKO0FDK0JJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FEN0JSO0FDZ0NJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBRDlCUjtBQ2tDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRC9CSjtBQ2lDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUQ5QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5kaXJlY3Rpb25CdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX2xvY2F0aW9uIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAucGVyc29uYWxfZGV0YWlsIC5yZXNfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAuaGVhZF9ncmF5IHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLm9yZGVyX2RldGFpbCAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5wcml6ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5wcml6ZTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5zbWFsbF9sYmwyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRpdGxlcyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuc3RvcmVOYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuc3RvcmVOYW1lIC5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLnN0b3JlTmFtZSAuc3RhdHVzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLml0ZW1zIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuaXRlbXNzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC52YWx1ZXMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaHJfbGluZV9kaXYge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5saW5lX2RpdiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgLmxpbmVfZGl2X2RhcmtncmF5IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQzhDN0NFO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAucm91bmRfZGl2X2dyYXkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAucm91bmRfZGl2X2RhcmtncmF5IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzdDRTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTlweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgLnJvdW5kX2Rpdl9yZWQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDgwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLnJpZ2h0IC5saW5lX2RpdiB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLnJpZ2h0IC5yb3VuZF9kaXZfZ3JheSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCUgcHg7XG4gIGNvbG9yOiAjQzhDN0NFO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAucmlnaHQgLnJvdW5kX2Rpdl9yZWQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlIHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAucmlnaHQgLnJvdW5kX2Rpdl9kYXJrZ3JheSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uYnRuX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ0bl9kaXYgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmJ0bl9kaXYgLnJlamVjdCB7XG4gIC0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbi5idG5fZGl2IC5hY2NlcHQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnN0YXR1c19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zdGF0dXNfZGl2IGlvbi1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAtLXBhZGRpbmctYm90dG9tOjNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3RhdHVzX2RpdiBpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ncmVlbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgLmNhcmRfZGl2e1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIC5yZXN0b19kZXRhaWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIFxuICAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXJlY3Rpb25CdG57XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZXNfbmFtZXtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgIFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLnJlc19sb2NhdGlvbntcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcmRlcl9pZHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcblxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2RpdjJ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgLnBlcnNvbmFsX2RldGFpbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5yZXNfbmFtZXtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgIFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbHtcbiAgICAgICAgICAgIC5oZWFkX2dyYXl7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpemV7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcml6ZTF7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNtYWxsX2xibDJ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAudGl0bGVze1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgIC5kZXNjX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5ib3JkZXJfYm90dG9te1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC5zdG9yZU5hbWV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIC5uYW1le1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN0YXR1c3tcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLml0ZW1ze1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjVweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbXNze1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmZsZXhfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC8vIGhlaWdodDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgLnZhbHVlc3tcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaHJfbGluZV9kaXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgIH1cblxuICAgIC50cmFja2luZ19kaXZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNGQUZBRkE7XG5cbiAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgLmxpbmVfZGl2e1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5saW5lX2Rpdl9kYXJrZ3JheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzhDN0NFO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucm91bmRfZGl2X2dyYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9kYXJrZ3JheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzdDRTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC05cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X3JlZHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNWY4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuXG4gICAgICAgICAgICAubGluZV9kaXZ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9ncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjQzhDN0NFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9yZWR7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZGFya2dyYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjQzhDN0NFO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnRuX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC8vIHdpZHRoOiAxMzBweDtcbiAgICB9XG4gICAgLnJlamVjdHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgIH1cbiAgICAuYWNjZXB0e1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTs7XG4gICAgfVxufVxuXG4uc3RhdHVzX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW9uLXNlbGVjdHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbSA6M3B4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59XG5cbi5ncmVlbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucmVke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */");

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