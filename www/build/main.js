webpackJsonp([2],{

<<<<<<< HEAD
/***/ 131:
=======
/***/ 100:
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(186);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(151);
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
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
<<<<<<< HEAD
        selector: 'page-meals',template:/*ion-inline-start:"/home/siraj/Desktop/bon-appetit/src/pages/meals/meals.html"*/'<!--\n  Generated template for the MealsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>meals</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list *ngFor= "let Meal of Meals">\n  <ion-item>\n    {{Meal[0]}}, {{Meal[1]}}\n  </ion-item>\n</ion-list>\n<ion-input type= "text" [(ngModel)]="Type"> </ion-input>\n<ion-input type= "number" [(ngModel)]="Num"> </ion-input>\n<button ion-button (click) ="addMeal(Type, Num)">Add</button>\n</ion-content>\n'/*ion-inline-end:"/home/siraj/Desktop/bon-appetit/src/pages/meals/meals.html"*/,
=======
        selector: 'page-meals',template:/*ion-inline-start:"/home/electricfiras/Desktop/Thesis/bon-appetit/src/pages/meals/meals.html"*/'<!--\n  Generated template for the MealsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>meals</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list *ngFor= "let Meal of Meals">\n  <ion-item>\n    {{Meal[0]}}, {{Meal[1]}}\n  </ion-item>\n</ion-list>\n<ion-input type= "text" [(ngModel)]="Type"> </ion-input>\n<ion-input type= "number" [(ngModel)]="Num"> </ion-input>\n<button ion-button (click) ="addMeal(Type, Num)">Add</button>\n</ion-content>\n'/*ion-inline-end:"/home/electricfiras/Desktop/Thesis/bon-appetit/src/pages/meals/meals.html"*/,
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], MealsPage);

//# sourceMappingURL=meals.js.map

/***/ }),

<<<<<<< HEAD
/***/ 132:
=======
/***/ 101:
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
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
<<<<<<< HEAD
        selector: 'page-requests',template:/*ion-inline-start:"/home/siraj/Desktop/bon-appetit/src/pages/requests/requests.html"*/'<!--\n  Generated template for the RequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>requests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1>hello world</h1>\n</ion-content>\n'/*ion-inline-end:"/home/siraj/Desktop/bon-appetit/src/pages/requests/requests.html"*/,
=======
        selector: 'page-requests',template:/*ion-inline-start:"/home/electricfiras/Desktop/Thesis/bon-appetit/src/pages/requests/requests.html"*/'<!--\n  Generated template for the RequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>requests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<h1>hello world</h1>\n</ion-content>\n'/*ion-inline-end:"/home/electricfiras/Desktop/Thesis/bon-appetit/src/pages/requests/requests.html"*/,
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], RequestsPage);

//# sourceMappingURL=requests.js.map

/***/ }),

<<<<<<< HEAD
/***/ 142:
=======
/***/ 109:
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
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
<<<<<<< HEAD
webpackEmptyAsyncContext.id = 142;

/***/ }),

/***/ 185:
=======
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/meals/meals.module": [
<<<<<<< HEAD
		437,
		1
	],
	"../pages/requests/requests.module": [
		438,
=======
		268,
		1
	],
	"../pages/requests/requests.module": [
		269,
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
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
<<<<<<< HEAD
webpackAsyncContext.id = 185;
=======
webpackAsyncContext.id = 150;
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
module.exports = webpackAsyncContext;

/***/ }),

<<<<<<< HEAD
/***/ 279:
=======
/***/ 195:
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_meals_rest_meals__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requests_requests__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meals_meals__ = __webpack_require__(131);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requests_requests__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meals_meals__ = __webpack_require__(100);
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




<<<<<<< HEAD

=======
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
<<<<<<< HEAD
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
=======
    HomePage.prototype.reqPage = function () {
        console.log("hi");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__requests_requests__["a" /* RequestsPage */]);
    };
    ;
    HomePage.prototype.mealPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__meals_meals__["a" /* MealsPage */]);
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
<<<<<<< HEAD
        selector: 'page-home',template:/*ion-inline-start:"/home/siraj/Desktop/bon-appetit/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="http://www.kavach.mobi/images/Restaurants.jpg"/>\n<ion-list>\n  \n  <button ion-button (click)= "mealPage()">Meals </button>\n  <button ion-button (click)= "reqPage()">Request </button>\n  <button ion-button block round (click)=\'goToMealsPage()\'>Go To Meals</button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/siraj/Desktop/bon-appetit/src/pages/home/home.html"*/
=======
        selector: 'page-home',template:/*ion-inline-start:"/home/electricfiras/Desktop/Thesis/bon-appetit/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Restaurant\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <img src="http://www.kavach.mobi/images/Restaurants.jpg"/>\n<ion-list>\n    <button ion-button (click)= "mealPage()">Meals </button>\n    \n  <button ion-button (click)= "reqPage()">Request </button>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/electricfiras/Desktop/Thesis/bon-appetit/src/pages/home/home.html"*/
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

<<<<<<< HEAD
/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestMealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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
    return RestMealsPage;
}());
RestMealsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-rest-meals',template:/*ion-inline-start:"/home/siraj/Desktop/bon-appetit/src/pages/rest-meals/rest-meals.html"*/'<!--\n  Generated template for the RestMealsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>RestMeals</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/siraj/Desktop/bon-appetit/src/pages/rest-meals/rest-meals.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], RestMealsPage);

//# sourceMappingURL=rest-meals.js.map

/***/ }),

/***/ 281:
=======
/***/ 196:
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(297);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD
/***/ 297:
=======
/***/ 215:
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_rest_meals_rest_meals__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_requests_requests__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_meals_meals__ = __webpack_require__(131);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_requests_requests__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_meals_meals__ = __webpack_require__(100);
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










<<<<<<< HEAD




var firebaseConfig = {
    apiKey: "AIzaSyBnH6BJVQHmst0wH2in3G4ftWxG2-m5r34",
    authDomain: "fireapp-14c15.firebaseapp.com",
    databaseURL: "https://fireapp-14c15.firebaseio.com",
    projectId: "fireapp-14c15",
    storageBucket: "fireapp-14c15.appspot.com",
    messagingSenderId: "374147991168"
};
=======
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
<<<<<<< HEAD
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_rest_meals_rest_meals__["a" /* RestMealsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_requests_requests__["a" /* RequestsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_meals_meals__["a" /* MealsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
=======
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_requests_requests__["a" /* RequestsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_meals_meals__["a" /* MealsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
                links: [
                    { loadChildren: '../pages/meals/meals.module#MealsPageModule', name: 'MealsPage', segment: 'meals', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/requests/requests.module#RequestsPageModule', name: 'RequestsPage', segment: 'requests', priority: 'low', defaultHistory: [] }
                ]
            }),
<<<<<<< HEAD
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_11__pages_rest_meals_rest_meals__["a" /* RestMealsPage */]),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_rest_meals_rest_meals__["a" /* RestMealsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_requests_requests__["a" /* RequestsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_meals_meals__["a" /* MealsPage */]
=======
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_requests_requests__["a" /* RequestsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_meals_meals__["a" /* MealsPage */]
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
<<<<<<< HEAD
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabase */],
=======
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 436:
=======
/***/ 267:
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(279);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
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
<<<<<<< HEAD
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/siraj/Desktop/bon-appetit/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/siraj/Desktop/bon-appetit/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
], MyApp);

var _a, _b, _c;
=======
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/electricfiras/Desktop/Thesis/bon-appetit/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/electricfiras/Desktop/Thesis/bon-appetit/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
//# sourceMappingURL=app.component.js.map

/***/ })

<<<<<<< HEAD
},[281]);
=======
},[196]);
>>>>>>> c0bbcbbc9c95b89ea3feee2d6bea9d3f03e9bffd
//# sourceMappingURL=main.js.map