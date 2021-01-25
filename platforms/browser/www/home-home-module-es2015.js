(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-title color=\"light\" (click)=\"changeCity()\" class=\"ion-text-left\">\n      <div class=\"ion-activatable\" *ngIf=\"util && util.city && util.city.name\">\n        <ion-icon slot=\"start\" name=\"location\"></ion-icon>\n        {{ util.city.name }}\n        <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n      </div>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\" />\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<app-closed *ngIf=\"util.appClosed\"></app-closed>\n\n<ion-content *ngIf=\"!util.appClosed\">\n  <div class=\"flx\">\n    <ion-searchbar\n      [placeholder]=\"util.getString('Search  products')\"\n      [(ngModel)]=\"terms\"\n      inputmode=\"text\"\n      type=\"search\"\n      (keyup.enter)=\"search(q.value)\"\n      (ionChange)=\"onSearchChange($event)\"\n      #q\n      [debounce]=\"250\"\n      mode=\"ios\"\n      showCancelButton=\"never\"\n    >\n    </ion-searchbar>\n    <ion-button\n      (click)=\"search(terms)\"\n      expand=\"block\"\n      fill=\"clear\"\n      size=\"small\"\n    >\n      <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n    </ion-button>\n  </div>\n  <div class=\"searchList\" *ngIf=\"products?.length\">\n    <ion-item *ngFor=\"let item of products\" (click)=\"goToSingleProduct(item)\">\n      <ion-label>{{item.name}}</ion-label>\n      <ion-icon name=\"arrow-redo-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n  </div>\n  <div class=\"searchList\" *ngIf=\"!productsRecordStatus\">\n    <ion-item>\n      <ion-label> No record found </ion-label>\n    </ion-item>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"haveStores === true\">\n    <div class=\"cateLbl\">\n      <ion-label class=\"all\"> {{util.getString('All Categories')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"goToCatrgory()\"\n        >{{util.getString('View All')}}<ion-icon\n          name=\"chevron-forward-outline\"\n          color=\"primary\"\n        >\n        </ion-icon>\n      </ion-label>\n    </div>\n\n    <div class=\"sliders\">\n      <div\n        class=\"categoryIcon\"\n        *ngFor=\"let item of allcates\"\n        (click)=\"subCate(item)\"\n      >\n        <div class=\"imgs\">\n          <img [src]=\"api.mediaURL + item.cover\" class=\"icon\" />\n        </div>\n        <ion-label class=\"name\"\n          >{{ (item.name.length>10)? (item.name | slice:0:10)+'..':(item.name)\n          }}</ion-label\n        >\n      </div>\n\n      <div *ngFor=\"let item of dummyCates\" style=\"margin: 0px 10px\">\n        <ion-skeleton-text\n          animated\n          style=\"width: 35px; height: 35px; border-radius: 50%\"\n        ></ion-skeleton-text>\n        <ion-skeleton-text\n          animated\n          style=\"width: 100%; height: 10px\"\n        ></ion-skeleton-text>\n      </div>\n    </div>\n\n    <div class=\"cateLbl\" *ngIf=\"!dummyBanners?.length && banners?.length\">\n      <ion-label class=\"all\">\n        {{util.getString('Exclusive Offers')}}\n      </ion-label>\n      <ion-label class=\"view\" (click)=\"allOffers()\"\n        >{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <!-- Top Banners -->\n    <div class=\"slider_div\" *ngIf=\"!dummyBanners?.length && banners?.length\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of dummyBanners\">\n          <!-- <div class=\"card\"> -->\n          <ion-skeleton-text\n            animated\n            style=\"width: 100%; height: 120px\"\n          ></ion-skeleton-text>\n          <!-- </div> -->\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of banners\">\n          <div class=\"card\">\n            <div\n              class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+backgroundImage+')'}\"\n              (click)=\"openLink(item)\"\n            >\n              <div class=\"overlay_div\" *ngIf=\"!uploadStatus\">\n                <ion-label class=\"overlay_inner\"> + </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div\n      class=\"cateLbl\"\n      *ngIf=\"!dummyTopProducts?.length && topProducts?.length\"\n    >\n      <ion-label class=\"all\"> {{util.getString('Top Picked')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"topicked()\"\n        >{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <!-- NEW -->\n    <div class=\"listView\">\n      <ion-slides [options]=\"slideTops\">\n        <ion-slide *ngFor=\"let item of dummyTopProducts\">\n          <ion-skeleton-text\n            animated\n            style=\"width: 100%; height: 120px\"\n          ></ion-skeleton-text>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of topProducts;let i = index;\">\n          <div class=\"box\">\n            <div\n              class=\"image_div\"\n              (click)=\"goToSingleProduct(item)\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"\n            >\n              <div class=\"percent\" *ngIf=\"item.discount !== '0'\">\n                {{item.discount}}%\n              </div>\n              <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n                <ion-label class=\"text\">\n                  {{util.getString('Out of Stoke')}}\n                </ion-label>\n              </div>\n              <img\n                src=\"assets/imgs/veg.png\"\n                class=\"kind\"\n                alt=\"Veg\"\n                *ngIf=\"item.kind === '1'\"\n              />\n              <img\n                src=\"assets/imgs/non.png\"\n                class=\"kind\"\n                alt=\"Non Veg\"\n                *ngIf=\"item.kind === '0'\"\n              />\n            </div>\n            <div class=\"details\">\n              <ion-label class=\"pro_name\" (click)=\"goToSingleProduct(item)\">\n                {{ (item.name.length>20)? (item.name |\n                slice:0:20)+'..':(item.name) }}</ion-label\n              >\n              <div\n                *ngIf=\"item.size ==='1'\"\n                class=\"variant\"\n                (click)=\"variant(item,i)\"\n              >\n                <ion-label class=\"selecter ion-activatable\">\n                  <span>\n                    <span>\n                      {{ item.variations && item.variations[0] &&\n                      item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].title ?\n                      item.variations[0].items[item.variant].title : ''}}\n                    </span>\n                    -\n                    <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\">\n                      {{util.currecny}}\n                      <span\n                        class=\"original\"\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                       item.variations[0].items[item.variant].discount\"\n                      >\n                        {{ item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span\n                        class=\"sell\"\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount\"\n                      >\n                        {{item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount ?\n                        item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\"\n                      >\n                        {{ item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                    </span>\n                    <span *ngIf=\"util.cside ==='right'\">\n                      <span\n                        class=\"original\"\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount\"\n                      >\n                        {{ item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      <span\n                        class=\"sell\"\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                      item.variations[0].items[item.variant].discount\"\n                      >\n                        {{item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount ?\n                        item.variations[0].items[item.variant].discount : 0}}\n                      </span>\n                      <span\n                        *ngIf=\"item.variations && item.variations[0] && item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].discount === 0 && !item.variations[0].items[item.variant].discount\"\n                      >\n                        {{ item.variations && item.variations[0] &&\n                        item.variations[0].items[item.variant] &&\n                        item.variations[0].items[item.variant].price ?\n                        item.variations[0].items[item.variant].price : 0}}\n                      </span>\n                      {{util.currecny}}\n                    </span>\n                  </span>\n                  <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n                  <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n                </ion-label>\n              </div>\n              <ion-label class=\"itemsKind\" *ngIf=\"item.size ==='0'\">\n                <span *ngIf=\"item.have_gram === '1'\">\n                  {{item.gram}} {{util.getString('grams')}}\n                </span>\n                <span *ngIf=\"item.have_kg === '1'\">\n                  {{item.kg}} {{util.getString('kg')}}\n                </span>\n                <span *ngIf=\"item.have_liter ==='1'\">\n                  {{item.liter}} {{util.getString('ltr')}}\n                </span>\n                <span *ngIf=\"item.have_ml ==='1'\">\n                  {{item.ml}} {{util.getString('ml')}}\n                </span>\n                <span *ngIf=\"item.have_pcs === '1'\">\n                  {{item.pcs}} {{util.getString('pcs')}}\n                </span>\n              </ion-label>\n              <div *ngIf=\"item.size ==='0'\">\n                <ion-label\n                  class=\"price_lbl\"\n                  *ngIf=\"item.discount === '0' && util.cside ==='left'\"\n                >\n                  {{util.currecny}} {{item.original_price}}\n                </ion-label>\n                <ion-label\n                  class=\"price_lbl\"\n                  *ngIf=\"item.discount === '0' && util.cside ==='right'\"\n                >\n                  {{item.original_price}} {{util.currecny}}</ion-label\n                >\n                <ion-label\n                  class=\"price_lbl\"\n                  *ngIf=\"item.discount !== '0'\"\n                  (click)=\"goToSingleProduct(item)\"\n                >\n                  <span class=\"original\" *ngIf=\"util.cside ==='left'\">\n                    {{util.currecny}} {{item.original_price}}\n                  </span>\n                  <span class=\"sell\" *ngIf=\"util.cside ==='left'\"\n                    >{{util.currecny}} {{item.sell_price}}\n                  </span>\n                  <span class=\"original\" *ngIf=\"util.cside ==='right'\">\n                    {{item.original_price}} {{util.currecny}}</span\n                  >\n                  <span class=\"sell\" *ngIf=\"util.cside ==='right'\">\n                    {{item.sell_price}} {{util.currecny}}</span\n                  >\n                </ion-label>\n              </div>\n              <div class=\"small_flex\">\n                <div\n                  class=\"btnBtm\"\n                  *ngIf=\"!cart.itemId.includes(item.id) && item.in_stoke === '1'\"\n                >\n                  <div\n                    class=\"ion-activatable ripple-parent\"\n                    (click)=\"addToCart(item,i)\"\n                  >\n                    {{util.getString('Add')}}\n                    <ion-ripple-effect></ion-ripple-effect>\n                  </div>\n                </div>\n                <div *ngIf=\"item.in_stoke !== '1'\" style=\"height: 30px\"></div>\n                <div class=\"abs_add\" *ngIf=\"cart.itemId.includes(item.id)\">\n                  <img src=\"assets/imgs/remove.png\" (click)=\"remove(item,i)\" />\n                  <ion-label>{{getQuanity(item.id)}}</ion-label>\n                  <img src=\"assets/imgs/add.png\" (click)=\"add(item,i)\" />\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- NEW -->\n\n    <!-- Start Top Store -->\n    <div class=\"cateLbl\" *ngIf=\"haveStores && stores?.length\">\n      <ion-label class=\"all\"> {{util.getString('Top Stores')}} </ion-label>\n      <ion-label class=\"view\" (click)=\"topStores()\"\n        >{{util.getString('View All')}}\n        <div class=\"ion-activatable\">\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </div>\n        <ion-icon name=\"chevron-forward-outline\" color=\"primary\"></ion-icon>\n      </ion-label>\n    </div>\n\n    <div class=\"topProducts\" *ngIf=\"haveStores && stores?.length\">\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of stores;let i = index;\">\n          <div class=\"content_div\">\n            <div class=\"card_div\">\n              <div\n                class=\"image_div\"\n                (click)=\"openStore(item)\"\n                [ngStyle]=\"{'background-image':'url('+ api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"\n              >\n                <img\n                  src=\"assets/imgs/open.png\"\n                  class=\"isOpen\"\n                  alt=\"Veg\"\n                  *ngIf=\"item.isOpen && item.isClosed ==='1'\"\n                />\n                <img\n                  src=\"assets/imgs/close.png\"\n                  class=\"isOpen\"\n                  alt=\"Non Veg\"\n                  *ngIf=\"!item.isOpen || item.isClosed === '0'\"\n                />\n              </div>\n              <div class=\"desc_div\" (click)=\"openStore(item)\">\n                <ion-label class=\"pro_name\">\n                  {{ (item.name.length>12)? (item.name |\n                  slice:0:12)+'..':(item.name) }}</ion-label\n                >\n                <ion-label class=\"pro_detail\">\n                  {{ (item.address.length>20)? (item.address |\n                  slice:0:20)+'..':(item.address) }}\n                </ion-label>\n                <ion-label class=\"price_lbl\">\n                  {{getTime(item.open_time)}} - {{getTime(item.close_time)}}\n                </ion-label>\n\n                <div class=\"small_flex\">\n                  <div class=\"btnBtm\">\n                    <div class=\"ion-activatable ripple-parent\">\n                      {{util.getString('View')}}\n                      <ion-ripple-effect></ion-ripple-effect>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- End Top Store -->\n\n    <!-- Between Banner -->\n    <div\n      class=\"slider_div\"\n      *ngIf=\"!betweenDummy?.length && betweenBanners?.length\"\n    >\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of betweenDummy\">\n          <div class=\"card\">\n            <ion-skeleton-text\n              animated\n              style=\"width: 100%; height: 120px\"\n            ></ion-skeleton-text>\n          </div>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of betweenBanners\">\n          <div class=\"card\">\n            <div\n              class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n              (click)=\"openLink(item)\"\n            >\n              <div class=\"overlay_div\" *ngIf=\"item.message\">\n                <ion-label> {{item.message}} </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <!-- Bottom Banner -->\n    <div\n      class=\"slider_div\"\n      *ngIf=\"!bottomDummy?.length && bottomBanners?.length\"\n    >\n      <ion-slides [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let item of bottomDummy\">\n          <div class=\"card\">\n            <ion-skeleton-text\n              animated\n              style=\"width: 100%; height: 120px\"\n            ></ion-skeleton-text>\n          </div>\n        </ion-slide>\n        <ion-slide *ngFor=\"let item of bottomBanners\">\n          <div class=\"card\">\n            <div\n              class=\"back_image\"\n              [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/bg.png)'}\"\n              (click)=\"openLink(item)\"\n            >\n              <div class=\"overlay_div\" *ngIf=\"item.message\">\n                <ion-label> {{item.message}} </ion-label>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div *ngFor=\"let item of dummyCates\" class=\"catess\">\n      <p>\n        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n      </p>\n      <ion-row>\n        <ion-col size=\"4\" *ngFor=\"let item of [1,2,3,4,5,6,7,8,9]\">\n          <div class=\"bg_img\">\n            <ion-skeleton-text\n              animated\n              style=\"width: 100%; height: 80px\"\n            ></ion-skeleton-text>\n          </div>\n          <p class=\"subCateName\">\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </p>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngFor=\"let item of categories\" class=\"catess\">\n      <p class=\"cateName\">{{item.name}}</p>\n      <ion-row>\n        <ion-col\n          size=\"4\"\n          *ngFor=\"let sub of item.subCates\"\n          class=\"bgColor\"\n          (click)=\"goToProductList(sub)\"\n        >\n          <div\n            class=\"bg_img\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+sub.cover+'),url(assets/bg.png)'}\"\n          ></div>\n          <p class=\"subCateName\">{{sub.name}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div *ngIf=\"haveStores === false\" class=\"nothing\">\n    <img src=\"assets/imgs/nothing.png\" alt=\"\" srcset=\"\" class=\"imgs\" />\n    <p class=\"ion-text-center bolder\">\n      {{util.getString('No Stores Found Near You!')}}\n    </p>\n  </div>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-title {\n  text-align: left !important;\n}\n.searchbar {\n  padding: 0px 10px;\n}\n.flx {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 70px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .cateLbl {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .cateLbl .all {\n  font-weight: bold;\n  font-family: muli-bold;\n}\n.main_content_div .cateLbl .view {\n  font-family: muli-bold;\n  color: var(--ion-color-primary);\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n}\n.main_content_div .cateLbl .view ion-icon {\n  font-size: 16px;\n}\n.main_content_div .sliders {\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto;\n  padding: 16px 0px;\n}\n.main_content_div .sliders .categoryIcon {\n  padding: 0px 5px;\n  text-align: center;\n}\n.main_content_div .sliders .categoryIcon .imgs {\n  border-radius: 50%;\n  padding: 5px;\n  line-height: 60px;\n  height: 60px;\n  width: 60px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  position: relative;\n}\n.main_content_div .sliders .categoryIcon .icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 35px;\n}\n.main_content_div .sliders .categoryIcon .name {\n  font-size: 10px;\n  font-weight: bold;\n  color: gray;\n  margin: 10px 0px;\n}\n.main_content_div .slider_div {\n  margin-top: 15px;\n}\n.main_content_div .slider_div .card {\n  width: 100%;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .slider_div .card .back_image {\n  height: 120px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.main_content_div .slider_div .card .back_image .overlay_div {\n  background: #45c261;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 50%;\n  right: 28px;\n  padding: 10px;\n  border-radius: 50%;\n  height: 90%;\n  border: 7px solid #bbb9b9;\n}\n.main_content_div .slider_div .card .back_image .overlay_div .overlay_inner {\n  color: white;\n  text-align: right;\n  font-size: 84px;\n  font-family: muli-bold;\n  width: 65%;\n  margin: auto;\n  position: absolute;\n  bottom: 77px;\n  height: 30%;\n}\n.main_content_div .content_div {\n  padding: 10px 0px;\n  width: 100%;\n}\n.main_content_div .content_div .card_div {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  margin-bottom: 16px;\n  border: 1px solid lightgray;\n  margin-right: 10px;\n}\n.main_content_div .content_div .card_div .offer_tag {\n  width: 35px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 99;\n}\n.main_content_div .content_div .card_div .off_lbl {\n  font-family: muli-bold;\n  position: absolute;\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  font-size: 9px;\n  top: 4px;\n  left: 8px;\n  text-align: center;\n  color: white;\n  z-index: 999;\n}\n.main_content_div .content_div .card_div .image_div {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin: 5px;\n}\n.main_content_div .content_div .card_div .image_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .content_div .card_div .image_div .isOpen {\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .content_div .card_div .image_div img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.main_content_div .content_div .card_div .desc_div {\n  text-align: right;\n  padding: 10px;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .variant ion-item ion-select {\n  --padding-end: 0px;\n  --padding-start: 0px;\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n}\n.main_content_div .content_div .card_div .desc_div .pro_name {\n  font-size: 15px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .pro_detail {\n  font-size: 11px;\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .content_div .card_div .desc_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 11px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex {\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 12px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add img {\n  color: #ff8e80;\n  width: 25px;\n}\n.main_content_div .listView {\n  margin: 10px 0px;\n}\n.main_content_div .listView .box {\n  border: 1px solid lightgray;\n  width: 100%;\n}\n.main_content_div .listView .box .image_div {\n  height: 80px;\n  width: 95%;\n  min-width: 90%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  margin: 5px;\n}\n.main_content_div .listView .box .image_div .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .listView .box .image_div .percent {\n  position: absolute;\n  height: 30px;\n  width: 30px;\n  background: #f27474;\n  left: 5px;\n  top: 2px;\n  line-height: 30px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content_div .listView .box .image_div .notInStoke {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.main_content_div .listView .box .image_div .notInStoke .text {\n  border: 1px solid gray;\n  padding: 5px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.main_content_div .listView .box .details {\n  padding: 5px 10px;\n  text-align: left;\n}\n.main_content_div .listView .box .details .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .listView .box .details .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .listView .box .details .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .listView .box .details .variant ion-item .select-icon {\n  display: none !important;\n}\n.main_content_div .listView .box .details .variant ion-item ion-select {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 20px;\n  height: 20px;\n}\n.main_content_div .listView .box .details .pro_name {\n  font-size: 12px;\n  color: gray;\n}\n.main_content_div .listView .box .details .itemsKind {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .listView .box .details .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 11px;\n}\n.main_content_div .listView .box .details .small_flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n}\n.main_content_div .listView .box .details .small_flex .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 15px;\n}\n.main_content_div .listView .box .details .small_flex .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .listView .box .details .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .listView .box .details .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .listView .box .details .abs_add img {\n  color: #ff8e80;\n  width: 25px;\n}\n.main_content_div .catess .cateName {\n  text-align: center;\n  font-weight: bold;\n  font-size: 13px;\n  background: #d0e3e3;\n  padding: 5px;\n  margin: 0px;\n  margin-top: 10px;\n}\n.main_content_div .catess .bgColor {\n  background: ivory;\n  border: 0.5px solid lightgray;\n}\n.main_content_div .catess .bgColor .bg_img {\n  height: 80px;\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 5px;\n  position: relative;\n}\n.main_content_div .catess .bgColor .subCateName {\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n}\n.nothing {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 100px;\n}\n.nothing .imgs {\n  height: 100px;\n  width: 100px;\n}\n.nothing .bolder {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9FOlxcSW9uaWNcXGNpcmNsZXBvaW50L3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBVUE7RUFDRSwyQkFBQTtBRENGO0FDQ0E7RUFDRSxpQkFBQTtBREVGO0FDQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FER0Y7QUNBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QURHRjtBQ0RFO0VBQ0UsY0FBQTtBREdKO0FDQUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBREVKO0FDQUk7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FERU47QUNBSTtFQUNFLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FERU47QUNBTTtFQUNFLGVBQUE7QURFUjtBQ0dFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRERKO0FDR0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FERE47QUNHTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FERFI7QUNHTTtFQUVFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QURGUjtBQ0tNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FESFI7QUNRRTtFQUNFLGdCQUFBO0FETko7QUNRSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FETk47QUNRTTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBRUEsa0JBQUE7QURQUjtBQ1NRO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FEUFY7QUNRVTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBRE5aO0FDYUU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QURYSjtBQ1lJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FEVk47QUNXTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtBRFRSO0FDWU07RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRFZSO0FDYU07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FEWFI7QUNZUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBRFZWO0FDWVE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QURWVjtBQ1lRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEVlY7QUNjTTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FEWlI7QUNjVTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEWlo7QUNjVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QURaWjtBQ2FZO0VBQ0UsMEJBQUE7QURYZDtBQ2FZO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QURYZDtBQ2VRO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QURiVjtBQ2VRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRGJWO0FDZVE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QURiVjtBQ2NVO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0FEWlo7QUNjVTtFQUNFLGlCQUFBO0FEWlo7QUNjVTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRFpaO0FDZVE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBRGJWO0FDY1U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FEWlo7QUNhWTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURYZDtBQzRCUTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRDFCVjtBQzRCVTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUQxQlo7QUM2QlU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBRDNCWjtBQ2tDRTtFQUNFLGdCQUFBO0FEaENKO0FDaUNJO0VBQ0UsMkJBQUE7RUFDQSxXQUFBO0FEL0JOO0FDZ0NNO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FEOUJSO0FDK0JRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FEN0JWO0FDK0JRO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEN0JWO0FDK0JRO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUQ3QlY7QUNnQ1U7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUQ5Qlo7QUNrQ007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FEaENSO0FDa0NVO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURoQ1o7QUNrQ1U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FEaENaO0FDaUNZO0VBQ0UsMEJBQUE7QUQvQmQ7QUNpQ1k7RUFDRSx3QkFBQTtBRC9CZDtBQ2lDWTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FEL0JkO0FDbUNRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QURqQ1Y7QUNtQ1E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QURqQ1Y7QUNtQ1E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QURqQ1Y7QUNrQ1U7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QURoQ1o7QUNrQ1U7RUFDRSxpQkFBQTtBRGhDWjtBQ2tDVTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRGhDWjtBQ21DUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURqQ1Y7QUNrQ1U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FEaENaO0FDaUNZO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRC9CZDtBQ29DUTtFQUNFLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRGxDVjtBQ29DVTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURsQ1o7QUNxQ1U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBRG5DWjtBQzBDSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEeENOO0FDMENJO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtBRHhDTjtBQ3lDTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRHZDUjtBQ3lDTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEdkNSO0FDNkNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEMUNGO0FDMkNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUR6Q0o7QUMyQ0U7RUFDRSxpQkFBQTtBRHpDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoYmFyIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5mbHgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXRlTGJsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVMYmwgLmFsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVMYmwgLnZpZXcge1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2F0ZUxibCAudmlldyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMTZweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVycyAuY2F0ZWdvcnlJY29uIHtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcnMgLmNhdGVnb3J5SWNvbiAuaW1ncyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVycyAuY2F0ZWdvcnlJY29uIC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDM1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVycyAuY2F0ZWdvcnlJY29uIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIC5iYWNrX2ltYWdlIC5vdmVybGF5X2RpdiB7XG4gIGJhY2tncm91bmQ6ICM0NWMyNjE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDUwJTtcbiAgcmlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJvcmRlcjogN3B4IHNvbGlkICNiYmI5Yjk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCAuYmFja19pbWFnZSAub3ZlcmxheV9kaXYgLm92ZXJsYXlfaW5uZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDg0cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDc3cHg7XG4gIGhlaWdodDogMzAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNoYWRvdzogM3B4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAub2ZmZXJfdGFnIHtcbiAgd2lkdGg6IDM1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLm9mZl9sYmwge1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA5OTk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYgLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuaW1hZ2VfZGl2IC5pc09wZW4ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuaW1hZ2VfZGl2IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnZhcmlhbnQgLnNlbGVjdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAudmFyaWFudCBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC52YXJpYW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByb19uYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJvX2RldGFpbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIC5zZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnNtYWxsX2ZsZXggLmJ0bkJ0bSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnNtYWxsX2ZsZXggLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuYWJzX2FkZCBpbWcge1xuICBjb2xvcjogI2ZmOGU4MDtcbiAgd2lkdGg6IDI1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmltYWdlX2RpdiB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWluLXdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5pbWFnZV9kaXYgLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmltYWdlX2RpdiAucGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuaW1hZ2VfZGl2IC5ub3RJblN0b2tlIHtcbiAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA5MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuaW1hZ2VfZGl2IC5ub3RJblN0b2tlIC50ZXh0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC52YXJpYW50IC5zZWxlY3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnZhcmlhbnQgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAudmFyaWFudCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC52YXJpYW50IGlvbi1pdGVtIC5zZWxlY3QtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC52YXJpYW50IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5wcm9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAuaXRlbXNLaW5kIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnByaWNlX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5wcmljZV9sYmwgLnNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5wcmljZV9sYmwgLmRpY291bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLnNtYWxsX2ZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5zbWFsbF9mbGV4IC5idG5CdG0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5zbWFsbF9mbGV4IC5idG5CdG0gLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdFZpZXcgLmJveCAuZGV0YWlscyAuYWJzX2FkZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0VmlldyAuYm94IC5kZXRhaWxzIC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RWaWV3IC5ib3ggLmRldGFpbHMgLmFic19hZGQgaW1nIHtcbiAgY29sb3I6ICNmZjhlODA7XG4gIHdpZHRoOiAyNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVzcyAuY2F0ZU5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJhY2tncm91bmQ6ICNkMGUzZTM7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2F0ZXNzIC5iZ0NvbG9yIHtcbiAgYmFja2dyb3VuZDogaXZvcnk7XG4gIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhdGVzcyAuYmdDb2xvciAuYmdfaW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXRlc3MgLmJnQ29sb3IgLnN1YkNhdGVOYW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm90aGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cbi5ub3RoaW5nIC5pbWdzIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLm5vdGhpbmcgLmJvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cbi5zZWFyY2hiYXIge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbn1cbi5mbHgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5jYXRlTGJsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmFsbCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgfVxuICAgIC52aWV3IHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zbGlkZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4IDBweDtcblxuICAgIC5jYXRlZ29yeUljb24ge1xuICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLmltZ3Mge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmljb24ge1xuICAgICAgICAvLyBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgfVxuXG4gICAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zbGlkZXJfZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuXG4gICAgLmNhcmQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAuYmFja19pbWFnZSB7XG4gICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5vdmVybGF5X2RpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzQ1YzI2MTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgYm9yZGVyOiA3cHggc29saWQgI2JiYjliOTtcbiAgICAgICAgICAub3ZlcmxheV9pbm5lciB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA3N3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuY2FyZF9kaXYge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBib3gtc2hhZG93OiAzcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgLm9mZmVyX3RhZyB7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICB9XG5cbiAgICAgIC5vZmZfbGJsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgfVxuXG4gICAgICAuaW1hZ2VfZGl2IHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAua2luZCB7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5pc09wZW4ge1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kZXNjX2RpdiB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgLnZhcmlhbnQge1xuICAgICAgICAgIC5zZWxlY3RlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucHJvX25hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgICAucHJvX2RldGFpbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2VfbGJsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAub3JpZ2luYWwge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWxsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGljb3VudCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNtYWxsX2ZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgLmJ0bkJ0bSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIC5sZWZ0e1xuICAgICAgICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC8vICAgICBpbWd7XG4gICAgICAgICAgLy8gICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAvLyAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgIC8vICAgICBpb24tbGFiZWwge1xuICAgICAgICAgIC8vICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAvLyAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hYnNfYWRkIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmY4ZTgwO1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxpc3RWaWV3IHtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIC5ib3gge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAuaW1hZ2VfZGl2IHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBtaW4td2lkdGg6IDkwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAua2luZCB7XG4gICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5wZXJjZW50IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gICAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAubm90SW5TdG9rZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIC8vIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRldGFpbHMge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgLnZhcmlhbnQge1xuICAgICAgICAgIC5zZWxlY3RlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlbGVjdC1pY29uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucHJvX25hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgfVxuICAgICAgICAuaXRlbXNLaW5kIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2VfbGJsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAub3JpZ2luYWwge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWxsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGljb3VudCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNtYWxsX2ZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIC5idG5CdG0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hYnNfYWRkIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuXG4gICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmY4ZTgwO1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jYXRlc3Mge1xuICAgIC5jYXRlTmFtZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGJhY2tncm91bmQ6ICNkMGUzZTM7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5iZ0NvbG9yIHtcbiAgICAgIGJhY2tncm91bmQ6IGl2b3J5O1xuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAuYmdfaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5zdWJDYXRlTmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5vdGhpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIC5pbWdzIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuYm9sZGVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuIl19 */");

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
            slidesPerView: 1,
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
        this.productsRecordStatus = true;
        this.dummyProducts = [];
        this.dummyStores = [];
        this.stores = [];
        this.backgroundImage = "assets/bg.png";
        this.uploadStatus = false;
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
        console.log("here", event);
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
        console.log("hi", event);
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
                else {
                    this.productsRecordStatus = false;
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
                this.uploadStatus = true;
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