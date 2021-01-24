function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{util.getString('Cart')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<app-closed *ngIf=\"util.appClosed\"></app-closed>\n<ion-content *ngIf=\"!util.appClosed\">\n  <div *ngIf=\"!cart.cart?.length\" class=\"nothing\">\n    <p class=\"bolder\"> {{util.getString('Your cart is empty')}} </p>\n    <img src=\"assets/imgs/basket.gif\" alt=\"\" srcset=\"\">\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"cart.cart?.length\">\n\n    <ion-label class=\"top_lbl\"> {{util.getString('Your Cart')}} </ion-label>\n\n    <div class=\"content_div\">\n\n      <div class=\"card_div\" *ngFor=\"let item of cart.cart;let i = index\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url('+api.mediaURL+item.cover+')'\">\n          <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n          <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n            <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n          </div>\n        </div>\n        <div class=\"second_div\">\n          <ion-label class=\"name_lbl\">{{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}</ion-label>\n          <div *ngIf=\"item.size ==='1'\" class=\"variant\" (click)=\"variant(item,i)\">\n            <ion-label class=\"selecter ion-activatable\">\n              <span>\n                <span> {{\n                              item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].title ?\n                              item.variations[0].items[item.variant].title : ''}} </span>\n                -\n                <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n                  <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                 item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                 item.variations[0].items[item.variant].price ?\n                                 item.variations[0].items[item.variant].price : 0}}\n                  </span>\n                  <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount ?\n                                item.variations[0].items[item.variant].discount : 0}}\n                  </span>\n                  <span\n                    *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                 item.variations[0].items[item.variant].price ?\n                                 item.variations[0].items[item.variant].price : 0}}\n                  </span>\n\n                </span>\n                <span *ngIf=\"util.cside ==='right'\">\n                  <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].price ?\n                                  item.variations[0].items[item.variant].price : 0}}\n                  </span>\n                  <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount ?\n                                item.variations[0].items[item.variant].discount : 0}}\n                  </span>\n                  <span\n                    *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].price ?\n                                  item.variations[0].items[item.variant].price : 0}}\n                  </span>\n                  {{util.currecny}}\n                </span>\n              </span>\n              <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n              <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n            </ion-label>\n          </div>\n          <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n          <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n          <img src=\"assets/imgs/offer.png\" class=\"offer\" alt=\"Offer\" *ngIf=\"item.in_offer ==='1'\">\n          <ion-label class=\"itemsKind\" *ngIf=\"item.size ==='0'\">\n            <span *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </span>\n            <span *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </span>\n            <span *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </span>\n            <span *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}}</span>\n            <span *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </span>\n          </ion-label>\n          <div *ngIf=\"item.size ==='0'\">\n            <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='left'\"> {{util.currecny}}\n              {{item.original_price}} </ion-label>\n            <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='right'\">{{item.original_price}}\n              {{util.currecny}}</ion-label>\n            <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\">\n              <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{item.original_price}} </span>\n              <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.sell_price}} </span>\n\n              <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{item.original_price}} {{util.currecny}}</span>\n              <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{item.sell_price}} {{util.currecny}}</span>\n\n            </ion-label>\n          </div>\n          <div class=\"cartBtn\" *ngIf=\"cart.itemId.includes(item.id)\">\n            <div class=\"abs_add\">\n              <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\">\n              <ion-label>{{item.quantiy}}</ion-label>\n              <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\">\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <p class=\"instructions\">\n        {{util.getString('Orders once placed cannot be cancelled and are non-refundable')}}\n      </p>\n    </div>\n  </div>\n\n\n\n</ion-content>\n\n<ion-footer>\n  <div class=\"bottom_div\" (click)=\"goToPayment()\" *ngIf=\"cart.cart?.length\">\n    <ion-label>{{cart.cart.length}} {{util.getString('Items')}}:\n      <span *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{cart.totalPrice}}</span>\n      <span *ngIf=\"util.cside ==='right'\">{{cart.totalPrice}} {{util.currecny}} </span>\n    </ion-label>\n    <ion-label>{{util.getString('Checkout')}}\n      <ion-icon name=\"exit-outline\"></ion-icon>\n    </ion-label>\n  </div>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/cart/cart-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CartPageRoutingModule */

  /***/
  function srcAppPagesCartCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
      return CartPageRoutingModule;
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


    var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/pages/cart/cart.page.ts");
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
      component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }];

    var CartPageRoutingModule = function CartPageRoutingModule() {
      _classCallCheck(this, CartPageRoutingModule);
    };

    CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CartPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/cart/cart.module.ts ***!
    \*******************************************/

  /*! exports provided: CartPageModule */

  /***/
  function srcAppPagesCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
      return CartPageModule;
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


    var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart-routing.module */
    "./src/app/pages/cart/cart-routing.module.ts");
    /* harmony import */


    var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/pages/cart/cart.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CartPageModule = function CartPageModule() {
      _classCallCheck(this, CartPageModule);
    };

    CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })], CartPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/cart/cart.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 110px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .top_lbl {\n  font-size: 25px;\n  font-family: muli-bold;\n  margin-bottom: 10px;\n}\n.main_content_div .small_lbl {\n  color: lightgray;\n  font-family: muli-bold;\n  font-size: 18px;\n}\n.main_content_div .content_div {\n  padding: 10px 0px;\n}\n.main_content_div .content_div .card_div {\n  width: 100%;\n  padding: 10px;\n  border-bottom: 0.5px solid #E8E8E8;\n  display: flex;\n  flex-direction: row;\n}\n.main_content_div .content_div .card_div .back_image {\n  width: 100px;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  min-width: 100px;\n  position: relative;\n}\n.main_content_div .content_div .card_div .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content_div .content_div .card_div .second_div {\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n}\n.main_content_div .content_div .card_div .second_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n.main_content_div .content_div .card_div .second_div .offer {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 0px;\n}\n.main_content_div .content_div .card_div .second_div .itemsKind {\n  font-size: 12px;\n}\n.main_content_div .content_div .card_div .second_div .variant .selecter {\n  font-size: 10px;\n  padding: 10px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .content_div .card_div .second_div .variant .selecter ion-icon {\n  box-shadow: none !important;\n  padding: 0px !important;\n  color: gray !important;\n  position: relative;\n  font-size: 10px;\n}\n.main_content_div .content_div .card_div .second_div .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .second_div .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .second_div .variant ion-item ion-select {\n  --padding-end: 0px;\n  --padding-start: 0px;\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .second_div .price_lbl {\n  font-weight: 400;\n  font-size: 15px;\n}\n.main_content_div .content_div .card_div .second_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content_div .content_div .card_div .second_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .content_div .card_div .second_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content_div .content_div .card_div .second_div .name_lbl {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n.main_content_div .content_div .card_div .second_div .desc {\n  font-size: 12px;\n}\n.main_content_div .content_div .card_div .second_div .stoke {\n  font-size: 10px;\n}\n.main_content_div .content_div .card_div .second_div .stoke .in {\n  color: green;\n}\n.main_content_div .content_div .card_div .second_div .stoke .out {\n  color: indianred;\n}\n.main_content_div .content_div .card_div .second_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 20px;\n  color: #29b507;\n  padding: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.main_content_div .content_div .card_div .second_div ion-button {\n  position: absolute;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n.main_content_div .content_div .card_div .cartBtn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.main_content_div .content_div .card_div .cartBtn .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .content_div .card_div .cartBtn .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .content_div .card_div .cartBtn .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .content_div .coupones {\n  display: flex;\n  padding: 20px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n.main_content_div .content_div .coupones .badge {\n  width: 25px;\n  height: 25px;\n}\n.main_content_div .content_div .coupones .title {\n  padding: 0px 10px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .content_div .billing {\n  padding: 5px 10px;\n}\n.main_content_div .content_div .billing .singleRow {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 0px;\n  border-bottom: 1px dashed lightgray;\n}\n.main_content_div .content_div .billing .singleRow .headerTitle {\n  font-size: 0.8rem;\n}\n.main_content_div .content_div .billing .singleRow .boldClass {\n  font-weight: bold;\n}\n.main_content_div .content_div .billing .singleRow .headerTotal {\n  font-size: 1rem;\n}\n.main_content_div .content_div .billing .singleRow .priceTotal {\n  font-size: 1rem;\n}\n.main_content_div .content_div .billing .singleRow .price {\n  font-size: 0.8rem;\n}\n.main_content_div .content_div .instructions {\n  color: var(--ion-color-primary);\n  padding: 5px 10px;\n}\n.bottom_div {\n  height: 60px;\n  width: 100%;\n  background: var(--ion-color-primary);\n  position: absolute;\n  bottom: 0px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0px 16px;\n}\n.bottom_div ion-label {\n  color: white;\n  font-family: muli-bold;\n  display: flex;\n}\n.bottom_div ion-label ion-icon {\n  padding-left: 5px;\n  font-size: 20px;\n}\n.nothing {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n.nothing .imgs {\n  height: 100px;\n  width: 100px;\n}\n.nothing .bolder {\n  text-align: center;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FydC9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXGNhcnRcXGNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBREVKO0FDQUk7RUFDSSxjQUFBO0FERVI7QUNDSTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FEQ1I7QUNFSTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FEQVI7QUNHSTtFQUNJLGlCQUFBO0FERFI7QUNFVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURBWjtBQ0VVO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURBZDtBQ0NjO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURDaEI7QUNFVTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEQWQ7QUNDZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QURDcEI7QUNDZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QURDcEI7QUNDZ0I7RUFDRSxlQUFBO0FEQ2xCO0FDRW9CO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURBeEI7QUNDd0I7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURDNUI7QUNFb0I7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FEQXBCO0FDQ29CO0VBQ0ksMEJBQUE7QURDeEI7QUNDb0I7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBREN4QjtBQ0dnQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBRERwQjtBQ0VvQjtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBREF4QjtBQ0VvQjtFQUNJLGlCQUFBO0FEQXhCO0FDRW9CO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FEQXhCO0FDR2dCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUREcEI7QUNHZ0I7RUFDSSxlQUFBO0FERHBCO0FDR2dCO0VBQ0ksZUFBQTtBRERwQjtBQ0VvQjtFQUNJLFlBQUE7QURBeEI7QUNFb0I7RUFDSSxnQkFBQTtBREF4QjtBQ0dnQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FERHBCO0FDSWdCO0VBQ0ksa0JBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QURIcEI7QUNNYTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FESmhCO0FDS2dCO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FESHBCO0FDS29CO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBREh4QjtBQ01vQjtFQUNJLGNBQUE7RUFDQSxXQUFBO0FESnhCO0FDVVU7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEUmQ7QUNTYztFQUNJLFdBQUE7RUFDQSxZQUFBO0FEUGxCO0FDU2M7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0FEUGxCO0FDVVU7RUFDSSxpQkFBQTtBRFJkO0FDU2M7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0FEUGxCO0FDUWtCO0VBQ0ksaUJBQUE7QUROdEI7QUNRa0I7RUFDSSxpQkFBQTtBRE50QjtBQ1FrQjtFQUNJLGVBQUE7QUROdEI7QUNRa0I7RUFDSSxlQUFBO0FETnRCO0FDUWtCO0VBQ0ksaUJBQUE7QUROdEI7QUNVVTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7QURSZDtBQ2FBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QURWSjtBQ1lJO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBRFZSO0FDWVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QURWWjtBQ2VBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEWko7QUNhSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FEWFI7QUNhSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QURYUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDExMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudG9wX2xibCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbWFsbF9sYmwge1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0U4RThFODtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5iYWNrX2ltYWdlIC5wZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAub2ZmZXIge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLml0ZW1zS2luZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnZhcmlhbnQgLnNlbGVjdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAudmFyaWFudCAuc2VsZWN0ZXIgaW9uLWljb24ge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnZhcmlhbnQgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC52YXJpYW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAudmFyaWFudCBpb24taXRlbSBpb24tc2VsZWN0IHtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnByaWNlX2xibCAuc2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLm5hbWVfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLmRlc2Mge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5zdG9rZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnN0b2tlIC5pbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnN0b2tlIC5vdXQge1xuICBjb2xvcjogaW5kaWFucmVkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzI5YjUwNztcbiAgcGFkZGluZzogNXB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLnNlY29uZF9kaXYgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzI5YjUwNztcbiAgLS1ib3JkZXItY29sb3I6ICM3M0QyNUM7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJ0QnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmNhcnRCdG4gLmFic19hZGQge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJ0QnRuIC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FydEJ0biAuYWJzX2FkZCBpbWcge1xuICBjb2xvcjogI0ZGOEU4MDtcbiAgd2lkdGg6IDI1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNvdXBvbmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jb3Vwb25lcyAuYmFkZ2Uge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jb3Vwb25lcyAudGl0bGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuYmlsbGluZyB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5iaWxsaW5nIC5zaW5nbGVSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuYmlsbGluZyAuc2luZ2xlUm93IC5oZWFkZXJUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5iaWxsaW5nIC5zaW5nbGVSb3cgLmJvbGRDbGFzcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5iaWxsaW5nIC5zaW5nbGVSb3cgLmhlYWRlclRvdGFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5iaWxsaW5nIC5zaW5nbGVSb3cgLnByaWNlVG90YWwge1xuICBmb250LXNpemU6IDFyZW07XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmJpbGxpbmcgLnNpbmdsZVJvdyAucHJpY2Uge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuaW5zdHJ1Y3Rpb25zIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi5ib3R0b21fZGl2IHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDBweCAxNnB4O1xufVxuLmJvdHRvbV9kaXYgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJvdHRvbV9kaXYgaW9uLWxhYmVsIGlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm5vdGhpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4ubm90aGluZyAuaW1ncyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5ub3RoaW5nIC5ib2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMTBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC50b3BfbGJse1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLnNtYWxsX2xibHtcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5jb250ZW50X2RpdntcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgLmNhcmRfZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNFOEU4RTg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIC5wZXJjZW50e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuc2Vjb25kX2RpdntcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC5raW5ke1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub2ZmZXJ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaXRlbXNLaW5ke1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudmFyaWFudHtcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByaWNlX2xibHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAub3JpZ2luYWx7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2VsbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kaWNvdW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hbWVfbGJse1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGVzY3tcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3Rva2V7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgLmlue1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5vdXR7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5kaWFucmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyOWI1MDc7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAvLyByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5YjUwNztcbiAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICM3M0QyNUM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5jYXJ0QnRue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIC5hYnNfYWRke1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgLmNvdXBvbmVze1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgIC5iYWRnZXtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmJpbGxpbmd7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAuc2luZ2xlUm93e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAuaGVhZGVyVGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuYm9sZENsYXNze1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLmhlYWRlclRvdGFse1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5wcmljZVRvdGFse1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5wcmljZXtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5zdHJ1Y3Rpb25ze1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICB9XG4gICAgfVxufVxuXG4uYm90dG9tX2RpdntcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ub3RoaW5ne1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIC5pbWdze1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC5ib2xkZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/cart/cart.page.ts ***!
    \*****************************************/

  /*! exports provided: CartPage */

  /***/
  function srcAppPagesCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
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


    var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CartPage = /*#__PURE__*/function () {
      function CartPage(util, alertCtrl, router, cart, api, navCtrl) {
        _classCallCheck(this, CartPage);

        this.util = util;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.cart = cart;
        this.api = api;
        this.navCtrl = navCtrl;
      }

      _createClass(CartPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.util.openMenu();
        }
      }, {
        key: "add",
        value: function add(product, index) {
          if (this.cart.cart[index].quantiy > 0) {
            this.cart.cart[index].quantiy = this.cart.cart[index].quantiy + 1;
            this.cart.addQuantity(this.cart.cart[index].quantiy, product.id);
          }
        }
      }, {
        key: "remove",
        value: function remove(product, index) {
          if (this.cart.cart[index].quantiy === 1) {
            this.cart.cart[index].quantiy = 0;
            this.cart.removeItem(product.id);
          } else {
            this.cart.cart[index].quantiy = this.cart.cart[index].quantiy - 1;
            this.cart.addQuantity(this.cart.cart[index].quantiy, product.id);
          }
        }
      }, {
        key: "goToPayment",
        value: function goToPayment() {
          console.log(this.cart.minOrderPrice);

          if (this.cart.totalPrice < this.cart.minOrderPrice) {
            var text;

            if (this.util.cside === 'left') {
              text = this.util.currecny + ' ' + this.cart.minOrderPrice;
            } else {
              text = this.cart.minOrderPrice + ' ' + this.util.currecny;
            }

            this.util.errorToast(this.util.getString('Minimum order amount must be') + text + this.util.getString('or more'));
            return false;
          }

          this.router.navigate(['/tabs/cart/delivery-options']);
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "openCoupon",
        value: function openCoupon() {
          this.router.navigate(['offers']);
        }
      }, {
        key: "variant",
        value: function variant(item, indeX) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var allData, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(item);
                    allData = [];
                    console.log(item && item.variations !== '');
                    console.log(item && item.variations !== '' && item.variations.length > 0);
                    console.log(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0);

                    if (!(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0)) {
                      _context.next = 16;
                      break;
                    }

                    console.log('->', item.variations[0].items);
                    item.variations[0].items.forEach(function (element, index) {
                      console.log('OK');
                      var title = '';

                      if (_this.util.cside === 'left') {
                        var price = item.variations && item.variations[0] && item.variations[0].items[index] && item.variations[0].items[index].discount ? item.variations[0].items[index].discount : item.variations[0].items[index].price;
                        title = element.title + ' - ' + _this.util.currecny + ' ' + price;
                      } else {
                        var _price = item.variations && item.variations[0] && item.variations[0].items[index] && item.variations[0].items[index].discount ? item.variations[0].items[index].discount : item.variations[0].items[index].price;

                        title = element.title + ' - ' + _price + ' ' + _this.util.currecny;
                      }

                      var data = {
                        name: element.title,
                        type: 'radio',
                        label: title,
                        value: index,
                        checked: item.variant === index
                      };
                      allData.push(data);
                    });
                    console.log('All Data', allData);
                    _context.next = 11;
                    return this.alertCtrl.create({
                      header: item.name,
                      inputs: allData,
                      buttons: [{
                        text: this.util.getString('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: this.util.getString('Ok'),
                        handler: function handler(data) {
                          console.log('Confirm Ok', data);
                          console.log('before', _this.cart.cart[indeX].variant);
                          _this.cart.cart[indeX].variant = data;
                          console.log('after', _this.cart.cart[indeX].variant);

                          _this.cart.calcuate();
                        }
                      }]
                    });

                  case 11:
                    alert = _context.sent;
                    _context.next = 14;
                    return alert.present();

                  case 14:
                    _context.next = 17;
                    break;

                  case 16:
                    console.log('none');

                  case 17:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return CartPage;
    }();

    CartPage.ctorParameters = function () {
      return [{
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }];
    };

    CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/pages/cart/cart.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], CartPage);
    /***/
  }
}]);
//# sourceMappingURL=cart-cart-module-es5.js.map