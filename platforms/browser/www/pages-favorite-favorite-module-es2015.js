(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favorite-favorite-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filters/filters.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/filters/filters.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<div class=\"mainContent ion-activatable ripple-parent\">\n  <p (click)=\"selected('1')\"> {{util.getString('Popularity')}} </p>\n  <p (click)=\"selected('2')\">{{util.getString('Price - Low to High')}}</p>\n  <p (click)=\"selected('3')\"> {{util.getString('Price - High to Low')}} </p>\n  <p (click)=\"selected('4')\"> {{util.getString('A - Z')}} </p>\n  <p (click)=\"selected('5')\"> {{util.getString('Z - A')}} </p>\n  <p (click)=\"selected('6')\"> {{util.getString('% Off - High to Low')}} </p>\n  <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorite/favorite.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorite/favorite.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Your Favourite')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar mode=\"ios\" *ngIf=\"haveSearch\" (ionCancel)=\"search()\" [placeholder]=\"util.getString('Search')\"\n    type=\"text\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" showCancelButton=\"always\">\n  </ion-searchbar>\n  <div class=\"topHeader\" *ngIf=\"products?.length\">\n    <p class=\"itemsFound\">\n      {{products.length}} {{util.getString('Items')}}\n    </p>\n    <div>\n      <ion-button (click)=\"changeMode()\" color=\"light\" size=\"small\">\n        <ion-icon slot=\"icon-only\" [name]=\"mode ==='list' ? 'apps' :'list'\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"filter($event)\" color=\"light\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"options\"></ion-icon>\n        {{util.getString('Filter')}} {{selectedFilter}}\n      </ion-button>\n      <ion-button (click)=\"priceFilter()\" color=\"light\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"filter\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content\">\n    <p class=\"ion-text-center\" *ngIf=\"!dummy?.length && !products?.length\"> {{util.getString('No Products found')}} </p>\n\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of dummy\">\n        <ion-skeleton-text animated style=\"width: 100%;height: 100px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%;height: 10px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%;height: 10px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%;height: 10px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"mode === 'grid'\">\n\n      <ion-col size=\"6\" *ngFor=\"let item of products;let i = index;\">\n        <div style=\"border: 1px solid lightgray;\">\n          <div class=\"back_image\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"\n            (click)=\"singleProduct(item)\">\n            <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n            <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n              <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n            </div>\n            <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n            <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n          </div>\n          <div class=\"second_div\">\n            <ion-label class=\"name_lbl\" (click)=\"singleProduct(item)\">\n              {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}\n            </ion-label>\n            <div *ngIf=\"item.size ==='1'\" class=\"variant\" (click)=\"variant(item,i)\">\n              <ion-label class=\"selecter ion-activatable\">\n                <span>\n                  <span> {{\n                                    item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].title ?\n                                    item.variations[0].items[item.variant].title : ''}} </span>\n                  -\n                  <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n                    <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].price ?\n                                    item.variations[0].items[item.variant].price : 0}}\n                    </span>\n                    <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount ?\n                                    item.variations[0].items[item.variant].discount : 0}}\n                    </span>\n                    <span\n                      *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].price ?\n                                    item.variations[0].items[item.variant].price : 0}}\n                    </span>\n\n                  </span>\n                  <span *ngIf=\"util.cside ==='right'\">\n                    <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].price ?\n                                    item.variations[0].items[item.variant].price : 0}}\n                    </span>\n                    <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount ?\n                                    item.variations[0].items[item.variant].discount : 0}}\n                    </span>\n                    <span\n                      *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].price ?\n                                    item.variations[0].items[item.variant].price : 0}}\n                    </span>\n                    {{util.currecny}}\n                  </span>\n                </span>\n                <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n                <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n              </ion-label>\n            </div>\n            <ion-label class=\"itemsKind\" *ngIf=\"item.size ==='0'\">\n              <span *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </span>\n              <span *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </span>\n              <span *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </span>\n              <span *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </span>\n              <span *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </span>\n            </ion-label>\n            <div *ngIf=\"item.size ==='0'\">\n              <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='left'\"> {{util.currecny}}\n                {{item.original_price}} </ion-label>\n              <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='right'\">\n                {{item.original_price}}\n                {{util.currecny}}</ion-label>\n              <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\" (click)=\"singleProduct(item)\">\n                <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{item.original_price}} </span>\n                <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.sell_price}} </span>\n\n                <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{item.original_price}} {{util.currecny}}</span>\n                <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{item.sell_price}} {{util.currecny}}</span>\n\n              </ion-label>\n            </div>\n            <div class=\"btnBtm\" *ngIf=\"!cart.itemId.includes(item.id) && item.quantiy <= 0 && item.in_stoke === '1'\">\n              <div class=\"ion-activatable ripple-parent\" (click)=\"addToCart(item,i)\">\n                {{util.getString('Add')}}\n                <ion-ripple-effect></ion-ripple-effect>\n              </div>\n            </div>\n            <div *ngIf=\"item.in_stoke !== '1'\" style=\"height:30px\"></div>\n\n            <div class=\"cartBtn\" *ngIf=\"cart.itemId.includes(item.id)\">\n              <div class=\"abs_add\">\n                <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\">\n                <ion-label *ngIf=\"item.quantiy !== 0\">{{item.quantiy}}</ion-label>\n                <ion-label *ngIf=\"item.quantiy === 0\">\n                  <ion-spinner name=\"circles\" color=\"light\"></ion-spinner>\n                </ion-label>\n                <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"mode ==='list'\">\n      <div class=\"card_div\" *ngFor=\"let item of products;let i = index\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url('+api.mediaURL+item.cover+')'\"\n          (click)=\"singleProduct(item)\">\n          <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n          <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n            <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n          </div>\n        </div>\n        <div class=\"second_div\">\n          <ion-label class=\"name_lbl\">\n            {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}\n          </ion-label>\n          <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n          <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n          <img src=\"assets/imgs/offer.png\" class=\"offer\" alt=\"Offer\" *ngIf=\"item.in_offer ==='1'\">\n          <div *ngIf=\"item.size ==='1'\" class=\"variant\" (click)=\"variant(item,i)\">\n            <ion-label class=\"selecter ion-activatable\">\n              <span>\n                <span> {{\n                                  item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].title ?\n                                  item.variations[0].items[item.variant].title : ''}} </span>\n                -\n                <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n                  <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].price ?\n                                  item.variations[0].items[item.variant].price : 0}}\n                  </span>\n                  <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].discount ?\n                                  item.variations[0].items[item.variant].discount : 0}}\n                  </span>\n                  <span\n                    *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                    item.variations[0].items[item.variant].price ?\n                                    item.variations[0].items[item.variant].price : 0}}\n                  </span>\n\n                </span>\n                <span *ngIf=\"util.cside ==='right'\">\n                  <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].price ?\n                                  item.variations[0].items[item.variant].price : 0}}\n                  </span>\n                  <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].discount ?\n                                  item.variations[0].items[item.variant].discount : 0}}\n                  </span>\n                  <span\n                    *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                  item.variations[0].items[item.variant].price ?\n                                  item.variations[0].items[item.variant].price : 0}}\n                  </span>\n                  {{util.currecny}}\n                </span>\n              </span>\n              <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n              <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n            </ion-label>\n          </div>\n          <ion-label class=\"itemsKind\" *ngIf=\"item.size ==='0'\">\n            <span *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </span>\n            <span *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </span>\n            <span *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </span>\n            <span *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </span>\n            <span *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </span>\n          </ion-label>\n          <div *ngIf=\"item.size ==='0'\">\n            <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='left'\"> {{util.currecny}}\n              {{item.original_price}} </ion-label>\n            <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='right'\">{{item.original_price}}\n              {{util.currecny}}</ion-label>\n            <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\" (click)=\"singleProduct(item)\">\n              <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{item.original_price}} </span>\n              <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.sell_price}} </span>\n\n              <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{item.original_price}} {{util.currecny}}</span>\n              <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{item.sell_price}} {{util.currecny}}</span>\n\n            </ion-label>\n          </div>\n          <div class=\"btnBtm\" *ngIf=\"!cart.itemId.includes(item.id) && item.quantiy <= 0 && item.in_stoke === '1'\">\n            <div class=\"ion-activatable ripple-parent\" (click)=\"addToCart(item,i)\">\n              {{util.getString('Add')}}\n              <ion-ripple-effect></ion-ripple-effect>\n            </div>\n          </div>\n          <div class=\"cartBtn\" *ngIf=\"cart.itemId.includes(item.id)\">\n            <div class=\"abs_add\">\n              <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\">\n              <ion-label>{{item.quantiy}}</ion-label>\n              <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/components/filters/filters.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/filters/filters.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.mainContent {\n  padding: 10px;\n}\n.mainContent p {\n  margin: 5px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmlsdGVycy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxmaWx0ZXJzXFxmaWx0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksYUFBQTtBREVKO0FDREk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBREdSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5Db250ZW50IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluQ29udGVudCBwIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluQ29udGVudHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHB7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/filters/filters.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/filters/filters.component.ts ***!
  \*********************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
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



let FiltersComponent = class FiltersComponent {
    constructor(popoverController, util) {
        this.popoverController = popoverController;
        this.util = util;
    }
    ngOnInit() { }
    selected(value) {
        this.popoverController.dismiss(value, 'selected');
    }
};
FiltersComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }
];
FiltersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filters/filters.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filters.component.scss */ "./src/app/components/filters/filters.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
], FiltersComponent);



/***/ }),

/***/ "./src/app/pages/favorite/favorite-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/favorite/favorite-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FavoritePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePageRoutingModule", function() { return FavoritePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorite.page */ "./src/app/pages/favorite/favorite.page.ts");

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
        component: _favorite_page__WEBPACK_IMPORTED_MODULE_3__["FavoritePage"]
    }
];
let FavoritePageRoutingModule = class FavoritePageRoutingModule {
};
FavoritePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoritePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/favorite/favorite.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/favorite/favorite.module.ts ***!
  \***************************************************/
/*! exports provided: FavoritePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePageModule", function() { return FavoritePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorite-routing.module */ "./src/app/pages/favorite/favorite-routing.module.ts");
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorite.page */ "./src/app/pages/favorite/favorite.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let FavoritePageModule = class FavoritePageModule {
};
FavoritePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritePageRoutingModule"]
        ],
        declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePage"]]
    })
], FavoritePageModule);



/***/ }),

/***/ "./src/app/pages/favorite/favorite.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/favorite/favorite.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.topHeader {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: lightgray;\n  align-items: center;\n  padding: 0px 5px;\n}\n.topHeader .itemsFound {\n  color: gray;\n  font-weight: bold;\n}\n.main_content {\n  padding-bottom: 80px;\n}\n.main_content .back_image {\n  width: 100%;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100px;\n  position: relative;\n}\n.main_content .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content .back_image .notInStoke {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 50px;\n  line-height: 50px;\n}\n.main_content .back_image .notInStoke .text {\n  border: 1px solid gray;\n  padding: 5px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.main_content .back_image .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content .second_div {\n  padding: 5px;\n  position: relative;\n  width: 100%;\n}\n.main_content .second_div ion-label {\n  display: block !important;\n  padding-bottom: 2px;\n}\n.main_content .second_div .offer {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 0px;\n}\n.main_content .second_div .itemsKind {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content .second_div .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex !important;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content .second_div .variant .selecter ion-icon {\n  box-shadow: none !important;\n  font-size: 10px;\n  color: gray !important;\n}\n.main_content .second_div .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content .second_div .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content .second_div .variant ion-item .select-icon {\n  display: none !important;\n}\n.main_content .second_div .variant ion-item ion-select {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 20px;\n  height: 20px;\n}\n.main_content .second_div .price_lbl {\n  font-weight: 400;\n  font-size: 15px;\n}\n.main_content .second_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content .second_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content .second_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content .second_div .name_lbl {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n.main_content .second_div .desc {\n  font-size: 12px;\n}\n.main_content .second_div .stoke {\n  font-size: 10px;\n}\n.main_content .second_div .stoke .in {\n  color: green;\n}\n.main_content .second_div .stoke .out {\n  color: indianred;\n}\n.main_content .second_div .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.main_content .second_div .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content .second_div .cartBtn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.main_content .second_div .cartBtn .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content .second_div .cartBtn .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content .second_div .cartBtn .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content .second_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 20px;\n  color: #29b507;\n  padding: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.main_content .second_div ion-button {\n  position: absolute;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n.main_content .card_div {\n  width: 100%;\n  padding: 10px;\n  border-bottom: 0.5px solid #E8E8E8;\n  display: flex;\n  flex-direction: row;\n}\n.main_content .card_div .back_image {\n  width: 100px;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  min-width: 100px;\n  position: relative;\n}\n.main_content .card_div .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content .card_div .second_div {\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n}\n.main_content .card_div .second_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n.main_content .card_div .second_div .offer {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 0px;\n}\n.main_content .card_div .second_div .price_lbl {\n  font-weight: 400;\n  font-size: 15px;\n}\n.main_content .card_div .second_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content .card_div .second_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content .card_div .second_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content .card_div .second_div .name_lbl {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n.main_content .card_div .second_div .desc {\n  font-size: 12px;\n}\n.main_content .card_div .second_div .stoke {\n  font-size: 10px;\n}\n.main_content .card_div .second_div .stoke .in {\n  color: green;\n}\n.main_content .card_div .second_div .stoke .out {\n  color: indianred;\n}\n.main_content .card_div .second_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 20px;\n  color: #29b507;\n  padding: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.main_content .card_div .second_div ion-button {\n  position: absolute;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmF2b3JpdGUvZmF2b3JpdGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYXZvcml0ZS9FOlxcSW9uaWNcXGNpcmNsZXBvaW50L3NyY1xcYXBwXFxwYWdlc1xcZmF2b3JpdGVcXGZhdm9yaXRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FERUo7QUNESTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBREdSO0FDQUE7RUFDSSxvQkFBQTtBREdKO0FDRkk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURJUjtBQ0hRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURLWjtBQ0hRO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURLWjtBQ0pZO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FETWhCO0FDSFE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QURLWjtBQ0ZJO0VBQ08sWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRElYO0FDQVc7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FERWY7QUNBWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBREVoQjtBQ0FZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FERWhCO0FDQ2dCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEQ3BCO0FDQW9CO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURFeEI7QUNDZ0I7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FEQ2hCO0FDQWdCO0VBQ0ksMEJBQUE7QURFcEI7QUNBZ0I7RUFDSSx3QkFBQTtBREVwQjtBQ0FnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FERXBCO0FDRVc7RUFDSyxnQkFBQTtFQUNBLGVBQUE7QURBaEI7QUNDZ0I7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QURDcEI7QUNDZ0I7RUFDSSxpQkFBQTtBRENwQjtBQ0NnQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRENwQjtBQ0VZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QURBaEI7QUNFWTtFQUNJLGVBQUE7QURBaEI7QUNFWTtFQUNJLGVBQUE7QURBaEI7QUNDZ0I7RUFDSSxZQUFBO0FEQ3BCO0FDQ2dCO0VBQ0ksZ0JBQUE7QURDcEI7QUNFVztFQUNJLGFBQUE7RUFDQSwyQkFBQTtBREFmO0FDQ2U7RUFDSyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEQ3BCO0FDRVc7RUFDSyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBREFoQjtBQ0NnQjtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRENwQjtBQ0NvQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURDeEI7QUNFb0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBREF4QjtBQ0tZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QURIaEI7QUNNWTtFQUNJLGtCQUFBO0VBRUEsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FETGhCO0FDU0k7RUFDRyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FEUFA7QUNTTztFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEUFg7QUNRVztFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FETlo7QUNTTztFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEUFg7QUNRWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBRE5oQjtBQ1FZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FETmhCO0FDUVc7RUFDSyxnQkFBQTtFQUNBLGVBQUE7QUROaEI7QUNPZ0I7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QURMcEI7QUNPZ0I7RUFDSSxpQkFBQTtBRExwQjtBQ09nQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRExwQjtBQ1FZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUROaEI7QUNRWTtFQUNJLGVBQUE7QUROaEI7QUNRWTtFQUNJLGVBQUE7QUROaEI7QUNPZ0I7RUFDSSxZQUFBO0FETHBCO0FDT2dCO0VBQ0ksZ0JBQUE7QURMcEI7QUNRWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FETmhCO0FDU1k7RUFDSSxrQkFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBRFJoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlL2Zhdm9yaXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4udG9wSGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG59XG4udG9wSGVhZGVyIC5pdGVtc0ZvdW5kIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFpbl9jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG4ubWFpbl9jb250ZW50IC5iYWNrX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudCAuYmFja19pbWFnZSAucGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogMnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnQgLmJhY2tfaW1hZ2UgLm5vdEluU3Rva2Uge1xuICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG4ubWFpbl9jb250ZW50IC5iYWNrX2ltYWdlIC5ub3RJblN0b2tlIC50ZXh0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1haW5fY29udGVudCAuYmFja19pbWFnZSAua2luZCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IHtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAub2ZmZXIge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDBweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLml0ZW1zS2luZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnZhcmlhbnQgLnNlbGVjdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnZhcmlhbnQgLnNlbGVjdGVyIGlvbi1pY29uIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC52YXJpYW50IGlvbi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAudmFyaWFudCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gLnNlbGVjdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAudmFyaWFudCBpb24taXRlbSBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnByaWNlX2xibCAuc2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLm5hbWVfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLmRlc2Mge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5zdG9rZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnN0b2tlIC5pbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnN0b2tlIC5vdXQge1xuICBjb2xvcjogaW5kaWFucmVkO1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAuYnRuQnRtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAuY2FydEJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5jYXJ0QnRuIC5hYnNfYWRkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAuY2FydEJ0biAuYWJzX2FkZCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLmNhcnRCdG4gLmFic19hZGQgaW1nIHtcbiAgY29sb3I6ICNGRjhFODA7XG4gIHdpZHRoOiAyNXB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzI5YjUwNztcbiAgcGFkZGluZzogNXB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzI5YjUwNztcbiAgLS1ib3JkZXItY29sb3I6ICM3M0QyNUM7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjRThFOEU4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuYmFja19pbWFnZSAucGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogMnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLm9mZmVyIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAwcHg7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnByaWNlX2xibCAuc2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAubmFtZV9sYmwge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLmRlc2Mge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAuc3Rva2Uge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiAuc3Rva2UgLmluIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnN0b2tlIC5vdXQge1xuICBjb2xvcjogaW5kaWFucmVkO1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyOWI1MDc7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA5MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjliNTA3O1xuICAtLWJvcmRlci1jb2xvcjogIzczRDI1Qztcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLnRvcEhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgLml0ZW1zRm91bmR7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50e1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5wZXJjZW50e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAubm90SW5TdG9rZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5raW5ke1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlY29uZF9kaXZ7XG4gICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgLy8gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIC8vICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgICAub2ZmZXJ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pdGVtc0tpbmR7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmFyaWFudHtcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zZWxlY3QtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIC5wcmljZV9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgLm9yaWdpbmFse1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2VsbHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kaWNvdW50e1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYW1lX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNje1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdG9rZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgLmlue1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdXR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmRpYW5yZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAuYnRuQnRte1xuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgICAuY2FydEJ0bntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICAuYWJzX2FkZHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjliNTA3O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjliNTA3O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjNzNEMjVDO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkX2RpdntcbiAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjRThFOEU4O1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgIC5wZXJjZW50e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICAuc2Vjb25kX2RpdntcbiAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLmtpbmR7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9mZmVye1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIC5wcmljZV9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgLm9yaWdpbmFse1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2VsbHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kaWNvdW50e1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYW1lX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNje1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdG9rZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgLmlue1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5vdXR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmRpYW5yZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOWI1MDc7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyOWI1MDc7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICM3M0QyNUM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/favorite/favorite.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/favorite/favorite.page.ts ***!
  \*************************************************/
/*! exports provided: FavoritePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePage", function() { return FavoritePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_components_filters_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/filters/filters.component */ "./src/app/components/filters/filters.component.ts");
/* harmony import */ var _sort_sort_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sort/sort.page */ "./src/app/pages/sort/sort.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let FavoritePage = class FavoritePage {
    constructor(navCtrl, api, util, router, cart, popoverController, modalController, alertCtrl) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.router = router;
        this.cart = cart;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.products = [];
        this.dummyProduct = [];
        this.dummy = Array(20);
        this.qty = 0;
        this.mode = 'grid';
        this.selectedFilter = '';
        this.isClosedFilter = true;
    }
    sortFilter() {
        if (this.discount && this.discount !== null) {
            console.log('filter with discount');
            const products = [];
            this.dummyProduct.forEach(element => {
                if (parseFloat(element.original_price) >= this.minValue && parseFloat(element.original_price) <= this.maxValue &&
                    parseFloat(this.discount) <= parseFloat(element.discount)) {
                    products.push(element);
                }
                this.products = products;
            });
        }
        else {
            console.log('filter without discount');
            const products = [];
            this.dummyProduct.forEach(element => {
                if (parseFloat(element.original_price) >= this.minValue && parseFloat(element.original_price) <= this.maxValue) {
                    products.push(element);
                }
            });
            this.products = products;
        }
    }
    ngOnInit() {
    }
    openMenu() {
        this.util.openMenu();
    }
    getFav() {
        this.haveSearch = false;
        this.limit = 1;
        const param = {
            id: this.util.favIds.join()
        };
        this.dummy = Array(20);
        this.api.post('products/getFavs', param).subscribe((data) => {
            console.log(data);
            this.dummy = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                const products = data.data;
                this.products = products.filter(x => x.status === '1');
                this.dummyProduct = this.products;
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
                this.max = Math.max(...this.products.map(o => o.original_price), 0);
                console.log('maxValueOfPrice', this.max);
                this.min = Math.min.apply(null, this.products.map(item => item.original_price));
                console.log('minValueOfPrice', this.min);
                if (this.selectedFilterID && this.selectedFilterID !== null) {
                    this.updateFilter();
                }
                if (this.haveSortFilter && this.isClosedFilter === false) {
                    this.sortFilter();
                }
            }
        }, error => {
            console.log(error);
        });
    }
    ionViewWillEnter() {
        this.getFav();
    }
    search() {
        this.haveSearch = !this.haveSearch;
    }
    onSearchChange(event) {
        console.log(event.detail.value);
        if (event.detail.value) {
            this.products = this.dummyProduct.filter((item) => {
                return item.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
            });
        }
        else {
            this.products = this.dummyProduct;
        }
    }
    changeMode() {
        this.mode = this.mode === 'grid' ? 'list' : 'grid';
    }
    updateFilter() {
        switch (this.selectedFilterID) {
            case '1':
                console.log('its rating');
                this.selectedFilter = this.util.getString('Popularity');
                this.products = this.products.sort((a, b) => parseFloat(b.total_rating) < parseFloat(a.total_rating) ? -1
                    : (parseFloat(b.total_rating) > parseFloat(a.total_rating) ? 1 : 0));
                break;
            case '2':
                console.log('its low to high');
                this.selectedFilter = this.util.getString('Price L-H');
                this.products = this.products.sort((a, b) => parseFloat(a.original_price) < parseFloat(b.original_price) ? -1
                    : (parseFloat(a.original_price) > parseFloat(b.original_price) ? 1 : 0));
                break;
            case '3':
                console.log('its highht to low');
                this.selectedFilter = this.util.getString('Price H-L');
                this.products = this.products.sort((a, b) => parseFloat(b.original_price) < parseFloat(a.original_price) ? -1
                    : (parseFloat(b.original_price) > parseFloat(a.original_price) ? 1 : 0));
                break;
            case '4':
                console.log('its a - z');
                this.selectedFilter = this.util.getString('A-Z');
                this.products = this.products.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case '5':
                console.log('its z - a');
                this.selectedFilter = this.util.getString('Z-A');
                this.products = this.products.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }
                    return 0;
                });
                break;
            case '6':
                console.log('its % off');
                this.selectedFilter = this.util.getString('% Off');
                this.products = this.products.sort((a, b) => parseFloat(b.discount) < parseFloat(a.discount) ? -1
                    : (parseFloat(b.discount) > parseFloat(a.discount) ? 1 : 0));
                break;
            default:
                break;
        }
    }
    filter(events) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_filters_filters_component__WEBPACK_IMPORTED_MODULE_7__["FiltersComponent"],
                event: events,
                mode: 'ios',
            });
            popover.onDidDismiss().then(data => {
                console.log(data.data);
                if (data && data.data && data.role === 'selected') {
                    this.selectedFilterID = data.data;
                    this.updateFilter();
                }
            });
            yield popover.present();
        });
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
    checkCartItems() {
        const cart = this.cart.cart;
        if (cart && cart.length) {
            cart.forEach(element => {
                if (this.cart.itemId && this.cart.itemId.length && this.cart.itemId.includes(element.id)) {
                    const index = this.products.findIndex(x => x.id === element.id);
                    console.log('index============>', index);
                    console.log('???', element.quantiy);
                    this.products[index].quantiy = element.quantiy;
                }
            });
        }
    }
    addToCart(item, index) {
        console.log(item);
        this.products[index].quantiy = 1;
        this.cart.addItem(item);
    }
    checkCart(id) {
        const item = this.cart.itemId;
        console.log('item', item);
        return false;
        // return this.cart.itemId.includes(id);
    }
    back() {
        this.navCtrl.back();
    }
    singleProduct(item) {
        const param = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['/tabs/categories/product'], param);
    }
    priceFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('print a filter');
            // this.util.publishFilter({ min: this.min, max: this.max, from: 'products' });
            // this.menuCtrl.enable(true, 'menu1');
            // this.menuCtrl.open('menu1').then(() => {
            //   console.log('menu 1');
            // });
            const modal = yield this.modalController.create({
                component: _sort_sort_page__WEBPACK_IMPORTED_MODULE_8__["SortPage"],
                componentProps: { min: this.min, max: this.max, from: 'products', discountSelected: this.discount }
            });
            modal.onDidDismiss().then((datas) => {
                const data = datas.data;
                console.log(data);
                this.haveSortFilter = true;
                if (this.products && data.from === 'products') {
                    this.minValue = data.min;
                    this.maxValue = data.max;
                    this.discount = data.discount;
                    this.isClosedFilter = data.close;
                    if (this.isClosedFilter === false) {
                        this.sortFilter();
                    }
                    else {
                        this.products = this.dummyProduct;
                    }
                }
            });
            return yield modal.present();
        });
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
FavoritePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
FavoritePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./favorite.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorite/favorite.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./favorite.page.scss */ "./src/app/pages/favorite/favorite.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], FavoritePage);



/***/ })

}]);
//# sourceMappingURL=pages-favorite-favorite-module-es2015.js.map