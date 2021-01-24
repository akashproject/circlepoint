function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoriesCategoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{util.getString('Categories')}} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<app-closed *ngIf=\"util.appClosed\"></app-closed>\n\n<ion-content class=\"ion-padding\" *ngIf=\"!util.appClosed\">\n  <ion-item *ngFor=\"let item of dummy\">\n    <ion-thumbnail slot=\"start\">\n      <ion-skeleton-text></ion-skeleton-text>\n    </ion-thumbnail>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n      <p>\n        <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <div class=\"main\" *ngIf=\"categories?.length && !dummy?.length\">\n\n    <div class=\"flex_main\" *ngFor=\"let item of categories\">\n      <div class=\"flex_div\" (click)=\"change(item.id)\">\n        <img [src]=\"api.mediaURL+ item.cover\" alt=\"\" class=\"cateIcon\">\n        <div class=\"detail_div\">\n          <ion-label class=\"title_name\" [class.boldFont]=\"selectedIndex === item.id\">{{item.name}}</ion-label>\n        </div>\n        <ion-icon name=\"chevron-down-outline\" class=\"arrow\"></ion-icon>\n      </div>\n\n      <div class=\"details\" *ngIf=\"selectedIndex === item.id\">\n        <div class=\"inlnes\" *ngFor=\"let sub of item.subCates\" (click)=\"goToProductList(sub)\">\n          <ion-label class=\"titles\" [class.boldFont]=\"subIndex === sub.id\">{{sub.name}}</ion-label>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/categories/categories-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/categories/categories-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: CategoriesPageRoutingModule */

  /***/
  function srcAppPagesCategoriesCategoriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function () {
      return CategoriesPageRoutingModule;
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


    var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categories.page */
    "./src/app/pages/categories/categories.page.ts");
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
      component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }];

    var CategoriesPageRoutingModule = function CategoriesPageRoutingModule() {
      _classCallCheck(this, CategoriesPageRoutingModule);
    };

    CategoriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoriesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/categories/categories.module.ts ***!
    \*******************************************************/

  /*! exports provided: CategoriesPageModule */

  /***/
  function srcAppPagesCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
      return CategoriesPageModule;
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


    var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./categories-routing.module */
    "./src/app/pages/categories/categories-routing.module.ts");
    /* harmony import */


    var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categories.page */
    "./src/app/pages/categories/categories.page.ts");
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


    var CategoriesPageModule = function CategoriesPageModule() {
      _classCallCheck(this, CategoriesPageModule);
    };

    CategoriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
    })], CategoriesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/categories/categories.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoriesCategoriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div ion-grid {\n  padding: 0;\n}\n.main_content_div ion-grid ion-col {\n  text-align: center;\n}\n.main_content_div ion-grid ion-col .cat_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main_content_div ion-grid ion-col img {\n  height: 80px;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  width: 100%;\n}\n.main_content_div ion-grid ion-col .lbl {\n  margin: 10px 0px;\n}\n.main {\n  margin-bottom: 10px;\n  padding-bottom: 70px;\n}\n.main ion-label {\n  display: block;\n}\n.main .flex_main {\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);\n  background: white;\n  border-radius: 12px;\n  margin-bottom: 10px;\n}\n.main .flex_main .flex_div {\n  display: flex;\n  height: 56px;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n  position: relative;\n}\n.main .flex_main .flex_div .cateIcon {\n  height: 50px;\n  width: 50px;\n}\n.main .flex_main .flex_div .detail_div {\n  margin-left: 20px;\n}\n.main .flex_main .flex_div .detail_div .title_name {\n  font-size: 14px;\n}\n.main .flex_main .flex_div .detail_div .boldFont {\n  font-weight: bold;\n}\n.main .flex_main .flex_div .detail_div .time {\n  font-size: 12px;\n  color: #707070;\n}\n.main .flex_main .flex_div ion-icon {\n  position: absolute;\n  right: 20px;\n  color: #3D4148;\n  font-size: 20px;\n}\n.main .name {\n  margin: 0px;\n  font-size: 18px;\n  color: black;\n}\n.main .time {\n  margin: 5px 0px 0px 0px;\n  font-size: 15px;\n  color: gray;\n}\n.main .drop {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.main .details {\n  padding: 10px;\n}\n.main .details .inlnes {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: gray;\n  padding: 10px;\n  border-bottom: 1px solid lightgray;\n}\n.main .details .inlnes .boldFont {\n  font-weight: bold;\n}\n.main .details .inlnes ion-label {\n  font-size: 14px;\n  color: #575D67;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXGNhdGVnb3JpZXNcXGNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QURFSjtBQ0RJO0VBQ0ksY0FBQTtBREdSO0FDQUk7RUFDSSxVQUFBO0FERVI7QUNBUTtFQUNJLGtCQUFBO0FERVo7QUNEWTtFQUNJLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBREdoQjtBQ0RZO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FER2hCO0FDRFk7RUFDSSxnQkFBQTtBREdoQjtBQ0dBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBREFKO0FDQ0k7RUFDRSxjQUFBO0FEQ047QUNFSTtFQUNJLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FEQVI7QUNFUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURBWjtBQ0NZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QURDaEI7QUNDWTtFQUNJLGlCQUFBO0FEQ2hCO0FDQWdCO0VBQ0ksZUFBQTtBREVwQjtBQ0FnQjtFQUNJLGlCQUFBO0FERXBCO0FDQWdCO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURFbEI7QUNDWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEQ2hCO0FDTUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURKUjtBQ09JO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBRExSO0FDUUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FETlI7QUNTSTtFQUNJLGFBQUE7QURQUjtBQ1FRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FETlo7QUNPWTtFQUNJLGlCQUFBO0FETGhCO0FDT1k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBRExkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tZ3JpZCBpb24tY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWdyaWQgaW9uLWNvbCAuY2F0X2RpdiB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1ncmlkIGlvbi1jb2wgaW1nIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tZ3JpZCBpb24tY29sIC5sYmwge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4ubWFpbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xufVxuLm1haW4gaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbiAuZmxleF9tYWluIHtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluIC5mbGV4X21haW4gLmZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluIC5mbGV4X21haW4gLmZsZXhfZGl2IC5jYXRlSWNvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG4ubWFpbiAuZmxleF9tYWluIC5mbGV4X2RpdiAuZGV0YWlsX2RpdiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1haW4gLmZsZXhfbWFpbiAuZmxleF9kaXYgLmRldGFpbF9kaXYgLnRpdGxlX25hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbiAuZmxleF9tYWluIC5mbGV4X2RpdiAuZGV0YWlsX2RpdiAuYm9sZEZvbnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluIC5mbGV4X21haW4gLmZsZXhfZGl2IC5kZXRhaWxfZGl2IC50aW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzcwNzA3MDtcbn1cbi5tYWluIC5mbGV4X21haW4gLmZsZXhfZGl2IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgY29sb3I6ICMzRDQxNDg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tYWluIC5uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm1haW4gLnRpbWUge1xuICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluIC5kcm9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbiAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbiAuZGV0YWlscyAuaW5sbmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogZ3JheTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5tYWluIC5kZXRhaWxzIC5pbmxuZXMgLmJvbGRGb250IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbiAuZGV0YWlscyAuaW5sbmVzIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM1NzVENjc7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaW9uLWdyaWR7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC5jYXRfZGl2e1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxibHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWFpbntcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZmxleF9tYWlue1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIC5mbGV4X2RpdntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC5jYXRlSWNvbntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGV0YWlsX2RpdntcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAudGl0bGVfbmFtZXtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm9sZEZvbnR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGltZXtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzNENDE0ODtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICAgIC5uYW1le1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgLnRpbWUge1xuICAgICAgICBtYXJnaW46IDVweCAwcHggMHB4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG5cbiAgICAuZHJvcHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgO1xuICAgIH1cblxuICAgIC5kZXRhaWxze1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAuaW5sbmVze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgLmJvbGRGb250e1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzU3NUQ2NztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/categories/categories.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/categories/categories.page.ts ***!
    \*****************************************************/

  /*! exports provided: CategoriesPage */

  /***/
  function srcAppPagesCategoriesCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
      return CategoriesPage;
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


    var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/category.service */
    "./src/app/services/category.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CategoriesPage = /*#__PURE__*/function () {
      function CategoriesPage(util, cat, router, api) {
        _classCallCheck(this, CategoriesPage);

        this.util = util;
        this.cat = cat;
        this.router = router;
        this.api = api;
        this.categories = [];
        this.dummy = Array(20);
        this.getCates();
      }

      _createClass(CategoriesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.util.openMenu();
        }
      }, {
        key: "getCates",
        value: function getCates() {
          var _this = this;

          this.categories = [];
          this.dummy = Array(20);
          this.api.get('categories').subscribe(function (datas) {
            _this.dummy = [];

            if (datas && datas.data && datas.data.length) {
              datas.data.forEach(function (element) {
                if (element.status === '1') {
                  var info = {
                    id: element.id,
                    name: element.name,
                    cover: element.cover,
                    subCates: []
                  };

                  _this.categories.push(info);
                }
              });
            }

            _this.api.get('subcate').subscribe(function (subCates) {
              console.log('sub cates', subCates);

              if (subCates && subCates.status === 200 && subCates.data && subCates.data.length) {
                _this.categories.forEach(function (element, i) {
                  subCates.data.forEach(function (sub) {
                    if (sub.status === '1' && element.id === sub.cate_id) {
                      _this.categories[i].subCates.push(sub);
                    }
                  });
                });

                console.log('=>>', _this.categories);
              }
            }, function (error) {
              console.log(error);

              _this.util.errorToast(_this.util.getString('Something went wrong'));
            });
          }, function (error) {
            console.log(error);

            _this.util.errorToast(_this.util.getString('Something went wrong'));

            _this.dummy = [];
          });
        }
      }, {
        key: "change",
        value: function change(id) {
          if (this.selectedIndex === id) {
            this.selectedIndex = '';
          } else {
            this.selectedIndex = id;
          }
        }
      }, {
        key: "goToProductList",
        value: function goToProductList(val) {
          this.subIndex = val.id;
          var navData = {
            queryParams: {
              id: val.id,
              name: val.name
            }
          };
          this.router.navigate(['/tabs/categories/products'], navData);
        }
      }]);

      return CategoriesPage;
    }();

    CategoriesPage.ctorParameters = function () {
      return [{
        type: _services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
      }, {
        type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }];
    };

    CategoriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./categories.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./categories.page.scss */
      "./src/app/pages/categories/categories.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])], CategoriesPage);
    /***/
  },

  /***/
  "./src/app/services/category.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/category.service.ts ***!
    \**********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var CategoryService = function CategoryService() {
      _classCallCheck(this, CategoryService);

      this.category = [{
        img: 'assets/imgs/category/fruit.png',
        name: 'Fruits',
        color: 'rgba(226, 61, 61, 0.2)'
      }, {
        img: 'assets/imgs/category/beverages.png',
        name: 'Beverages',
        color: 'rgba(113, 239, 239,0.2)'
      }, {
        img: 'assets/imgs/category/veg.png',
        name: 'Veg',
        color: 'rgba(237, 129, 21, 0.2)'
      }, {
        img: 'assets/imgs/category/non-veg.png',
        name: 'Non-veg',
        color: 'rgba(243, 210, 146,0.3)'
      }, {
        img: 'assets/imgs/category/bread.png',
        name: 'Backery',
        color: 'rgba(195, 132, 91,0.3)'
      }, {
        img: 'assets/imgs/category/grain.png',
        name: 'Grains',
        color: 'rgba(246, 225, 127,0.3)'
      }, {
        img: 'assets/imgs/category/meat.png',
        name: 'Meat',
        color: 'rgba(250, 118, 141,0.3)'
      }, {
        img: 'assets/imgs/category/dairy.png',
        name: 'Dairy',
        color: 'rgb(216, 242, 246)'
      }, {
        img: 'assets/imgs/category/clean2.png',
        name: 'Cleaners',
        color: 'rgba(250, 118, 141,0.3)'
      }];
    };

    CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CategoryService);
    /***/
  }
}]);
//# sourceMappingURL=categories-categories-module-es5.js.map