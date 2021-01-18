function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"], {
  /***/
  "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js ***!
    \*********************************************************************************************/

  /*! exports provided: NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, NgxIonicImageViewerModule, NgxIonicImageViewerService, ViewerModalComponent */

  /***/
  function node_modulesNgxIonicImageViewer__ivy_ngcc__Fesm2015NgxIonicImageViewerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerComponent", function () {
      return NgxIonicImageViewerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerDirective", function () {
      return NgxIonicImageViewerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerModule", function () {
      return NgxIonicImageViewerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxIonicImageViewerService", function () {
      return NgxIonicImageViewerService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewerModalComponent", function () {
      return ViewerModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["sliderRef"];

    var _c1 = function _c1(a0) {
      return {
        "no-title": a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "no-text": a0
      };
    };

    var NgxIonicImageViewerService = function NgxIonicImageViewerService() {
      _classCallCheck(this, NgxIonicImageViewerService);
    };

    NgxIonicImageViewerService.ɵfac = function NgxIonicImageViewerService_Factory(t) {
      return new (t || NgxIonicImageViewerService)();
    };

    NgxIonicImageViewerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NgxIonicImageViewerService,
      factory: NgxIonicImageViewerService.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    NgxIonicImageViewerService.ctorParameters = function () {
      return [];
    };
    /** @nocollapse */


    NgxIonicImageViewerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgxIonicImageViewerService_Factory() {
        return new NgxIonicImageViewerService();
      },
      token: NgxIonicImageViewerService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxIonicImageViewerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/viewer-modal/viewer-modal.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ViewerModalComponent = /*#__PURE__*/function () {
      /**
       * @param {?} modalController
       */
      function ViewerModalComponent(modalController) {
        _classCallCheck(this, ViewerModalComponent);

        this.modalController = modalController; // tslint:disable: no-inferrable-types

        this.alt = '';
        this.scheme = 'auto';
        this.slideOptions = {};
        this.srcFallback = '';
        this.srcHighRes = '';
        this.swipeToClose = true;
        this.text = '';
        this.title = '';
        this.titleSize = ''; // tslint:enable: no-inferrable-types

        this.defaultSlideOptions = {
          centeredSlides: true,
          passiveListeners: false,
          zoom: {
            enabled: true
          }
        };
        this.options = {};
        this.swipeState = {
          phase: 'init',
          direction: 'none',
          swipeType: 'none',
          startX: 0,
          startY: 0,
          distance: 0,
          distanceX: 0,
          distanceY: 0,
          threshold: 150,
          // required min distance traveled to be considered swipe
          restraint: 100,
          // maximum distance allowed at the same time in perpendicular direction
          allowedTime: 500,
          // maximum time allowed to travel that distance
          elapsedTime: 0,
          startTime: 0
        };
      }
      /**
       * @return {?}
       */


      _createClass(ViewerModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var swiper;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.options = Object.assign({}, this.defaultSlideOptions, this.slideOptions);
                    this.src = this.srcHighRes || this.src;
                    this.setStyle();
                    this.setScheme(this.scheme);
                    this.initSwipeToClose(this.swipeToClose);
                    /**
                     * Current Workaround
                     * See reported bug: https://github.com/ionic-team/ionic/issues/19638#issuecomment-584828315
                     * Hint: Comment in '<ion-slide>' in component
                     * @type {?}
                     */

                    _context.next = 7;
                    return this.slides.getSwiper();

                  case 7:
                    swiper = _context.sent;
                    swiper.appendSlide("<ion-slide><img alt=\"".concat(this.alt, "\" src=\"").concat(this.src, "\" onerror=\"this.src='").concat(this.srcFallback, "'\"/></ion-slide>"));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "setStyle",
        value: function setStyle() {
          /** @type {?} */
          var el = document.querySelector('.ion-img-viewer');
          el.style.setProperty('--height', '100%');
          el.style.setProperty('--width', '100%');
          el.style.setProperty('--border-radius', '0');
        }
        /**
         * @param {?} scheme
         * @return {?}
         */

      }, {
        key: "setScheme",
        value: function setScheme(scheme) {
          if (scheme === 'auto') {
            return;
          }
          /** @type {?} */


          var el = document.querySelector('.ion-img-viewer');

          if (this.scheme === 'light') {
            el.style.setProperty('--ion-background-color', '#ffffff');
            el.style.setProperty('--ion-background-color-rgb', '255, 255, 255');
            el.style.setProperty('--ion-text-color', '#000');
            el.style.setProperty('--ion-text-color-rgb', '0,0,0');
          }

          if (this.scheme === 'dark') {
            if (el.classList.contains('ios')) {
              el.style.setProperty('--ion-background-color', '#000000');
              el.style.setProperty('--ion-background-color-rgb', '0, 0, 0');
            } else {
              el.style.setProperty('--ion-background-color', '#121212');
              el.style.setProperty('--ion-background-color-rgb', '18,18,18');
            }

            el.style.setProperty('--ion-text-color', '#ffffff');
            el.style.setProperty('--ion-text-color-rgb', '255,255,255');
          }
        }
        /**
         * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
         * @param {?=} isActive
         * @return {?}
         */

      }, {
        key: "initSwipeToClose",
        value: function initSwipeToClose() {
          var _this = this;

          var isActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (!isActive) {
            return;
          }
          /** @type {?} */


          var el = document.querySelector('ion-modal');
          el.addEventListener('mousedown',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeStart(event);
          }, true);
          el.addEventListener('mousemove',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeMove(event);
          }, true);
          el.addEventListener('mouseup',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeEnd(event);
          }, true);
          el.addEventListener('touchstart',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeStart(event);
          }, true);
          el.addEventListener('touchmove',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeMove(event);
          }, true);
          el.addEventListener('touchend',
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this.swipeEnd(event);
          }, true);
          this.modalController.getTop().then(
          /**
          * @param {?} modal
          * @return {?}
          */
          function (modal) {
            modal.onWillDismiss().then(
            /**
            * @return {?}
            */
            function () {
              document.removeEventListener('mousedown', _this.swipeStart, true);
              document.removeEventListener('mousemove', _this.swipeMove, true);
              document.removeEventListener('mouseup', _this.swipeMove, true);
              document.removeEventListener('touchstart', _this.swipeStart, true);
              document.removeEventListener('touchmove', _this.swipeMove, true);
              document.removeEventListener('touchend', _this.swipeMove, true);
            });
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "swipeStart",
        value: function swipeStart(event) {
          var _ref = event.type === 'touchstart' ? event.changedTouches[0] : event,
              pageX = _ref.pageX,
              pageY = _ref.pageY;

          this.swipeState = Object.assign({}, this.swipeState, {
            phase: 'start',
            direction: 'none',
            distance: 0,
            startX: pageX,
            startY: pageY,
            startTime: new Date().getTime()
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "swipeMove",
        value: function swipeMove(event) {
          if (this.swipeState.phase === 'none') {
            return;
          }

          var _ref2 = event.type === 'touchmove' ? event.changedTouches[0] : event,
              pageX = _ref2.pageX,
              pageY = _ref2.pageY; // get horizontal dist traveled by finger while in contact with surface

          /** @type {?} */


          var distanceX = pageX - this.swipeState.startX; // get vertical dist traveled by finger while in contact with surface

          /** @type {?} */

          var distanceY = pageY - this.swipeState.startY;
          /** @type {?} */

          var direction;
          /** @type {?} */

          var distance;

          if (Math.abs(distanceX) > Math.abs(distanceY)) {
            // if distance traveled horizontally is greater than vertically, consider this a horizontal swipe
            direction = distanceX < 0 ? 'left' : 'right';
            distance = distanceX;
          } else {
            // else consider this a vertical swipe
            direction = distanceY < 0 ? 'up' : 'down';
            distance = distanceY;
          }

          this.swipeState = Object.assign({}, this.swipeState, {
            phase: 'move',
            direction: direction,
            distance: distance,
            distanceX: distanceX,
            distanceY: distanceY
          });
          event.preventDefault();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "swipeEnd",
        value: function swipeEnd(event) {
          if (this.swipeState.phase === 'none') {
            return;
          }

          var _this$swipeState = this.swipeState,
              allowedTime = _this$swipeState.allowedTime,
              direction = _this$swipeState.direction,
              restraint = _this$swipeState.restraint,
              startTime = _this$swipeState.startTime,
              threshold = _this$swipeState.threshold,
              distanceX = _this$swipeState.distanceX,
              distanceY = _this$swipeState.distanceY;
          /** @type {?} */

          var swipeType;
          /** @type {?} */

          var elapsedTime = new Date().getTime() - startTime;

          if (elapsedTime <= allowedTime) {
            // first condition for a swipe met
            if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
              // 2nd condition for horizontal swipe met
              swipeType = direction; // set swipeType to either "left" or "right"
            } else if (Math.abs(distanceY) >= threshold && Math.abs(distanceX) <= restraint) {
              // 2nd condition for vertical swipe met
              swipeType = direction; // set swipeType to either "top" or "down"
            }
          }

          this.swipeState = Object.assign({}, this.swipeState, {
            phase: 'end',
            swipeType: swipeType
          });

          if (swipeType === 'down') {
            return this.closeModal();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalController.dismiss();
        }
      }]);

      return ViewerModalComponent;
    }();

    ViewerModalComponent.ɵfac = function ViewerModalComponent_Factory(t) {
      return new (t || ViewerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
    };

    ViewerModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewerModalComponent,
      selectors: [["ion-viewer-modal"]],
      viewQuery: function ViewerModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slides = _t.first);
        }
      },
      inputs: {
        alt: "alt",
        scheme: "scheme",
        slideOptions: "slideOptions",
        srcFallback: "srcFallback",
        srcHighRes: "srcHighRes",
        swipeToClose: "swipeToClose",
        text: "text",
        title: "title",
        titleSize: "titleSize",
        src: "src"
      },
      decls: 14,
      vars: 11,
      consts: [[3, "ngClass"], ["slot", "primary"], [3, "click"], ["slot", "icon-only", "name", "close"], [3, "size"], [3, "forceOverscroll"], [3, "options"], ["sliderRef", ""], [1, "ion-text-center"]],
      template: function ViewerModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-buttons", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewerModalComponent_Template_ion_button_click_3_listener() {
            return ctx.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ion-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ion-slides", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-toolbar", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.title.length <= 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.titleSize);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forceOverscroll", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx.text.length <= 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonText"]],
      styles: ["ion-slides[_ngcontent-%COMP%]{--height:100%;height:100%}ion-toolbar[_ngcontent-%COMP%]{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header[_ngcontent-%COMP%]{opacity:1;position:absolute}ion-header.no-title[_ngcontent-%COMP%]:after{content:none}ion-header.no-title[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer[_ngcontent-%COMP%]{position:absolute;bottom:0}ion-footer.no-text[_ngcontent-%COMP%]:before{content:none}ion-footer.no-text[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]
    });
    /** @nocollapse */

    ViewerModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ViewerModalComponent.propDecorators = {
      alt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scheme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      src: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcFallback: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcHighRes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      swipeToClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['sliderRef', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewerModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ion-viewer-modal',
          template: "<ion-header [ngClass]=\"{ 'no-title': title.length <= 0 }\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title [size]=\"titleSize\">{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [forceOverscroll]=\"false\">\n  <ion-slides [options]=\"options\" #sliderRef>\n    <!-- <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img [alt]=\"this.alt\" [src]=\"this.src\" (error)=\"onError($event)\" />\n      </div>\n    </ion-slide> -->\n  </ion-slides>\n</ion-content>\n\n<ion-footer [ngClass]=\"{ 'no-text': text.length <= 0 }\">\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-text>{{ text }}</ion-text>\n  </ion-toolbar>\n</ion-footer>\n",
          styles: ["ion-slides{--height:100%;height:100%}ion-toolbar{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header{opacity:1;position:absolute}ion-header.no-title:after{content:none}ion-header.no-title ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer{position:absolute;bottom:0}ion-footer.no-text:before{content:none}ion-footer.no-text ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      }, {
        alt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcFallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcHighRes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        swipeToClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sliderRef', {
            "static": true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgxIonicImageViewerComponent = /*#__PURE__*/function () {
      /**
       * @param {?} modalController
       */
      function NgxIonicImageViewerComponent(modalController) {
        _classCallCheck(this, NgxIonicImageViewerComponent);

        this.modalController = modalController;
      }
      /**
       * @param {?} src
       * @param {?=} srcFallback
       * @param {?=} srcHighRes
       * @param {?=} title
       * @param {?=} titleSize
       * @param {?=} text
       * @param {?=} scheme
       * @param {?=} slideOptions
       * @param {?=} swipeToClose
       * @return {?}
       */


      _createClass(NgxIonicImageViewerComponent, [{
        key: "viewImage",
        value: function viewImage(src) {
          var srcFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var srcHighRes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          var titleSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
          var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
          var scheme = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'auto';
          var slideOptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
          var swipeToClose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: ViewerModalComponent,
                      componentProps: {
                        src: src,
                        srcFallback: srcFallback,
                        srcHighRes: srcHighRes,
                        title: title,
                        titleSize: titleSize,
                        text: text,
                        scheme: scheme,
                        slideOptions: slideOptions,
                        swipeToClose: swipeToClose
                      },
                      cssClass: this.cssClass instanceof Array ? ['ion-img-viewer'].concat(_toConsumableArray(this.cssClass)) : ['ion-img-viewer', this.cssClass],
                      keyboardClose: true,
                      showBackdrop: true
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NgxIonicImageViewerComponent;
    }();

    NgxIonicImageViewerComponent.ɵfac = function NgxIonicImageViewerComponent_Factory(t) {
      return new (t || NgxIonicImageViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
    };

    NgxIonicImageViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NgxIonicImageViewerComponent,
      selectors: [["ion-img-viewer"]],
      inputs: {
        alt: "alt",
        cssClass: "cssClass",
        scheme: "scheme",
        slideOptions: "slideOptions",
        src: "src",
        srcFallback: "srcFallback",
        srcHighRes: "srcHighRes",
        swipeToClose: "swipeToClose",
        text: "text",
        title: "title",
        titleSize: "titleSize"
      },
      decls: 1,
      vars: 2,
      consts: [[3, "alt", "src", "click", "error"]],
      template: function NgxIonicImageViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxIonicImageViewerComponent_Template_img_click_0_listener() {
            return ctx.viewImage(ctx.src, ctx.srcFallback, ctx.srcHighRes, ctx.title, ctx.titleSize, ctx.text, ctx.scheme, ctx.slideOptions, ctx.swipeToClose);
          })("error", function NgxIonicImageViewerComponent_Template_img_error_0_listener() {
            return ctx.src = ctx.srcFallback;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx.alt)("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["[_nghost-%COMP%] {\n        display: block;\n      }"]
    });
    /** @nocollapse */

    NgxIonicImageViewerComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    NgxIonicImageViewerComponent.propDecorators = {
      alt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      cssClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scheme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      src: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcFallback: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcHighRes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      swipeToClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxIonicImageViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ion-img-viewer',
          template: "<img\n  [alt]=\"alt\"\n  [src]=\"src\"\n  (click)=\"viewImage(src, srcFallback, srcHighRes, title, titleSize, text, scheme, slideOptions, swipeToClose)\"\n  (error)=\"src = srcFallback\"\n/>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated,
          styles: ["\n      :host {\n        display: block;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      }, {
        alt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcFallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcHighRes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        swipeToClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgxIonicImageViewerDirective = /*#__PURE__*/function () {
      /**
       * @param {?} el
       * @param {?} renderer
       * @param {?} modalController
       */
      function NgxIonicImageViewerDirective(el, renderer, modalController) {
        _classCallCheck(this, NgxIonicImageViewerDirective);

        this.el = el;
        this.renderer = renderer;
        this.modalController = modalController;
      }
      /**
       * @return {?}
       */


      _createClass(NgxIonicImageViewerDirective, [{
        key: "onClick",
        value: function onClick() {
          this.viewImage(this.src, this.srcFallback, this.srcHighRes, this.title, this.titleSize, this.text, this.scheme, this.slideOptions, this.swipeToClose);
        }
        /**
         * @param {?} error
         * @return {?}
         */

      }, {
        key: "onError",
        value: function onError(error) {
          if (this.src !== this.el.nativeElement.src) {
            this.src = this.el.nativeElement.src;
          }

          if (this.srcFallback) {
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.srcFallback);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.el.nativeElement.hasAttribute('src')) {
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
          }
        }
        /**
         * @param {?} src
         * @param {?=} srcFallback
         * @param {?=} srcHighRes
         * @param {?=} title
         * @param {?=} titleSize
         * @param {?=} text
         * @param {?=} scheme
         * @param {?=} slideOptions
         * @param {?=} swipeToClose
         * @return {?}
         */

      }, {
        key: "viewImage",
        value: function viewImage(src) {
          var srcFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var srcHighRes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
          var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
          var titleSize = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
          var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
          var scheme = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'auto';
          var slideOptions = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};
          var swipeToClose = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: ViewerModalComponent,
                      componentProps: {
                        src: src,
                        srcFallback: srcFallback,
                        srcHighRes: srcHighRes,
                        title: title,
                        titleSize: titleSize,
                        text: text,
                        scheme: scheme,
                        slideOptions: slideOptions,
                        swipeToClose: swipeToClose
                      },
                      cssClass: this.cssClass instanceof Array ? ['ion-img-viewer'].concat(_toConsumableArray(this.cssClass)) : ['ion-img-viewer', this.cssClass],
                      keyboardClose: true,
                      showBackdrop: true
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return NgxIonicImageViewerDirective;
    }();

    NgxIonicImageViewerDirective.ɵfac = function NgxIonicImageViewerDirective_Factory(t) {
      return new (t || NgxIonicImageViewerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]));
    };

    NgxIonicImageViewerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: NgxIonicImageViewerDirective,
      selectors: [["", "ionImgViewer", ""]],
      hostBindings: function NgxIonicImageViewerDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxIonicImageViewerDirective_click_HostBindingHandler() {
            return ctx.onClick();
          })("error", function NgxIonicImageViewerDirective_error_HostBindingHandler($event) {
            return ctx.onError($event);
          });
        }
      },
      inputs: {
        src: "src",
        cssClass: "cssClass",
        scheme: "scheme",
        slideOptions: "slideOptions",
        srcFallback: "srcFallback",
        srcHighRes: "srcHighRes",
        swipeToClose: "swipeToClose",
        text: "text",
        title: "title",
        titleSize: "titleSize"
      }
    });
    /** @nocollapse */

    NgxIonicImageViewerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    NgxIonicImageViewerDirective.propDecorators = {
      cssClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scheme: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slideOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      src: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcFallback: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      srcHighRes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      swipeToClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['click']
      }],
      onError: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['error', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxIonicImageViewerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[ionImgViewer]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }],
        onError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['error', ['$event']]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scheme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        slideOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcFallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcHighRes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        swipeToClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        titleSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-ionic-image-viewer.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgxIonicImageViewerModule = function NgxIonicImageViewerModule() {
      _classCallCheck(this, NgxIonicImageViewerModule);
    };

    NgxIonicImageViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NgxIonicImageViewerModule
    });
    NgxIonicImageViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NgxIonicImageViewerModule_Factory(t) {
        return new (t || NgxIonicImageViewerModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxIonicImageViewerModule, {
        declarations: function declarations() {
          return [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]];
        },
        exports: function exports() {
          return [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxIonicImageViewerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
          entryComponents: [ViewerModalComponent],
          exports: [NgxIonicImageViewerComponent, NgxIonicImageViewerDirective, ViewerModalComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: ngx-ionic-image-viewer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-ionic-image-viewer.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductProductPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title> {{name}} </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"loaded && name\">\n      <ion-button (click)=\"onFav()\">\n        <ion-icon slot=\"icon-only\" [name]=\"util.favIds.includes(id)?'heart': 'heart-outline'\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"slider_div\" *ngIf=\"loaded && name\">\n    <ion-slides [options]=\"slideOpts\" pager>\n      <ion-slide *ngFor=\"let item of gallery\">\n        <div class=\"back_image\" (click)=\"openViewer(api.mediaURL+item)\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+item+'),url(assets/imgs/user.png)'}\">\n          <div class=\"percent\" *ngIf=\"this.discount !== '0'\"> {{this.discount}}% </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded && name\">\n\n\n    <div class=\"detail_div\">\n      <ion-label class=\"pro_name\">{{name}}</ion-label>\n      <ion-label class=\"itemsKind\" *ngIf=\"size ==='0'\">\n        <span *ngIf=\"have_gram === '1'\"> {{gram}} grams </span>\n        <span *ngIf=\"have_kg === '1'\"> {{kg}} kg </span>\n        <span *ngIf=\"have_liter ==='1'\"> {{liter}} ltr </span>\n        <span *ngIf=\"have_ml ==='1'\"> {{ml}} ml</span>\n        <span *ngIf=\"have_pcs === '1'\"> {{pcs}} pcs </span>\n      </ion-label>\n\n      <div class=\"ratingItems ion-activatable\" (click)=\"productRating()\">\n        <ion-icon [name]=\"rate >= 1 ? 'star':'star'\" [color]=\"rate >= 1 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"rate >= 2 ? 'star':'star'\" [color]=\"rate >= 2 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"rate >= 3 ? 'star':'star'\" [color]=\"rate >= 3 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"rate >= 4 ? 'star':'star'\" [color]=\"rate >= 4 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"rate >= 5 ? 'star':'star'\" [color]=\"rate >= 5 ? 'warning':'medium'\">\n        </ion-icon>\n        ({{totalRating}} {{util.getString('Rating')}})\n        <ion-ripple-effect></ion-ripple-effect>\n      </div>\n      <div class=\"storeName ion-activatable\" (click)=\"gotoStore()\" *ngIf=\"storeName\">\n        {{storeName}}\n      </div>\n      <div *ngIf=\"size ==='1'\" class=\"variant\" (click)=\"variants()\">\n        <ion-label class=\"selecter ion-activatable\">\n          <span>\n            <span> {{\n                            variations && variations[0] && variations[0].items[variant] &&\n                            variations[0].items[variant].title ?\n                            variations[0].items[variant].title : ''}} </span>\n            -\n            <span *ngIf=\"util.cside ==='left'\" class=\"price_lbl\"> {{util.currecny}}\n              <span class=\"original\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                     variations[0].items[variant].discount\">\n                {{ variations && variations[0] && variations[0].items[variant] &&\n                                     variations[0].items[variant].price ?\n                                     variations[0].items[variant].price : 0}}\n              </span>\n              <span class=\"sell\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                    variations[0].items[variant].discount\"> {{variations && variations[0] && variations[0].items[variant] &&\n                                    variations[0].items[variant].discount ?\n                                    variations[0].items[variant].discount : 0}}\n              </span>\n              <span\n                *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                    variations[0].items[variant].discount === 0 && !variations[0].items[variant].discount\">\n                {{ variations && variations[0] && variations[0].items[variant] &&\n                                     variations[0].items[variant].price ?\n                                     variations[0].items[variant].price : 0}}\n              </span>\n\n            </span>\n            <span *ngIf=\"util.cside ==='right'\">\n              <span class=\"original\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                      variations[0].items[variant].discount\">\n                {{ variations && variations[0] && variations[0].items[variant] &&\n                                      variations[0].items[variant].price ?\n                                      variations[0].items[variant].price : 0}}\n              </span>\n              <span class=\"sell\" *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                    variations[0].items[variant].discount\"> {{variations && variations[0] && variations[0].items[variant] &&\n                                    variations[0].items[variant].discount ?\n                                    variations[0].items[variant].discount : 0}}\n              </span>\n              <span\n                *ngIf=\"variations && variations[0] && variations[0].items[variant] &&\n                                      variations[0].items[variant].discount === 0 && !variations[0].items[variant].discount\">\n                {{ variations && variations[0] && variations[0].items[variant] &&\n                                      variations[0].items[variant].price ?\n                                      variations[0].items[variant].price : 0}}\n              </span>\n              {{util.currecny}}\n            </span>\n          </span>\n          <ion-icon slot=\"start\" name=\"caret-down-outline\"></ion-icon>\n          <ion-ripple-effect type=\"bounded\"></ion-ripple-effect>\n        </ion-label>\n      </div>\n      <div class=\"small_flex_div\">\n\n        <div class=\"left\">\n          <img src=\"assets/imgs/veg.png\" *ngIf=\"veg\">\n          <img src=\"assets/imgs/non-veg.png\" *ngIf=\"!veg\">\n          <div *ngIf=\"size ==='0'\">\n            <ion-label class=\"price_lbl\" *ngIf=\"this.discount === '0' && util.cside ==='left'\"> {{util.currecny}}\n              {{this.realPrice}} </ion-label>\n            <ion-label class=\"price_lbl\" *ngIf=\"this.discount === '0' && util.cside ==='right'\">{{this.realPrice}}\n              {{util.currecny}}</ion-label>\n            <ion-label class=\"price_lbl\" *ngIf=\"this.discount !== '0'\">\n              <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{this.realPrice}} </span>\n              <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{this.sellPrice}} </span>\n              <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{this.realPrice}} {{util.currecny}}</span>\n              <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{this.sellPrice}} {{util.currecny}}</span>\n            </ion-label>\n          </div>\n        </div>\n\n        <div class=\"addBtn\" *ngIf=\"!cart.itemId.includes(id) && quantiy <= 0 && status ==='1' && in_stoke ==='1'\">\n          <div class=\"ion-activatable ripple-parent\" (click)=\"addToCart()\">\n            {{util.getString('Add')}}\n            <ion-ripple-effect></ion-ripple-effect>\n          </div>\n        </div>\n\n        <div class=\"abs_add\" *ngIf=\"cart.itemId.includes(id)\">\n          <img src=\"assets/imgs/remove.png\" (click)=\"remove()\">\n          <ion-label>{{quantiy}}</ion-label>\n          <img src=\"assets/imgs/add.png\" (click)=\"add()\">\n        </div>\n      </div>\n\n      <div class=\"pro_desc_div\" *ngIf=\"description\">\n        <ion-label class=\"head_lbl\"> {{util.getString('Description')}} </ion-label>\n        <ion-label class=\"light_lbl\"> {{description}} </ion-label>\n      </div>\n\n      <div class=\"pro_desc_div\" *ngIf=\"key_features\">\n        <ion-label class=\"head_lbl\"> {{util.getString('Highlight')}} </ion-label>\n        <ion-label class=\"light_lbl\"><span> {{util.getString('Key Features')}} :</span> {{key_features}} </ion-label>\n      </div>\n\n      <div class=\"pro_desc_div\" *ngIf=\"disclaimer\">\n        <ion-label class=\"head_lbl\"> {{util.getString('Desclaimer')}} </ion-label>\n        <ion-label class=\"light_lbl\"> {{disclaimer}} </ion-label>\n      </div>\n\n      <div class=\"related\" *ngIf=\"related?.length\">\n        <ion-label class=\"head_lbl\"> {{util.getString('Related')}} </ion-label>\n        <ion-slides [options]=\"slideOpts1\">\n          <ion-slide *ngFor=\"let item of related\">\n            <div style=\"border: 1px solid lightgray;margin-right: 10px;border-radius: 5px; width: 100%;\">\n              <div class=\"back_image\"\n                [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/imgs/user.png)'}\"\n                (click)=\"singleProduct(item)\">\n                <div class=\"percent\" *ngIf=\"item.discount !== '0'\"> {{item.discount}}% </div>\n                <div *ngIf=\"item.in_stoke === '0'\" class=\"notInStoke\">\n                  <ion-label class=\"text\"> {{util.getString('Out of Stoke')}} </ion-label>\n                </div>\n                <img src=\"assets/imgs/veg.png\" class=\"kind\" alt=\"Veg\" *ngIf=\"item.kind === '1'\">\n                <img src=\"assets/imgs/non.png\" class=\"kind\" alt=\"Non Veg\" *ngIf=\"item.kind === '0'\">\n              </div>\n              <div class=\"second_div\">\n                <ion-label class=\"name_lbl\" (click)=\"singleProduct(item)\">\n                  {{ (item.name.length>10)? (item.name | slice:0:10)+'..':(item.name) }}\n                </ion-label>\n                <ion-label class=\"itemsKind\">\n                  <span *ngIf=\"item.have_gram === '1'\"> {{item.gram}} {{util.getString('grams')}} </span>\n                  <span *ngIf=\"item.have_kg === '1'\"> {{item.kg}} {{util.getString('kg')}} </span>\n                  <span *ngIf=\"item.have_liter ==='1'\"> {{item.liter}} {{util.getString('ltr')}} </span>\n                  <span *ngIf=\"item.have_ml ==='1'\"> {{item.ml}} {{util.getString('ml')}} </span>\n                  <span *ngIf=\"item.have_pcs === '1'\"> {{item.pcs}} {{util.getString('pcs')}} </span>\n                </ion-label>\n                <!-- <ion-label class=\"desc\" (click)=\"singleProduct(item)\">\n                  {{ (item.descriptions.length>40)? (item.descriptions | slice:0:40)+'..':(item.descriptions) }}\n                </ion-label> -->\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='left'\"> {{util.currecny}}\n                  {{item.original_price}} </ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount === '0' && util.cside ==='right'\">\n                  {{item.original_price}}\n                  {{util.currecny}}</ion-label>\n                <ion-label class=\"price_lbl\" *ngIf=\"item.discount !== '0'\" (click)=\"singleProduct(item)\">\n                  <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{item.original_price}} </span>\n                  <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.sell_price}} </span>\n\n                  <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{item.original_price}} {{util.currecny}}</span>\n                  <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{item.sell_price}} {{util.currecny}}</span>\n                </ion-label>\n              </div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n\n\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/product/product-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/product/product-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProductPageRoutingModule */

  /***/
  function srcAppPagesProductProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPageRoutingModule", function () {
      return ProductPageRoutingModule;
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


    var _product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product.page */
    "./src/app/pages/product/product.page.ts");
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
      component: _product_page__WEBPACK_IMPORTED_MODULE_3__["ProductPage"]
    }];

    var ProductPageRoutingModule = function ProductPageRoutingModule() {
      _classCallCheck(this, ProductPageRoutingModule);
    };

    ProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/product/product.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/product/product.module.ts ***!
    \*************************************************/

  /*! exports provided: ProductPageModule */

  /***/
  function srcAppPagesProductProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPageModule", function () {
      return ProductPageModule;
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


    var _product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-routing.module */
    "./src/app/pages/product/product-routing.module.ts");
    /* harmony import */


    var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product.page */
    "./src/app/pages/product/product.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductPageModule = function ProductPageModule() {
      _classCallCheck(this, ProductPageModule);
    };

    ProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductPageRoutingModule"]],
      declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
    })], ProductPageModule);
    /***/
  },

  /***/
  "./src/app/pages/product/product.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/product/product.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductProductPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.slider_div ion-slide img {\n  width: 100%;\n  height: 250px;\n}\n.slider_div ion-slide .back_image {\n  width: 100%;\n  height: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100px;\n  position: relative;\n}\n.slider_div ion-slide .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  right: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 80px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .top_lbl {\n  font-size: 25px;\n  font-family: muli-bold;\n}\n.main_content_div .detail_div .pro_name {\n  font-size: 20px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .detail_div .itemsKind {\n  font-size: 12px;\n  font-weight: 500;\n}\n.main_content_div .detail_div .pro_detail {\n  font-size: 14px;\n  color: gray;\n}\n.main_content_div .detail_div .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex !important;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .detail_div .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .detail_div .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .detail_div .variant ion-item .select-icon {\n  display: none !important;\n}\n.main_content_div .detail_div .variant ion-item ion-select {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 20px;\n  height: 20px;\n}\n.main_content_div .detail_div .small_flex_div {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding: 15px 0px;\n}\n.main_content_div .detail_div .small_flex_div .left {\n  display: flex;\n}\n.main_content_div .detail_div .small_flex_div .left img {\n  width: 15px;\n  height: 15px;\n}\n.main_content_div .detail_div .small_flex_div .left ion-label {\n  font-family: muli-bold;\n  padding-left: 10px;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl {\n  font-weight: 400;\n  font-size: 15px;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content_div .detail_div .small_flex_div .addBtn .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .detail_div .small_flex_div .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .detail_div .small_flex_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .detail_div .small_flex_div .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .detail_div .ratingItems {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 12px;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .detail_div .storeName {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 12px;\n  position: relative;\n  overflow: hidden;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  margin: 10px 0px;\n}\n.main_content_div .pro_desc_div {\n  padding: 15px 0px;\n  border-bottom: 1px solid lightgray;\n}\n.main_content_div .pro_desc_div .head_lbl {\n  color: gray;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .pro_desc_div ion-chip {\n  background: #f3f3f3;\n  border: 2px solid lightgray;\n}\n.main_content_div .pro_desc_div ion-chip ion-label {\n  font-family: muli-bold;\n}\n.main_content_div .pro_desc_div .active {\n  background: rgba(69, 194, 97, 0.2);\n  color: var(--ion-color-primary);\n  border: 2px solid var(--ion-color-primary);\n}\n.main_content_div .pro_desc_div .light_lbl {\n  font-size: 14px;\n  color: gray;\n}\n.main_content_div .pro_desc_div .light_lbl span {\n  font-family: muli-bold;\n}\n.main_content_div .content_div {\n  padding: 10px 0px;\n}\n.main_content_div .content_div .head_lbl {\n  font-family: muli-bold;\n  margin-bottom: 8px;\n}\n.main_content_div .content_div .card_div {\n  padding: 10px;\n  display: flex;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  margin-bottom: 16px;\n}\n.main_content_div .content_div .card_div .image_div {\n  height: 95px;\n  width: 95px;\n  min-width: 95px;\n}\n.main_content_div .content_div .card_div .image_div img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.main_content_div .content_div .card_div .desc_div .pro_name {\n  font-size: 15px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .pro_detail {\n  font-size: 13px;\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .left {\n  display: flex;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .left img {\n  width: 15px;\n  height: 15px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .left ion-label {\n  font-family: muli-bold;\n  font-size: 14px;\n  padding-left: 10px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .related {\n  margin-top: 10px;\n}\n.main_content_div .related .head_lbl {\n  font-family: muli-bold;\n  margin-bottom: 8px;\n}\n.main_content_div .related .back_image {\n  width: 100%;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100px;\n  position: relative;\n}\n.main_content_div .related .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content_div .related .back_image .notInStoke {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 80%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 20px;\n  line-height: 20px;\n}\n.main_content_div .related .back_image .notInStoke .text {\n  border: 1px solid gray;\n  padding: 5px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.main_content_div .related .back_image .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .related .second_div {\n  padding: 5px;\n  position: relative;\n  width: 100%;\n  text-align: left;\n}\n.main_content_div .related .second_div ion-label {\n  display: block !important;\n  padding-bottom: 2px;\n}\n.main_content_div .related .second_div .offer {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 0px;\n}\n.main_content_div .related .second_div .itemsKind {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .related .second_div .price_lbl {\n  font-weight: 400;\n  font-size: 12px;\n}\n.main_content_div .related .second_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content_div .related .second_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .related .second_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content_div .related .second_div .name_lbl {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n.main_content_div .related .second_div .desc {\n  font-size: 12px;\n}\n.main_content_div .related .second_div .stoke {\n  font-size: 10px;\n}\n.main_content_div .related .second_div .stoke .in {\n  color: green;\n}\n.main_content_div .related .second_div .stoke .out {\n  color: indianred;\n}\n.main_content_div .related .second_div .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.main_content_div .related .second_div .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .related .second_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 20px;\n  color: #29b507;\n  padding: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.main_content_div .related .second_div ion-button {\n  position: absolute;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9FOlxcSW9uaWNcXFVzZXIvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0XFxwcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFZVTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FERGQ7QUNHVTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRERaO0FDRVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBREFoQjtBQ0tBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBREZKO0FDR0k7RUFDSSxjQUFBO0FERFI7QUNJSTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtBREZSO0FDUVE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRE5aO0FDUVE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUROVjtBQ1NRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QURQWjtBQ1dZO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEVGhCO0FDV1k7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FEVFo7QUNVWTtFQUNJLDBCQUFBO0FEUmhCO0FDVVk7RUFDSSx3QkFBQTtBRFJoQjtBQ1VZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURSaEI7QUNhUTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtBRFhaO0FDYVk7RUFDRSxhQUFBO0FEWGQ7QUNZYztFQUNFLFdBQUE7RUFDQSxZQUFBO0FEVmhCO0FDWWM7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FEVmhCO0FDWWM7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QURWaEI7QUNXZ0I7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QURUcEI7QUNXZ0I7RUFDSSxpQkFBQTtBRFRwQjtBQ1dnQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRFRwQjtBQ2VjO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRGJsQjtBQ21CWTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRGpCaEI7QUNtQmdCO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBRGpCbEI7QUNvQmdCO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QURsQmxCO0FDc0JRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEcEJWO0FDc0JRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEcEJWO0FDd0JJO0VBQ0ksaUJBQUE7RUFDQSxrQ0FBQTtBRHRCUjtBQ3dCUTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FEdEJaO0FDeUJRO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtBRHZCWjtBQ3lCWTtFQUNJLHNCQUFBO0FEdkJoQjtBQzJCUTtFQUNJLGtDQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQ0FBQTtBRHpCWjtBQzRCUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FEMUJaO0FDNEJZO0VBQ0ksc0JBQUE7QUQxQmhCO0FDK0JNO0VBQ0ksaUJBQUE7QUQ3QlY7QUMrQlU7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FEN0JkO0FDZ0NVO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRDlCWjtBQ2dDWTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRDlCZDtBQ2dDYztFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRDlCaEI7QUNtQ2M7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRGpDaEI7QUNtQ2M7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEakNoQjtBQ29DYztFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FEbENoQjtBQ29DZ0I7RUFDRSxhQUFBO0FEbENsQjtBQ21Da0I7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRGpDcEI7QUNtQ2tCO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURqQ3BCO0FDc0NjO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEcENoQjtBQ3NDZ0I7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FEcENsQjtBQ3VDZ0I7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBRHJDbEI7QUM0Q007RUFDRSxnQkFBQTtBRDFDUjtBQzJDUTtFQUNNLHNCQUFBO0VBQ0Esa0JBQUE7QUR6Q2Q7QUMyQ1c7RUFDRyxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUR6Q2Q7QUMwQ2M7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRHhDbEI7QUMwQ2M7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRHhDbEI7QUN5Q2tCO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEdkN0QjtBQzBDYztFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBRHhDbEI7QUMyQ1U7RUFDTSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUR6Q2hCO0FDMENnQjtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUR4Q3BCO0FDMENnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBRHhDcEI7QUMwQ2dCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FEeENwQjtBQzBDZ0I7RUFDTSxnQkFBQTtFQUNBLGVBQUE7QUR4Q3RCO0FDeUNzQjtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBRHZDMUI7QUN5Q3NCO0VBQ0ksaUJBQUE7QUR2QzFCO0FDeUNzQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBRHZDMUI7QUMwQ2tCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUR4Q3RCO0FDMENrQjtFQUNJLGVBQUE7QUR4Q3RCO0FDMENrQjtFQUNJLGVBQUE7QUR4Q3RCO0FDeUNzQjtFQUNJLFlBQUE7QUR2QzFCO0FDeUNzQjtFQUNJLGdCQUFBO0FEdkMxQjtBQzBDZ0I7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7QUR4Q3BCO0FDeUNvQjtFQUNNLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUR2QzFCO0FDMENrQjtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0FEeEN0QjtBQzJDa0I7RUFDSSxrQkFBQTtFQUVBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBRDFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L3Byb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5zbGlkZXJfZGl2IGlvbi1zbGlkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5zbGlkZXJfZGl2IGlvbi1zbGlkZSAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGlkZXJfZGl2IGlvbi1zbGlkZSAuYmFja19pbWFnZSAucGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICByaWdodDogNXB4O1xuICB0b3A6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudG9wX2xibCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5wcm9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLml0ZW1zS2luZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5wcm9fZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC52YXJpYW50IC5zZWxlY3RlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAudmFyaWFudCBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC52YXJpYW50IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gLnNlbGVjdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5zbWFsbF9mbGV4X2RpdiAubGVmdCBpbWcge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5sZWZ0IGlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5zbWFsbF9mbGV4X2RpdiAubGVmdCAucHJpY2VfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5sZWZ0IC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5zbWFsbF9mbGV4X2RpdiAubGVmdCAucHJpY2VfbGJsIC5zZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc21hbGxfZmxleF9kaXYgLmxlZnQgLnByaWNlX2xibCAuZGljb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc21hbGxfZmxleF9kaXYgLmFkZEJ0biAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5zbWFsbF9mbGV4X2RpdiAuYWJzX2FkZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5zbWFsbF9mbGV4X2RpdiAuYWJzX2FkZCBpb24tbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5zbWFsbF9mbGV4X2RpdiAuYWJzX2FkZCBpbWcge1xuICBjb2xvcjogI0ZGOEU4MDtcbiAgd2lkdGg6IDI1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAucmF0aW5nSXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnN0b3JlTmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb19kZXNjX2RpdiB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb19kZXNjX2RpdiAuaGVhZF9sYmwge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb19kZXNjX2RpdiBpb24tY2hpcCB7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9fZGVzY19kaXYgaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9fZGVzY19kaXYgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjksIDE5NCwgOTcsIDAuMik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9fZGVzY19kaXYgLmxpZ2h0X2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJvX2Rlc2NfZGl2IC5saWdodF9sYmwgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuaGVhZF9sYmwge1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYge1xuICBoZWlnaHQ6IDk1cHg7XG4gIHdpZHRoOiA5NXB4O1xuICBtaW4td2lkdGg6IDk1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5pbWFnZV9kaXYgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnByb19uYW1lIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJvX2RldGFpbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuc21hbGxfZmxleCAubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuc21hbGxfZmxleCAubGVmdCBpbWcge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnNtYWxsX2ZsZXggLmxlZnQgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuYWJzX2FkZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLmFic19hZGQgaW1nIHtcbiAgY29sb3I6ICNGRjhFODA7XG4gIHdpZHRoOiAyNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLmhlYWRfbGJsIHtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLmJhY2tfaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuYmFja19pbWFnZSAucGVyY2VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogMnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5iYWNrX2ltYWdlIC5ub3RJblN0b2tlIHtcbiAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA4MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuYmFja19pbWFnZSAubm90SW5TdG9rZSAudGV4dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5iYWNrX2ltYWdlIC5raW5kIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IHtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5vZmZlciB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgLml0ZW1zS2luZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5vcmlnaW5hbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5zZWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5uYW1lX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5zdG9rZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5zdG9rZSAuaW4ge1xuICBjb2xvcjogZ3JlZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAuc3Rva2UgLm91dCB7XG4gIGNvbG9yOiBpbmRpYW5yZWQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAuYnRuQnRtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgLmJ0bkJ0bSAucmlwcGxlLXBhcmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjc0NzQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMjliNTA3O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogOTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzI5YjUwNztcbiAgLS1ib3JkZXItY29sb3I6ICM3M0QyNUM7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5zbGlkZXJfZGl2e1xuICAgICAgLy8gcGFkZGluZzogMTVweCAwcHg7XG4gICAgICBpb24tc2xpZGV7XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAucGVyY2VudHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAudG9wX2xibHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgIH1cblxuICAgXG5cbiAgICAuZGV0YWlsX2RpdntcbiAgICAgICAgLnByb19uYW1le1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuaXRlbXNLaW5ke1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDs7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9fZGV0YWlse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAgLnZhcmlhbnR7XG4gICAgICAgICAgICAuc2VsZWN0ZXJ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2VsZWN0LWljb257XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNtYWxsX2ZsZXhfZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgXG4gICAgICAgICAgICAubGVmdHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4OyAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJpY2VfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIC5vcmlnaW5hbHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNlbGx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGljb3VudHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICAuYWRkQnRue1xuICAgICAgICAgICAgICAucmlwcGxlLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBhZGRcbiAgICAgICAgICBcbiAgICAgICAgICAgIC5hYnNfYWRke1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgICBcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgLnJhdGluZ0l0ZW1ze1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgICAuc3RvcmVOYW1le1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvX2Rlc2NfZGl2e1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcblxuICAgICAgICAuaGVhZF9sYmx7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tY2hpcHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXk7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3RpdmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY5LDE5NCw5NywwLjIpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saWdodF9sYmx7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcblxuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAuY29udGVudF9kaXZ7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG5cbiAgICAgICAgICAuaGVhZF9sYmx7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAuY2FyZF9kaXZ7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgXG4gICAgICAgICAgICAuaW1hZ2VfZGl2e1xuICAgICAgICAgICAgICBoZWlnaHQ6IDk1cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA5NXB4O1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDk1cHg7XG4gICAgICBcbiAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgICAgLnByb19uYW1le1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAucHJvX2RldGFpbHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgLnNtYWxsX2ZsZXh7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgXG4gICAgICAgICAgICAgICAgLmxlZnR7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICAuYWJzX2FkZHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgICAgXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRjhFODA7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5yZWxhdGVke1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAuaGVhZF9sYmx7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIC5wZXJjZW50e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubm90SW5TdG9rZXtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4MzczNzM1YztcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgIC50ZXh0e1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmtpbmR7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuc2Vjb25kX2RpdntcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm9mZmVye1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLml0ZW1zS2luZHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucHJpY2VfbGJse1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgIC5vcmlnaW5hbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgLnNlbGx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuZGljb3VudHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAubmFtZV9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuZGVzY3tcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuc3Rva2V7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIC5pbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAub3V0e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5kaWFucmVkO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYnRuQnRte1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgICAgICAgICAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5YjUwNztcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5YjUwNztcbiAgICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogIzczRDI1QztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/product/product.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/product/product.page.ts ***!
    \***********************************************/

  /*! exports provided: ProductPage */

  /***/
  function srcAppPagesProductProductPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPage", function () {
      return ProductPage;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-ionic-image-viewer */
    "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var ProductPage = /*#__PURE__*/function () {
      function ProductPage(api, util, route, navCtrl, router, cart, modalController, alertCtrl) {
        var _this2 = this;

        _classCallCheck(this, ProductPage);

        this.api = api;
        this.util = util;
        this.route = route;
        this.navCtrl = navCtrl;
        this.router = router;
        this.cart = cart;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl; // img;
        // price;
        // proDetail;
        // chipVal;
        // products;

        this.qty = 0;
        this.name = '';
        this.coverImage = '';
        this.key_features = '';
        this.disclaimer = '';
        this.gallery = [];
        this.slideOpts = {
          slidesPerView: 1
        };
        this.slideOpts1 = {
          slidesPerView: 2.5
        };
        this.related = [];
        this.quantiy = 0;
        this.route.queryParams.subscribe(function (data) {
          console.log(data);

          if (data && data.id) {
            _this2.loaded = false;
            _this2.id = data.id;

            _this2.getProduct();
          }
        });
      }

      _createClass(ProductPage, [{
        key: "openViewer",
        value: function openViewer(url) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__["ViewerModalComponent"],
                      componentProps: {
                        src: url
                      },
                      cssClass: 'ion-img-viewer',
                      keyboardClose: true,
                      showBackdrop: true
                    });

                  case 2:
                    modal = _context4.sent;
                    _context4.next = 5;
                    return modal.present();

                  case 5:
                    return _context4.abrupt("return", _context4.sent);

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getRelated",
        value: function getRelated() {
          var _this3 = this;

          var param = {
            id: this.subId,
            limit: 5,
            cid: localStorage.getItem('city')
          };
          this.related = [];
          this.api.post('products/getRelated', param).subscribe(function (data) {
            console.log('=>related=>', data);

            if (data && data.status === 200 && data.data && data.data.length) {
              var products = data.data;
              _this3.related = products.filter(function (x) {
                return x.id !== _this3.id;
              });
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "checkCartItems",
        value: function checkCartItems() {
          var _this4 = this;

          var item = this.cart.cart.filter(function (x) {
            return x.id === _this4.id;
          });
          console.log('cart=====>>>>>>', item);

          if (item && item.length) {
            this.quantiy = item[0].quantiy;
          }
        }
      }, {
        key: "getProduct",
        value: function getProduct() {
          var _this5 = this;

          var param = {
            id: this.id
          };
          this.api.post('products/getById', param).subscribe(function (data) {
            _this5.loaded = true;
            console.log(data);
            _this5.gallery = [];

            if (data && data.status === 200 && data.data && data.data.length) {
              var info = data.data[0];
              _this5.productt = info;
              _this5.productt['quantiy'] = 0;
              _this5.name = info.name;
              _this5.description = info.descriptions;
              _this5.subId = info.sub_cate_id;
              _this5.coverImage = info.cover;
              _this5.key_features = info.key_features;
              _this5.disclaimer = info.disclaimer;
              _this5.discount = info.discount;
              _this5.exp_date = info.exp_date;
              _this5.gram = info.gram;
              _this5.have_gram = info.have_gram;
              _this5.kg = info.kg;
              _this5.have_kg = info.have_kg;
              _this5.liter = info.liter;
              _this5.have_liter = info.have_liter;
              _this5.ml = info.ml;
              _this5.have_ml = info.have_ml;
              _this5.pcs = info.pcs;
              _this5.have_pcs = info.have_pcs;
              _this5.in_offer = info.in_offer;
              _this5.in_stoke = info.in_stoke;
              _this5.is_single = info.is_single;
              _this5.veg = info.kind;
              _this5.realPrice = parseFloat(info.original_price);
              _this5.sellPrice = parseFloat(info.sell_price);
              _this5.status = info.status;
              _this5.rate = info.rating;
              _this5.totalRating = info.total_rating;
              _this5.storeId = info.store_id;
              _this5.storeName = info.s_name;

              _this5.gallery.push(_this5.coverImage);

              _this5.size = info.size;

              if (info.variations && info.size === '1' && info.variations !== '') {
                if (function (x) {
                  try {
                    JSON.parse(x);
                    return true;
                  } catch (e) {
                    return false;
                  }
                }(info.variations)) {
                  _this5.variations = JSON.parse(info.variations);
                  _this5.variant = 0;
                  _this5.productt['variations'] = JSON.parse(info.variations);
                  _this5.productt['variant'] = 0;
                } else {
                  info.variations = [];
                  _this5.productt['variations'] = [];
                  _this5.variant = 1;
                  _this5.productt['variant'] = 1;
                }
              } else {
                _this5.variations = [];
                _this5.variant = 1;
                _this5.productt['variations'] = [];
                _this5.productt['variant'] = 1;
              }

              _this5.checkCartItems();

              if (info.images) {
                var images = JSON.parse(info.images);
                console.log('images======>>>', images);

                if (images[0]) {
                  _this5.gallery.push(images[0]);
                }

                if (images[1]) {
                  _this5.gallery.push(images[1]);
                }

                if (images[2]) {
                  _this5.gallery.push(images[2]);
                }

                if (images[3]) {
                  _this5.gallery.push(images[3]);
                }

                if (images[4]) {
                  _this5.gallery.push(images[4]);
                }

                if (images[5]) {
                  _this5.gallery.push(images[5]);
                }
              }

              _this5.getRelated();
            }
          }, function (error) {
            console.log(error);
            _this5.loaded = true;

            _this5.util.errorToast(_this5.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addToCart",
        value: function addToCart() {
          this.quantiy = 1;
          this.productt.quantiy = 1;
          this.cart.addItem(this.productt);
        }
      }, {
        key: "gotoStore",
        value: function gotoStore() {
          var param = {
            queryParams: {
              id: this.storeId,
              name: this.storeName
            }
          };
          this.router.navigate(['tabs/home/store'], param);
        }
      }, {
        key: "add",
        value: function add() {
          this.quantiy = this.quantiy + 1;
          this.cart.addQuantity(this.quantiy, this.id);
        }
      }, {
        key: "remove",
        value: function remove() {
          if (this.quantiy === 1) {
            this.quantiy = 0;
            this.cart.removeItem(this.id);
          } else {
            this.quantiy = this.quantiy - 1;
            this.cart.addQuantity(this.quantiy, this.id);
          }
        }
      }, {
        key: "onShare",
        value: function onShare() {}
      }, {
        key: "onFav",
        value: function onFav() {
          var _this6 = this;

          if (this.util.favIds.includes(this.id)) {
            console.log('remove this');
            this.util.removeFav(this.id);
            console.log('after removed', this.util.favIds);
            console.log('edit');
            var param = {
              id: localStorage.getItem('uid'),
              ids: this.util.favIds.join()
            };
            this.util.haveFav = true;
            console.log('parama', param);
            this.api.post('favourite/editList', param).subscribe(function (data) {
              console.log('save response', data);

              if (data && data.status !== 200) {
                _this6.util.errorToast(_this6.util.getString('Something went wrong'));
              }
            }, function (error) {
              console.log('error on save', error);

              _this6.util.errorToast(_this6.util.getString('Something went wrong'));
            });
          } else {
            console.log('add new');
            this.util.setFav(this.id);
            console.log('after added', this.util.favIds);

            if (this.util.haveFav) {
              console.log('edit');
              var _param = {
                id: localStorage.getItem('uid'),
                ids: this.util.favIds.join()
              };
              this.util.haveFav = true;
              console.log('parama', _param);
              this.api.post('favourite/editList', _param).subscribe(function (data) {
                console.log('save response', data);

                if (data && data.status !== 200) {
                  _this6.util.errorToast(_this6.util.getString('Something went wrong'));
                }
              }, function (error) {
                console.log('error on save', error);

                _this6.util.errorToast(_this6.util.getString('Something went wrong'));
              });
            } else {
              console.log('save');
              var _param2 = {
                uid: localStorage.getItem('uid'),
                ids: this.util.favIds.join()
              };
              this.util.haveFav = true;
              console.log('parama', _param2);
              this.api.post('favourite/save', _param2).subscribe(function (data) {
                console.log('save response', data);

                if (data && data.status !== 200) {
                  _this6.util.errorToast(_this6.util.getString('Something went wrong'));
                }
              }, function (error) {
                console.log('error on save', error);

                _this6.util.errorToast(_this6.util.getString('Something went wrong'));
              });
            }
          }
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
        key: "productRating",
        value: function productRating() {
          var param = {
            queryParams: {
              id: this.id,
              name: this.name,
              type: 'product'
            }
          };
          this.router.navigate(['/tabs/home/ratings'], param);
        }
      }, {
        key: "variants",
        value: function variants() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this7 = this;

            var allData, alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    allData = [];

                    if (!(this.variations !== '' && this.variations.length > 0 && this.variations[0].items.length > 0)) {
                      _context5.next = 12;
                      break;
                    }

                    console.log('->', this.variations[0].items);
                    this.variations[0].items.forEach(function (element, index) {
                      console.log('OK');
                      var title = '';

                      if (_this7.util.cside === 'left') {
                        var price = _this7.variations && _this7.variations[0] && _this7.variations[0].items[index] && _this7.variations[0].items[index].discount ? _this7.variations[0].items[index].discount : _this7.variations[0].items[index].price;
                        title = element.title + ' - ' + _this7.util.currecny + ' ' + price;
                      } else {
                        var _price = _this7.variations && _this7.variations[0] && _this7.variations[0].items[index] && _this7.variations[0].items[index].discount ? _this7.variations[0].items[index].discount : _this7.variations[0].items[index].price;

                        title = element.title + ' - ' + _price + ' ' + _this7.util.currecny;
                      }

                      var data = {
                        name: element.title,
                        type: 'radio',
                        label: title,
                        value: index,
                        checked: _this7.variant === index
                      };
                      allData.push(data);
                    });
                    console.log('All Data', allData);
                    _context5.next = 7;
                    return this.alertCtrl.create({
                      header: this.name,
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
                          console.log('before', _this7.variant);
                          _this7.variant = data;
                          console.log('after', _this7.variant);
                          _this7.productt['variant'] = data;
                        }
                      }]
                    });

                  case 7:
                    alert = _context5.sent;
                    _context5.next = 10;
                    return alert.present();

                  case 10:
                    _context5.next = 13;
                    break;

                  case 12:
                    console.log('none');

                  case 13:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ProductPage;
    }();

    ProductPage.ctorParameters = function () {
      return [{
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }];
    };

    ProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product.page.scss */
      "./src/app/pages/product/product.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])], ProductPage);
    /***/
  }
}]);
//# sourceMappingURL=product-product-module-es5.js.map