(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub-category-sub-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sub-category/sub-category.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sub-category/sub-category.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n  <ion-searchbar *ngIf=\"subCates?.length\" [placeholder]=\"util.getString('Search')\" inputmode=\"text\" mode=\"ios\"\n    type=\"text\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\"></ion-searchbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"ion-text-center\" *ngIf=\"!subCates?.length && !dummyCates?.length && !dummys?.length\">\n    {{util.getString('No Product found')}} </p>\n  <ion-list *ngIf=\"subCates?.length && allProducts?.length\">\n    <ion-item *ngFor=\"let item of allProducts\" lines=\"none\" (click)=\"goToSingleProduct(item)\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"api.mediaURL+item.cover\" />\n      </ion-thumbnail>\n      <ion-label>{{item.name}}</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-row>\n    <ion-col size=\"3\" class=\"ion-no-padding\">\n      <div scrollY=\"true\" class=\"menu-content\">\n        <ion-row *ngFor=\"let item of subCates\" [class.mnu-selected]=\"item.id == tabSelected\" id=\"mnu_{{item.id}}\">\n          <ion-col size=\"12\" class=\"side_col\" (click)=\"onMenuClick(item.id)\">\n            <img [src]=\"api.mediaURL + item.cover\" alt=\"\" class=\"icon-menu\">\n            <ion-label class=\"menutext\">{{item.name}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of dummyCates\">\n          <ion-col size=\"12\" class=\"side_col\">\n            <ion-label class=\"menutext\">\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n\n    <ion-col size=\"9\" class=\"ion-no-padding\">\n      <ion-content #content>\n        <div style=\"padding-bottom: 100px;\">\n          <ion-row>\n            <ion-col size=\"6\" *ngFor=\"let item of dummys\">\n              <ion-skeleton-text animated style=\"width: 100%;height:120px\"></ion-skeleton-text>\n            </ion-col>\n          </ion-row>\n          <ion-row style=\"position: relative;\">\n            <ion-col text-center size=\"6\" style=\"border: .50px solid lightgray;\"\n              *ngFor=\"let item of products;let i = index;\">\n              <div class=\"productimage\"\n                [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n                (click)=\"singleProduct(item)\">\n                <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n                <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n                  <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n                </div>\n              </div>\n\n              <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n              <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n              <img src=\"assets/imgs/offer.png\" class=\"offer\" alt=\"Offer\" *ngIf=\"item.in_offer ==='1'\">\n              <ion-label class=\"producttext\" (click)=\"singleProduct(item)\">\n                {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}\n              </ion-label>\n              <div *ngIf=\"item.size ==='1'\" class=\"variant\" (click)=\"variant(item,i)\">\n                <ion-label class=\"selecter ion-activatable\">\n                  <span>\n                    <span> {{\n                            item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                            item.variations[0].items[item.variant].title ?\n                            item.variations[0].items[item.variant].title : ''}} </span>\n                    -\n                    <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n                      <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                     item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                     item.variations[0].items[item.variant].price ?\n                                     item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount ?\n                                    item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                     item.variations[0].items[item.variant].price ?\n                                     item.variations[0].items[item.variant].price : 0}}\n                      </span>\n\n                    </span>\n                    <span *ngIf=\"util.cside ==='right'\">\n                      <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                      item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                      item.variations[0].items[item.variant].price ?\n                                      item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount ?\n                                    item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                      item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                        {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                      item.variations[0].items[item.variant].price ?\n                                      item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      {{util.currecny}}\n                    </span>\n                  </span>\n                  <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n                  <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n                </ion-label>\n              </div>\n              <ion-label class=\"itemsKind\" *ngIf=\"item.size ==='0'\">\n                <span *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </span>\n                <span *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </span>\n                <span *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </span>\n                <span *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </span>\n                <span *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </span>\n              </ion-label>\n              <div *ngIf=\"item.size ==='0'\">\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='right'\"\n                  (click)=\"singleProduct(item)\">\n                  {{item.original_price}}\n                  {{util.currecny}}</ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='left'\"\n                  (click)=\"singleProduct(item)\">\n                  {{util.currecny}}\n                  {{item.original_price}} </ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\" (click)=\"singleProduct(item)\">\n                  <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{item.original_price}}\n                  </span>\n                  <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.sell_price}} </span>\n\n                  <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{item.original_price}}\n                    {{util.currecny}}</span>\n                  <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{item.sell_price}} {{util.currecny}}</span>\n\n                </ion-label>\n              </div>\n              <div class=\"btnBtm\" *ngIf=\"!cart.itemId.includes(item.id) && item.quantiy <= 0 && item.in_stoke === '1'\">\n                <div class=\"ion-activatable ripple-parent\" (click)=\"addToCart(item,i)\">\n                  {{util.getString('Add')}}\n                  <ion-ripple-effect></ion-ripple-effect>\n                </div>\n              </div>\n\n              <div class=\"cartBtn\" *ngIf=\"cart.itemId.includes(item.id)\">\n                <div class=\"abs_add\">\n                  <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\">\n                  <ion-label *ngIf=\"item.quantiy !== 0\">{{item.quantiy}}</ion-label>\n                  <ion-label *ngIf=\"item.quantiy === 0\">\n                    <ion-spinner name=\"circles\" color=\"light\"></ion-spinner>\n                  </ion-label>\n                  <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\">\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n          <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n          </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-content>\n\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/sub-category/sub-category-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/sub-category/sub-category-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SubCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryPageRoutingModule", function() { return SubCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sub_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub-category.page */ "./src/app/pages/sub-category/sub-category.page.ts");

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
        component: _sub_category_page__WEBPACK_IMPORTED_MODULE_3__["SubCategoryPage"]
    }
];
let SubCategoryPageRoutingModule = class SubCategoryPageRoutingModule {
};
SubCategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/sub-category/sub-category.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/sub-category/sub-category.module.ts ***!
  \***********************************************************/
/*! exports provided: SubCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryPageModule", function() { return SubCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _sub_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub-category-routing.module */ "./src/app/pages/sub-category/sub-category-routing.module.ts");
/* harmony import */ var _sub_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub-category.page */ "./src/app/pages/sub-category/sub-category.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let SubCategoryPageModule = class SubCategoryPageModule {
};
SubCategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sub_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubCategoryPageRoutingModule"]
        ],
        declarations: [_sub_category_page__WEBPACK_IMPORTED_MODULE_6__["SubCategoryPage"]]
    })
], SubCategoryPageModule);



/***/ }),

/***/ "./src/app/pages/sub-category/sub-category.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/sub-category/sub-category.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.mnu-selected {\n  border-left: 3px solid var(--ion-color-primary) !important;\n  color: var(--ion-color-primary) !important;\n}\nion-label {\n  display: block !important;\n}\n.product {\n  padding-top: 8px;\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 2px;\n  margin-top: 8px;\n  margin-bottom: 20px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n.coverimage {\n  padding-top: 15px;\n}\n.menutext {\n  font-size: 10px;\n  display: block;\n}\n.productimage {\n  height: 80px;\n  width: 100%;\n  margin: auto;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100%;\n  position: relative;\n}\n.producttext {\n  font-size: 11px;\n  display: block;\n  text-align: left;\n  font-weight: bold;\n  margin-top: 5px;\n}\n.variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex !important;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.variant ion-item .select-icon {\n  display: none !important;\n}\n.variant ion-item ion-select {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 20px;\n  height: 20px;\n}\n.itemsKind {\n  font-weight: 400;\n  font-size: 10px;\n}\n.kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.offer {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 5px;\n}\n.percent {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 20px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 8px;\n  color: white;\n}\n.notInStoke {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 20px;\n  line-height: 20px;\n}\n.notInStoke .text {\n  border: 1px solid gray;\n  padding: 2px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.price_lbl {\n  font-weight: 400;\n  font-size: 8px;\n}\n.price_lbl .original {\n  text-decoration: line-through;\n}\n.price_lbl .sell {\n  font-weight: bold;\n}\n.price_lbl .dicount {\n  font-weight: bold;\n}\n.btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n  text-align: center;\n  font-size: 10px;\n}\n.cartBtn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.cartBtn .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.cartBtn .abs_add ion-label {\n  color: white;\n  font-size: 10px;\n  font-family: muli-bold;\n}\n.cartBtn .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.textconten {\n  font-weight: bold;\n  padding-top: 5%;\n}\n.toolbartop {\n  padding-top: 5%;\n}\n.icon-menu {\n  height: 25px;\n  width: 25px;\n}\n.menu-content {\n  height: 90vh;\n  overflow: auto;\n  background-color: #ededed;\n}\n.menu-content .side_col {\n  width: 100%;\n  text-align: center;\n}\n.text_head {\n  font-weight: 600;\n  display: block;\n  margin-top: 20px;\n}\n.brand {\n  background-color: #ededed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3ViLWNhdGVnb3J5L3N1Yi1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1Yi1jYXRlZ29yeS9FOlxcSW9uaWNcXGNpcmNsZXBvaW50L3NyY1xcYXBwXFxwYWdlc1xcc3ViLWNhdGVnb3J5XFxzdWItY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0UsMERBQUE7RUFDQSwwQ0FBQTtBREVGO0FDQUE7RUFDRSx5QkFBQTtBREdGO0FDREE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURJRjtBQ0ZBO0VBQ0UsaUJBQUE7QURLRjtBQ0hBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURNRjtBQ0pBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FET0Y7QUNMQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURRRjtBQ0xJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEUVI7QUNOSTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QURRSjtBQ1BJO0VBQ0ksMEJBQUE7QURTUjtBQ1BJO0VBQ0ksd0JBQUE7QURTUjtBQ1BJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURTUjtBQ0xBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FEUUY7QUNOQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBRFNGO0FDUEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QURVRjtBQ1BBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURVSjtBQ1JBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURXSjtBQ1ZJO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEWU47QUNUQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBRFlKO0FDWEk7RUFDSSw2QkFBQTtBRGFSO0FDWEk7RUFDSSxpQkFBQTtBRGFSO0FDWEk7RUFDSSxpQkFBQTtBRGFSO0FDVkM7RUFDRyxhQUFBO0VBQ0EsMkJBQUE7QURhSjtBQ1pJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRGNSO0FDWEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRGNKO0FDYkk7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURlUjtBQ2JRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRGVaO0FDWlE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBRGNaO0FDVEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QURZRjtBQ1RBO0VBQ0UsZUFBQTtBRFlGO0FDVEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBRFlKO0FDVEE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FEWUY7QUNWRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBRFlKO0FDUkE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRFdGO0FDUkE7RUFDRSx5QkFBQTtBRFdGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3ViLWNhdGVnb3J5L3N1Yi1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1udS1zZWxlY3RlZCB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3Qge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uY292ZXJpbWFnZSB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4ubWVudXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucHJvZHVjdGltYWdlIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZHVjdHRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4udmFyaWFudCAuc2VsZWN0ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnZhcmlhbnQgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4udmFyaWFudCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi52YXJpYW50IGlvbi1pdGVtIC5zZWxlY3QtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi52YXJpYW50IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLml0ZW1zS2luZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuXG4ub2ZmZXIge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDVweDtcbn1cblxuLnBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vdEluU3Rva2Uge1xuICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDkwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5ub3RJblN0b2tlIC50ZXh0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiA4cHg7XG59XG4ucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnByaWNlX2xibCAuc2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnRuQnRtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jYXJ0QnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jYXJ0QnRuIC5hYnNfYWRkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLmNhcnRCdG4gLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4uY2FydEJ0biAuYWJzX2FkZCBpbWcge1xuICBjb2xvcjogI0ZGOEU4MDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi50ZXh0Y29udGVuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLnRvb2xiYXJ0b3Age1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5pY29uLW1lbnUge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgaGVpZ2h0OiA5MHZoO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cbi5tZW51LWNvbnRlbnQgLnNpZGVfY29sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHRfaGVhZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYnJhbmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubW51LXNlbGVjdGVkIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xufVxuaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cbi5jb3ZlcmltYWdlIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4ubWVudXRleHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByb2R1Y3RpbWFnZSB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9kdWN0dGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udmFyaWFudHtcbiAgICAuc2VsZWN0ZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2VsZWN0LWljb257XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgICBcbiAgICB9XG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLml0ZW1zS2luZHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmtpbmR7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ub2ZmZXJ7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogNXB4O1xufVxuXG4ucGVyY2VudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBsZWZ0OiA1cHg7XG4gICAgdG9wOiAycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubm90SW5TdG9rZXtcbiAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgLnRleHR7ICAgXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG59XG4ucHJpY2VfbGJse1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgLm9yaWdpbmFse1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gICAgLnNlbGx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuZGljb3VudHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuIC5idG5CdG17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbn1cbi5jYXJ0QnRue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5hYnNfYWRke1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbWd7XG4gICAgICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udGV4dGNvbnRlbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi50b29sYmFydG9wIHtcbiAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4uaWNvbi1tZW51IHtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG59XG5cbi5tZW51LWNvbnRlbnQge1xuICBoZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xuXG4gIC5zaWRlX2NvbHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLnRleHRfaGVhZHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5icmFuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/pages/sub-category/sub-category.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sub-category/sub-category.page.ts ***!
  \*********************************************************/
/*! exports provided: SubCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategoryPage", function() { return SubCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let SubCategoryPage = class SubCategoryPage {
    constructor(route, router, util, api, navCtrl, cart, alertCtrl) {
        this.route = route;
        this.router = router;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.cart = cart;
        this.alertCtrl = alertCtrl;
        this.subCates = [];
        this.products = [];
        this.dummyProducts = [];
        this.allProducts = [];
        this.dummys = Array(20);
        this.dummyCates = Array(10);
        this.dummys = Array(20);
        this.route.queryParams.subscribe((data) => {
            console.log(data);
            if (data && data.id) {
                this.id = data.id;
                this.limit = 1;
                this.name = data.name ? data.name : 'Top Picked';
                this.getCates();
            }
        });
    }
    getCates() {
        const param = {
            id: this.id
        };
        this.subCates = [];
        this.api.post('subcate/getByCId', param).subscribe((data) => {
            this.dummyCates = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                console.log('subcates', data.data);
                this.subCates = data.data.filter(x => x.status === '1');
                this.tabSelected = this.subCates[0].id;
                this.getSubProducts(false, 'none');
            }
            else {
                this.dummys = [];
                this.dummyCates = [];
            }
        }, error => {
            console.log(error);
            this.dummys = [];
            this.dummyCates = [];
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    getSubProducts(limit, event) {
        const city = {
            id: this.id,
            cid: localStorage.getItem('city'),
            sid: this.tabSelected,
            limit: this.limit * 10
        };
        console.log('parma', city);
        // this.loaded = false;
        this.api.post('products/getByCSID', city).subscribe((cates) => {
            console.log(cates);
            if (cates && cates.status === 200 && cates.data && cates.data.length) {
                console.log('products', cates.data);
                const products = cates.data;
                this.products = products.filter(x => x.status === '1');
                this.dummyProducts = this.products;
                // const cart = this.cart.cart;
                console.log('cart===============>>>>>>', this.cart.cart);
                this.products.forEach(info => {
                    if (info.variations && info.size === '1' && info.variations !== '') {
                        if (((x) => { try {
                            JSON.parse(x);
                            return true;
                        }
                        catch (e) {
                            return false;
                        } })(info.variations)) {
                            info.variations = JSON.parse(info.variations);
                            info['variant'] = 0;
                        }
                        else {
                            info.variations = [];
                            info['variant'] = 1;
                        }
                    }
                    else {
                        info.variations = [];
                        info['variant'] = 1;
                    }
                    if (this.cart.itemId.includes(info.id)) {
                        const index = this.cart.cart.filter(x => x.id === info.id);
                        info['quantiy'] = index[0].quantiy;
                    }
                    else {
                        info['quantiy'] = 0;
                    }
                });
                this.dummys = [];
            }
            else {
                this.dummys = [];
            }
            if (limit) {
                event.complete();
            }
        }, error => {
            console.log(error);
            this.dummys = [];
            this.util.errorToast(this.util.getString('Something went wrong'));
        });
    }
    addToCart(item, index) {
        console.log(item);
        this.products[index].quantiy = 1;
        this.cart.addItem(item);
    }
    add(product, index) {
        console.log(product);
        if (this.products[index].quantiy > 0) {
            this.products[index].quantiy = this.products[index].quantiy + 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
        }
    }
    remove(product, index) {
        console.log(product, index);
        if (this.products[index].quantiy === 1) {
            this.products[index].quantiy = 0;
            this.cart.removeItem(product.id);
        }
        else {
            this.products[index].quantiy = this.products[index].quantiy - 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
        }
    }
    // getByCid
    onMenuClick(cid) {
        this.tabSelected = cid;
        this.limit = 1;
        this.dummyProducts = [];
        this.allProducts = [];
        this.dummys = Array(30);
        this.getSubProducts(false, 'none');
        this.content.scrollToPoint(0, 0, 1000);
    }
    ngOnInit() {
    }
    onProductClick(item) {
        console.log(item);
        console.log(item);
        const param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['product'], param);
    }
    back() {
        this.navCtrl.back();
    }
    onSearchChange(event) {
        if (event.detail.value) {
            this.allProducts = this.dummyProducts.filter((item) => {
                return item.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
            });
        }
        else {
            this.allProducts = [];
        }
    }
    singleProduct(item) {
        console.log(item);
        const param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['product'], param);
    }
    loadData(event) {
        console.log(event);
        this.limit = this.limit + 1;
        this.getSubProducts(true, event.target);
    }
    goToSingleProduct(item) {
        const param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['tabs/home/product'], param);
    }
    variant(item, indeX) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(item);
            const allData = [];
            console.log(item && item.variations !== '');
            console.log(item && item.variations !== '' && item.variations.length > 0);
            console.log(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0);
            if (item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0) {
                console.log('->', item.variations[0].items);
                item.variations[0].items.forEach((element, index) => {
                    console.log('OK');
                    let title = '';
                    if (this.util.cside === 'left') {
                        const price = item.variations && item.variations[0] &&
                            item.variations[0].items[index] &&
                            item.variations[0].items[index].discount ? item.variations[0].items[index].discount :
                            item.variations[0].items[index].price;
                        title = element.title + ' - ' + this.util.currecny + ' ' + price;
                    }
                    else {
                        const price = item.variations && item.variations[0] && item.variations[0].items[index] &&
                            item.variations[0].items[index].discount ? item.variations[0].items[index].discount :
                            item.variations[0].items[index].price;
                        title = element.title + ' - ' + price + ' ' + this.util.currecny;
                    }
                    const data = {
                        name: element.title,
                        type: 'radio',
                        label: title,
                        value: index,
                        checked: item.variant === index
                    };
                    allData.push(data);
                });
                console.log('All Data', allData);
                const alert = yield this.alertCtrl.create({
                    header: item.name,
                    inputs: allData,
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
                                console.log('before', this.products[indeX].variant);
                                this.products[indeX].variant = data;
                                console.log('after', this.products[indeX].variant);
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                console.log('none');
            }
        });
    }
};
SubCategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('content', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SubCategoryPage.prototype, "content", void 0);
SubCategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sub-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sub-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sub-category/sub-category.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sub-category.page.scss */ "./src/app/pages/sub-category/sub-category.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], SubCategoryPage);



/***/ })

}]);
//# sourceMappingURL=sub-category-sub-category-module-es2015.js.map