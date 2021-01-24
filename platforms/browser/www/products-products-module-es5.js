function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filters/filters.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/filters/filters.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFiltersFiltersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<div class=\"mainContent ion-activatable ripple-parent\">\n  <p (click)=\"selected('1')\"> {{util.getString('Popularity')}} </p>\n  <p (click)=\"selected('2')\">{{util.getString('Price - Low to High')}}</p>\n  <p (click)=\"selected('3')\"> {{util.getString('Price - High to Low')}} </p>\n  <p (click)=\"selected('4')\"> {{util.getString('A - Z')}} </p>\n  <p (click)=\"selected('5')\"> {{util.getString('Z - A')}} </p>\n  <p (click)=\"selected('6')\"> {{util.getString('% Off - High to Low')}} </p>\n  <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductsProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{name}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"search()\">\n        <ion-icon slot=\"icon-only\" name=\"search-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar mode=\"ios\" *ngIf=\"haveSearch\" (ionCancel)=\"search()\" [placeholder]=\"util.getString('Search')\"\n    type=\"text\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" showCancelButton=\"always\">\n  </ion-searchbar>\n  <div class=\"topHeader\" *ngIf=\"products?.length\">\n    <p class=\"itemsFound\">\n      {{products.length}} {{util.getString('Items')}}\n    </p>\n    <div>\n      <ion-button (click)=\"changeMode()\" color=\"light\" size=\"small\">\n        <ion-icon slot=\"icon-only\" [name]=\"mode ==='list' ? 'apps' :'list'\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"filter($event)\" color=\"light\" size=\"small\">\n        <ion-icon slot=\"start\" name=\"options\"></ion-icon>\n        {{util.getString('Filter')}} {{selectedFilter}}\n      </ion-button>\n      <ion-button (click)=\"priceFilter()\" color=\"light\" size=\"small\">\n        <ion-icon slot=\"icon-only\" name=\"filter\"></ion-icon>\n      </ion-button>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content\">\n    <p class=\"ion-text-center\" *ngIf=\"!dummy?.length && !products?.length\"> {{util.getString('No Products found')}} </p>\n\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of dummy\">\n        <ion-skeleton-text animated style=\"width: 100%;height: 100px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 70%;height: 10px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 50%;height: 10px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 80%;height: 10px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"mode === 'grid'\">\n\n      <ion-col size=\"6\" *ngFor=\"let item of products;let i = index;\">\n        <div style=\"border: 1px solid lightgray;\">\n          <div class=\"back_image\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"\n            (click)=\"singleProduct(item)\">\n            <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n            <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n              <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n            </div>\n            <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n            <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n          </div>\n          <div class=\"second_div\">\n            <ion-label class=\"name_lbl\" (click)=\"singleProduct(item)\">\n              {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}\n            </ion-label>\n            <div *ngIf=\"item.size ==='1'\" class=\"variant\" (click)=\"variant(item,i)\">\n              <ion-label class=\"selecter ion-activatable\">\n                <span>\n                  <span> {{\n                                item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].title ?\n                                item.variations[0].items[item.variant].title : ''}} </span>\n                  -\n                  <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n                    <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].price ?\n                                item.variations[0].items[item.variant].price : 0}}\n                    </span>\n                    <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount ?\n                                item.variations[0].items[item.variant].discount : 0}}\n                    </span>\n                    <span\n                      *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].price ?\n                                item.variations[0].items[item.variant].price : 0}}\n                    </span>\n\n                  </span>\n                  <span *ngIf=\"util.cside ==='right'\">\n                    <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].price ?\n                                item.variations[0].items[item.variant].price : 0}}\n                    </span>\n                    <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount ?\n                                item.variations[0].items[item.variant].discount : 0}}\n                    </span>\n                    <span\n                      *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                      {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].price ?\n                                item.variations[0].items[item.variant].price : 0}}\n                    </span>\n                    {{util.currecny}}\n                  </span>\n                </span>\n                <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n                <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n              </ion-label>\n            </div>\n            <ion-label class=\"itemsKind\" *ngIf=\"item.size ==='0'\">\n              <span *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </span>\n              <span *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </span>\n              <span *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </span>\n              <span *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </span>\n              <span *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </span>\n            </ion-label>\n            <div *ngIf=\"item.size ==='0'\">\n              <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='left'\"> {{util.currecny}}\n                {{item.original_price}} </ion-label>\n              <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='right'\">\n                {{item.original_price}}\n                {{util.currecny}}</ion-label>\n              <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\" (click)=\"singleProduct(item)\">\n                <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{item.original_price}} </span>\n                <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.sell_price}} </span>\n\n                <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{item.original_price}} {{util.currecny}}</span>\n                <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{item.sell_price}} {{util.currecny}}</span>\n\n              </ion-label>\n            </div>\n            <div class=\"btnBtm\" *ngIf=\"!cart.itemId.includes(item.id) && item.quantiy <= 0 && item.in_stoke === '1'\">\n              <div class=\"ion-activatable ripple-parent\" (click)=\"addToCart(item,i)\">\n                {{util.getString('Add')}}\n                <ion-ripple-effect></ion-ripple-effect>\n              </div>\n            </div>\n            <div *ngIf=\"item.in_stoke !== '1'\" style=\"height:30px\"></div>\n\n            <div class=\"cartBtn\" *ngIf=\"cart.itemId.includes(item.id)\">\n              <div class=\"abs_add\">\n                <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\">\n                <ion-label *ngIf=\"item.quantiy !== 0\">{{item.quantiy}}</ion-label>\n                <ion-label *ngIf=\"item.quantiy === 0\">\n                  <ion-spinner name=\"circles\" color=\"light\"></ion-spinner>\n                </ion-label>\n                <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"mode ==='list'\">\n      <div class=\"card_div\" *ngFor=\"let item of products;let i = index\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url('+api.mediaURL+item.cover+')'\"\n          (click)=\"singleProduct(item)\">\n          <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n          <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n            <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n          </div>\n        </div>\n        <div class=\"second_div\">\n          <ion-label class=\"name_lbl\">\n            {{ (item.name.length>20)? (item.name | slice:0:20)+'..':(item.name) }}\n          </ion-label>\n          <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n          <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n          <img src=\"assets/imgs/offer.png\" class=\"offer\" alt=\"Offer\" *ngIf=\"item.in_offer ==='1'\">\n          <div *ngIf=\"item.size ==='1'\" class=\"variant\" (click)=\"variant(item,i)\">\n            <ion-label class=\"selecter ion-activatable\">\n              <span>\n                <span> {{\n                              item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].title ?\n                              item.variations[0].items[item.variant].title : ''}} </span>\n                -\n                <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n                  <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].price ?\n                              item.variations[0].items[item.variant].price : 0}}\n                  </span>\n                  <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount ?\n                              item.variations[0].items[item.variant].discount : 0}}\n                  </span>\n                  <span\n                    *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                                item.variations[0].items[item.variant].price ?\n                                item.variations[0].items[item.variant].price : 0}}\n                  </span>\n\n                </span>\n                <span *ngIf=\"util.cside ==='right'\">\n                  <span class=\"original\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].price ?\n                              item.variations[0].items[item.variant].price : 0}}\n                  </span>\n                  <span class=\"sell\" *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount\"> {{item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount ?\n                              item.variations[0].items[item.variant].discount : 0}}\n                  </span>\n                  <span\n                    *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\">\n                    {{ item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                              item.variations[0].items[item.variant].price ?\n                              item.variations[0].items[item.variant].price : 0}}\n                  </span>\n                  {{util.currecny}}\n                </span>\n              </span>\n              <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n              <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n            </ion-label>\n          </div>\n          <ion-label class=\"itemsKind\" *ngIf=\"item.size ==='0'\">\n            <span *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </span>\n            <span *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </span>\n            <span *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </span>\n            <span *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </span>\n            <span *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </span>\n          </ion-label>\n          <div *ngIf=\"item.size ==='0'\">\n            <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='left'\"> {{util.currecny}}\n              {{item.original_price}} </ion-label>\n            <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='right'\">{{item.original_price}}\n              {{util.currecny}}</ion-label>\n            <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\" (click)=\"singleProduct(item)\">\n              <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{item.original_price}} </span>\n              <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.sell_price}} </span>\n\n              <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{item.original_price}} {{util.currecny}}</span>\n              <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{item.sell_price}} {{util.currecny}}</span>\n\n            </ion-label>\n          </div>\n          <div class=\"btnBtm\" *ngIf=\"!cart.itemId.includes(item.id) && item.quantiy <= 0 && item.in_stoke === '1'\">\n            <div class=\"ion-activatable ripple-parent\" (click)=\"addToCart(item,i)\">\n              {{util.getString('Add')}}\n              <ion-ripple-effect></ion-ripple-effect>\n            </div>\n          </div>\n          <div class=\"cartBtn\" *ngIf=\"cart.itemId.includes(item.id)\">\n            <div class=\"abs_add\">\n              <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\">\n              <ion-label>{{item.quantiy}}</ion-label>\n              <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/components/filters/filters.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/filters/filters.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFiltersFiltersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.mainContent {\n  padding: 10px;\n}\n.mainContent p {\n  margin: 5px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmlsdGVycy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZmlsdGVyc1xcZmlsdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGFBQUE7QURFSjtBQ0RJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QURHUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluQ29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgcCB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbkNvbnRlbnR7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwe1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/filters/filters.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/filters/filters.component.ts ***!
    \*********************************************************/

  /*! exports provided: FiltersComponent */

  /***/
  function srcAppComponentsFiltersFiltersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltersComponent", function () {
      return FiltersComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var FiltersComponent = /*#__PURE__*/function () {
      function FiltersComponent(popoverController, util) {
        _classCallCheck(this, FiltersComponent);

        this.popoverController = popoverController;
        this.util = util;
      }

      _createClass(FiltersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selected",
        value: function selected(value) {
          this.popoverController.dismiss(value, 'selected');
        }
      }]);

      return FiltersComponent;
    }();

    FiltersComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }];
    };

    FiltersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filters',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filters.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filters/filters.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./filters.component.scss */
      "./src/app/components/filters/filters.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], FiltersComponent);
    /***/
  },

  /***/
  "./src/app/pages/products/products-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/products/products-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsPageRoutingModule */

  /***/
  function srcAppPagesProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPageRoutingModule", function () {
      return ProductsPageRoutingModule;
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


    var _products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products.page */
    "./src/app/pages/products/products.page.ts");
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
      component: _products_page__WEBPACK_IMPORTED_MODULE_3__["ProductsPage"]
    }];

    var ProductsPageRoutingModule = function ProductsPageRoutingModule() {
      _classCallCheck(this, ProductsPageRoutingModule);
    };

    ProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/products/products.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/products/products.module.ts ***!
    \***************************************************/

  /*! exports provided: ProductsPageModule */

  /***/
  function srcAppPagesProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function () {
      return ProductsPageModule;
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


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/pages/products/products-routing.module.ts");
    /* harmony import */


    var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products.page */
    "./src/app/pages/products/products.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductsPageModule = function ProductsPageModule() {
      _classCallCheck(this, ProductsPageModule);
    };

    ProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsPageRoutingModule"]],
      declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })], ProductsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/products/products.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/products/products.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductsProductsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.topHeader {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: lightgray;\n  align-items: center;\n  padding: 0px 5px;\n}\n.topHeader .itemsFound {\n  color: gray;\n  font-weight: bold;\n}\n.main_content {\n  padding-bottom: 80px;\n}\n.main_content .back_image {\n  width: 100%;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100px;\n  position: relative;\n}\n.main_content .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content .back_image .notInStoke {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 50px;\n  line-height: 50px;\n}\n.main_content .back_image .notInStoke .text {\n  border: 1px solid gray;\n  padding: 5px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.main_content .back_image .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content .second_div {\n  padding: 5px;\n  position: relative;\n  width: 100%;\n}\n.main_content .second_div ion-label {\n  display: block !important;\n  padding-bottom: 2px;\n}\n.main_content .second_div .offer {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 0px;\n}\n.main_content .second_div .itemsKind {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content .second_div .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex !important;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content .second_div .variant .selecter ion-icon {\n  box-shadow: none !important;\n  font-size: 10px;\n  color: gray !important;\n}\n.main_content .second_div .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content .second_div .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content .second_div .variant ion-item .select-icon {\n  display: none !important;\n}\n.main_content .second_div .variant ion-item ion-select {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 20px;\n  height: 20px;\n}\n.main_content .second_div .price_lbl {\n  font-weight: 400;\n  font-size: 15px;\n}\n.main_content .second_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content .second_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content .second_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content .second_div .name_lbl {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n.main_content .second_div .desc {\n  font-size: 12px;\n}\n.main_content .second_div .stoke {\n  font-size: 10px;\n}\n.main_content .second_div .stoke .in {\n  color: green;\n}\n.main_content .second_div .stoke .out {\n  color: indianred;\n}\n.main_content .second_div .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.main_content .second_div .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content .second_div .cartBtn {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.main_content .second_div .cartBtn .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content .second_div .cartBtn .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content .second_div .cartBtn .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content .second_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 20px;\n  color: #29b507;\n  padding: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.main_content .second_div ion-button {\n  position: absolute;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n.main_content .card_div {\n  width: 100%;\n  padding: 10px;\n  border-bottom: 0.5px solid #E8E8E8;\n  display: flex;\n  flex-direction: row;\n}\n.main_content .card_div .back_image {\n  width: 100px;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  min-width: 100px;\n  position: relative;\n}\n.main_content .card_div .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content .card_div .second_div {\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n}\n.main_content .card_div .second_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n.main_content .card_div .second_div .offer {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 0px;\n}\n.main_content .card_div .second_div .price_lbl {\n  font-weight: 400;\n  font-size: 15px;\n}\n.main_content .card_div .second_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content .card_div .second_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content .card_div .second_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content .card_div .second_div .name_lbl {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n.main_content .card_div .second_div .desc {\n  font-size: 12px;\n}\n.main_content .card_div .second_div .stoke {\n  font-size: 10px;\n}\n.main_content .card_div .second_div .stoke .in {\n  color: green;\n}\n.main_content .card_div .second_div .stoke .out {\n  color: indianred;\n}\n.main_content .card_div .second_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 20px;\n  color: #29b507;\n  padding: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.main_content .card_div .second_div ion-button {\n  position: absolute;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXHByb2R1Y3RzXFxwcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBREVKO0FDREk7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QURHUjtBQ0FBO0VBQ0ksb0JBQUE7QURHSjtBQ0ZJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FESVI7QUNIUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FES1o7QUNIUTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FES1o7QUNKWTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRE1oQjtBQ0hRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FES1o7QUNGSTtFQUNPLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QURJWDtBQ0FXO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBREVmO0FDQVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QURFaEI7QUNBWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBREVoQjtBQ0NnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRENwQjtBQ0FvQjtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FERXhCO0FDQ2dCO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBRENoQjtBQ0FnQjtFQUNJLDBCQUFBO0FERXBCO0FDQWdCO0VBQ0ksd0JBQUE7QURFcEI7QUNBZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBREVwQjtBQ0VXO0VBQ0ssZ0JBQUE7RUFDQSxlQUFBO0FEQWhCO0FDQ2dCO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FEQ3BCO0FDQ2dCO0VBQ0ksaUJBQUE7QURDcEI7QUNDZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QURDcEI7QUNFWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FEQWhCO0FDRVk7RUFDSSxlQUFBO0FEQWhCO0FDRVk7RUFDSSxlQUFBO0FEQWhCO0FDQ2dCO0VBQ0ksWUFBQTtBRENwQjtBQ0NnQjtFQUNJLGdCQUFBO0FEQ3BCO0FDRVc7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7QURBZjtBQ0NlO0VBQ0ssa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRENwQjtBQ0VXO0VBQ0ssYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURBaEI7QUNDZ0I7RUFDSSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURDcEI7QUNDb0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FEQ3hCO0FDRW9CO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QURBeEI7QUNLWTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FESGhCO0FDTVk7RUFDSSxrQkFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBRExoQjtBQ1NJO0VBQ0csV0FBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRFBQO0FDU087RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRFBYO0FDUVc7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRE5aO0FDU087RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBRFBYO0FDUVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUROaEI7QUNRWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBRE5oQjtBQ1FXO0VBQ0ssZ0JBQUE7RUFDQSxlQUFBO0FETmhCO0FDT2dCO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FETHBCO0FDT2dCO0VBQ0ksaUJBQUE7QURMcEI7QUNPZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QURMcEI7QUNRWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FETmhCO0FDUVk7RUFDSSxlQUFBO0FETmhCO0FDUVk7RUFDSSxlQUFBO0FETmhCO0FDT2dCO0VBQ0ksWUFBQTtBRExwQjtBQ09nQjtFQUNJLGdCQUFBO0FETHBCO0FDUVk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtBRE5oQjtBQ1NZO0VBQ0ksa0JBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QURSaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLnRvcEhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggNXB4O1xufVxuLnRvcEhlYWRlciAuaXRlbXNGb3VuZCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1haW5fY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuLm1haW5fY29udGVudCAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnQgLmJhY2tfaW1hZ2UgLnBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50IC5iYWNrX2ltYWdlIC5ub3RJblN0b2tlIHtcbiAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuLm1haW5fY29udGVudCAuYmFja19pbWFnZSAubm90SW5TdG9rZSAudGV4dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnQgLmJhY2tfaW1hZ2UgLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiB7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLm9mZmVyIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAwcHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5pdGVtc0tpbmQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC52YXJpYW50IC5zZWxlY3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC52YXJpYW50IC5zZWxlY3RlciBpb24taWNvbiB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAudmFyaWFudCBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC52YXJpYW50IGlvbi1pdGVtIC5zZWxlY3QtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5wcmljZV9sYmwgLnNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5uYW1lX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAuc3Rva2Uge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5zdG9rZSAuaW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5zdG9rZSAub3V0IHtcbiAgY29sb3I6IGluZGlhbnJlZDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLmJ0bkJ0bSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLmNhcnRCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1haW5fY29udGVudCAuc2Vjb25kX2RpdiAuY2FydEJ0biAuYWJzX2FkZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgLmNhcnRCdG4gLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IC5jYXJ0QnRuIC5hYnNfYWRkIGltZyB7XG4gIGNvbG9yOiAjRkY4RTgwO1xuICB3aWR0aDogMjVweDtcbn1cbi5tYWluX2NvbnRlbnQgLnNlY29uZF9kaXYgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyOWI1MDc7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50IC5zZWNvbmRfZGl2IGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDkwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyOWI1MDc7XG4gIC0tYm9yZGVyLWNvbG9yOiAjNzNEMjVDO1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0U4RThFODtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLmJhY2tfaW1hZ2UgLnBlcmNlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50IC5jYXJkX2RpdiAuc2Vjb25kX2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5raW5kIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5vZmZlciB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMHB4O1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnByaWNlX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5wcmljZV9sYmwgLnNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5wcmljZV9sYmwgLmRpY291bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLm5hbWVfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnN0b2tlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgLnN0b2tlIC5pbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IC5zdG9rZSAub3V0IHtcbiAgY29sb3I6IGluZGlhbnJlZDtcbn1cbi5tYWluX2NvbnRlbnQgLmNhcmRfZGl2IC5zZWNvbmRfZGl2IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMjliNTA3O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1haW5fY29udGVudCAuY2FyZF9kaXYgLnNlY29uZF9kaXYgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzI5YjUwNztcbiAgLS1ib3JkZXItY29sb3I6ICM3M0QyNUM7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi50b3BIZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgIC5pdGVtc0ZvdW5ke1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuLm1haW5fY29udGVudHtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAucGVyY2VudHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLm5vdEluU3Rva2V7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAua2luZHtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zZWNvbmRfZGl2e1xuICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC8vICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIC8vICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAvLyAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAgLm9mZmVye1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbXNLaW5ke1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZhcmlhbnR7XG4gICAgICAgICAgICAgICAgLnNlbGVjdGVye1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2VsZWN0LWljb257XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAucHJpY2VfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIC5vcmlnaW5hbHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNlbGx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGljb3VudHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZV9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Rva2V7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIC5pbntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3V0e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5kaWFucmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgLmJ0bkJ0bXtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmNhcnRCdG57XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgLmFic19hZGR7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI5YjUwNztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI5YjUwNztcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogIzczRDI1QztcbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZF9kaXZ7XG4gICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI0U4RThFODtcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAucGVyY2VudHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgIH1cbiAgICAgICB9XG4gICAgICAgLnNlY29uZF9kaXZ7XG4gICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC5raW5ke1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5vZmZlcntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAucHJpY2VfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIC5vcmlnaW5hbHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNlbGx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGljb3VudHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmFtZV9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3Rva2V7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIC5pbntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub3V0e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5kaWFucmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjliNTA3O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAvLyByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjliNTA3O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjNzNEMjVDO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/products/products.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/products/products.page.ts ***!
    \*************************************************/

  /*! exports provided: ProductsPage */

  /***/
  function srcAppPagesProductsProductsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPage", function () {
      return ProductsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_components_filters_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/filters/filters.component */
    "./src/app/components/filters/filters.component.ts");
    /* harmony import */


    var _sort_sort_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sort/sort.page */
    "./src/app/pages/sort/sort.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductsPage = /*#__PURE__*/function () {
      function ProductsPage(route, navCtrl, api, util, router, cart, popoverController, modalController, alertCtrl) {
        var _this = this;

        _classCallCheck(this, ProductsPage);

        this.route = route;
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
        this.haveSearch = false;
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id && data.name) {
            _this.id = data.id;
            _this.name = data.name;
            _this.limit = 1;
            _this.haveSortFilter = false;

            _this.getProducts(false, 'none');
          }
        });
      }

      _createClass(ProductsPage, [{
        key: "sortFilter",
        value: function sortFilter() {
          var _this2 = this;

          if (this.discount && this.discount !== null) {
            console.log('filter with discount');
            var products = [];
            this.dummyProduct.forEach(function (element) {
              if (parseFloat(element.original_price) >= _this2.minValue && parseFloat(element.original_price) <= _this2.maxValue && parseFloat(_this2.discount) <= parseFloat(element.discount)) {
                products.push(element);
              }

              _this2.products = products;
            });
          } else {
            console.log('filter without discount');
            var _products = [];
            this.dummyProduct.forEach(function (element) {
              if (parseFloat(element.original_price) >= _this2.minValue && parseFloat(element.original_price) <= _this2.maxValue) {
                _products.push(element);
              }
            });
            this.products = _products;
          }
        }
      }, {
        key: "search",
        value: function search() {
          this.haveSearch = !this.haveSearch;
        }
      }, {
        key: "onSearchChange",
        value: function onSearchChange(event) {
          console.log(event.detail.value);

          if (event.detail.value) {
            this.products = this.dummyProduct.filter(function (item) {
              return item.name.toLowerCase().indexOf(event.detail.value.toLowerCase()) > -1;
            });
          } else {
            this.products = this.dummyProduct;
          }
        }
      }, {
        key: "changeMode",
        value: function changeMode() {
          this.mode = this.mode === 'grid' ? 'list' : 'grid';
        }
      }, {
        key: "updateFilter",
        value: function updateFilter() {
          switch (this.selectedFilterID) {
            case '1':
              console.log('its rating');
              this.selectedFilter = this.util.getString('Popularity');
              this.products = this.products.sort(function (a, b) {
                return parseFloat(b.total_rating) < parseFloat(a.total_rating) ? -1 : parseFloat(b.total_rating) > parseFloat(a.total_rating) ? 1 : 0;
              });
              break;

            case '2':
              console.log('its low to high');
              this.selectedFilter = this.util.getString('Price L-H');
              this.products = this.products.sort(function (a, b) {
                return parseFloat(a.original_price) < parseFloat(b.original_price) ? -1 : parseFloat(a.original_price) > parseFloat(b.original_price) ? 1 : 0;
              });
              break;

            case '3':
              console.log('its highht to low');
              this.selectedFilter = this.util.getString('Price H-L');
              this.products = this.products.sort(function (a, b) {
                return parseFloat(b.original_price) < parseFloat(a.original_price) ? -1 : parseFloat(b.original_price) > parseFloat(a.original_price) ? 1 : 0;
              });
              break;

            case '4':
              console.log('its a - z');
              this.selectedFilter = this.util.getString('A-Z');
              this.products = this.products.sort(function (a, b) {
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
              this.products = this.products.sort(function (a, b) {
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
              this.products = this.products.sort(function (a, b) {
                return parseFloat(b.discount) < parseFloat(a.discount) ? -1 : parseFloat(b.discount) > parseFloat(a.discount) ? 1 : 0;
              });
              break;

            default:
              break;
          }
        }
      }, {
        key: "filter",
        value: function filter(events) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: src_app_components_filters_filters_component__WEBPACK_IMPORTED_MODULE_7__["FiltersComponent"],
                      event: events,
                      mode: 'ios'
                    });

                  case 2:
                    popover = _context.sent;
                    popover.onDidDismiss().then(function (data) {
                      console.log(data.data);

                      if (data && data.data && data.role === 'selected') {
                        _this3.selectedFilterID = data.data;

                        _this3.updateFilter();
                      }
                    });
                    _context.next = 6;
                    return popover.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "add",
        value: function add(product, index) {
          console.log(product);

          if (this.products[index].quantiy > 0) {
            this.products[index].quantiy = this.products[index].quantiy + 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
          }
        }
      }, {
        key: "remove",
        value: function remove(product, index) {
          console.log(product, index);

          if (this.products[index].quantiy === 1) {
            this.products[index].quantiy = 0;
            this.cart.removeItem(product.id);
          } else {
            this.products[index].quantiy = this.products[index].quantiy - 1;
            this.cart.addQuantity(this.products[index].quantiy, product.id);
          }
        }
      }, {
        key: "getProducts",
        value: function getProducts(limit, event) {
          var _this4 = this;

          var param = {
            id: this.id,
            limit: this.limit * 10,
            cid: localStorage.getItem('city')
          };
          this.api.post('products/getBySid', param).subscribe(function (data) {
            console.log('ids', data);
            _this4.dummy = [];

            if (data && data.status === 200 && data.data && data.data.length) {
              var products = data.data;
              _this4.products = products.filter(function (x) {
                return x.status === '1';
              });
              _this4.dummyProduct = _this4.products; // const cart = this.cart.cart;

              console.log('cart===============>>>>>>', _this4.cart.cart);

              _this4.products.forEach(function (info) {
                if (info.variations && info.size === '1' && info.variations !== '') {
                  if (function (x) {
                    try {
                      JSON.parse(x);
                      return true;
                    } catch (e) {
                      return false;
                    }
                  }(info.variations)) {
                    info.variations = JSON.parse(info.variations);
                    info['variant'] = 0;
                  } else {
                    info.variations = [];
                    info['variant'] = 1;
                  }
                } else {
                  info.variations = [];
                  info['variant'] = 1;
                }

                if (_this4.cart.itemId.includes(info.id)) {
                  var index = _this4.cart.cart.filter(function (x) {
                    return x.id === info.id;
                  });

                  info['quantiy'] = index[0].quantiy;
                } else {
                  info['quantiy'] = 0;
                }
              });

              _this4.max = Math.max.apply(Math, _toConsumableArray(_this4.products.map(function (o) {
                return o.original_price;
              })).concat([0]));
              console.log('maxValueOfPrice', _this4.max);
              _this4.min = Math.min.apply(null, _this4.products.map(function (item) {
                return item.original_price;
              }));
              console.log('minValueOfPrice', _this4.min);

              if (_this4.selectedFilterID && _this4.selectedFilterID !== null) {
                _this4.updateFilter();
              }

              if (_this4.haveSortFilter && _this4.isClosedFilter === false) {
                _this4.sortFilter();
              }
            }

            if (limit) {
              event.complete();
            }
          }, function (error) {
            console.log(error);

            _this4.util.errorToast(_this4.util.getString('Something went wrong'));

            if (limit) {
              event.complete();
            }
          });
        }
      }, {
        key: "checkCartItems",
        value: function checkCartItems() {
          var _this5 = this;

          var cart = this.cart.cart;

          if (cart && cart.length) {
            cart.forEach(function (element) {
              if (_this5.cart.itemId && _this5.cart.itemId.length && _this5.cart.itemId.includes(element.id)) {
                var index = _this5.products.findIndex(function (x) {
                  return x.id === element.id;
                });

                console.log('index============>', index);
                console.log('???', element.quantiy);
                _this5.products[index].quantiy = element.quantiy;
              }
            });
          }
        }
      }, {
        key: "addToCart",
        value: function addToCart(item, index) {
          console.log(item);
          this.products[index].quantiy = 1;
          this.cart.addItem(item);
        }
      }, {
        key: "checkCart",
        value: function checkCart(id) {
          var item = this.cart.itemId;
          console.log('item', item);
          return false; // return this.cart.itemId.includes(id);
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
        key: "loadData",
        value: function loadData(event) {
          console.log(event);
          this.limit = this.limit + 1;
          this.getProducts(true, event.target);
        }
      }, {
        key: "singleProduct",
        value: function singleProduct(item) {
          var param = {
            queryParams: {
              id: item.id
            }
          };
          this.router.navigate(['/tabs/categories/product'], param);
        }
      }, {
        key: "priceFilter",
        value: function priceFilter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _sort_sort_page__WEBPACK_IMPORTED_MODULE_8__["SortPage"],
                      componentProps: {
                        min: this.min,
                        max: this.max,
                        from: 'products',
                        discountSelected: this.discount
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (datas) {
                      var data = datas.data;
                      console.log(data);
                      _this6.haveSortFilter = true;

                      if (_this6.products && data.from === 'products') {
                        _this6.minValue = data.min;
                        _this6.maxValue = data.max;
                        _this6.discount = data.discount;
                        _this6.isClosedFilter = data.close;

                        if (_this6.isClosedFilter === false) {
                          _this6.sortFilter();
                        } else {
                          _this6.products = _this6.dummyProduct;
                        }
                      }
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "variant",
        value: function variant(item, indeX) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this7 = this;

            var allData, alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log(item);
                    allData = [];
                    console.log(item && item.variations !== '');
                    console.log(item && item.variations !== '' && item.variations.length > 0);
                    console.log(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0);

                    if (!(item && item.variations !== '' && item.variations.length > 0 && item.variations[0].items.length > 0)) {
                      _context3.next = 16;
                      break;
                    }

                    console.log('->', item.variations[0].items);
                    item.variations[0].items.forEach(function (element, index) {
                      console.log('OK');
                      var title = '';

                      if (_this7.util.cside === 'left') {
                        var price = item.variations && item.variations[0] && item.variations[0].items[index] && item.variations[0].items[index].discount ? item.variations[0].items[index].discount : item.variations[0].items[index].price;
                        title = element.title + ' - ' + _this7.util.currecny + ' ' + price;
                      } else {
                        var _price = item.variations && item.variations[0] && item.variations[0].items[index] && item.variations[0].items[index].discount ? item.variations[0].items[index].discount : item.variations[0].items[index].price;

                        title = element.title + ' - ' + _price + ' ' + _this7.util.currecny;
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
                    _context3.next = 11;
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
                          console.log('before', _this7.products[indeX].variant);
                          _this7.products[indeX].variant = data;
                          console.log('after', _this7.products[indeX].variant);
                        }
                      }]
                    });

                  case 11:
                    alert = _context3.sent;
                    _context3.next = 14;
                    return alert.present();

                  case 14:
                    _context3.next = 17;
                    break;

                  case 16:
                    console.log('none');

                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ProductsPage;
    }();

    ProductsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }];
    };

    ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./products.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./products.page.scss */
      "./src/app/pages/products/products.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], ProductsPage);
    /***/
  }
}]);
//# sourceMappingURL=products-products-module-es5.js.map