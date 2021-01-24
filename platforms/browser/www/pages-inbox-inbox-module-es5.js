function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inbox-inbox-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbox/inbox.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbox/inbox.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInboxInboxPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{name}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n\n    <span *ngFor=\"let item of messages\">\n      <div class=\"left_div\" *ngIf=\"item.from_id != uid\">\n        <div class=\"inner_div\">\n          <div class=\"msg_div\">\n            <ion-label>{{item.message}}</ion-label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"right_div\" *ngIf=\"item.from_id == uid\">\n        <div class=\"inner_div\">\n          <div class=\"msg_div\">\n            <ion-label>{{item.message}}</ion-label>\n          </div>\n        </div>\n\n      </div>\n    </span>\n  </div>\n  <div *ngIf=\"!yourMessage && loaded\" style=\"display: flex;flex-direction: row-reverse;padding: 20px;\">\n    <ion-spinner name=\"dots\"></ion-spinner>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class=\"footer_div\">\n    <ion-input type=\"text\" [(ngModel)]=\"msg\" (keyup.enter)=\"sendMessage()\"\n      [placeholder]=\"util.getString('Type Here..')\"></ion-input>\n    <div class=\"chat_div\" (click)=\"sendMessage()\">\n      <ion-icon name=\"navigate\"></ion-icon>\n    </div>\n  </div>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/inbox/inbox-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/inbox/inbox-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: InboxPageRoutingModule */

  /***/
  function srcAppPagesInboxInboxRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxPageRoutingModule", function () {
      return InboxPageRoutingModule;
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


    var _inbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inbox.page */
    "./src/app/pages/inbox/inbox.page.ts");
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
      component: _inbox_page__WEBPACK_IMPORTED_MODULE_3__["InboxPage"]
    }];

    var InboxPageRoutingModule = function InboxPageRoutingModule() {
      _classCallCheck(this, InboxPageRoutingModule);
    };

    InboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InboxPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inbox/inbox.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/inbox/inbox.module.ts ***!
    \*********************************************/

  /*! exports provided: InboxPageModule */

  /***/
  function srcAppPagesInboxInboxModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxPageModule", function () {
      return InboxPageModule;
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


    var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inbox-routing.module */
    "./src/app/pages/inbox/inbox-routing.module.ts");
    /* harmony import */


    var _inbox_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inbox.page */
    "./src/app/pages/inbox/inbox.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var InboxPageModule = function InboxPageModule() {
      _classCallCheck(this, InboxPageModule);
    };

    InboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inbox_routing_module__WEBPACK_IMPORTED_MODULE_5__["InboxPageRoutingModule"]],
      declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_6__["InboxPage"]]
    })], InboxPageModule);
    /***/
  },

  /***/
  "./src/app/pages/inbox/inbox.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/inbox/inbox.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInboxInboxPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.header_div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  height: 65px;\n  border-bottom: 1px solid lightgray;\n  background-color: var(--ion-color-primary);\n}\n.header_div .first_div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: white;\n  font-weight: bold;\n}\n.header_div .back_image {\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n  margin-right: 10px;\n}\n.header_div .username {\n  font-weight: 600;\n  color: white;\n}\n.header_div ion-icon {\n  color: white;\n}\n.main_content_div {\n  width: 100%;\n  padding: 15px;\n}\n.main_content_div .back_image {\n  width: 45px;\n  height: 45px;\n  border-radius: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 45px;\n}\n.main_content_div .left_div {\n  width: 100%;\n  display: flex;\n  margin-bottom: 15px;\n}\n.main_content_div .left_div .inner_div {\n  width: 70%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n.main_content_div .left_div .msg_div {\n  background: #F0EFF5;\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 25px;\n  margin-left: 5px;\n}\n.main_content_div .right_div {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  justify-content: flex-end;\n}\n.main_content_div .right_div .inner_div {\n  width: 70%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.main_content_div .right_div .msg_div {\n  background: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n  padding: 10px 15px;\n  border-radius: 25px;\n  margin-right: 5px;\n  color: white;\n}\nion-footer .footer_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n}\nion-footer ion-input {\n  border-radius: 25px;\n  border: 1px solid lightgray;\n  --padding-start: 8px;\n}\nion-footer .chat_div {\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  height: 35px;\n  width: 35px;\n  position: relative;\n  margin-left: 10px;\n}\nion-footer .chat_div ion-icon {\n  color: var(--ion-color-primary);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-55%, -45%);\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5ib3gvaW5ib3gucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbmJveC9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXGluYm94XFxpbmJveC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0FERUo7QUNBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FERVI7QUNDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURDUjtBQ0VJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FEQVI7QUNFSTtFQUNJLFlBQUE7QURBUjtBQ0dBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QURBSjtBQ0VJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QURBUjtBQ0dJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRERSO0FDR1E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUREWjtBQ0lRO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QURGWjtBQ0tJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FESFI7QUNNUTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBREpaO0FDT1E7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QURMWjtBQ1VJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRFBSO0FDU0k7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QURQUjtBQ1NJO0VBQ0ksa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRFBSO0FDUVE7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUROWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luYm94L2luYm94LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uaGVhZGVyX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmhlYWRlcl9kaXYgLmZpcnN0X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZGVyX2RpdiAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaGVhZGVyX2RpdiAudXNlcm5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogd2hpdGU7XG59XG4uaGVhZGVyX2RpdiBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDQ1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGVmdF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sZWZ0X2RpdiAuaW5uZXJfZGl2IHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxlZnRfZGl2IC5tc2dfZGl2IHtcbiAgYmFja2dyb3VuZDogI0YwRUZGNTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJpZ2h0X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJpZ2h0X2RpdiAuaW5uZXJfZGl2IHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yaWdodF9kaXYgLm1zZ19kaXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWZvb3RlciAuZm9vdGVyX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuaW9uLWZvb3RlciBpb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xufVxuaW9uLWZvb3RlciAuY2hhdF9kaXYge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlvbi1mb290ZXIgLmNoYXRfZGl2IGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTUlLCAtNDUlKTtcbiAgZm9udC1zaXplOiAyMnB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4uaGVhZGVyX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgLmZpcnN0X2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBtaW4td2lkdGg6IDQ1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLnVzZXJuYW1le1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgIC5iYWNrX2ltYWdle1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG1pbi13aWR0aDogNDVweDtcbiAgICB9XG5cbiAgICAubGVmdF9kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgICAgIC5pbm5lcl9kaXZ7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubXNnX2RpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGMEVGRjU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG5cbiAgICAgICAgLmlubmVyX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAubXNnX2RpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWZvb3RlcntcbiAgICAuZm9vdGVyX2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgfVxuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICB9XG4gICAgLmNoYXRfZGl2e1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTU1JSwtNDUlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/inbox/inbox.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/inbox/inbox.page.ts ***!
    \*******************************************/

  /*! exports provided: InboxPage */

  /***/
  function srcAppPagesInboxInboxPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InboxPage", function () {
      return InboxPage;
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


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var InboxPage = /*#__PURE__*/function () {
      function InboxPage(route, navCtrl, api, util) {
        var _this = this;

        _classCallCheck(this, InboxPage);

        this.route = route;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.msg = '';
        this.messages = [];
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id && data.name) {
            _this.uid = data.uid;
            _this.id = data.id;
            _this.loaded = false;
            _this.name = data.name;

            _this.getChats();

            _this.interval = setInterval(function () {
              console.log('calling in interval');

              _this.getChats();
            }, 12000);
          } else {
            _this.navCtrl.back();
          }
        });
      }

      _createClass(InboxPage, [{
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          console.log('leaae');
          clearInterval(this.interval);
        } // ScrollToBottom() {
        // }

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getChats",
        value: function getChats() {
          var _this2 = this;

          // store _ opponent
          var param = {
            id: this.id + '_' + this.uid,
            oid: this.id
          };
          this.api.post('chats/getById', param).subscribe(function (data) {
            console.log(data);
            _this2.loaded = true;
            _this2.yourMessage = true;

            if (data && data.status === 200) {
              _this2.messages = data.data;

              _this2.myContent.scrollToBottom(300);
            }
          }, function (error) {
            console.log(error);
            _this2.loaded = true;
            _this2.yourMessage = true;

            _this2.util.errorToast(_this2.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this3 = this;

          // store to opponent
          console.log(this.msg);

          if (!this.msg || this.msg === '') {
            return false;
          }

          var msg = this.msg;
          this.msg = '';
          var param = {
            room_id: this.id,
            uid: this.id + '_' + this.uid,
            from_id: this.uid,
            message: msg,
            message_type: 'users',
            status: 1,
            timestamp: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm:ss')
          };
          this.myContent.scrollToBottom(300);
          this.yourMessage = false;
          this.api.post('chats/save', param).subscribe(function (data) {
            console.log(data);

            if (data && data.status === 200) {
              _this3.getChats();
            } else {
              _this3.yourMessage = true;
            }
          }, function (error) {
            console.log(error);
            _this3.yourMessage = true;

            _this3.util.errorToast(_this3.util.getString('Something went wrong'));
          });
        }
      }]);

      return InboxPage;
    }();

    InboxPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], {
      read: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"],
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])], InboxPage.prototype, "myContent", void 0);
    InboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inbox',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inbox.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inbox/inbox.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inbox.page.scss */
      "./src/app/pages/inbox/inbox.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])], InboxPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-inbox-inbox-module-es5.js.map