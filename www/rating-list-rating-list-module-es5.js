function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rating-list-rating-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating-list/rating-list.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating-list/rating-list.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRatingListRatingListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{name}} 's {{util.getString('Rating')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-button (click)=\"addNew()\" expand=\"full\">\n    {{util.getString('Add New Rating')}}\n  </ion-button>\n  <div class=\"mainItems\">\n    <ion-item *ngFor=\"let item of dummy\" lines=\"none\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated style=\"width: 100%;height: 100px;\"></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </ion-label>\n    </ion-item>\n\n    <ion-item *ngFor=\"let item of ratings\" lines=\"none\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"api.mediaURL+ item.cover\" alt=\"image\" onError=\"this.src='assets/imgs/user.png'\">\n      </ion-thumbnail>\n      <ion-label>\n        <span class=\"name\"> {{item.fname}} {{item.lname}}</span> <br>\n        <span class=\"msg\">{{item.msg}} </span> <br>\n        <span class=\"msg\"> {{getDate(item.timestamp)}} </span>\n      </ion-label>\n\n    </ion-item>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/rating-list/rating-list-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/rating-list/rating-list-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: RatingListPageRoutingModule */

  /***/
  function srcAppPagesRatingListRatingListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingListPageRoutingModule", function () {
      return RatingListPageRoutingModule;
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


    var _rating_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rating-list.page */
    "./src/app/pages/rating-list/rating-list.page.ts");
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
      component: _rating_list_page__WEBPACK_IMPORTED_MODULE_3__["RatingListPage"]
    }];

    var RatingListPageRoutingModule = function RatingListPageRoutingModule() {
      _classCallCheck(this, RatingListPageRoutingModule);
    };

    RatingListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RatingListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/rating-list/rating-list.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/rating-list/rating-list.module.ts ***!
    \*********************************************************/

  /*! exports provided: RatingListPageModule */

  /***/
  function srcAppPagesRatingListRatingListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingListPageModule", function () {
      return RatingListPageModule;
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


    var _rating_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rating-list-routing.module */
    "./src/app/pages/rating-list/rating-list-routing.module.ts");
    /* harmony import */


    var _rating_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rating-list.page */
    "./src/app/pages/rating-list/rating-list.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var RatingListPageModule = function RatingListPageModule() {
      _classCallCheck(this, RatingListPageModule);
    };

    RatingListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rating_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatingListPageRoutingModule"]],
      declarations: [_rating_list_page__WEBPACK_IMPORTED_MODULE_6__["RatingListPage"]]
    })], RatingListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/rating-list/rating-list.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/rating-list/rating-list.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRatingListRatingListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.mainItems {\n  margin-top: 20px;\n}\n.mainItems ion-item {\n  border-radius: 5px;\n  box-shadow: 0px 0px 20px -3px rgba(30, 98, 255, 0.3);\n  padding: 10px;\n  position: relative;\n  margin-bottom: 20px;\n}\n.mainItems ion-item .name {\n  font-size: 13px;\n  font-weight: bold;\n}\n.mainItems ion-item .msg {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmF0aW5nLWxpc3QvcmF0aW5nLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yYXRpbmctbGlzdC9FOlxcSW9uaWNcXGNpcmNsZXBvaW50L3NyY1xcYXBwXFxwYWdlc1xccmF0aW5nLWxpc3RcXHJhdGluZy1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLGdCQUFBO0FERUo7QUNESTtFQUNJLGtCQUFBO0VBQ0Esb0RBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBREdSO0FDRlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QURJWjtBQ0ZRO0VBQ0ksZUFBQTtBRElaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmF0aW5nLWxpc3QvcmF0aW5nLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluSXRlbXMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5JdGVtcyBpb24taXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0zcHggcmdiYSgzMCwgOTgsIDI1NSwgMC4zKTtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1haW5JdGVtcyBpb24taXRlbSAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbkl0ZW1zIGlvbi1pdGVtIC5tc2cge1xuICBmb250LXNpemU6IDEycHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5tYWluSXRlbXN7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0zcHggcmdiYSgzMCwgOTgsIDI1NSwgMC4zKTsgICAgICAgIFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5uYW1le1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLm1zZ3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/rating-list/rating-list.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/rating-list/rating-list.page.ts ***!
    \*******************************************************/

  /*! exports provided: RatingListPage */

  /***/
  function srcAppPagesRatingListRatingListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingListPage", function () {
      return RatingListPage;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product_rating_product_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../product-rating/product-rating.page */
    "./src/app/pages/product-rating/product-rating.page.ts");
    /* harmony import */


    var _store_rating_store_rating_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../store-rating/store-rating.page */
    "./src/app/pages/store-rating/store-rating.page.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var RatingListPage = /*#__PURE__*/function () {
      function RatingListPage(navCtrl, api, util, modalCtrl, route) {
        var _this = this;

        _classCallCheck(this, RatingListPage);

        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.dummy = [];
        this.ratings = [];
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id) {
            _this.id = data.id;
            _this.name = data.name;
            _this.type = data.type;

            _this.getFrom();
          }
        });
      }

      _createClass(RatingListPage, [{
        key: "getFrom",
        value: function getFrom() {
          var _this2 = this;

          // getFromIDs
          var query = this.type === 'product' ? 'pid = ' + this.id : 'sid = ' + this.id;
          var param = {
            id: this.id,
            where: query
          };
          this.dummy = Array(10);
          this.ratings = [];
          this.api.post('rating/getFromIDs', param).subscribe(function (data) {
            console.log(data);
            _this2.dummy = [];

            if (data && data.status === 200) {
              _this2.ratings = data.data;
            }
          }, function (error) {
            console.log(error);
            _this2.dummy = [];

            _this2.util.errorToast(_this2.util.getString('Something went wrong'));
          });
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
        key: "addNew",
        value: function addNew() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: this.type === 'product' ? _product_rating_product_rating_page__WEBPACK_IMPORTED_MODULE_6__["ProductRatingPage"] : _store_rating_store_rating_page__WEBPACK_IMPORTED_MODULE_7__["StoreRatingPage"],
                      cssClass: 'modalContact',
                      backdropDismiss: false,
                      swipeToClose: true,
                      componentProps: {
                        id: this.id,
                        name: this.name,
                        way: 'direct'
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log(data.role);

                      if (data && data.role === 'success') {
                        _this3.getFrom();
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_8__(date).format('ll');
        }
      }]);

      return RatingListPage;
    }();

    RatingListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    RatingListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rating-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./rating-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating-list/rating-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./rating-list.page.scss */
      "./src/app/pages/rating-list/rating-list.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], RatingListPage);
    /***/
  }
}]);
//# sourceMappingURL=rating-list-rating-list-module-es5.js.map