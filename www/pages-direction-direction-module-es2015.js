(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-direction-direction-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/direction/direction.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/direction/direction.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"navCtrl.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"upper_div\">\n      <div #map id=\"map\" class=\"map\"></div>\n    </div>\n    <div class=\"lower_div\" *ngIf=\"who==='driver' && driverInfo && driverInfo.cover\">\n      <ion-label class=\"head_lbl\">Order on the Way</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+driverInfo.cover+'),url(assets/bg.png)'}\"></div>\n        <div style=\"padding-left: 20px;\" (click)=\"callDriver()\">\n          <ion-label class=\"boy_name\">{{driverInfo.first_name +' '+ driverInfo.last_name}}</ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"mail-outline\"></ion-icon> {{driverInfo.email}}\n          </ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"call-outline\"></ion-icon> {{driverInfo.mobile}}\n          </ion-label>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"lower_div\" *ngIf=\"who === 'store' && storeInfo && storeInfo.cover\">\n      <ion-label class=\"head_lbl\">Order on the Way</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+storeInfo.cover+'),url(assets/bg.png)'}\"></div>\n        <div style=\"padding-left: 20px;\" (click)=\"callStore()\">\n          <ion-label class=\"boy_name\">{{storeInfo.name}}</ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"location-outline\"></ion-icon> {{storeInfo.address}}\n          </ion-label>\n          <ion-label class=\"boy_name\">\n            <ion-icon name=\"call-outline\"></ion-icon> {{storeInfo.mobile}}\n          </ion-label>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/direction/direction-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/direction/direction-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DirectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionPageRoutingModule", function() { return DirectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _direction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./direction.page */ "./src/app/pages/direction/direction.page.ts");




const routes = [
    {
        path: '',
        component: _direction_page__WEBPACK_IMPORTED_MODULE_3__["DirectionPage"]
    }
];
let DirectionPageRoutingModule = class DirectionPageRoutingModule {
};
DirectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DirectionPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/direction/direction.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/direction/direction.module.ts ***!
  \*****************************************************/
/*! exports provided: DirectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionPageModule", function() { return DirectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _direction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./direction-routing.module */ "./src/app/pages/direction/direction-routing.module.ts");
/* harmony import */ var _direction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./direction.page */ "./src/app/pages/direction/direction.page.ts");







let DirectionPageModule = class DirectionPageModule {
};
DirectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _direction_routing_module__WEBPACK_IMPORTED_MODULE_5__["DirectionPageRoutingModule"]
        ],
        declarations: [_direction_page__WEBPACK_IMPORTED_MODULE_6__["DirectionPage"]]
    })
], DirectionPageModule);



/***/ }),

/***/ "./src/app/pages/direction/direction.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/direction/direction.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .upper_div {\n  height: 60vh;\n}\n.main_content_div .upper_div #map {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .lower_div {\n  height: 40vh;\n  padding: 20px;\n}\n.main_content_div .lower_div ion-label {\n  display: block;\n}\n.main_content_div .lower_div .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  margin-top: 10px;\n}\n.main_content_div .lower_div .driver_detail_div {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .lower_div .driver_detail_div .back_image {\n  height: 50px !important;\n  width: 50px !important;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-width: 50px;\n}\n.main_content_div .lower_div .driver_detail_div .boy_name {\n  font-weight: 600;\n}\n.main_content_div .lower_div .driver_detail_div .address {\n  color: gray;\n  width: 80%;\n}\n.main_content_div .lower_div .driver_detail_div ion-button {\n  position: absolute;\n  right: -3px;\n  top: -5px;\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .lower_div .order_detail {\n  font-weight: bold;\n  margin-top: 20px;\n}\n.main_content_div .lower_div .order_status {\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 20px;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 3px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlyZWN0aW9uL0U6XFxJb25pY1xcY2lyY2xlcG9pbnQvc3JjXFxhcHBcXHBhZ2VzXFxkaXJlY3Rpb25cXGRpcmVjdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RpcmVjdGlvbi9kaXJlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0FDRVI7QUREUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDR1o7QURBSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDRVI7QUREUTtFQUNJLGNBQUE7QUNHWjtBRERRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHWjtBREFRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRVo7QUREWTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUNHaEI7QUREWTtFQUNJLGdCQUFBO0FDR2hCO0FERFk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQ0doQjtBRERZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNHaEI7QURDUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBRENRO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaXJlY3Rpb24vZGlyZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAudXBwZXJfZGl2e1xuICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICNtYXB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubG93ZXJfZGl2e1xuICAgICAgICBoZWlnaHQ6IDQwdmg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaGVhZF9sYmx7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcml2ZXJfZGV0YWlsX2RpdntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGggOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveV9uYW1le1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkcmVzc3tcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0zcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub3JkZXJfZGV0YWlse1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5vcmRlcl9zdGF0dXN7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfSAgIFxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYge1xuICBoZWlnaHQ6IDYwdmg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2ICNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiB7XG4gIGhlaWdodDogNDB2aDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmRyaXZlcl9kZXRhaWxfZGl2IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuZHJpdmVyX2RldGFpbF9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5kcml2ZXJfZGV0YWlsX2RpdiAuYm95X25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuZHJpdmVyX2RldGFpbF9kaXYgLmFkZHJlc3Mge1xuICBjb2xvcjogZ3JheTtcbiAgd2lkdGg6IDgwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmRyaXZlcl9kZXRhaWxfZGl2IGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtM3B4O1xuICB0b3A6IC01cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAub3JkZXJfZGV0YWlsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5vcmRlcl9zdGF0dXMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/direction/direction.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/direction/direction.page.ts ***!
  \***************************************************/
/*! exports provided: DirectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionPage", function() { return DirectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");










let DirectionPage = class DirectionPage {
    constructor(api, util, route, navCtrl, iab, platform, androidPermissions, geolocation, alertController) {
        this.api = api;
        this.util = util;
        this.route = route;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.route.queryParams.subscribe((data) => {
            console.log(data);
            if (data && data.id && data.lat && data.lng && data.who) {
                this.uid = data.id;
                this.orderId = data.orderId;
                this.who = data.who;
                this.orderAt = data.orderAt;
                this.homeLat = data.homeLat;
                this.homeLng = data.homeLng;
                if (this.who === 'driver') {
                    this.driverLat = data.lat;
                    this.driverLng = data.lng;
                    this.homeLat = parseFloat(this.homeLat);
                    this.homeLng = parseFloat(this.homeLng);
                    this.driverLat = parseFloat(this.driverLat);
                    this.driverLng = parseFloat(this.driverLng);
                    const param = {
                        id: this.uid
                    };
                    this.api.post('drivers/getById', param).subscribe((infoss) => {
                        console.log('******************* driver --->>>> driverinfo --->', infoss);
                        if (infoss && infoss.status === 200 && infoss.data && infoss.data.length) {
                            this.driverInfo = infoss.data[0];
                            this.driverLat = parseFloat(infoss.data[0].lat);
                            this.driverLng = parseFloat(infoss.data[0].lng);
                            this.loadMap(this.driverLat, this.driverLng, this.homeLat, this.homeLng);
                        }
                    }, error => {
                        console.log('==>>', error);
                    });
                }
                else {
                    this.storeLat = parseFloat(data.lat);
                    this.storeLng = parseFloat(data.lng);
                    const param = {
                        id: this.uid
                    };
                    this.api.post('stores/getByUid', param).subscribe((data) => {
                        console.log('*******************', data);
                        if (data && data.status === 200 && data.data && data.data.length) {
                            this.storeLat = parseFloat(data.data[0].lat);
                            this.storeLng = parseFloat(data.data[0].lng);
                            this.storeInfo = data.data[0];
                            this.getMyLocation();
                        }
                    }, error => {
                        console.log(error);
                    });
                }
            }
            else {
                this.navCtrl.back();
            }
        });
    }
    callDriver() {
        this.iab.create('tel:' + this.driverInfo.mobile, '_blank');
    }
    callStore() {
        this.iab.create('tel:' + this.storeInfo.mobile, '_blank');
    }
    getMyLocation() {
        this.platform.ready().then(() => {
            if (this.platform.is('android')) {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(result => console.log('Has permission?', result.hasPermission), err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION));
                this.grantRequest();
            }
            else if (this.platform.is('ios')) {
                this.grantRequest();
            }
            else {
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
                    if (resp) {
                        console.log('resp', resp);
                        this.myLat = resp.coords.latitude;
                        this.myLng = resp.coords.longitude;
                        this.loadMap(this.myLat, this.myLng, this.storeLat, this.storeLng);
                    }
                }).catch(error => {
                    console.log(error);
                    this.grantRequest();
                });
                const watch = this.geolocation.watchPosition();
                watch.subscribe((data) => {
                    if (data && data.coords) {
                        console.log('update', data.coords);
                        this.myLat = data.coords.latitude;
                        this.myLng = data.coords.longitude;
                    }
                });
            }
        });
    }
    grantRequest() {
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
            if (resp) {
                console.log('resp 1', resp);
                this.myLat = resp.coords.latitude;
                this.myLng = resp.coords.longitude;
                this.loadMap(this.myLat, this.myLng, this.storeLat, this.storeLng);
            }
        }).catch(error => {
            console.log(error);
            console.log('ASK Permission');
            if (this.platform.is('ios')) {
                this.iOSAlert();
            }
            else {
                this.presentAlertConfirm();
            }
        });
        const watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            if (data && data.coords) {
                console.log('update', data.coords);
                this.myLat = data.coords.latitude;
                this.myLng = data.coords.longitude;
            }
        });
    }
    iOSAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Error',
                subHeader: 'Location error',
                message: 'Please Enable Location Service from settings for best experience',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: 'Please Enable Location Service for best experience',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.askPermission();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    askPermission() {
        this.getMyLocation();
    }
    getDriverLocation(marker, maps) {
        const param = {
            id: this.uid
        };
        this.api.post('drivers/getById', param).subscribe((data) => {
            console.log('******************* driver --->>>> driverinfo --->', data);
            if (data && data.status === 200 && data.data && data.data.length) {
                this.driverLat = parseFloat(data.data[0].lat);
                this.driverLng = parseFloat(data.data[0].lng);
                this.changeMarkerPosition(marker, maps);
            }
        }, error => {
            console.log('==>>', error);
        });
    }
    loadMap(latOri, lngOri, latDest, lngDest) {
        const directionsService = new google.maps.DirectionsService;
        let directionsDisplay = new google.maps.DirectionsRenderer;
        directionsDisplay = new google.maps.DirectionsRenderer();
        const bounds = new google.maps.LatLngBounds;
        const origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
        const destinationA = { lat: latDest, lng: lngDest };
        const maps = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: latOri, lng: lngOri },
            disableDefaultUI: true,
            zoom: 100
        });
        const custPos = new google.maps.LatLng(latOri, lngOri);
        const restPos = new google.maps.LatLng(latDest, lngDest);
        const logo = {
            url: 'assets/marker.png',
            scaledSize: new google.maps.Size(50, 50),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0) // anchor
        };
        const marker = new google.maps.Marker({
            map: maps,
            position: custPos,
            animation: google.maps.Animation.DROP,
            icon: logo,
        });
        const markerCust = new google.maps.Marker({
            map: maps,
            position: restPos,
            animation: google.maps.Animation.DROP,
        });
        marker.setMap(maps);
        markerCust.setMap(maps);
        directionsDisplay.setMap(maps);
        // directionsDisplay.setOptions({ suppressMarkers: true });
        directionsDisplay.setOptions({
            polylineOptions: {
                strokeWeight: 4,
                strokeOpacity: 1,
                strokeColor: '#44C261'
            },
            suppressMarkers: true
        });
        const geocoder = new google.maps.Geocoder;
        const service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
            origins: [origin1],
            destinations: [destinationA],
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            if (status !== 'OK') {
                alert('Error was: ' + status);
            }
            else {
                const originList = response.originAddresses;
                const destinationList = response.destinationAddresses;
                const showGeocodedAddressOnMap = function (asDestination) {
                    return function (results, status) {
                        if (status === 'OK') {
                            maps.fitBounds(bounds.extend(results[0].geometry.location));
                        }
                        else {
                            alert('Geocode was not successful due to: ' + status);
                        }
                    };
                };
                directionsService.route({
                    origin: origin1,
                    destination: destinationA,
                    travelMode: 'DRIVING'
                }, function (response, status) {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(response);
                    }
                    else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
                for (let i = 0; i < originList.length; i++) {
                    const results = response.rows[i].elements;
                    geocoder.geocode({ 'address': originList[i] }, showGeocodedAddressOnMap(false));
                    for (let j = 0; j < results.length; j++) {
                        geocoder.geocode({ 'address': destinationList[j] }, showGeocodedAddressOnMap(true));
                    }
                }
            }
        });
        this.interval = setInterval(() => {
            if (this.who === 'driver') {
                this.getDriverLocation(marker, maps);
            }
            else {
                console.log('update->');
                this.changeMyMarker(marker, maps);
            }
        }, 12000);
    }
    ionViewDidLeave() {
        console.log('leaved');
        clearInterval(this.interval);
    }
    changeMarkerPosition(marker, map) {
        const latlng = new google.maps.LatLng(this.driverLat, this.driverLng);
        map.setCenter(latlng);
        marker.setPosition(latlng);
    }
    changeMyMarker(marker, map) {
        const latlng = new google.maps.LatLng(this.myLat, this.myLng);
        map.setCenter(latlng);
        marker.setPosition(latlng);
    }
    ngOnInit() {
    }
};
DirectionPage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DirectionPage.prototype, "mapElement", void 0);
DirectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-direction',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./direction.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/direction/direction.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./direction.page.scss */ "./src/app/pages/direction/direction.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__["AndroidPermissions"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], DirectionPage);



/***/ })

}]);
//# sourceMappingURL=pages-direction-direction-module-es2015.js.map