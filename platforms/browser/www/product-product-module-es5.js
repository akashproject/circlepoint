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


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.slider_div ion-slide img {\n  width: 100%;\n  height: 250px;\n}\n.slider_div ion-slide .back_image {\n  width: 100%;\n  height: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100px;\n  position: relative;\n}\n.slider_div ion-slide .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  right: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 80px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .top_lbl {\n  font-size: 25px;\n  font-family: muli-bold;\n}\n.main_content_div .detail_div .pro_name {\n  font-size: 20px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .detail_div .itemsKind {\n  font-size: 12px;\n  font-weight: 500;\n}\n.main_content_div .detail_div .pro_detail {\n  font-size: 14px;\n  color: gray;\n}\n.main_content_div .detail_div .variant .selecter {\n  font-size: 10px;\n  padding: 2px;\n  border: 1px solid lightgray;\n  margin: 10px 0px;\n  border-radius: 5px;\n  display: flex !important;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: gray;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .detail_div .variant ion-item {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  font-size: 10px !important;\n}\n.main_content_div .detail_div .variant ion-item ion-label {\n  font-size: 10px !important;\n}\n.main_content_div .detail_div .variant ion-item .select-icon {\n  display: none !important;\n}\n.main_content_div .detail_div .variant ion-item ion-select {\n  width: 100%;\n  min-width: 100%;\n  font-size: 10px !important;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  min-height: 20px;\n  height: 20px;\n}\n.main_content_div .detail_div .small_flex_div {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  border-bottom: 1px solid lightgray;\n  padding: 15px 0px;\n}\n.main_content_div .detail_div .small_flex_div .left {\n  display: flex;\n}\n.main_content_div .detail_div .small_flex_div .left img {\n  width: 15px;\n  height: 15px;\n}\n.main_content_div .detail_div .small_flex_div .left ion-label {\n  font-family: muli-bold;\n  padding-left: 10px;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl {\n  font-weight: 400;\n  font-size: 15px;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .detail_div .small_flex_div .left .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content_div .detail_div .small_flex_div .addBtn .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .detail_div .small_flex_div .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .detail_div .small_flex_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .detail_div .small_flex_div .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .detail_div .ratingItems {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 12px;\n  position: relative;\n  overflow: hidden;\n}\n.main_content_div .detail_div .storeName {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 12px;\n  position: relative;\n  overflow: hidden;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  margin: 10px 0px;\n}\n.main_content_div .pro_desc_div {\n  padding: 15px 0px;\n  border-bottom: 1px solid lightgray;\n}\n.main_content_div .pro_desc_div .head_lbl {\n  color: gray;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .pro_desc_div ion-chip {\n  background: #f3f3f3;\n  border: 2px solid lightgray;\n}\n.main_content_div .pro_desc_div ion-chip ion-label {\n  font-family: muli-bold;\n}\n.main_content_div .pro_desc_div .active {\n  background: rgba(69, 194, 97, 0.2);\n  color: var(--ion-color-primary);\n  border: 2px solid var(--ion-color-primary);\n}\n.main_content_div .pro_desc_div .light_lbl {\n  font-size: 14px;\n  color: gray;\n}\n.main_content_div .pro_desc_div .light_lbl span {\n  font-family: muli-bold;\n}\n.main_content_div .content_div {\n  padding: 10px 0px;\n}\n.main_content_div .content_div .head_lbl {\n  font-family: muli-bold;\n  margin-bottom: 8px;\n}\n.main_content_div .content_div .card_div {\n  padding: 10px;\n  display: flex;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);\n  position: relative;\n  margin-bottom: 16px;\n}\n.main_content_div .content_div .card_div .image_div {\n  height: 95px;\n  width: 95px;\n  min-width: 95px;\n}\n.main_content_div .content_div .card_div .image_div img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.main_content_div .content_div .card_div .desc_div .pro_name {\n  font-size: 15px;\n  font-family: muli-bold;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .pro_detail {\n  font-size: 13px;\n  color: gray;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .left {\n  display: flex;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .left img {\n  width: 15px;\n  height: 15px;\n}\n.main_content_div .content_div .card_div .desc_div .small_flex .left ion-label {\n  font-family: muli-bold;\n  font-size: 14px;\n  padding-left: 10px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add {\n  width: 100px;\n  background: var(--ion-color-primary);\n  height: 30px;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 3px;\n  padding-right: 3px;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add ion-label {\n  color: white;\n  font-size: 14px;\n  font-family: muli-bold;\n}\n.main_content_div .content_div .card_div .desc_div .abs_add img {\n  color: #FF8E80;\n  width: 25px;\n}\n.main_content_div .related {\n  margin-top: 10px;\n}\n.main_content_div .related .head_lbl {\n  font-family: muli-bold;\n  margin-bottom: 8px;\n}\n.main_content_div .related .back_image {\n  width: 100%;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100px;\n  position: relative;\n}\n.main_content_div .related .back_image .percent {\n  position: absolute;\n  height: 25px;\n  width: 25px;\n  background: red;\n  left: 5px;\n  top: 2px;\n  line-height: 25px;\n  border-radius: 50%;\n  text-align: center;\n  font-weight: bold;\n  font-size: 10px;\n  color: white;\n}\n.main_content_div .related .back_image .notInStoke {\n  background: #8373735c;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 80%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 20px;\n  line-height: 20px;\n}\n.main_content_div .related .back_image .notInStoke .text {\n  border: 1px solid gray;\n  padding: 5px;\n  border-radius: 5px;\n  background: white;\n  color: gray;\n  font-size: 10px;\n}\n.main_content_div .related .back_image .kind {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n.main_content_div .related .second_div {\n  padding: 5px;\n  position: relative;\n  width: 100%;\n  text-align: left;\n}\n.main_content_div .related .second_div ion-label {\n  display: block !important;\n  padding-bottom: 2px;\n}\n.main_content_div .related .second_div .offer {\n  height: 15px;\n  width: 15px;\n  position: absolute;\n  right: 20px;\n  top: 0px;\n}\n.main_content_div .related .second_div .itemsKind {\n  font-weight: 400;\n  font-size: 11px;\n}\n.main_content_div .related .second_div .price_lbl {\n  font-weight: 400;\n  font-size: 12px;\n}\n.main_content_div .related .second_div .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 13px;\n}\n.main_content_div .related .second_div .price_lbl .sell {\n  font-weight: bold;\n}\n.main_content_div .related .second_div .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 13px;\n}\n.main_content_div .related .second_div .name_lbl {\n  font-weight: 700;\n  font-size: 15px;\n  text-transform: capitalize;\n}\n.main_content_div .related .second_div .desc {\n  font-size: 12px;\n}\n.main_content_div .related .second_div .stoke {\n  font-size: 10px;\n}\n.main_content_div .related .second_div .stoke .in {\n  color: green;\n}\n.main_content_div .related .second_div .stoke .out {\n  color: indianred;\n}\n.main_content_div .related .second_div .btnBtm {\n  display: flex;\n  flex-direction: row-reverse;\n}\n.main_content_div .related .second_div .btnBtm .ripple-parent {\n  position: relative;\n  overflow: hidden;\n  padding: 5px;\n  color: white;\n  background: #f27474;\n  border-radius: 5px;\n}\n.main_content_div .related .second_div ion-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 20px;\n  color: #29b507;\n  padding: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.main_content_div .related .second_div ion-button {\n  position: absolute;\n  bottom: 0;\n  width: 90px;\n  font-size: 12px;\n  color: #29b507;\n  --border-color: #73D25C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9FOlxcSW9uaWNcXGNpcmNsZXBvaW50LW9sZC9zcmNcXGFwcFxccGFnZXNcXHByb2R1Y3RcXHByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVlVO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUREZDtBQ0dVO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FERFo7QUNFWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEQWhCO0FDS0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FERko7QUNHSTtFQUNJLGNBQUE7QUREUjtBQ0lJO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0FERlI7QUNRUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FETlo7QUNRUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRE5WO0FDU1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBRFBaO0FDV1k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURUaEI7QUNXWTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QURUWjtBQ1VZO0VBQ0ksMEJBQUE7QURSaEI7QUNVWTtFQUNJLHdCQUFBO0FEUmhCO0FDVVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBRFJoQjtBQ2FRO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0FEWFo7QUNhWTtFQUNFLGFBQUE7QURYZDtBQ1ljO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QURWaEI7QUNZYztFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QURWaEI7QUNZYztFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBRFZoQjtBQ1dnQjtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBRFRwQjtBQ1dnQjtFQUNJLGlCQUFBO0FEVHBCO0FDV2dCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FEVHBCO0FDZWM7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEYmxCO0FDbUJZO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEakJoQjtBQ21CZ0I7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FEakJsQjtBQ29CZ0I7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBRGxCbEI7QUNzQlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURwQlY7QUNzQlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURwQlY7QUN3Qkk7RUFDSSxpQkFBQTtFQUNBLGtDQUFBO0FEdEJSO0FDd0JRO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUR0Qlo7QUN5QlE7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0FEdkJaO0FDeUJZO0VBQ0ksc0JBQUE7QUR2QmhCO0FDMkJRO0VBQ0ksa0NBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO0FEekJaO0FDNEJRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUQxQlo7QUM0Qlk7RUFDSSxzQkFBQTtBRDFCaEI7QUMrQk07RUFDSSxpQkFBQTtBRDdCVjtBQytCVTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUQ3QmQ7QUNnQ1U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEOUJaO0FDZ0NZO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEOUJkO0FDZ0NjO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEOUJoQjtBQ21DYztFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FEakNoQjtBQ21DYztFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURqQ2hCO0FDb0NjO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QURsQ2hCO0FDb0NnQjtFQUNFLGFBQUE7QURsQ2xCO0FDbUNrQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0FEakNwQjtBQ21Da0I7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRGpDcEI7QUNzQ2M7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURwQ2hCO0FDc0NnQjtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QURwQ2xCO0FDdUNnQjtFQUNFLGNBQUE7RUFDQSxXQUFBO0FEckNsQjtBQzRDTTtFQUNFLGdCQUFBO0FEMUNSO0FDMkNRO0VBQ00sc0JBQUE7RUFDQSxrQkFBQTtBRHpDZDtBQzJDVztFQUNHLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRHpDZDtBQzBDYztFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEeENsQjtBQzBDYztFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEeENsQjtBQ3lDa0I7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUR2Q3RCO0FDMENjO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FEeENsQjtBQzJDVTtFQUNNLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRHpDaEI7QUMwQ2dCO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBRHhDcEI7QUMwQ2dCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FEeENwQjtBQzBDZ0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUR4Q3BCO0FDMENnQjtFQUNNLGdCQUFBO0VBQ0EsZUFBQTtBRHhDdEI7QUN5Q3NCO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0FEdkMxQjtBQ3lDc0I7RUFDSSxpQkFBQTtBRHZDMUI7QUN5Q3NCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FEdkMxQjtBQzBDa0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBRHhDdEI7QUMwQ2tCO0VBQ0ksZUFBQTtBRHhDdEI7QUMwQ2tCO0VBQ0ksZUFBQTtBRHhDdEI7QUN5Q3NCO0VBQ0ksWUFBQTtBRHZDMUI7QUN5Q3NCO0VBQ0ksZ0JBQUE7QUR2QzFCO0FDMENnQjtFQUNJLGFBQUE7RUFDQSwyQkFBQTtBRHhDcEI7QUN5Q29CO0VBQ00sa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRHZDMUI7QUMwQ2tCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUR4Q3RCO0FDMkNrQjtFQUNJLGtCQUFBO0VBRUEsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FEMUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLnNsaWRlcl9kaXYgaW9uLXNsaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuLnNsaWRlcl9kaXYgaW9uLXNsaWRlIC5iYWNrX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNsaWRlcl9kaXYgaW9uLXNsaWRlIC5iYWNrX2ltYWdlIC5wZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMnB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50b3BfbGJsIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnByb19uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuaXRlbXNLaW5kIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnByb19kZXRhaWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnZhcmlhbnQgLnNlbGVjdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC52YXJpYW50IGlvbi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnZhcmlhbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAudmFyaWFudCBpb24taXRlbSAuc2VsZWN0LWljb24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAudmFyaWFudCBpb24taXRlbSBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc21hbGxfZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc21hbGxfZmxleF9kaXYgLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5sZWZ0IGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc21hbGxfZmxleF9kaXYgLmxlZnQgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5sZWZ0IC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc21hbGxfZmxleF9kaXYgLmxlZnQgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5sZWZ0IC5wcmljZV9sYmwgLnNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5zbWFsbF9mbGV4X2RpdiAubGVmdCAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5zbWFsbF9mbGV4X2RpdiAuYWRkQnRuIC5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5hYnNfYWRkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5hYnNfYWRkIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRldGFpbF9kaXYgLnNtYWxsX2ZsZXhfZGl2IC5hYnNfYWRkIGltZyB7XG4gIGNvbG9yOiAjRkY4RTgwO1xuICB3aWR0aDogMjVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZXRhaWxfZGl2IC5yYXRpbmdJdGVtcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGV0YWlsX2RpdiAuc3RvcmVOYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJvX2Rlc2NfZGl2IHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJvX2Rlc2NfZGl2IC5oZWFkX2xibCB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJvX2Rlc2NfZGl2IGlvbi1jaGlwIHtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb19kZXNjX2RpdiBpb24tY2hpcCBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb19kZXNjX2RpdiAuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2OSwgMTk0LCA5NywgMC4yKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb19kZXNjX2RpdiAubGlnaHRfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9fZGVzY19kaXYgLmxpZ2h0X2xibCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiB7XG4gIGhlaWdodDogOTVweDtcbiAgd2lkdGg6IDk1cHg7XG4gIG1pbi13aWR0aDogOTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmltYWdlX2RpdiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAucHJvX25hbWUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5wcm9fZGV0YWlsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLnNtYWxsX2ZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5zbWFsbF9mbGV4IC5sZWZ0IGltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuc21hbGxfZmxleCAubGVmdCBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY2FyZF9kaXYgLmRlc2NfZGl2IC5hYnNfYWRkIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jYXJkX2RpdiAuZGVzY19kaXYgLmFic19hZGQgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmNhcmRfZGl2IC5kZXNjX2RpdiAuYWJzX2FkZCBpbWcge1xuICBjb2xvcjogI0ZGOEU4MDtcbiAgd2lkdGg6IDI1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuaGVhZF9sYmwge1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5iYWNrX2ltYWdlIC5wZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLmJhY2tfaW1hZ2UgLm5vdEluU3Rva2Uge1xuICBiYWNrZ3JvdW5kOiAjODM3MzczNWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDgwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5iYWNrX2ltYWdlIC5ub3RJblN0b2tlIC50ZXh0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLmJhY2tfaW1hZ2UgLmtpbmQge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYge1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgLm9mZmVyIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAuaXRlbXNLaW5kIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgLnByaWNlX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5wcmljZV9sYmwgLm9yaWdpbmFsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5wcmljZV9sYmwgLnNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5wcmljZV9sYmwgLmRpY291bnQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgLm5hbWVfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgLnN0b2tlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgLnN0b2tlIC5pbiB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5zdG9rZSAub3V0IHtcbiAgY29sb3I6IGluZGlhbnJlZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWxhdGVkIC5zZWNvbmRfZGl2IC5idG5CdG0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiAuYnRuQnRtIC5yaXBwbGUtcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogI2YyNzQ3NDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlbGF0ZWQgLnNlY29uZF9kaXYgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyOWI1MDc7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVsYXRlZCAuc2Vjb25kX2RpdiBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA5MHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjliNTA3O1xuICAtLWJvcmRlci1jb2xvcjogIzczRDI1Qztcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLnNsaWRlcl9kaXZ7XG4gICAgICAvLyBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICAgIGlvbi1zbGlkZXtcbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC5wZXJjZW50e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC50b3BfbGJse1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgfVxuXG4gICBcblxuICAgIC5kZXRhaWxfZGl2e1xuICAgICAgICAucHJvX25hbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtc0tpbmR7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4OztcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb19kZXRhaWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgICAudmFyaWFudHtcbiAgICAgICAgICAgIC5zZWxlY3RlcntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWxlY3QtaWNvbntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc21hbGxfZmxleF9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICBcbiAgICAgICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7ICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcmljZV9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgLm9yaWdpbmFse1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2VsbHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kaWNvdW50e1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICBcbiAgICAgICAgICAgIC5hZGRCdG57XG4gICAgICAgICAgICAgIC5yaXBwbGUtcGFyZW50IHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGFkZFxuICAgICAgICAgIFxuICAgICAgICAgICAgLmFic19hZGR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAgIFxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkY4RTgwO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICAucmF0aW5nSXRlbXN7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5zdG9yZU5hbWV7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9fZGVzY19kaXZ7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1jaGlwe1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheTtcblxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGl2ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjksMTk0LDk3LDAuMik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpZ2h0X2xibHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuXG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgIC5jb250ZW50X2RpdntcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcblxuICAgICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgIC5jYXJkX2RpdntcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICBcbiAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgIGhlaWdodDogOTVweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDk1cHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogOTVweDtcbiAgICAgIFxuICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgLmRlc2NfZGl2e1xuICAgICAgICAgICAgICAucHJvX25hbWV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtdWxpLWJvbGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5wcm9fZGV0YWlse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICAuc21hbGxfZmxleHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBcbiAgICAgICAgICAgICAgICAubGVmdHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDsgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICAgIC5hYnNfYWRke1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgICBcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGOEU4MDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnJlbGF0ZWR7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG11bGktYm9sZDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgLnBlcmNlbnR7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5ub3RJblN0b2tle1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzgzNzM3MzVjO1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgLnRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAua2luZHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zZWNvbmRfZGl2e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAub2ZmZXJ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaXRlbXNLaW5ke1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcmljZV9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgLm9yaWdpbmFse1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAuc2VsbHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5kaWNvdW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5uYW1lX2xibHtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5kZXNje1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC5zdG9rZXtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgLmlue1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIC5vdXR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmRpYW5yZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5idG5CdG17XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgLnJpcHBsZS1wYXJlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjI3NDc0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjliNTA3O1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjliNTA3O1xuICAgICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjNzNEMjVDO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbn0iXX0= */";
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