function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-rating-order-rating-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-rating/order-rating.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-rating/order-rating.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrderRatingOrderRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Rate Order')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n\n\n    <ion-label class=\"titles\"> {{util.getString('Orders')}} </ion-label>\n    <div class=\"desc_div\">\n      <div *ngIf=\"orders?.length\" class=\"border_bottom\">\n        <div *ngFor=\"let item of orders\">\n          <p class=\"storeName\">\n            <span class=\"name\"> {{getStoreName(item.id)}} </span>\n            <span class=\"status\" (click)=\"rateStore(item.id)\">\n              <div class=\"ion-activatable ripple-parent\">\n                <ion-icon slot=\"start\" color=\"warning\" name=\"star-outline\"></ion-icon>\n                <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n              </div>\n            </span>\n          </p>\n          <p *ngFor=\"let order of item.order;let ol = index\" class=\"items\">\n            <span>{{order.name}} -\n              <span *ngIf=\"order.have_gram === '1'\"> {{order.gram}} {{util.getString('grams')}} </span>\n              <span *ngIf=\"order.have_kg === '1'\"> {{order.kg}} {{util.getString('kg')}} </span>\n              <span *ngIf=\"order.have_liter ==='1'\"> {{order.liter}} {{util.getString('ltr')}} </span>\n              <span *ngIf=\"order.have_ml ==='1'\"> {{order.ml}} {{util.getString('ml')}}</span>\n              <span *ngIf=\"order.have_pcs === '1'\"> {{order.pcs}} {{util.getString('pcs')}} </span>\n            </span>\n            <span (click)=\"rateProduct(order)\">\n              <div class=\"ion-activatable ripple-parent\">\n                <ion-icon slot=\"start\" color=\"warning\" name=\"star-outline\"></ion-icon>\n                <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n              </div>\n            </span>\n          </p>\n        </div>\n      </div>\n\n      <ion-label class=\"titles\" *ngIf=\"driverInfo && driverInfo.length\"> {{util.getString('Rate Drivers')}} </ion-label>\n\n      <div *ngFor=\"let item of driverInfo\">\n        <div class=\"card_div\">\n          <div class=\"resto_detail\">\n            <div class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"></div>\n            <div style=\"margin-left: 10px;\" (click)=\"ratDriver(item)\">\n              <ion-label class=\"res_name\">{{item.first_name}} {{item.last_name}}</ion-label>\n              <ion-label class=\"res_location\">\n                <ion-icon name=\"mail-outline\"></ion-icon> {{item.email}}\n              </ion-label>\n              <ion-label class=\"res_location\">\n                <ion-icon name=\"call-outline\"></ion-icon> {{item.mobile}}\n              </ion-label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/order-rating/order-rating-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/order-rating/order-rating-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: OrderRatingPageRoutingModule */

  /***/
  function srcAppPagesOrderRatingOrderRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRatingPageRoutingModule", function () {
      return OrderRatingPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _order_rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-rating.page */
    "./src/app/pages/order-rating/order-rating.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _order_rating_page__WEBPACK_IMPORTED_MODULE_3__["OrderRatingPage"]
    }];

    var OrderRatingPageRoutingModule = function OrderRatingPageRoutingModule() {
      _classCallCheck(this, OrderRatingPageRoutingModule);
    };

    OrderRatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderRatingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/order-rating/order-rating.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/order-rating/order-rating.module.ts ***!
    \***********************************************************/

  /*! exports provided: OrderRatingPageModule */

  /***/
  function srcAppPagesOrderRatingOrderRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRatingPageModule", function () {
      return OrderRatingPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _order_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order-rating-routing.module */
    "./src/app/pages/order-rating/order-rating-routing.module.ts");
    /* harmony import */


    var _order_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-rating.page */
    "./src/app/pages/order-rating/order-rating.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var OrderRatingPageModule = function OrderRatingPageModule() {
      _classCallCheck(this, OrderRatingPageModule);
    };

    OrderRatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderRatingPageRoutingModule"]],
      declarations: [_order_rating_page__WEBPACK_IMPORTED_MODULE_6__["OrderRatingPage"]]
    })], OrderRatingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/order-rating/order-rating.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/order-rating/order-rating.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrderRatingOrderRatingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div .card_div {\n  padding: 20px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .card_div .resto_detail .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.main_content_div .card_div2 {\n  padding: 10px 20px;\n}\n.main_content_div .card_div2 .personal_detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div2 .personal_detail ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .card_div2 .personal_detail ion-button {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .personal_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div2 .order_detail .head_gray {\n  color: gray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n}\n.main_content_div .card_div2 .order_detail .prize1 {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.main_content_div .titles {\n  font-size: 15px;\n  font-weight: bold;\n  margin: 20px 0px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .desc_div {\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom {\n  padding-bottom: 10px;\n  width: 100%;\n}\n.main_content_div .desc_div .border_bottom .storeName {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .storeName .name {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .storeName .status {\n  font-weight: bold;\n}\n.main_content_div .desc_div .border_bottom .storeName .status .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.main_content_div .desc_div .border_bottom .items {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  padding-bottom: 5px;\n  border-bottom: 0.5px dashed lightgray;\n  margin-bottom: 10px;\n}\n.main_content_div .desc_div .border_bottom .itemss {\n  margin: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.main_content_div .desc_div .border_bottom .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 10px;\n}\n.main_content_div .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  padding-bottom: 10px;\n}\n.main_content_div .flex_div .values {\n  font-weight: bold;\n  text-transform: capitalize;\n}\n.main_content_div .hr_line_div {\n  margin-top: 15px;\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n}\n.main_content_div .tracking_div {\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n}\n.main_content_div .tracking_div .left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20%;\n}\n.main_content_div .tracking_div .left .line_div {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #E8E8E8;\n}\n.main_content_div .tracking_div .left .line_div_darkgray {\n  height: 40px;\n  width: 1px;\n  border: 1px solid #C8C7CE;\n}\n.main_content_div .tracking_div .left .round_div_gray {\n  height: 20px;\n  width: 20px;\n  background-color: #E8E8E8;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_darkgray {\n  height: 20px;\n  width: 20px;\n  background-color: #C8C7CE;\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left .round_div_red {\n  height: 20px;\n  width: 20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  margin-left: -9px;\n}\n.main_content_div .tracking_div .left ion-icon {\n  font-size: 20px;\n  margin-left: -7px;\n  color: var(--ion-color-primary);\n  background: #f4f5f8;\n  border-radius: 50%;\n}\n.main_content_div .tracking_div .right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 80%;\n}\n.main_content_div .tracking_div .right .line_div {\n  height: 45px;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n}\n.main_content_div .tracking_div .right .round_div_gray {\n  height: 20px;\n  width: 100% px;\n  color: #C8C7CE;\n}\n.main_content_div .tracking_div .right .round_div_red {\n  height: 20px;\n  width: 100% px;\n  color: var(--ion-color-main);\n}\n.main_content_div .tracking_div .right .round_div_darkgray {\n  height: 20px;\n  width: 100%;\n  color: gray;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .reject {\n  --background:var(--ion-color-danger);\n}\n.btn_div .accept {\n  --background: var(--ion-color-primary);\n}\n.status_div {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div ion-select {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-top: 3px;\n  --padding-bottom:3px;\n  width: 100%;\n}\n.status_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.green {\n  display: block;\n  text-align: center;\n  color: green;\n  font-weight: 600;\n}\n.red {\n  display: block;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItcmF0aW5nL29yZGVyLXJhdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVyLXJhdGluZy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50L3NyY1xcYXBwXFxwYWdlc1xcb3JkZXItcmF0aW5nXFxvcmRlci1yYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QURFSjtBQ0RJO0VBQ0ksYUFBQTtBREdSO0FDRFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FER1o7QUNEWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QURHaEI7QUNBWTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBREVkO0FDQVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBREVoQjtBQ0NZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FEQ2hCO0FDQ2dCO0VBQ0csaUJBQUE7QURDbkI7QUNFWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FEQWhCO0FDSUk7RUFDSSxrQkFBQTtBREZSO0FDR1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FERFo7QUNHWTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBRERoQjtBQ0dZO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBRERoQjtBQ0dhO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0FERGQ7QUNNWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURKaEI7QUNNWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBREpoQjtBQ09ZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FETGhCO0FDUVk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUROaEI7QUNVWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEUmhCO0FDWUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QURWUjtBQ1lJO0VBQ0ksY0FBQTtBRFZSO0FDYUs7RUFDRyxXQUFBO0FEWFI7QUNZUTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtBRFZaO0FDV1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QURUaEI7QUNVZ0I7RUFDSSxpQkFBQTtBRFJwQjtBQ1VnQjtFQUNJLGlCQUFBO0FEUnBCO0FDU29CO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QURQeEI7QUNXWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBRFRoQjtBQ1dZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURUaEI7QUNXWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FEVGhCO0FDZ0JJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFFQSxlQUFBO0VBQ0Esb0JBQUE7QURmUjtBQ2dCUTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7QURkWjtBQ2tCSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRGhCUjtBQ21CSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FEakJSO0FDb0JRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FEbEJaO0FDbUJZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRGpCaEI7QUNvQlk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FEbEJoQjtBQ3FCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEbkJoQjtBQ3FCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEbkJoQjtBQ3FCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEbkJoQjtBQ3NCWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRHBCaEI7QUN3QlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUR0Qlo7QUN3Qlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBRHRCaEI7QUN5Qlk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUR2QmhCO0FDeUJZO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBRHZCaEI7QUN5Qlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUVBLFdBQUE7QUR4QmhCO0FDOEJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FEM0JKO0FDNkJJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUQzQlI7QUM2Qkk7RUFDSSxvQ0FBQTtBRDNCUjtBQzZCSTtFQUNJLHNDQUFBO0FEM0JSO0FDK0JBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FENUJKO0FDOEJJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FENUJSO0FDK0JJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBRDdCUjtBQ2lDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRDlCSjtBQ2dDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUQ3QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci1yYXRpbmcvb3JkZXItcmF0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX2xvY2F0aW9uIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLnBlcnNvbmFsX2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLnBlcnNvbmFsX2RldGFpbCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLnBlcnNvbmFsX2RldGFpbCBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwgLnJlc19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5oZWFkX2dyYXkge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnByaXplIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnByaXplMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnNtYWxsX2xibDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudGl0bGVzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5zdG9yZU5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5zdG9yZU5hbWUgLm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuc3RvcmVOYW1lIC5zdGF0dXMge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuc3RvcmVOYW1lIC5zdGF0dXMgLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVzY19kaXYgLmJvcmRlcl9ib3R0b20gLml0ZW1zIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXNjX2RpdiAuYm9yZGVyX2JvdHRvbSAuaXRlbXNzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlc2NfZGl2IC5ib3JkZXJfYm90dG9tIC5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZsZXhfZGl2IC52YWx1ZXMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaHJfbGluZV9kaXYge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5saW5lX2RpdiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgLmxpbmVfZGl2X2RhcmtncmF5IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQzhDN0NFO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAucm91bmRfZGl2X2dyYXkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAucm91bmRfZGl2X2RhcmtncmF5IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzdDRTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTlweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgLnJvdW5kX2Rpdl9yZWQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogI2Y0ZjVmODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDgwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLnJpZ2h0IC5saW5lX2RpdiB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLnJpZ2h0IC5yb3VuZF9kaXZfZ3JheSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCUgcHg7XG4gIGNvbG9yOiAjQzhDN0NFO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAucmlnaHQgLnJvdW5kX2Rpdl9yZWQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlIHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAucmlnaHQgLnJvdW5kX2Rpdl9kYXJrZ3JheSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4uYnRuX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ0bl9kaXYgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTMwcHg7XG59XG4uYnRuX2RpdiAucmVqZWN0IHtcbiAgLS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuLmJ0bl9kaXYgLmFjY2VwdCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc3RhdHVzX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN0YXR1c19kaXYgaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206M3B4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGF0dXNfZGl2IGlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmdyZWVuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICAuY2FyZF9kaXZ7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgLnJlc3RvX2RldGFpbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXG4gICAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVzX25hbWV7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC5yZXNfbG9jYXRpb257XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3JkZXJfaWR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaXBwbGUtcGFyZW50e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmRfZGl2MntcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAucGVyc29uYWxfZGV0YWlse1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgLnJlc19uYW1le1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyAgXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICAub3JkZXJfZGV0YWlse1xuICAgICAgICAgICAgLmhlYWRfZ3JheXtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcml6ZXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaXplMXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc21hbGxfbGJsMntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC50aXRsZXN7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAgLmRlc2NfZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLmJvcmRlcl9ib3R0b217XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLnN0b3JlTmFtZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3RhdHVze1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgLnJpcHBsZS1wYXJlbnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pdGVtc3tcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IC41cHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLml0ZW1zc3tcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlwcGxlLXBhcmVudHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICAuZmxleF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLy8gaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAudmFsdWVze1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ocl9saW5lX2RpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgLnRyYWNraW5nX2RpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI0ZBRkFGQTtcblxuICAgICAgICAubGVmdHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICAubGluZV9kaXZ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U4RThFODtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxpbmVfZGl2X2RhcmtncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOEM3Q0U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZ3JheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U4RThFODtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC05cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X2RhcmtncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDN0NFO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfcmVke1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC05cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNGY1Zjg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG5cbiAgICAgICAgICAgIC5saW5lX2RpdntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X2dyYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNDOEM3Q0U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X3JlZHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9kYXJrZ3JheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgLy8gY29sb3I6ICNDOEM3Q0U7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG5fZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgIH1cbiAgICAucmVqZWN0e1xuICAgICAgICAtLWJhY2tncm91bmQ6dmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgfVxuICAgIC5hY2NlcHR7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbiAgICB9XG59XG5cbi5zdGF0dXNfZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tc2VsZWN0e1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tIDozcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbn1cblxuLmdyZWVue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZWR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/order-rating/order-rating.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/order-rating/order-rating.page.ts ***!
    \*********************************************************/

  /*! exports provided: OrderRatingPage */

  /***/
  function srcAppPagesOrderRatingOrderRatingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRatingPage", function () {
      return OrderRatingPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _store_rating_store_rating_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../store-rating/store-rating.page */
    "./src/app/pages/store-rating/store-rating.page.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _product_rating_product_rating_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../product-rating/product-rating.page */
    "./src/app/pages/product-rating/product-rating.page.ts");
    /* harmony import */


    var _driver_rating_driver_rating_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../driver-rating/driver-rating.page */
    "./src/app/pages/driver-rating/driver-rating.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var OrderRatingPage = /*#__PURE__*/function () {
      function OrderRatingPage(route, util, api, navCtrl, modalCtrl) {
        var _this = this;

        _classCallCheck(this, OrderRatingPage);

        this.route = route;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.orderDetail = [];
        this.orders = [];
        this.status = [];
        this.stores = [];
        this.driverInfo = [];
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id) {
            _this.id = data.id;
            _this.loaded = false;

            _this.getOrder();
          } else {
            _this.navCtrl.back();
          }
        });
      }

      _createClass(OrderRatingPage, [{
        key: "getOrder",
        value: function getOrder() {
          var _this2 = this;

          var param = {
            id: this.id
          };
          this.api.post('orders/getById', param).subscribe(function (data) {
            console.log(data);
            _this2.loaded = true;

            if (data && data.status === 200 && data.data.length > 0) {
              var info = data.data[0];
              console.log(info);
              _this2.orderDetail = JSON.parse(info.notes);
              var order = JSON.parse(info.orders);
              console.log('order=====>>', order);
              var finalOrder = [];

              var ids = _toConsumableArray(new Set(order.map(function (item) {
                return item.store_id;
              })));

              ids.forEach(function (element) {
                var param = {
                  id: element,
                  order: []
                };
                finalOrder.push(param);
              });
              ids.forEach(function (element, index) {
                order.forEach(function (cart) {
                  if (cart.store_id === element) {
                    finalOrder[index].order.push(cart);
                  }
                });
              });
              console.log('final order', finalOrder);
              _this2.orders = finalOrder;
              _this2.status = JSON.parse(info.status);
              console.log('order status--------------------', _this2.status); // if()

              _this2.datetime = moment__WEBPACK_IMPORTED_MODULE_7__(info.date_time).format('dddd, MMMM Do YYYY');
              _this2.payMethod = info.paid_method === 'cod' ? 'COD' : 'PAID';
              _this2.orderAt = info.order_to;
              _this2.driverId = info.driver_id;

              if (_this2.driverId && _this2.driverId !== '') {
                var userinfo = {
                  id: _this2.driverId
                };

                _this2.api.post('drivers/getDriversData', userinfo).subscribe(function (data) {
                  console.log('driverid>', data);

                  if (data && data.status === 200 && data.data && data.data.length) {
                    _this2.driverInfo = data.data;
                    console.log(_this2.driverInfo);
                  }
                }, function (error) {
                  console.log(error);
                });
              }

              var stores = {
                id: info.store_id
              };

              _this2.api.post('stores/getStoresData', stores).subscribe(function (data) {
                console.log('store=-============>>', data);
                console.log('store=-============>>', data);

                if (data && data.status === 200 && data.data.length) {
                  _this2.stores = data.data;
                } else {
                  _this2.util.showToast(_this2.util.getString('No Stores Found'), 'danger', 'bottom');

                  _this2.back();
                }
              }, function (error) {
                console.log('error', error);

                _this2.util.showToast(_this2.util.getString('Something went wrong'), 'danger', 'bottom');
              });

              if (_this2.orderAt === 'home') {
                var address = JSON.parse(info.address);
                console.log('---address', address);
              }
            } else {
              _this2.util.errorToast(_this2.util.getString('Something went wrong'));
            }
          }, function (error) {
            console.log(error);
            _this2.loaded = true;

            _this2.util.errorToast(_this2.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "getStoreName",
        value: function getStoreName(id) {
          var item = this.stores.filter(function (x) {
            return x.uid === id;
          });

          if (item && item.length) {
            return item[0].name;
          }

          return 'Store';
        }
      }, {
        key: "rateProduct",
        value: function rateProduct(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _product_rating_product_rating_page__WEBPACK_IMPORTED_MODULE_8__["ProductRatingPage"],
                      cssClass: 'modalContact',
                      backdropDismiss: false,
                      swipeToClose: true,
                      componentProps: {
                        id: item.id,
                        name: item.name
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "rateStore",
        value: function rateStore(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _store_rating_store_rating_page__WEBPACK_IMPORTED_MODULE_1__["StoreRatingPage"],
                      cssClass: 'modalContact',
                      componentProps: {
                        id: item,
                        name: this.getStoreName(item)
                      },
                      backdropDismiss: false,
                      swipeToClose: true
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "ratDriver",
        value: function ratDriver(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log(item);
                    _context3.next = 3;
                    return this.modalCtrl.create({
                      component: _driver_rating_driver_rating_page__WEBPACK_IMPORTED_MODULE_9__["DriverRatingPage"],
                      cssClass: 'modalContact',
                      backdropDismiss: false,
                      swipeToClose: true,
                      componentProps: {
                        id: item.id,
                        name: item.first_name + ' ' + item.last_name
                      }
                    });

                  case 3:
                    modal = _context3.sent;
                    _context3.next = 6;
                    return modal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return OrderRatingPage;
    }();

    OrderRatingPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    OrderRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-order-rating',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./order-rating.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-rating/order-rating.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./order-rating.page.scss */
      "./src/app/pages/order-rating/order-rating.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])], OrderRatingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-order-rating-order-rating-module-es5.js.map