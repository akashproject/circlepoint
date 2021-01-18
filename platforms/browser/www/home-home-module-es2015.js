(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-title color=\"light\" (click)=\"changeCity()\" class=\"ion-text-left\">\n      <div class=\"ion-activatable\" *ngIf=\"util && util.city && util.city.name\">\n        <ion-icon slot=\"start\" name=\"location\"></ion-icon>\n        {{ util.city.name }}\n        <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\" />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<app-closed *ngIf=\"util.appClosed\"></app-closed>\n\n<ion-content *ngIf=\"!util.appClosed\">\n  <div class=\"flx\">\n    <ion-searchbar\n      [placeholder]=\"util.getString('Search  products')\"\n      [(ngModel)]=\"terms\"\n      inputmode=\"text\"\n      type=\"search\"\n      (keyup.enter)=\"search(q.value)\"\n      (ionChange)=\"onSearchChange($event)\"\n      #q\n      [debounce]=\"250\"\n      mode=\"ios\"\n      showCancelButton=\"never\"\n    >\n    </ion-searchbar>\n    <ion-button\n      (click)=\"search(terms)\"\n      expand=\"block\"\n      fill=\"clear\"\n      size=\"small\"\n    >\n      <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n    </ion-button>\n  </div>\n  <div class=\"searchList\" *ngIf=\"products?.length\">\n    <ion-item *ngFor=\"let item of products\" (click)=\"goToSingleProduct(item)\">\n      <ion-label>{{item.name}}</ion-label>\n      <ion-icon name=\"arrow-redo-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"haveStores === true\">\n    <div class=\"cateLbl\">\n      <ion-label class=\"all\"> {{util.getString('All Categories')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"goToCatrgory()\"\n        >{{util.getString('View All')}}<ion-icon\n          name=\"chevron-forward-outline\"\n          color=\"primary\"\n        >\n        </ion-icon>\n      </ion-label>\n    </div>\n\n    <div class=\"sliders\">\n      <div\n        class=\"categoryIcon\"\n        *ngFor=\"let item of allcates\"\n        (click)=\"subCate(item)\"\n      >\n        <div class=\"imgs\">\n          <img [src]=\"api.mediaURL + item.cover\" class=\"icon\" />\n        </div>\n        <ion-label class=\"name\"\n          >{{ (item.name.length>10)? (item.name | slice:0:10)+'..':(item.name)\n          }}</ion-label\n        >\n      </div>\n\n      <div *ngFor=\"let item of dummyCates\" style=\"margin: 0px 10px\">\n        <ion-skeleton-text\n          animated\n          style=\"width: 35px; height: 35px; border-radius: 50%\"\n        ></ion-skeleton-text>\n        <ion-skeleton-text\n          animated\n          style=\"width: 100%; height: 10px\"\n        ></ion-skeleton-text>\n      </div>\n    </div>\n\n    <div class=\"cateLbl\" *ngIf=\"!dummyBanners?.length && banners?.length\">\n      <ion-label class=\"all\">\n        {{util.getString('Exclusive Offers')}}\n      </ion-label>\n      <ion-label class=\"view\" (click)=\"allOffers()\"\n        >{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <!-- Top Banners -->\n    <div class=\"slider_div\" *ngIf=\"!dummyBanners?.length && banners?.length\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of dummyBanners\">\n          <!-- <div class=\"card\"> -->\n          <ion-skeleton-text\n            animated\n            style=\"width: 100%; height: 120px\"\n          ></ion-skeleton-text>\n          <!-- </div> -->\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of banners\">\n          <div class=\"card\">\n            <div\n              class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+backgroundImage+')'}\"\n              (click)=\"openLink(item)\"\n            >\n              <div class=\"overlay_div\" *ngIf=\"item.message\">\n                <ion-label> Upload Photo </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div\n      class=\"cateLbl\"\n      *ngIf=\"!dummyTopProducts?.length && topProducts?.length\"\n    >\n      <ion-label class=\"all\"> {{util.getString('Top Picked')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"topicked()\"\n        >{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <!-- NEW -->\n    <div class=\"listView\">\n      <ion-slides [options]=\"slideTops\">\n        <ion-slide *ngFor=\"let item of dummyTopProducts\">\n          <ion-skeleton-text\n            animated\n            style=\"width: 100%; height: 120px\"\n          ></ion-skeleton-text>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of topProducts;let i = index;\">\n          <div class=\"box\">\n            <div\n              class=\"image_div\"\n              (click)=\"goToSingleProduct(item)\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"\n            >\n              <div class=\"percent\" *ngIf=\"item.discount !== '0'\">\n                {{item.discount}}%\n              </div>\n              <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n                <ion-label class=\"text\">\n                  {{util.getString('Out of Stoke')}}\n                </ion-label>\n              </div>\n              <img\n                src=\"assets/imgs/veg.png\"\n                class=\"kind\"\n                alt=\"Veg\"\n                *ngIf=\"item.kind === '1'\"\n              />\n              <img\n                src=\"assets/imgs/non.png\"\n                class=\"kind\"\n                alt=\"Non Veg\"\n                *ngIf=\"item.kind === '0'\"\n              />\n            </div>\n            <div class=\"details\">\n              <ion-label class=\"pro_name\" (click)=\"goToSingleProduct(item)\">\n                {{ (item.name.length>20)? (item.name |\n                slice:0:20)+'..':(item.name) }}</ion-label\n              >\n              <div\n                *ngIf=\"item.size ==='1'\"\n                class=\"variant\"\n                (click)=\"variant(item,i)\"\n              >\n                <ion-label class=\"selecter ion-activatable\">\n                  <span>\n                    <span>\n                      {{ item.variations && item.variations[0] &&\n                      item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].title ?\n                      item.variations[0].items[item.variant].title : ''}}\n                    </span>\n                    -\n                    <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\">\n                      {{util.currecny}}\n                      <span\n                        class=\"original\"\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                       item.variations[0].items[item.variant].discount\"\n                      >\n                        {{ item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span\n                        class=\"sell\"\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount\"\n                      >\n                        {{item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount ?\n                        item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\"\n                      >\n                        {{ item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                    </span>\n                    <span *ngIf=\"util.cside ==='right'\">\n                      <span\n                        class=\"original\"\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount\"\n                      >\n                        {{ item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span\n                        class=\"sell\"\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount\"\n                      >\n                        {{item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount ?\n                        item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\"\n                      >\n                        {{ item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      {{util.currecny}}\n                    </span>\n                  </span>\n                  <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n                  <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n                </ion-label>\n              </div>\n              <ion-label class=\"itemsKind\" *ngIf=\"item.size ==='0'\">\n                <span *ngIf=\"item.have_gram === '1'\">\n                  {{item.gram}} {{util.getString('grams')}}\n                </span>\n                <span *ngIf=\"item.have_kg === '1'\">\n                  {{item.kg}} {{util.getString('kg')}}\n                </span>\n                <span *ngIf=\"item.have_liter ==='1'\">\n                  {{item.liter}} {{util.getString('ltr')}}\n                </span>\n                <span *ngIf=\"item.have_ml ==='1'\">\n                  {{item.ml}} {{util.getString('ml')}}\n                </span>\n                <span *ngIf=\"item.have_pcs === '1'\">\n                  {{item.pcs}} {{util.getString('pcs')}}\n                </span>\n              </ion-label>\n              <div *ngIf=\"item.size ==='0'\">\n                <ion-label\n                  class=\"price_lbl\"\n                  *ngIf=\"item.discount === '0' && util.cside ==='left'\"\n                >\n                  {{util.currecny}} {{item.original_price}}\n                </ion-label>\n                <ion-label\n                  class=\"price_lbl\"\n                  *ngIf=\"item.discount === '0' && util.cside ==='right'\"\n                >\n                  {{item.original_price}} {{util.currecny}}</ion-label\n                >\n                <ion-label\n                  class=\"price_lbl\"\n                  *ngIf=\"item.discount !== '0'\"\n                  (click)=\"goToSingleProduct(item)\"\n                >\n                  <span class=\"original\" *ngIf=\"util.cside ==='left'\">\n                    {{util.currecny}} {{item.original_price}}\n                  </span>\n                  <span class=\"sell\" *ngIf=\"util.cside ==='left'\"\n                    >{{util.currecny}} {{item.sell_price}}\n                  </span>\n                  <span class=\"original\" *ngIf=\"util.cside ==='right'\">\n                    {{item.original_price}} {{util.currecny}}</span\n                  >\n                  <span class=\"sell\" *ngIf=\"util.cside ==='right'\">\n                    {{item.sell_price}} {{util.currecny}}</span\n                  >\n                </ion-label>\n              </div>\n              <div class=\"small_flex\">\n                <div\n                  class=\"btnBtm\"\n                  *ngIf=\"!cart.itemId.includes(item.id) && item.in_stoke === '1'\"\n                >\n                  <div\n                    class=\"ion-activatable ripple-parent\"\n                    (click)=\"addToCart(item,i)\"\n                  >\n                    {{util.getString('Add')}}\n                    <ion-ripple-effect></ion-ripple-effect>\n                  </div>\n                </div>\n                <div *ngIf=\"item.in_stoke !== '1'\" style=\"height: 30px\"></div>\n                <div class=\"abs_add\" *ngIf=\"cart.itemId.includes(item.id)\">\n                  <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\" />\n                  <ion-label>{{getQuanity(item.id)}}</ion-label>\n                  <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\" />\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- NEW -->\n\n    <!-- Start Top Store -->\n    <div class=\"cateLbl\" *ngIf=\"haveStores && stores?.length\">\n      <ion-label class=\"all\"> {{util.getString('Top Stores')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"topStores()\"\n        >{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <div class=\"topProducts\" *ngIf=\"haveStores && stores?.length\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of stores;let i = index;\">\n          <div class=\"content_div\">\n            <div class=\"card_div\">\n              <div\n                class=\"image_div\"\n                (click)=\"openStore(item)\"\n                [ngStyle]=\"{'background-image':'url('+ api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"\n              >\n                <img\n                  src=\"assets/imgs/open.png\"\n                  class=\"isOpen\"\n                  alt=\"Veg\"\n                  *ngIf=\"item.isOpen && item.isClosed ==='1'\"\n                />\n                <img\n                  src=\"assets/imgs/close.png\"\n                  class=\"isOpen\"\n                  alt=\"Non Veg\"\n                  *ngIf=\"!item.isOpen || item.isClosed === '0'\"\n                />\n              </div>\n              <div class=\"desc_div\" (click)=\"openStore(item)\">\n                <ion-label class=\"pro_name\">\n                  {{ (item.name.length>12)? (item.name |\n                  slice:0:12)+'..':(item.name) }}</ion-label\n                >\n                <ion-label class=\"pro_detail\">\n                  {{ (item.address.length>20)? (item.address |\n                  slice:0:20)+'..':(item.address) }}\n                </ion-label>\n                <ion-label class=\"price_lbl\">\n                  {{getTime(item.open_time)}} - {{getTime(item.close_time)}}\n                </ion-label>\n\n                <div class=\"small_flex\">\n                  <div class=\"btnBtm\">\n                    <div class=\"ion-activatable ripple-parent\">\n                      {{util.getString('View')}}\n                      <ion-ripple-effect></ion-ripple-effect>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- End Top Store -->\n\n    <!-- Between Banner -->\n    <div\n      class=\"slider_div\"\n      *ngIf=\"!betweenDummy?.length && betweenBanners?.length\"\n    >\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of betweenDummy\">\n          <div class=\"card\">\n            <ion-skeleton-text\n              animated\n              style=\"width: 100%; height: 120px\"\n            ></ion-skeleton-text>\n          </div>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of betweenBanners\">\n          <div class=\"card\">\n            <div\n              class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n              (click)=\"openLink(item)\"\n            >\n              <div class=\"overlay_div\" *ngIf=\"item.message\">\n                <ion-label> {{item.message}} </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <!-- Bottom Banner -->\n    <div\n      class=\"slider_div\"\n      *ngIf=\"!bottomDummy?.length && bottomBanners?.length\"\n    >\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of bottomDummy\">\n          <div class=\"card\">\n            <ion-skeleton-text\n              animated\n              style=\"width: 100%; height: 120px\"\n            ></ion-skeleton-text>\n          </div>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of bottomBanners\">\n          <div class=\"card\">\n            <div\n              class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n              (click)=\"openLink(item)\"\n            >\n              <div class=\"overlay_div\" *ngIf=\"item.message\">\n                <ion-label> {{item.message}} </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div *ngFor=\"let item of dummyCates\" class=\"catess\">\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n      <ion-row>\n        <ion-col size=\"4\" *ngFor=\"let item of [1,2,3,4,5,6,7,8,9]\">\n          <div class=\"bg_img\">\n            <ion-skeleton-text\n              animated\n              style=\"width: 100%; height: 80px\"\n            ></ion-skeleton-text>\n          </div>\n          <p class=\"subCateName\">\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </p>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngFor=\"let item of categories\" class=\"catess\">\n      <p class=\"cateName\">{{item.name}}</p>\n      <ion-row>\n        <ion-col\n          size=\"4\"\n          *ngFor=\"let sub of item.subCates\"\n          class=\"bgColor\"\n          (click)=\"goToProductList(sub)\"\n        >\n          <div\n            class=\"bg_img\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+sub.cover+'),url(assets/bg.png)'}\"\n          ></div>\n          <p class=\"subCateName\">{{sub.name}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div *ngIf=\"haveStores === false\" class=\"nothing\">\n    <img src=\"assets/imgs/nothing.png\" alt=\"\" srcset=\"\" class=\"imgs\" />\n    <p class=\"ion-text-center bolder\">\n      {{util.getString('No Stores Found Near You!')}}\n    </p>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");

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
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-title {\n  text-align: left !important;\n}\n.searchbar {\n  padding: 0px 10px;\n}\n.flx {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 70px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .cateLbl {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .cateLbl .all {\n  font-weight: bold;\n  font-family: muli-bold;\n}\n.main_content_div .cateLbl .view {\n  font-family: muli-bold;\n  color: var(--ion-color-primary);\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n}\n.main_content_div .cateLbl .view ion-icon {\n  font-size: 16px;\n}\n.main_content_div .sliders {\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto;\n  padding: 16px 0px;\n}\n.main_content_div .sliders .categoryIcon {\n  padding: 0px 5px;\n  text-align: center;\n}\n.main_content_div .sliders .categoryIcon .imgs {\n  border-radius: 50%;\n  padding: 5px;\n  line-height: 60px;\n  height: 60px;\n  width: 60px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  position: relative;\n}\n.main_content_div .sliders .categoryIcon .icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 35px;\n}\n.main_content_div .sliders .categoryIcon .name {\n  font-size: 10px;\n  font-weight: bold;\n  color: gray;\n  margin: 10px 0px;\n}\n.main_content_div .slider_div {\n  margin-top: 15px;\n}\n.main_content_div .slider_div .card {\n  width: 100%;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .slider_div .card .back_image {\n  height: 120px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.main_content_div .slider_div .card .back_image .overlay_div {\n  background: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 70%;\n  right: 0;\n  padding: 10px;\n}\n.main_content_div .slider_div .card .back_image .overlay_div ion-label {\n  color: white;\n  text-align: right;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .content_div {\n  padding: 10px 0px;\n  width: 100%;\n}\n.main_content_div .content_div .card_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  margin-bottom: 16px;\n  border: 1px solid lightgray;\n  margin-right: 10px;\n}\n.main_content_div .content_div .card_div .offer_tag {\n  width: 35px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}\n.main_content_div .content_div .card_div .off_lbl {\n  font-family: muli-bold;\n  position: absolute;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  font-size: 9px;\n  top: 4px;\n  left: 8px;\n  text-align: center;\n  color: white;\n  z-index: 999;\n}\n.main_content_div .content_div .card_div .image_div {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin: 5px;\n}\n.main_content_div .content_div .card_div .image_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .content_div .card_div .image_div .isOpen {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .content_div .card_div .image_div img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.main_content_div .content_div .card_div .desc_div {\n  text-align: right;\n  padding: 10px;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item ion-select {\n  --padding-end: 0px;\n  --padding-start: 0px;\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .pro_name {\n  font-size: 15px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .pro_detail {\n  font-size: 11px;\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 12px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .listView {\n  margin: 10px 0px;\n}\n.main_content_div .listView .box {\n  border: 1px solid lightgray;\n  width: 100%;\n}\n.main_content_div .listView .box .image_div {\n  height: 80px;\n  width: 95%;\n  min-width: 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  margin: 5px;\n}\n.main_content_div .listView .box .image_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .listView .box .image_div .percent {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  background: #f27474;\n  left: 5px;\n  top: 2px;\n  line-height: 30px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content_div .listView .box .image_div .notInStoke {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.main_content_div .listView .box .image_div .notInStoke .text {\n  border: 1px solid gray;\n  padding: 5px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.main_content_div .listView .box .details {\n  padding: 5px 10px;\n  text-align: left;\n}\n.main_content_div .listView .box .details .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .listView .box .details .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .listView .box .details .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .listView .box .details .variant ion-item .select-icon {\n  display: none !important;\n}\n.main_content_div .listView .box .details .variant ion-item ion-select {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 20px;\n  height: 20px;\n}\n.main_content_div .listView .box .details .pro_name {\n  font-size: 12px;\n  color: gray;\n}\n.main_content_div .listView .box .details .itemsKind {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .listView .box .details .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .small_flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n}\n.main_content_div .listView .box .details .small_flex .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 15px;\n}\n.main_content_div .listView .box .details .small_flex .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .listView .box .details .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .listView .box .details .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .listView .box .details .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .catess .cateName {\n  text-align: center;\n  font-weight: bold;\n  font-size: 13px;\n  background: #d0e3e3;\n  padding: 5px;\n  margin: 0px;\n  margin-top: 10px;\n}\n.main_content_div .catess .bgColor {\n  background: ivory;\n  border: 0.5px solid lightgray;\n}\n.main_content_div .catess .bgColor .bg_img {\n  height: 80px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 5px;\n  position: relative;\n}\n.main_content_div .catess .bgColor .subCateName {\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n}\n.nothing {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n.nothing .imgs {\n  height: 100px;\n  width: 100px;\n}\n.nothing .bolder {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9FOlxcSW9uaWNcXFVzZXIvc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNHLDJCQUFBO0FERUg7QUNBQTtFQUNJLGlCQUFBO0FER0o7QUNEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURJSjtBQ0RBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBRElKO0FDRkk7RUFDSSxjQUFBO0FESVI7QUNESTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FER1I7QUNEUTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QURHWjtBQ0RRO0VBQ0ksc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURHWjtBQ0RZO0VBQ0UsZUFBQTtBREdkO0FDRUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEQVI7QUNFUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QURBWjtBQ0VZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QURBaEI7QUNFWTtFQUVJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUREaEI7QUNJWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBREZoQjtBQ09JO0VBQ0ksZ0JBQUE7QURMUjtBQ09RO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURMWjtBQ09ZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFFQSxrQkFBQTtBRE5oQjtBQ1FnQjtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUROcEI7QUNRb0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUROeEI7QUNhSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBRFhSO0FDWVE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QURYWjtBQ1lZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FEVmhCO0FDYVk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRFhoQjtBQ2NZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBRFpoQjtBQ2FnQjtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBRFhsQjtBQ2FnQjtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBRFhsQjtBQ2FnQjtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRFhsQjtBQ2VZO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QURiaEI7QUNlb0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRGJ4QjtBQ2VvQjtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QURicEI7QUNjb0I7RUFDSSwwQkFBQTtBRFp4QjtBQ2NvQjtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FEWnhCO0FDZ0JnQjtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FEZGxCO0FDZ0JnQjtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURkbEI7QUNnQmdCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FEZHBCO0FDZW9CO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FEYnhCO0FDZW9CO0VBQ0ksaUJBQUE7QURieEI7QUNlb0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QURieEI7QUNnQmdCO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QURkcEI7QUNlb0I7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FEYnhCO0FDY3dCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRFo1QjtBQzZCYztFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRDNCbEI7QUM2QmtCO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRDNCdEI7QUM4QmtCO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUQ1QnRCO0FDbUNJO0VBQ0ksZ0JBQUE7QURqQ1I7QUNrQ1E7RUFDSSwyQkFBQTtFQUNBLFdBQUE7QURoQ1o7QUNpQ1k7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUQvQmhCO0FDZ0NnQjtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBRDlCbEI7QUNnQ2lCO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEOUJwQjtBQ2dDZ0I7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBRDlCcEI7QUNpQ29CO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEL0J4QjtBQ21DWTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QURqQ2hCO0FDbUNvQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEakN4QjtBQ21Db0I7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FEakNwQjtBQ2tDb0I7RUFDSSwwQkFBQTtBRGhDeEI7QUNrQ29CO0VBQ0ksd0JBQUE7QURoQ3hCO0FDa0NvQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FEaEN4QjtBQ29DZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBRGxDcEI7QUNvQ2dCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FEbENwQjtBQ29DZ0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QURsQ3BCO0FDbUNvQjtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBRGpDeEI7QUNtQ29CO0VBQ0ksaUJBQUE7QURqQ3hCO0FDbUNvQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRGpDeEI7QUNvQ2lCO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBRGxDcEI7QUNtQ29CO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBRGpDeEI7QUNrQ3dCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRGhDNUI7QUNxQ2lCO0VBQ0csWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEbkNwQjtBQ3FDb0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FEbkN4QjtBQ3NDb0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBRHBDeEI7QUMyQ1E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRHpDWjtBQzJDUTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7QUR6Q1o7QUMwQ1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUR4Q2hCO0FDMENZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUR4Q2hCO0FDK0NBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FENUNKO0FDNkNJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUQzQ1I7QUM2Q0k7RUFDSSxpQkFBQTtBRDNDUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5mbHgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXRlTGJsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVMYmwgLmFsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVMYmwgLnZpZXcge1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2F0ZUxibCAudmlldyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMTZweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVycyAuY2F0ZWdvcnlJY29uIHtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcnMgLmNhdGVnb3J5SWNvbiAuaW1ncyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVycyAuY2F0ZWdvcnlJY29uIC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDM1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVycyAuY2F0ZWdvcnlJY29uIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIC5iYWNrX2ltYWdlIC5vdmVybGF5X2RpdiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogNzAlO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIC5iYWNrX2ltYWdlIC5vdmVybGF5X2RpdiBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2hhZG93OiAzcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5vZmZlcl90YWcge1xuICB3aWR0aDogMzVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDk5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAub2ZmX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xuICBmb250LXNpemU6IDlweDtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBtYXJnaW46IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiAua2luZCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYgLmlzT3BlbiB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAudmFyaWFudCAuc2VsZWN0ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC52YXJpYW50IGlvbi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAudmFyaWFudCBpb24taXRlbSBpb24tc2VsZWN0IHtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJvX25hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcm9fZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByaWNlX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcmljZV9sYmwgLnNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcmljZV9sYmwgLmRpY291bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnNtYWxsX2ZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuc21hbGxfZmxleCAuYnRuQnRtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuc21hbGxfZmxleCAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLmFic19hZGQge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuYWJzX2FkZCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIGltZyB7XG4gIGNvbG9yOiAjRkY4RTgwO1xuICB3aWR0aDogMjVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuaW1hZ2VfZGl2IHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogOTUlO1xuICBtaW4td2lkdGg6IDkwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmltYWdlX2RpdiAua2luZCB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuaW1hZ2VfZGl2IC5wZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogMnB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5pbWFnZV9kaXYgLm5vdEluU3Rva2Uge1xuICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDkwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5pbWFnZV9kaXYgLm5vdEluU3Rva2UgLnRleHQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnZhcmlhbnQgLnNlbGVjdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAudmFyaWFudCBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC52YXJpYW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnZhcmlhbnQgaW9uLWl0ZW0gLnNlbGVjdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnByb19uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5pdGVtc0tpbmQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnByaWNlX2xibCAuc2VsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAuc21hbGxfZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnNtYWxsX2ZsZXggLmJ0bkJ0bSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnNtYWxsX2ZsZXggLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5hYnNfYWRkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAuYWJzX2FkZCBpbWcge1xuICBjb2xvcjogI0ZGOEU4MDtcbiAgd2lkdGg6IDI1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2F0ZXNzIC5jYXRlTmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYmFja2dyb3VuZDogI2QwZTNlMztcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXRlc3MgLmJnQ29sb3Ige1xuICBiYWNrZ3JvdW5kOiBpdm9yeTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2F0ZXNzIC5iZ0NvbG9yIC5iZ19pbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVzcyAuYmdDb2xvciAuc3ViQ2F0ZU5hbWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ub3RoaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLm5vdGhpbmcgLmltZ3Mge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG4ubm90aGluZyAuYm9sZGVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi10aXRsZSB7XG4gICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoYmFye1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuLmZseHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5jYXRlTGJse1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgICAgIC5hbGwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICB9XG4gICAgICAgIC52aWV3e1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICBcbiAgICB9XG5cbiAgICAuc2xpZGVyc3sgICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xuXG4gICAgICAgIC5jYXRlZ29yeUljb257XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAuaW1nc3tcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmljb257XG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm5hbWV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2xpZGVyX2RpdntcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcblxuICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLm92ZXJsYXlfZGl2e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50X2RpdntcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAuY2FyZF9kaXZ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIC5vZmZlcl90YWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub2ZmX2xibHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgICAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW1hZ2VfZGl2e1xuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICAua2luZHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaXNPcGVue1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGVzY19kaXZ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAudmFyaWFudHtcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9fbmFtZXtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcm9fZGV0YWlse1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcmljZV9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgLm9yaWdpbmFse1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNlbGx7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGljb3VudHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9mbGV4e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIC5idG5CdG17XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gLmxlZnR7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4OyAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmFic19hZGR7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcblxuICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmxpc3RWaWV3e1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAuYm94e1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAuaW1hZ2VfZGl2e1xuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgIC5raW5ke1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAucGVyY2VudHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubm90SW5TdG9rZXtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXRhaWxze1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgLnZhcmlhbnR7XG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0LWljb257XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7ICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJvX25hbWV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pdGVtc0tpbmR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnByaWNlX2xibHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgICAgICAub3JpZ2luYWx7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc2VsbHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kaWNvdW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIC5zbWFsbF9mbGV4e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgLmJ0bkJ0bXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAuYWJzX2FkZHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2F0ZXNze1xuICAgICAgICAuY2F0ZU5hbWV7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkMGUzZTM7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJnQ29sb3J7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBpdm9yeTtcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgLmJnX2ltZ3tcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1YkNhdGVOYW1le1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuXG4ubm90aGluZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAuaW1nc3tcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAuYm9sZGVye1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/










let HomePage = class HomePage {
    constructor(util, router, api, cart, chMod, iab, alertCtrl, actionSheetController, camera) {
        this.util = util;
        this.router = router;
        this.api = api;
        this.cart = cart;
        this.chMod = chMod;
        this.iab = iab;
        this.alertCtrl = alertCtrl;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.slideOpts = {
            slidesPerView: 1.3,
        };
        this.slideTops = {
            slidesPerView: 2,
            spaceBetween: 5,
            slideShadows: true,
        };
        this.categories = [];
        this.dummyCates = [];
        this.cover = "";
        this.dummyBanners = [];
        this.banners = [];
        this.bottomDummy = [];
        this.bottomBanners = [];
        this.betweenDummy = [];
        this.betweenBanners = [];
        this.dummyTopProducts = [];
        this.topProducts = [];
        this.products = [];
        this.dummyProducts = [];
        this.dummyStores = [];
        this.stores = [];
        this.backgroundImage = "assets/bg.png";
        this.allcates = [];
        this.dummyCates = Array(5);
        this.dummyBanners = Array(5);
        this.bottomDummy = Array(5);
        this.betweenDummy = Array(5);
        this.dummyTopProducts = Array(5);
        // this.dummyProducts = Array(5);
        this.categories = [];
        this.banners = [];
        this.bottomBanners = [];
        this.betweenBanners = [];
        this.topProducts = [];
        this.products = [];
        if (!this.util.appClosed) {
            this.getInit();
            const pop = localStorage.getItem("pop");
            if (pop && pop != null && pop !== "null") {
                console.log("alredy poped");
            }
            else {
                console.log("open pop");
                this.getPopup();
            }
        }
        this.util.subscribeCity().subscribe((data) => {
            this.dummyCates = Array(5);
            this.dummyBanners = Array(5);
            this.bottomDummy = Array(5);
            this.betweenDummy = Array(5);
            this.dummyTopProducts = Array(5);
            // this.dummyProducts = Array(5);
            this.categories = [];
            this.banners = [];
            this.bottomBanners = [];
            this.betweenBanners = [];
            this.topProducts = [];
            this.products = [];
            if (!this.util.appClosed) {
                this.getInit();
            }
        });
    }
    getPopup() {
        this.api.get("popup").subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("popup message", data);
            if (data && data.status === 200) {
                const info = data.data[0];
                const alertCtrl = yield this.alertCtrl.create({
                    header: this.util.getString("Message"),
                    message: info.message,
                    mode: "ios",
                    buttons: [this.util.getString("Cancle"), this.util.getString("Ok")],
                });
                localStorage.setItem("pop", "true");
                alertCtrl.present();
            }
        }), (error) => {
            console.log(error);
        });
    }
    getInit() {
        this.getCity();
        this.dummyCates = Array(5);
        this.dummyBanners = Array(5);
        this.bottomDummy = Array(5);
        this.betweenDummy = Array(5);
        this.dummyTopProducts = Array(5);
        // this.dummyProducts = Array(5);
        this.categories = [];
        this.banners = [];
        this.bottomBanners = [];
        this.betweenBanners = [];
        this.topProducts = [];
        this.products = [];
        const param = {
            id: localStorage.getItem("city"),
        };
        this.api.post("stores/getByCity", param).subscribe((stores) => {
            console.log("stores by city", stores);
            this.stores = [];
            if (stores &&
                stores.status === 200 &&
                stores.data &&
                stores.data.length) {
                console.log("city found");
                this.stores = stores.data;
                this.stores.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    element["isOpen"] = yield this.isOpen(element.open_time, element.close_time);
                }));
                console.log("store====>>>", this.stores);
                this.haveStores = true;
                this.getCategorys();
                this.getBanners();
                this.topProducts = [];
                this.dummyTopProducts = Array(5);
                this.api.post("products/getTopRated", param).subscribe((data) => {
                    console.log("top products", data);
                    this.dummyTopProducts = [];
                    if (data &&
                        data.status === 200 &&
                        data.data &&
                        data.data.length) {
                        data.data.forEach((element) => {
                            if (element.variations &&
                                element.size === "1" &&
                                element.variations !== "") {
                                if (((x) => {
                                    try {
                                        JSON.parse(x);
                                        return true;
                                    }
                                    catch (e) {
                                        return false;
                                    }
                                })(element.variations)) {
                                    element.variations = JSON.parse(element.variations);
                                    element["variant"] = 0;
                                }
                                else {
                                    element.variations = [];
                                    element["variant"] = 1;
                                }
                            }
                            else {
                                element.variations = [];
                                element["variant"] = 1;
                            }
                            if (this.cart.itemId.includes(element.id)) {
                                const index = this.cart.cart.filter((x) => x.id === element.id);
                                element["quantiy"] = index[0].quantiy;
                            }
                            else {
                                element["quantiy"] = 0;
                            }
                            this.topProducts.push(element);
                        });
                    }
                }, (error) => {
                    console.log(error);
                    this.dummyTopProducts = [];
                });
                this.api.post("products/getHome", param).subscribe((data) => {
                    console.log("home products", data);
                    this.dummyTopProducts = [];
                    if (data &&
                        data.status === 200 &&
                        data.data &&
                        data.data.length) {
                        data.data.forEach((element) => {
                            if (element.variations &&
                                element.size === "1" &&
                                element.variations !== "") {
                                if (((x) => {
                                    try {
                                        JSON.parse(x);
                                        return true;
                                    }
                                    catch (e) {
                                        return false;
                                    }
                                })(element.variations)) {
                                    element.variations = JSON.parse(element.variations);
                                    element["variant"] = 0;
                                }
                                else {
                                    element.variations = [];
                                    element["variant"] = 1;
                                }
                            }
                            else {
                                element.variations = [];
                                element["variant"] = 1;
                            }
                            if (this.cart.itemId.includes(element.id)) {
                                const index = this.cart.cart.filter((x) => x.id === element.id);
                                element["quantiy"] = index[0].quantiy;
                            }
                            else {
                                element["quantiy"] = 0;
                            }
                            this.topProducts.push(element);
                        });
                    }
                }, (error) => {
                    this.dummyTopProducts = [];
                    console.log(error);
                });
                // this.api.post('products/getProductWithCity', param).subscribe((data: any) => {
                //   console.log('getProductWithCity', data);
                //   if (data && data.status === 200 && data.data && data.data.length) {
                //     this.dummyProducts = data.data;
                //   } else {
                //     this.dummyProducts = []
                //   }
                // }, error => {
                //   console.log(error);
                //   this.dummyProducts = []
                // });
            }
            else {
                this.haveStores = false;
                this.stores = [];
                console.log("no city found");
                this.dummyCates = [];
                this.dummyBanners = [];
                this.bottomDummy = [];
                this.betweenDummy = [];
                this.dummyTopProducts = [];
                this.dummyProducts = [];
                this.categories = [];
                this.banners = [];
                this.bottomBanners = [];
                this.betweenBanners = [];
                this.topProducts = [];
                this.products = [];
                this.chMod.detectChanges();
            }
        }, (error) => {
            console.log("error in get store by city", error);
            this.stores = [];
            this.haveStores = false;
            this.dummyCates = [];
            this.dummyBanners = [];
            this.bottomDummy = [];
            this.betweenDummy = [];
            this.dummyTopProducts = [];
            this.dummyProducts = [];
            this.categories = [];
            this.banners = [];
            this.bottomBanners = [];
            this.betweenBanners = [];
            this.topProducts = [];
            this.products = [];
            this.util.errorToast(this.util.getString("Something went wrong"));
            this.chMod.detectChanges();
        });
    }
    isOpen(start, end) {
        const format = "H:mm:ss";
        const ctime = moment__WEBPACK_IMPORTED_MODULE_6__().format("HH:mm:ss");
        const time = moment__WEBPACK_IMPORTED_MODULE_6__(ctime, format);
        const beforeTime = moment__WEBPACK_IMPORTED_MODULE_6__(start, format);
        const afterTime = moment__WEBPACK_IMPORTED_MODULE_6__(end, format);
        if (time.isBetween(beforeTime, afterTime)) {
            return true;
        }
        return false;
    }
    getTime(time) {
        // const date = moment().format('DD-MM-YYYY');
        // return moment(date + ' ' + time).format('hh:mm a');
        return moment__WEBPACK_IMPORTED_MODULE_6__(time, ["h:mm A"]).format("hh:mm A");
    }
    addToCart(item, index) {
        console.log(item);
        this.topProducts[index].quantiy = 1;
        this.cart.addItem(item);
    }
    ngOnInit() { }
    getBanners() {
        this.dummyBanners = Array(5);
        this.api.get("banners").subscribe((data) => {
            console.log(data);
            this.dummyBanners = [];
            this.betweenDummy = [];
            this.bottomDummy = [];
            this.bottomBanners = [];
            this.betweenBanners = [];
            this.banners = [];
            if (data && data.status === 200 && data.data && data.data.length) {
                data.data.forEach((element) => {
                    if (element && element.status === "1") {
                        if (element.position === "0") {
                            this.banners.push(element);
                        }
                        else if (element.position === "1") {
                            this.bottomBanners.push(element);
                        }
                        else {
                            this.betweenBanners.push(element);
                        }
                    }
                });
                console.log("top", this.banners);
                console.log("bottom", this.bottomBanners);
                console.log("between", this.betweenBanners);
            }
        }, (error) => {
            console.log(error);
            this.dummyBanners = [];
        });
    }
    getQuanity(id) {
        const data = this.cart.cart.filter((x) => x.id === id);
        return data[0].quantiy;
    }
    getCategorys() {
        this.dummyCates = Array(10);
        this.api.get("categories").subscribe((datas) => {
            this.dummyCates = [];
            const cates = [];
            if (datas && datas.data && datas.data.length) {
                datas.data.forEach((element) => {
                    if (element.status === "1") {
                        const info = {
                            id: element.id,
                            name: element.name,
                            cover: element.cover,
                            subCates: [],
                        };
                        const cats = {
                            id: element.id,
                            name: element.name,
                            cover: element.cover,
                        };
                        this.allcates.push(cats);
                        cates.push(info);
                    }
                });
            }
            this.api.get("subcate").subscribe((subCates) => {
                console.log("sub cates", subCates);
                if (subCates &&
                    subCates.status === 200 &&
                    subCates.data &&
                    subCates.data.length) {
                    cates.forEach((element, i) => {
                        subCates.data.forEach((sub) => {
                            if (sub.status === "1" && element.id === sub.cate_id) {
                                // this.categories[i].subCates.push(sub);
                                cates[i].subCates.push(sub);
                            }
                        });
                    });
                    // console.log('=>>', this.categories);
                    this.categories = cates;
                }
            }, (error) => {
                console.log(error);
                this.util.errorToast(this.util.getString("Something went wrong"));
            });
        }, (error) => {
            console.log(error);
            this.util.errorToast(this.util.getString("Something went wrong"));
            this.dummyCates = [];
        });
    }
    openMenu() {
        this.util.openMenu();
    }
    add(product, index) {
        console.log(product);
        this.topProducts[index].quantiy = this.getQuanity(product.id);
        if (this.topProducts[index].quantiy > 0) {
            this.topProducts[index].quantiy = this.topProducts[index].quantiy + 1;
            this.cart.addQuantity(this.topProducts[index].quantiy, product.id);
        }
    }
    remove(product, index) {
        console.log(product, index);
        this.topProducts[index].quantiy = this.getQuanity(product.id);
        if (this.topProducts[index].quantiy === 1) {
            this.topProducts[index].quantiy = 0;
            this.cart.removeItem(product.id);
        }
        else {
            this.topProducts[index].quantiy = this.topProducts[index].quantiy - 1;
            this.cart.addQuantity(this.topProducts[index].quantiy, product.id);
        }
    }
    goToSingleProduct(item) {
        const param = {
            queryParams: {
                id: item.id,
            },
        };
        this.router.navigate(["tabs/home/product"], param);
    }
    goToCatrgory() {
        this.router.navigate(["/tabs/categories"]);
    }
    subCate(item) {
        const param = {
            queryParams: {
                id: item.id,
                name: item.name,
            },
        };
        this.router.navigate(["tabs/home/sub-category"], param);
    }
    changeCity() {
        this.router.navigate(["cities"]);
    }
    openLink(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(item);
            if (item.type === "0") {
                // Category
                console.log("open category");
                const name = this.categories.filter((x) => x.id === item.link);
                let cateName = "";
                if (name && name.length) {
                    cateName = name[0].name;
                }
                const param = {
                    queryParams: {
                        id: item.link,
                        name: cateName,
                    },
                };
                this.router.navigate(["tabs/home/sub-category"], param);
            }
            else if (item.type === "1") {
                // product
                console.log("open product");
                const param = {
                    queryParams: {
                        id: item.link,
                    },
                };
                this.router.navigate(["tabs/categories/product"], param);
            }
            else {
                // link
                console.log("open link here");
                const actionSheet = yield this.actionSheetController.create({
                    header: this.util.getString("Choose from"),
                    buttons: [
                        {
                            text: this.util.getString("Camera"),
                            icon: "camera",
                            handler: () => {
                                console.log("camera clicked");
                                this.upload("camera");
                            },
                        },
                        {
                            text: this.util.getString("Gallery"),
                            icon: "images",
                            handler: () => {
                                console.log("gallery clicked");
                                this.upload("gallery");
                            },
                        },
                        {
                            text: this.util.getString("Cancel"),
                            icon: "close",
                            role: "cancel",
                            handler: () => {
                                console.log("Cancel clicked");
                            },
                        },
                    ],
                });
                yield actionSheet.present();
                //this.iab.create(item.link, '_blank');
            }
        });
    }
    goToProductList(val) {
        const navData = {
            queryParams: {
                id: val.id,
                name: val.name,
            },
        };
        this.router.navigate(["/tabs/categories/products"], navData);
    }
    onSearchChange(event) {
        if (event.detail.value) {
        }
        else {
            this.products = [];
        }
    }
    getCity() {
        const city = localStorage.getItem("city");
        console.log("selected city===>>", city);
        if (city && city !== null && city !== "null") {
            const param = {
                id: city,
            };
            this.api.post("cities/getById", param).subscribe((data) => {
                console.log("selected city", data);
                if (data && data.status === 200 && data.data && data.data.length) {
                    const selectedCity = data.data.filter((x) => x.status === "1");
                    console.log("selected city=======================", selectedCity);
                    if (selectedCity && selectedCity.length) {
                        this.util.city = selectedCity[0];
                        this.chMod.detectChanges();
                    }
                    else {
                        localStorage.removeItem("city");
                    }
                }
                else {
                    localStorage.removeItem("city");
                }
            }, (error) => {
                console.log(error);
                localStorage.removeItem("city");
            });
        }
    }
    openStore(item) {
        console.log("open store", item);
        const param = {
            queryParams: {
                id: item.uid,
                name: item.name,
            },
        };
        this.router.navigate(["tabs/home/store"], param);
    }
    topicked() {
        this.router.navigate(["/tabs/home/top-picked"]);
    }
    topStores() {
        this.router.navigate(["top-stores"]);
    }
    allOffers() {
        this.router.navigate(["all-offers"]);
    }
    search(event) {
        console.log(event);
        if (event && event !== "") {
            const param = {
                id: localStorage.getItem("city"),
                search: event,
            };
            this.util.show();
            this.api.post("products/getSearchItems", param).subscribe((data) => {
                console.log("search data==>", data);
                this.util.hide();
                if (data && data.status === 200 && data.data) {
                    this.products = data.data;
                }
            }, (error) => {
                console.log("error in searhc filess--->>", error);
                this.util.hide();
                this.util.errorToast(this.util.getString("Something went wrong"));
            });
        }
    }
    variant(item, indeX) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(item);
            const allData = [];
            console.log(item && item.variations !== "");
            console.log(item && item.variations !== "" && item.variations.length > 0);
            console.log(item &&
                item.variations !== "" &&
                item.variations.length > 0 &&
                item.variations[0].items.length > 0);
            if (item &&
                item.variations !== "" &&
                item.variations.length > 0 &&
                item.variations[0].items.length > 0) {
                console.log("->", item.variations[0].items);
                item.variations[0].items.forEach((element, index) => {
                    console.log("OK");
                    let title = "";
                    if (this.util.cside === "left") {
                        const price = item.variations &&
                            item.variations[0] &&
                            item.variations[0].items[index] &&
                            item.variations[0].items[index].discount
                            ? item.variations[0].items[index].discount
                            : item.variations[0].items[index].price;
                        title = element.title + " - " + this.util.currecny + " " + price;
                    }
                    else {
                        const price = item.variations &&
                            item.variations[0] &&
                            item.variations[0].items[index] &&
                            item.variations[0].items[index].discount
                            ? item.variations[0].items[index].discount
                            : item.variations[0].items[index].price;
                        title = element.title + " - " + price + " " + this.util.currecny;
                    }
                    const data = {
                        name: element.title,
                        type: "radio",
                        label: title,
                        value: index,
                        checked: item.variant === index,
                    };
                    allData.push(data);
                });
                console.log("All Data", allData);
                const alert = yield this.alertCtrl.create({
                    header: item.name,
                    inputs: allData,
                    buttons: [
                        {
                            text: this.util.getString("Cancel"),
                            role: "cancel",
                            cssClass: "secondary",
                            handler: () => {
                                console.log("Confirm Cancel");
                            },
                        },
                        {
                            text: this.util.getString("Ok"),
                            handler: (data) => {
                                console.log("Confirm Ok", data);
                                console.log("before", this.topProducts[indeX].variant);
                                this.topProducts[indeX].variant = data;
                                console.log("after", this.topProducts[indeX].variant);
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                console.log("none");
            }
        });
    }
    /*upload(type) {
      let capturedSnapURL: string;
      const cameraOptions: CameraOptions = {
        quality: 20,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      };
      this.camera.getPicture(cameraOptions).then(
        (imageData) => {
          // this.camera.DestinationType.FILE_URI gives file URI saved in local
          // this.camera.DestinationType.DATA_URL gives base64 URI
  
          let base64Image = "data:image/jpeg;base64," + imageData;
          capturedSnapURL = base64Image;
          console.log("camera data", capturedSnapURL);
        },
        (err) => {
          console.log(err);
          // Handle error
        }
      );
    }*/
    upload(type) {
        try {
            const options = {
                quality: 100,
                targetHeight: 400,
                targetWidth: 400,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: type === "camera"
                    ? this.camera.PictureSourceType.CAMERA
                    : this.camera.PictureSourceType.PHOTOLIBRARY,
            };
            this.camera.getPicture(options).then((url) => {
                console.log("url->", url);
                this.util.show("uploading");
                const alpha = {
                    img: url,
                    type: "jpg",
                };
                console.log("parma==>", alpha);
                this.backgroundImage = "data:image/png;base64," + url;
                this.api
                    .nativePost("users/upload_file", alpha)
                    .then((data) => {
                    this.util.hide();
                    console.log("data", JSON.parse(data.data));
                    const info = JSON.parse(data.data);
                    this.cover = info.data;
                    console.log("cover image", this.cover);
                    const param = {
                        cover: this.cover,
                        id: localStorage.getItem("uid"),
                    };
                    this.util.show(this.util.getString("updating..."));
                    this.api.post("users/edit_profile", param).subscribe((update) => {
                        this.util.hide();
                        console.log(update);
                    }, (error) => {
                        this.util.hide();
                        console.log(error);
                        this.util.errorToast(this.util.getString("Something went wrong"));
                    });
                }, (error) => {
                    console.log(error);
                    this.util.hide();
                    this.util.errorToast(this.util.getString("Something went wrong"));
                })
                    .catch((error) => {
                    console.log(error);
                    this.util.hide();
                    this.util.errorToast(this.util.getString("Something went wrong"));
                });
            });
        }
        catch (error) {
            console.log("error", error);
            this.util.errorToast(this.util.getString("Something went wrong"));
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map