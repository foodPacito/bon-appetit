webpackJsonp([7],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestMealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_order__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RestMealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RestMealsPage = (function () {
    function RestMealsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RestMealsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestMealsPage');
    };
    RestMealsPage.prototype.order = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__order_order__["a" /* OrderPage */]);
    };
    return RestMealsPage;
}());
RestMealsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rest-meals',template:/*ion-inline-start:"C:\Users\Duha\Desktop\bon-appetit\src\pages\rest-meals\rest-meals.html"*/'<!--\n\n  Generated template for the RestMealsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>RestMeals</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list radio-group>\n\n  <ion-list-header>\n\n    resturant 1\n\n  </ion-list-header>\n\n\n\n  <ion-item>\n\n    <ion-label>meal1</ion-label>\n\n    <ion-radio checked="true" value="meal1"></ion-radio>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>meal2</ion-label>\n\n    <ion-radio value="meal2"></ion-radio>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>meal3</ion-label>\n\n    <ion-radio value="meal3"></ion-radio>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>meal4</ion-label>\n\n    <ion-radio value="meal4"></ion-radio>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n<button ion-button (click)="order()" >order</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Duha\Desktop\bon-appetit\src\pages\rest-meals\rest-meals.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], RestMealsPage);

//# sourceMappingURL=rest-meals.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelivaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DelivaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DelivaryPage = (function () {
    function DelivaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DelivaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DelivaryPage');
    };
    return DelivaryPage;
}());
DelivaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-delivary',template:/*ion-inline-start:"C:\Users\Duha\Desktop\bon-appetit\src\pages\delivary\delivary.html"*/'<!--\n  Generated template for the DelivaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>delivary</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<strong> the map should be her</strong>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Duha\Desktop\bon-appetit\src\pages\delivary\delivary.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], DelivaryPage);

//# sourceMappingURL=delivary.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandPickPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HandPickPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HandPickPage = (function () {
    function HandPickPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HandPickPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HandPickPage');
    };
    return HandPickPage;
}());
HandPickPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hand-pick',template:/*ion-inline-start:"C:\Users\Duha\Desktop\bon-appetit\src\pages\hand-pick\hand-pick.html"*/'<!--\n  Generated template for the HandPickPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>handPick</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Duha\Desktop\bon-appetit\src\pages\hand-pick\hand-pick.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], HandPickPage);

//# sourceMappingURL=hand-pick.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MealsPage = (function () {
    function MealsPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.Meals = [];
    }
    MealsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MealsPage');
    };
    MealsPage.prototype.addMeal = function (name, numbers) {
        // this.Meals.push([name,numbers])
        this.Meals.push([name, numbers]);
        this.storage.set('meal', this.Meals);
    };
    MealsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('meal').then(function (val) {
            if (val) {
                console.log(val);
                for (var i = 0; i < val.length; i++) {
                    _this.Meals.push(val[i]);
                }
            }
        });
    };
    return MealsPage;
}());
MealsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-meals',template:/*ion-inline-start:"C:\Users\Duha\Desktop\bon-appetit\src\pages\meals\meals.html"*/'<!--\n\n  Generated template for the MealsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>meals</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-list *ngFor= "let Meal of Meals">\n\n  <ion-item>\n\n    {{Meal[0]}}, {{Meal[1]}}\n\n  </ion-item>\n\n</ion-list>\n\n<ion-input type= "text" [(ngModel)]="Type"> </ion-input>\n\n<ion-input type= "number" [(ngModel)]="Num"> </ion-input>\n\n<button ion-button (click) ="addMeal(Type, Num)">Add</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Duha\Desktop\bon-appetit\src\pages\meals\meals.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], MealsPage);

//# sourceMappingURL=meals.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestsPage = (function () {
    function RequestsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestsPage');
    };
    return RequestsPage;
}());
RequestsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-requests',template:/*ion-inline-start:"C:\Users\Duha\Desktop\bon-appetit\src\pages\requests\requests.html"*/'<!--\n\n  Generated template for the RequestsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>requests</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<h1>hello world</h1>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Duha\Desktop\bon-appetit\src\pages\requests\requests.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], RequestsPage);

//# sourceMappingURL=requests.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hand_pick_hand_pick__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delivary_delivary__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = (function () {
    function OrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
    };
    OrderPage.prototype.handPick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hand_pick_hand_pick__["a" /* HandPickPage */]);
    };
    OrderPage.prototype.delivary = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__delivary_delivary__["a" /* DelivaryPage */]);
    };
    return OrderPage;
}());
OrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order',template:/*ion-inline-start:"C:\Users\Duha\Desktop\bon-appetit\src\pages\order\order.html"*/'<!--\n  Generated template for the OrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>order</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<strong>how do you want to take your meal </strong><br><br>\n<button ion-button (click)="handPick()">handPick</button><br>\n<button ion-button (click)="delivary()">Delivary</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Duha\Desktop\bon-appetit\src\pages\order\order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], OrderPage);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = (function () {
    function SignInPage(navCtrl, navParams, angularFireAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.angularFireAuth = angularFireAuth;
        this.fbLoggedIn = false;
        this.googleLogedin = false;
        this.googlprovider = new __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.GoogleAuthProvider();
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.fbLogin = function () {
        var _this = this;
        this.angularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth.FacebookAuthProvider()).then(function (res) {
            _this.fbLoggedIn = true;
            _this.fbData = res;
        });
    };
    SignInPage.prototype.fbLogout = function () {
        this.angularFireAuth.auth.signOut();
        this.fbLoggedIn = false;
    };
    SignInPage.prototype.googleLogin = function () {
        var _this = this;
        this.angularFireAuth.auth.signInWithPopup(this.googlprovider).then(function (res) {
            _this.googleLogedin = true;
            _this.googledata = res;
            console.log('login from google');
            console.log(res);
        });
    };
    SignInPage.prototype.googleLogout = function () {
        this.angularFireAuth.auth.signOut();
        this.googleLogedin = false;
        console.log('logout from google');
    };
    return SignInPage;
}());
SignInPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign-in',template:/*ion-inline-start:"C:\Users\Duha\Desktop\bon-appetit\src\pages\sign-in\sign-in.html"*/'<!--\n\n  Generated template for the SignInPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>sign in</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button block round *ngIf=!fbLoggedIn (click)=\'fbLogin()\'>Log In</button>\n\n  <button ion-button block round *ngIf=fbLoggedIn (click)=\'fbLogout()\'>Log Out</button>\n\n\n\n <button ion-button block round *ngIf=!googleLogedin (click)=\'googleLogin()\' >google Login</button>\n\n <button ion-button block round *ngIf=googleLogedin (click)=\'googleLogout()\' >google Logout</button>\n\n</ion-content>\n\n<!-- https://fireapp-14c15.firebaseapp.com/__/auth/handler -->'/*ion-inline-end:"C:\Users\Duha\Desktop\bon-appetit\src\pages\sign-in\sign-in.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], SignInPage);

var _a, _b, _c;
//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/delivary/delivary.module": [
		489,
		6
	],
	"../pages/hand-pick/hand-pick.module": [
		490,
		5
	],
	"../pages/meals/meals.module": [
		491,
		4
	],
	"../pages/order/order.module": [
		494,
		3
	],
	"../pages/requests/requests.module": [
		492,
		2
	],
	"../pages/sign-in/sign-in.module": [
		495,
		1
	],
	"../pages/user-home/user-home.module": [
		493,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_meals_rest_meals__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserHomePage = (function () {
    function UserHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserHomePage');
    };
    UserHomePage.prototype.goToMealsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__rest_meals_rest_meals__["a" /* RestMealsPage */]);
    };
    return UserHomePage;
}());
UserHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-home',template:/*ion-inline-start:"C:\Users\Duha\Desktop\bon-appetit\src\pages\user-home\user-home.html"*/'<!--\n  Generated template for the UserHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>user-home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n<button ion-button block round (click)=\'goToMealsPage()\'>Go To Meals</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Duha\Desktop\bon-appetit\src\pages\user-home\user-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], UserHomePage);

//# sourceMappingURL=user-home.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(325);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_rest_meals_rest_meals__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_requests_requests__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_meals_meals__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_order_order__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_delivary_delivary__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_hand_pick_hand_pick__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_user_home_user_home__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_sign_in_sign_in__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseConfig = {
    apiKey: "AIzaSyBnH6BJVQHmst0wH2in3G4ftWxG2-m5r34",
    authDomain: "fireapp-14c15.firebaseapp.com",
    databaseURL: "https://fireapp-14c15.firebaseio.com",
    projectId: "fireapp-14c15",
    storageBucket: "fireapp-14c15.appspot.com",
    messagingSenderId: "374147991168"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_rest_meals_rest_meals__["a" /* RestMealsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_requests_requests__["a" /* RequestsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_meals_meals__["a" /* MealsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_delivary_delivary__["a" /* DelivaryPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_hand_pick_hand_pick__["a" /* HandPickPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_user_home_user_home__["a" /* UserHomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_sign_in_sign_in__["a" /* SignInPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/delivary/delivary.module#DelivaryPageModule', name: 'DelivaryPage', segment: 'delivary', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/hand-pick/hand-pick.module#HandPickPageModule', name: 'HandPickPage', segment: 'hand-pick', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/meals/meals.module#MealsPageModule', name: 'MealsPage', segment: 'meals', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/requests/requests.module#RequestsPageModule', name: 'RequestsPage', segment: 'requests', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user-home/user-home.module#UserHomePageModule', name: 'UserHomePage', segment: 'user-home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_11__pages_rest_meals_rest_meals__["a" /* RestMealsPage */]),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_rest_meals_rest_meals__["a" /* RestMealsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_requests_requests__["a" /* RequestsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_meals_meals__["a" /* MealsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_order_order__["a" /* OrderPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_delivary_delivary__["a" /* DelivaryPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_hand_pick_hand_pick__["a" /* HandPickPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_user_home_user_home__["a" /* UserHomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_sign_in_sign_in__["a" /* SignInPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__["a" /* SignInPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Duha\Desktop\bon-appetit\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Duha\Desktop\bon-appetit\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_meals_rest_meals__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requests_requests__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meals_meals__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.goToMealsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__rest_meals_rest_meals__["a" /* RestMealsPage */]);
    };
    HomePage.prototype.reqPage = function () {
        console.log("hi");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__requests_requests__["a" /* RequestsPage */]);
    };
    ;
    HomePage.prototype.mealPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__meals_meals__["a" /* MealsPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Duha\Desktop\bon-appetit\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Home\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <img src="http://www.kavach.mobi/images/Restaurants.jpg"/>\n\n<ion-list>\n\n  \n\n  <button ion-button (click)= "mealPage()">Meals </button>\n\n  <button ion-button (click)= "reqPage()">Request </button>\n\n  \n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Duha\Desktop\bon-appetit\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[309]);
//# sourceMappingURL=main.js.map