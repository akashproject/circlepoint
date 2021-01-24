function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-address-add-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddAddressAddAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{util.getString('Add New Address')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"informations\">\n    <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('LOCATIONS')}} </ion-label>\n      <ion-input [(ngModel)]=\"address\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('HOUSE / FLAT NO')}} </ion-label>\n      <ion-input [(ngModel)]=\"house\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('LANDMARK')}} </ion-label>\n      <ion-input [(ngModel)]=\"landmark\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\"> {{util.getString('Pincode')}} </ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"pincode\"></ion-input>\n    </ion-item>\n    <ion-radio-group [(ngModel)]=\"title\">\n      <ion-label class=\"title\">\n        {{util.getString('SAVE AS')}}\n      </ion-label>\n      <ion-item style=\"margin-top: 20px;\">\n        <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n        <ion-label> {{util.getString('HOME')}} </ion-label>\n        <ion-radio value=\"home\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n        <ion-label> {{util.getString('WORK')}} </ion-label>\n        <ion-radio value=\"work\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"navigate-outline\" slot=\"start\"></ion-icon>\n        <ion-label> {{util.getString('OTHER')}} </ion-label>\n        <ion-radio value=\"other\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button *ngIf=\"from ==='new'\" (click)=\"addAddress()\" expand=\"block\">\n      {{util.getString('Add')}}\n    </ion-button>\n\n    <ion-button *ngIf=\"from ==='edit'\" (click)=\"updateAddress()\" expand=\"block\">\n      {{util.getString('Update')}}\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/add-address/add-address-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddAddressPageRoutingModule */

  /***/
  function srcAppPagesAddAddressAddAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressPageRoutingModule", function () {
      return AddAddressPageRoutingModule;
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


    var _add_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-address.page */
    "./src/app/pages/add-address/add-address.page.ts");
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
      component: _add_address_page__WEBPACK_IMPORTED_MODULE_3__["AddAddressPage"]
    }];

    var AddAddressPageRoutingModule = function AddAddressPageRoutingModule() {
      _classCallCheck(this, AddAddressPageRoutingModule);
    };

    AddAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddAddressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/add-address/add-address.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddAddressPageModule */

  /***/
  function srcAppPagesAddAddressAddAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function () {
      return AddAddressPageModule;
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


    var _add_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-address-routing.module */
    "./src/app/pages/add-address/add-address-routing.module.ts");
    /* harmony import */


    var _add_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-address.page */
    "./src/app/pages/add-address/add-address.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AddAddressPageModule = function AddAddressPageModule() {
      _classCallCheck(this, AddAddressPageModule);
    };

    AddAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddAddressPageRoutingModule"]],
      declarations: [_add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]]
    })], AddAddressPageModule);
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/add-address/add-address.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddAddressAddAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.informations {\n  padding: 10px;\n}\n.informations .title {\n  font-weight: bold;\n  padding: 10px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGQtYWRkcmVzcy9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXGFkZC1hZGRyZXNzXFxhZGQtYWRkcmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxhQUFBO0FERUo7QUNESTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURHUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1hZGRyZXNzL2FkZC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uaW5mb3JtYXRpb25zIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5pbmZvcm1hdGlvbnMgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmluZm9ybWF0aW9uc3tcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC50aXRsZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/add-address/add-address.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/add-address/add-address.page.ts ***!
    \*******************************************************/

  /*! exports provided: AddAddressPage */

  /***/
  function srcAppPagesAddAddressAddAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAddressPage", function () {
      return AddAddressPage;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


    var AddAddressPage = /*#__PURE__*/function () {
      function AddAddressPage(geolocation, navCtrl, api, util, route) {
        var _this = this;

        _classCallCheck(this, AddAddressPage);

        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.route = route;
        this.address = '';
        this.house = '';
        this.landmark = '';
        this.title = 'home';
        this.pincode = '';
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.from) {
            _this.from = 'edit';
            var info = JSON.parse(data.data);
            console.log('da===>', info);
            _this.address = info.address;
            _this.house = info.house;
            _this.id = info.id;
            _this.landmark = info.landmark;
            _this.lat = info.lat;
            _this.lng = info.lng;
            _this.pincode = info.pincode;
          } else {
            _this.from = 'new';
          }
        });
      }

      _createClass(AddAddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addAddress",
        value: function addAddress() {
          var _this2 = this;

          if (this.address === '' || this.landmark === '' || this.house === '' || this.pincode === '') {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
          }

          if (!this.lat || this.lat === '' || !this.lng || this.lng === '') {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode
            }, function (results, status) {
              console.log(results, status);

              if (status === 'OK' && results && results.length) {
                _this2.lat = results[0].geometry.location.lat();
                _this2.lng = results[0].geometry.location.lng();
                console.log('----->', _this2.lat, _this2.lng);
                console.log('call api');

                _this2.util.show();

                var param = {
                  uid: localStorage.getItem('uid'),
                  address: _this2.address,
                  lat: _this2.lat,
                  lng: _this2.lng,
                  title: _this2.title,
                  house: _this2.house,
                  landmark: _this2.landmark,
                  pincode: _this2.pincode
                };

                _this2.api.post('address/save', param).subscribe(function (data) {
                  _this2.util.hide();

                  if (data && data.status === 200) {
                    _this2.util.publishNewAddress();

                    _this2.navCtrl.back();

                    _this2.util.showToast('Address added', 'success', 'bottom');
                  } else {
                    _this2.util.errorToast(_this2.util.getString('Something went wrong'));
                  }
                }, function (error) {
                  console.log(error);

                  _this2.util.hide();

                  _this2.util.errorToast(_this2.util.getString('Something went wrong'));
                });
              } else {
                _this2.util.errorToast(_this2.util.getString('Something went wrong'));

                return false;
              }
            });
          }
        }
      }, {
        key: "updateAddress",
        value: function updateAddress() {
          var _this3 = this;

          if (this.address === '' || this.landmark === '' || this.house === '' || this.pincode === '') {
            this.util.errorToast(this.util.getString('All Fields are required'));
            return false;
          }

          if (!this.lat || this.lat === '' || !this.lng || this.lng === '') {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              address: this.house + ' ' + this.landmark + ' ' + this.address + ' ' + this.pincode
            }, function (results, status) {
              console.log(results, status);

              if (status === 'OK' && results && results.length) {
                _this3.lat = results[0].geometry.location.lat();
                _this3.lng = results[0].geometry.location.lng();
                console.log('----->', _this3.lat, _this3.lng);
                var param = {
                  id: _this3.id,
                  uid: localStorage.getItem('uid'),
                  address: _this3.address,
                  lat: _this3.lat,
                  lng: _this3.lng,
                  title: _this3.title,
                  house: _this3.house,
                  landmark: _this3.landmark,
                  pincode: _this3.pincode
                };

                _this3.util.show();

                _this3.api.post('address/editList', param).subscribe(function (data) {
                  _this3.util.hide();

                  if (data && data.status === 200) {
                    _this3.util.publishNewAddress();

                    _this3.navCtrl.back();

                    _this3.util.showToast('Address updated', 'success', 'bottom');
                  } else {
                    _this3.util.errorToast(_this3.util.getString('Something went wrong'));
                  }
                }, function (error) {
                  console.log(error);

                  _this3.util.hide();

                  _this3.util.errorToast(_this3.util.getString('Something went wrong'));
                });
              } else {
                _this3.util.errorToast(_this3.util.getString('Something went wrong'));

                return false;
              }
            });
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }]);

      return AddAddressPage;
    }();

    AddAddressPage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], AddAddressPage.prototype, "mapEle", void 0);
    AddAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-address',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-address.page.scss */
      "./src/app/pages/add-address/add-address.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], AddAddressPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-add-address-add-address-module-es5.js.map