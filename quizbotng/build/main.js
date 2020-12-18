(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+3i6":
/*!*************************************!*\
  !*** ./src/app/quiz-ser.service.ts ***!
  \*************************************/
/*! exports provided: QuizSerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizSerService", function() { return QuizSerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class QuizSerService {
    constructor(http) {
        this.http = http;
        this.quizURL = "http://localhost:3000/api/quiz";
    }
    getQuestions() {
        return this.http.get(this.quizURL)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    getSingleQuestion(idQuiz) {
        return this.http.get(this.quizURL + '/' + idQuiz)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    createQuiz(newQuiz) {
        return this.http.post(this.quizURL, newQuiz)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    updateQuiz(idQuiz, updateQuiz) {
        return this.http.put(this.quizURL + "/" + idQuiz, this.updateQuiz)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    deleteQuiz(idQuiz) {
        return this.http.delete(this.quizURL + "/" + idQuiz)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    ErrorMethod(error) {
        console.log("something is not working");
    }
    ;
}
QuizSerService.ɵfac = function QuizSerService_Factory(t) { return new (t || QuizSerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
QuizSerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuizSerService, factory: QuizSerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizSerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\prash\Documents\QuitBotGame\quizbotng\src\main.ts */"zUnb");


/***/ }),

/***/ "8u/5":
/*!******************************************!*\
  !*** ./src/app/picworddb-ser.service.ts ***!
  \******************************************/
/*! exports provided: PicworddbSerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicworddbSerService", function() { return PicworddbSerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PicworddbSerService {
    constructor(http) {
        this.http = http;
        this.picworddbURL = "http://localhost:3000/api/picworddb";
    }
    getPicQuizzes() {
        return this.http.get(this.picworddbURL)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    getSinglePicQuiz(PicWordID) {
        return this.http.get(this.picworddbURL + '/' + PicWordID)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    getNextPicQuiz(PicWordID) {
        return this.http.get(this.picworddbURL + '/next/' + PicWordID)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    getPrePicQuiz(PicWordID) {
        return this.http.get(this.picworddbURL + '/pre/' + PicWordID)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    createPicworddb(newPicworddb) {
        return this.http.post(this.picworddbURL, newPicworddb)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    updatePicworddb(PicWordID, updatePicworddb) {
        return this.http.put(this.picworddbURL + "/" + PicWordID, this.updatePicworddb)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    deletePicworddb(PicWordID) {
        return this.http.delete(this.picworddbURL + "/" + PicWordID)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    ErrorMethod(error) {
        console.log("something is not working");
    }
    ;
}
PicworddbSerService.ɵfac = function PicworddbSerService_Factory(t) { return new (t || PicworddbSerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PicworddbSerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PicworddbSerService, factory: PicworddbSerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicworddbSerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-encrypt-cookie */ "0h9A");




class HomeComponent {
    constructor(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    ngAfterViewInit() {
        // let animation = anime({
        //   targets: '.quizlogohome',
        //   translateY: 100,
        //   borderRadius: 50,
        //   duration: 1500,
        //   easing: 'linear'
        // });
        if (this.cookie.get("user", false) == '') {
            $('#loginbtn').show();
            $('#signupbtn').show();
            $('#playbtn').text("Play as Guest");
        }
        else {
            $('#loginbtn').hide();
            $('#signupbtn').hide();
            $('#playbtn').text("Play");
        }
    }
    playasguest() {
        this.router.navigate(['/quizplay']);
    }
    loginbtn() {
        this.router.navigate(['/login']);
    }
    singupbtn() {
        this.router.navigate(['/signup']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 14, vars: 0, consts: [["rel", "shortcut icon", "href", "../../assets/img/favicon.ico"], [1, "container"], [1, "container", "col-lg-6", "col-md-10", "sm-12"], [1, "d-flex", "flex-row", "quizlogohome"], ["name", "loginbtn", "id", "loginbtn", 3, "click"], ["name", "singupbtn", "id", "signupbtn", 3, "click"], ["name", "playbtn", "id", "playbtn", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "QuizBot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.loginbtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { return ctx.singupbtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign Up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_12_listener() { return ctx.playasguest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Play as Guest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"] }]; }, null); })();


/***/ }),

/***/ "AG9N":
/*!**************************************************!*\
  !*** ./src/app/framework/framework.component.ts ***!
  \**************************************************/
/*! exports provided: FrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkComponent", function() { return FrameworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _userbase_ser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userbase-ser.service */ "cwxq");
/* harmony import */ var _userprogress_ser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userprogress-ser.service */ "r4Qa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-encrypt-cookie */ "0h9A");






class FrameworkComponent {
    constructor(userbaseService, userprogressService, router, cookie, ngzone) {
        this.userbaseService = userbaseService;
        this.userprogressService = userprogressService;
        this.router = router;
        this.cookie = cookie;
        this.ngzone = ngzone;
        this.userbase = {
            IdUser: null,
            Username: '',
            UserPassword: '',
            UserEmail: '',
            UserPhoneNumber: null,
            UserAge: null
        };
        this.userprogress = {
            Userbase_IdUser: 0,
            PicWordDB_PicWordID: 0,
            PicWordDB_PicDone: 0,
            MathRiddles_idMathRiddle: 0,
            MathRiddle_Done: 0,
            Quiz_idQuiz: 0,
            Quiz_QuizDone: 0,
            UserCoins: 0,
            UserLevel: 0
        };
    }
    ngOnInit() {
        if (this.cookie.get("user", false) == '') {
            setTimeout(() => {
                $('#username_head').attr("href", "/login");
                // this.router.navigate(['/']);
            }, 300);
        }
        else {
            this.usernamecookie = this.cookie.get("user", false);
            this.keycookie = this.cookie.get(this.usernamecookie + '-k', false);
            this.passcookie = this.cookie.get(this.usernamecookie.valueOf(), true, this.keycookie.valueOf());
            this.userbaseService.getUserbyUserName(this.usernamecookie)
                .then((userbase) => {
                this.userbase = userbase;
            });
            setTimeout(() => {
                this.userprogressService.getUserProgress(this.userbase.IdUser)
                    .then((userprogress) => {
                    this.userprogress = userprogress;
                });
                setTimeout(() => {
                    $('#username_head').attr("href", "/profile");
                    $('#username_head').text(this.userbase.Username);
                    $('#coin_head').text(this.userprogress.UserCoins);
                    $('#level_head').text("Level: " + this.userprogress.UserLevel);
                }, 300);
            }, 300);
        }
    }
}
FrameworkComponent.ɵfac = function FrameworkComponent_Factory(t) { return new (t || FrameworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userbase_ser_service__WEBPACK_IMPORTED_MODULE_1__["UserbaseSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userprogress_ser_service__WEBPACK_IMPORTED_MODULE_2__["UserprogressSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_4__["NgxEncryptCookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
FrameworkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrameworkComponent, selectors: [["app-framework"]], decls: 11, vars: 0, consts: [[1, "container"], [1, "container", "col-lg-6", "col-md-10", "sm-12"], [1, "d-flex", "flex-row", "quizlogohome"], ["src", "../../assets/img/logolandscape.png", "width", "350px", "alt", "QuizBot"], ["id", "username_head", "href", "#"], ["id", "coin_head"], ["id", "level_head"]], template: function FrameworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login | Sign-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyYW1ld29yay9mcmFtZXdvcmsuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrameworkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-framework',
                templateUrl: './framework.component.html',
                styleUrls: ['./framework.component.css']
            }]
    }], function () { return [{ type: _userbase_ser_service__WEBPACK_IMPORTED_MODULE_1__["UserbaseSerService"] }, { type: _userprogress_ser_service__WEBPACK_IMPORTED_MODULE_2__["UserprogressSerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_4__["NgxEncryptCookieService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BP0J":
/*!********************************************************!*\
  !*** ./src/app/picword-play/picword-play.component.ts ***!
  \********************************************************/
/*! exports provided: PicwordPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicwordPlayComponent", function() { return PicwordPlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _picworddb_ser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../picworddb-ser.service */ "8u/5");
/* harmony import */ var ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-encrypt-cookie */ "0h9A");
/* harmony import */ var _userbase_ser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userbase-ser.service */ "cwxq");
/* harmony import */ var _userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userprogress-ser.service */ "r4Qa");
/* harmony import */ var _picwordlist_ser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../picwordlist-ser.service */ "OiEA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function PicwordPlayComponent_div_0_label_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PicwordPlayComponent_div_0_label_9_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.deleteletter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "wordbox", i_r4, "");
} }
function PicwordPlayComponent_div_0_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PicwordPlayComponent_div_0_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const word_r7 = ctx.$implicit; const i_r8 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.letterclick(word_r7, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "letter", i_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](word_r7);
} }
function PicwordPlayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PicwordPlayComponent_div_0_label_9_Template, 2, 1, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PicwordPlayComponent_div_0_button_11_Template, 2, 2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:8000/images/", ctx_r0.currentPiclist[0].PicLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:8000/images/", ctx_r0.currentPiclist[1].PicLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:8000/images/", ctx_r0.currentPiclist[2].PicLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:8000/images/", ctx_r0.currentPiclist[3].PicLink, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.randomstring);
} }
class PicwordPlayComponent {
    constructor(picwordService, cookie, userbaseService, userprogressService, piclistService, route, router) {
        this.picwordService = picwordService;
        this.cookie = cookie;
        this.userbaseService = userbaseService;
        this.userprogressService = userprogressService;
        this.piclistService = piclistService;
        this.route = route;
        this.router = router;
        this.isDataAvailable = false;
        this.datafetched = false;
        this.filledwords = 0;
        this.letterids = [];
        this.userbase = {
            IdUser: null,
            Username: '',
            UserPassword: '',
            UserEmail: '',
            UserPhoneNumber: null,
            UserAge: null
        };
        this.userprogress = {
            Userbase_IdUser: 0,
            PicWordDB_PicWordID: 0,
            PicWordDB_PicDone: 0,
            MathRiddles_idMathRiddle: 0,
            MathRiddle_Done: 0,
            Quiz_idQuiz: 0,
            Quiz_QuizDone: 0,
            UserCoins: 0,
            UserLevel: 0
        };
    }
    ngOnInit() {
        if (this.cookie.get("user", false) == '') {
            this.route.params.subscribe(params => {
                this.picwordID = params['PicWordID'];
                if (this.picwordID == null) {
                    this.picwordID = 2010203;
                }
                this.picwordService
                    .getSinglePicQuiz(this.picwordID)
                    .then((picwords) => {
                    this.currentPicword = picwords;
                });
                this.piclistService
                    .getSinglePiclist(this.picwordID)
                    .then((piclists) => {
                    this.currentPiclist = piclists;
                    this.isDataAvailable = true;
                });
                this.datafetched = false;
                setTimeout(() => {
                    this.answer = Array.from(this.currentPicword.PicAnswer);
                    this.randomstring = this.generateRandom(this.currentPicword.PicAnswer);
                }, 500);
            });
        }
        else {
            this.usernamecookie = this.cookie.get("user", false);
            this.keycookie = this.cookie.get(this.usernamecookie + '-k', false);
            this.passcookie = this.cookie.get(this.usernamecookie.valueOf(), true, this.keycookie.valueOf());
            this.route.params.subscribe(params => {
                this.picwordID = params['PicWordID'];
                this.userbaseService.getUserbyUserName(this.usernamecookie)
                    .then((userbase) => {
                    this.userbase = userbase;
                });
                setTimeout(() => {
                    this.userprogressService.getUserProgress(this.userbase.IdUser)
                        .then((userprogress) => {
                        this.userprogress = userprogress;
                    });
                    setTimeout(() => {
                        this.picwordID = this.userprogress.PicWordDB_PicWordID;
                        this.picdone = this.userprogress.PicWordDB_PicDone;
                        if (this.picwordID == null || this.picwordID == 0) {
                            this.picwordID = 2010203;
                        }
                        else if (this.picwordID != null || this.picwordID != 0) {
                            if (this.picdone == 1) {
                                this.picwordService.getNextPicQuiz(this.picwordID)
                                    .then((picwodbdb) => {
                                    this.tempdata = picwodbdb;
                                });
                                setTimeout(() => {
                                    this.picwordID = this.tempdata.PicWordID;
                                }, 200);
                            }
                        }
                        this.picwordService
                            .getSinglePicQuiz(this.picwordID)
                            .then((picwords) => {
                            this.currentPicword = picwords;
                        });
                        this.piclistService
                            .getSinglePiclist(this.picwordID)
                            .then((piclists) => {
                            this.currentPiclist = piclists;
                            this.isDataAvailable = true;
                        });
                        this.datafetched = false;
                        setTimeout(() => {
                            this.answer = Array.from(this.currentPicword.PicAnswer);
                            this.randomstring = this.generateRandom(this.currentPicword.PicAnswer);
                        }, 200);
                    }, 200);
                }, 200);
            });
        }
    }
    generateRandom(word) {
        var length = word.length;
        let final;
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        result = word + result;
        final = Array.from(result);
        final = final.sort(() => Math.random() - 0.5);
        return final;
    }
    deleteletter() {
        if (this.filledwords > 0) {
            this.filledwords--;
            $('#letter' + this.letterids[this.letterids.length - 1]).show();
            $('#wordbox' + this.filledwords).text('-');
            this.letterids.pop();
        }
    }
    letterclick(letter, i) {
        if (this.filledwords < this.currentPicword.PicAnswer.length) {
            $('#wordbox' + this.filledwords).text(letter);
            this.filledwords++;
            this.letterids.push(i);
            $('#letter' + i).hide();
        }
        if (this.filledwords >= this.currentPicword.PicAnswer.length) {
            let cans = '';
            for (var ab = 0; ab < this.letterids.length; ab++) {
                cans += this.randomstring[this.letterids[ab]];
            }
            if (this.currentPicword.PicAnswer == cans) {
                this.userprogress.PicWordDB_PicWordID = this.picwordID;
                this.userprogress.PicWordDB_PicDone = 1;
                this.userprogress.UserCoins = this.userprogress.UserCoins + 4;
                this.userprogressService.updateUserprogress(this.userbase.IdUser, this.userprogress);
                setTimeout(() => {
                    this.nextshow();
                }, 200);
            }
            else {
                alert("Incorrect!");
            }
        }
    }
    nextshow() {
        this.filledwords = 0;
        this.letterids = [];
        this.picwordService
            .getNextPicQuiz(this.currentPicword.PicWordID)
            .then((picwords) => {
            this.picdata = picwords;
            this.datafetched = true;
        });
        setTimeout(() => {
            if (this.datafetched == true) {
                this.isDataAvailable = false;
                $('label[id^="wordbox"]').text('-');
                this.router.navigateByUrl('/picplay/' + this.picdata.PicWordID);
            }
        }, 200);
    }
}
PicwordPlayComponent.ɵfac = function PicwordPlayComponent_Factory(t) { return new (t || PicwordPlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_picworddb_ser_service__WEBPACK_IMPORTED_MODULE_1__["PicworddbSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userbase_ser_service__WEBPACK_IMPORTED_MODULE_3__["UserbaseSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__["UserprogressSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_picwordlist_ser_service__WEBPACK_IMPORTED_MODULE_5__["PicwordlistSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
PicwordPlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PicwordPlayComponent, selectors: [["app-picword-play"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "godimagebox"], [1, "row"], [1, "col-1", 3, "src"], [1, "col-2", 3, "src"], [1, "answerbox"], ["class", "wordbox", "size", "1", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "letterbox"], [3, "id", "click", 4, "ngFor", "ngForOf"], ["size", "1", 1, "wordbox", 3, "id", "click"], [3, "id", "click"]], template: function PicwordPlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PicwordPlayComponent_div_0_Template, 12, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".col-1[_ngcontent-%COMP%]{\r\n    max-width:250px;\r\n}\r\n.col-2[_ngcontent-%COMP%]{\r\n    max-width:250px;\r\n}\r\n[class*=\"col-\"][_ngcontent-%COMP%]{\r\n    float:left;\r\n    padding: 15px;\r\n    border: none;\r\n}\r\n.row[_ngcontent-%COMP%]::after{\r\n    clear:both;\r\n    display: table;\r\n}\r\n.wordbox[_ngcontent-%COMP%]{\r\n    margin: 2px;\r\n    border: 1px solid white;\r\n    padding-left: 1em;\r\n    padding-right: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGljd29yZC1wbGF5L3BpY3dvcmQtcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGljd29yZC1wbGF5L3BpY3dvcmQtcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC0xe1xyXG4gICAgbWF4LXdpZHRoOjI1MHB4O1xyXG59XHJcbi5jb2wtMntcclxuICAgIG1heC13aWR0aDoyNTBweDtcclxufVxyXG5cclxuW2NsYXNzKj1cImNvbC1cIl17XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucm93OjphZnRlcntcclxuICAgIGNsZWFyOmJvdGg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4ud29yZGJveHtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicwordPlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-picword-play',
                templateUrl: './picword-play.component.html',
                styleUrls: ['./picword-play.component.css']
            }]
    }], function () { return [{ type: _picworddb_ser_service__WEBPACK_IMPORTED_MODULE_1__["PicworddbSerService"] }, { type: ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"] }, { type: _userbase_ser_service__WEBPACK_IMPORTED_MODULE_3__["UserbaseSerService"] }, { type: _userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__["UserprogressSerService"] }, { type: _picwordlist_ser_service__WEBPACK_IMPORTED_MODULE_5__["PicwordlistSerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "FY93":
/*!********************************************!*\
  !*** ./src/app/mathriddles-ser.service.ts ***!
  \********************************************/
/*! exports provided: MathriddlesSerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathriddlesSerService", function() { return MathriddlesSerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MathriddlesSerService {
    constructor(http) {
        this.http = http;
        this.mathriddlesURL = "http://localhost:3000/api/mathriddle";
    }
    getMathRiddles() {
        return this.http.get(this.mathriddlesURL)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    getRiddle(idMathRiddle) {
        return this.http.get(this.mathriddlesURL + '/' + idMathRiddle)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    getNextRiddle(idMathRiddle) {
        return this.http.get(this.mathriddlesURL + '/next/' + idMathRiddle)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    getPreRiddle(idMathRiddle) {
        return this.http.get(this.mathriddlesURL + '/pre/' + idMathRiddle)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    createMathRiddle(newMathRiddle) {
        return this.http.post(this.mathriddlesURL, newMathRiddle)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    updateMathRiddle(idMathRiddle, updateMathRiddle) {
        return this.http.put(this.mathriddlesURL + "/" + idMathRiddle, this.updateMathRiddle)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    deleteMathRiddle(idMathRiddle) {
        return this.http.delete(this.mathriddlesURL + "/" + idMathRiddle)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    ErrorMethod(error) {
        console.log("something is not working");
    }
    ;
}
MathriddlesSerService.ɵfac = function MathriddlesSerService_Factory(t) { return new (t || MathriddlesSerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MathriddlesSerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MathriddlesSerService, factory: MathriddlesSerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MathriddlesSerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "OiEA":
/*!********************************************!*\
  !*** ./src/app/picwordlist-ser.service.ts ***!
  \********************************************/
/*! exports provided: PicwordlistSerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicwordlistSerService", function() { return PicwordlistSerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PicwordlistSerService {
    constructor(http) {
        this.http = http;
        this.piclistURL = "http://localhost:3000/api/piclist";
    }
    getPiclist() {
        return this.http.get(this.piclistURL)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    getSinglePiclist(PicID) {
        return this.http.get(this.piclistURL + '/' + PicID)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    createPicwordlist(newPicwordlist) {
        return this.http.post(this.piclistURL, newPicwordlist)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    updatePicwordlist(PicID, updatePicwordlist) {
        return this.http.put(this.piclistURL + "/" + PicID, this.updatePicwordlist)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    deletePicwordlist(PicID) {
        return this.http.delete(this.piclistURL + "/" + PicID)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    ErrorMethod(error) {
        console.log("something is not working");
    }
    ;
}
PicwordlistSerService.ɵfac = function PicwordlistSerService_Factory(t) { return new (t || PicwordlistSerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PicwordlistSerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PicwordlistSerService, factory: PicwordlistSerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PicwordlistSerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 0, template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, forbiddenNameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _quiz_play_quiz_play_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quiz-play/quiz-play.component */ "pluZ");
/* harmony import */ var _framework_framework_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework/framework.component */ "AG9N");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _picword_play_picword_play_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./picword-play/picword-play.component */ "BP0J");
/* harmony import */ var _math_play_math_play_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./math-play/math-play.component */ "dyY0");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_framework_framework_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '/' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                },
                {
                    path: 'quizplay',
                    component: _quiz_play_quiz_play_component__WEBPACK_IMPORTED_MODULE_7__["QuizPlayComponent"]
                },
                {
                    path: 'quizplay/:idQuiz',
                    component: _quiz_play_quiz_play_component__WEBPACK_IMPORTED_MODULE_7__["QuizPlayComponent"]
                },
                {
                    path: 'login',
                    component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
                },
                {
                    path: 'signup',
                    component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]
                },
                {
                    path: 'picplay',
                    component: _picword_play_picword_play_component__WEBPACK_IMPORTED_MODULE_12__["PicwordPlayComponent"]
                },
                {
                    path: 'picplay/:PicWordID',
                    component: _picword_play_picword_play_component__WEBPACK_IMPORTED_MODULE_12__["PicwordPlayComponent"]
                },
                {
                    path: 'mathplay',
                    component: _math_play_math_play_component__WEBPACK_IMPORTED_MODULE_13__["MathPlayComponent"]
                },
                {
                    path: 'mathplay/:idMathRiddle',
                    component: _math_play_math_play_component__WEBPACK_IMPORTED_MODULE_13__["MathPlayComponent"]
                },
                {
                    path: 'profile',
                    component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _quiz_play_quiz_play_component__WEBPACK_IMPORTED_MODULE_7__["QuizPlayComponent"],
        _framework_framework_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
        _picword_play_picword_play_component__WEBPACK_IMPORTED_MODULE_12__["PicwordPlayComponent"],
        _math_play_math_play_component__WEBPACK_IMPORTED_MODULE_13__["MathPlayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _quiz_play_quiz_play_component__WEBPACK_IMPORTED_MODULE_7__["QuizPlayComponent"],
                    _framework_framework_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                    _picword_play_picword_play_component__WEBPACK_IMPORTED_MODULE_12__["PicwordPlayComponent"],
                    _math_play_math_play_component__WEBPACK_IMPORTED_MODULE_13__["MathPlayComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                        {
                            path: '',
                            component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                        },
                        {
                            path: 'quizplay',
                            component: _quiz_play_quiz_play_component__WEBPACK_IMPORTED_MODULE_7__["QuizPlayComponent"]
                        },
                        {
                            path: 'quizplay/:idQuiz',
                            component: _quiz_play_quiz_play_component__WEBPACK_IMPORTED_MODULE_7__["QuizPlayComponent"]
                        },
                        {
                            path: 'login',
                            component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
                        },
                        {
                            path: 'signup',
                            component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"]
                        },
                        {
                            path: 'picplay',
                            component: _picword_play_picword_play_component__WEBPACK_IMPORTED_MODULE_12__["PicwordPlayComponent"]
                        },
                        {
                            path: 'picplay/:PicWordID',
                            component: _picword_play_picword_play_component__WEBPACK_IMPORTED_MODULE_12__["PicwordPlayComponent"]
                        },
                        {
                            path: 'mathplay',
                            component: _math_play_math_play_component__WEBPACK_IMPORTED_MODULE_13__["MathPlayComponent"]
                        },
                        {
                            path: 'mathplay/:idMathRiddle',
                            component: _math_play_math_play_component__WEBPACK_IMPORTED_MODULE_13__["MathPlayComponent"]
                        },
                        {
                            path: 'profile',
                            component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]
                        }
                    ])
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"], useValue: '/' }],
                bootstrap: [_framework_framework_component__WEBPACK_IMPORTED_MODULE_8__["FrameworkComponent"]]
            }]
    }], null, null); })();
function forbiddenNameValidator(nameRe) {
    return (control) => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}


/***/ }),

/***/ "cwxq":
/*!*****************************************!*\
  !*** ./src/app/userbase-ser.service.ts ***!
  \*****************************************/
/*! exports provided: UserbaseSerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserbaseSerService", function() { return UserbaseSerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserbaseSerService {
    constructor(http) {
        this.http = http;
        this.userbaseURL = "http://localhost:3000/users";
    }
    getUserbase() {
        return this.http.get(this.userbaseURL)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    getSingleUser(IdUser) {
        return this.http.get(this.userbaseURL + '/' + IdUser)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    getUserbyUserName(Username) {
        return this.http.get(this.userbaseURL + '/user/' + Username)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    createUser(newUser) {
        return this.http.post(this.userbaseURL, newUser)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    updateUser(IdUser, UpdateUser) {
        return this.http.put(this.userbaseURL + "/" + IdUser, this.updateUser)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    deleteUser(IdUser) {
        return this.http.delete(this.userbaseURL + "/" + IdUser)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    ErrorMethod(error) {
        console.log("something is not working");
    }
    ;
}
UserbaseSerService.ɵfac = function UserbaseSerService_Factory(t) { return new (t || UserbaseSerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserbaseSerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserbaseSerService, factory: UserbaseSerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserbaseSerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "dyY0":
/*!**************************************************!*\
  !*** ./src/app/math-play/math-play.component.ts ***!
  \**************************************************/
/*! exports provided: MathPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathPlayComponent", function() { return MathPlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mathriddles_ser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mathriddles-ser.service */ "FY93");
/* harmony import */ var ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-encrypt-cookie */ "0h9A");
/* harmony import */ var _userbase_ser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userbase-ser.service */ "cwxq");
/* harmony import */ var _userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userprogress-ser.service */ "r4Qa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function MathPlayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathPlayComponent_div_0_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.enterclick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathPlayComponent_div_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.insertedvalue(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathPlayComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.insertedvalue(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathPlayComponent_div_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.insertedvalue(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathPlayComponent_div_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.insertedvalue(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathPlayComponent_div_0_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.insertedvalue(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathPlayComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.insertedvalue(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathPlayComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.insertedvalue(7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathPlayComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.insertedvalue(8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathPlayComponent_div_0_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.insertedvalue(9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MathPlayComponent_div_0_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.insertedvalue(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "http://localhost:8000/mathrid/", ctx_r0.currentRiddle.MathRiddle, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class MathPlayComponent {
    constructor(mathriddleService, cookie, userbaseService, userprogressService, route, router) {
        this.mathriddleService = mathriddleService;
        this.cookie = cookie;
        this.userbaseService = userbaseService;
        this.userprogressService = userprogressService;
        this.route = route;
        this.router = router;
        this.answer = '';
        this.datafetched = false;
        this.isDataAvailable = false;
        this.uservalue = [];
        this.userbase = {
            IdUser: null,
            Username: '',
            UserPassword: '',
            UserEmail: '',
            UserPhoneNumber: null,
            UserAge: null
        };
        this.userprogress = {
            Userbase_IdUser: 0,
            PicWordDB_PicWordID: 0,
            PicWordDB_PicDone: 0,
            MathRiddles_idMathRiddle: 0,
            MathRiddle_Done: 0,
            Quiz_idQuiz: 0,
            Quiz_QuizDone: 0,
            UserCoins: 0,
            UserLevel: 0
        };
    }
    ngOnInit() {
        if (this.cookie.get("user", false) == '') {
            this.route.params.subscribe(params => {
                this.idMathRiddle = params['idMathRiddle'];
                if (this.idMathRiddle == null) {
                    this.idMathRiddle = 1;
                }
                this.mathriddleService
                    .getRiddle(this.idMathRiddle)
                    .then((mathriddles) => {
                    this.currentRiddle = mathriddles;
                    // console.log(this.currentRiddle);
                    this.isDataAvailable = true;
                });
                this.datafetched = false;
                setTimeout(() => {
                    this.answer = this.currentRiddle.MathRiddleAnswer;
                }, 500);
            });
        }
        else {
            this.usernamecookie = this.cookie.get("user", false);
            this.keycookie = this.cookie.get(this.usernamecookie + '-k', false);
            this.passcookie = this.cookie.get(this.usernamecookie.valueOf(), true, this.keycookie.valueOf());
            this.route.params.subscribe(params => {
                this.idMathRiddle = params['idMathRiddle'];
                this.userbaseService.getUserbyUserName(this.usernamecookie)
                    .then((userbase) => {
                    this.userbase = userbase;
                });
                setTimeout(() => {
                    this.userprogressService.getUserProgress(this.userbase.IdUser)
                        .then((userprogress) => {
                        this.userprogress = userprogress;
                    });
                    setTimeout(() => {
                        this.idMathRiddle = this.userprogress.MathRiddles_idMathRiddle;
                        this.riddledone = this.userprogress.MathRiddle_Done;
                        if (this.idMathRiddle == null || this.idMathRiddle == 0) {
                            this.idMathRiddle = 1;
                        }
                        else if (this.idMathRiddle != null || this.idMathRiddle != 0) {
                            if (this.riddledone == 1) {
                                this.mathriddleService
                                    .getNextRiddle(this.idMathRiddle)
                                    .then((riddles) => {
                                    this.tempdata = riddles;
                                });
                                setTimeout(() => {
                                    this.idMathRiddle = this.tempdata.idMathRiddle;
                                }, 200);
                            }
                        }
                        this.mathriddleService
                            .getRiddle(this.idMathRiddle)
                            .then((mathriddles) => {
                            this.currentRiddle = mathriddles;
                            // console.log(this.currentRiddle);
                            this.isDataAvailable = true;
                        });
                        this.datafetched = false;
                        setTimeout(() => {
                            this.answer = this.currentRiddle.MathRiddleAnswer;
                        }, 500);
                    }, 200);
                }, 300);
            });
        }
    }
    insertedvalue(value) {
        $('#answerbox').val($('#answerbox').val() + value);
    }
    enterclick() {
        if ($('#answerbox').val() != this.currentRiddle.MathRiddleAnswer) {
            alert("Please Try Again!");
            $('#answerbox').val("");
        }
        else if ($('#answerbox').val() == this.currentRiddle.MathRiddleAnswer) {
            $('#answerbox').val("");
            this.userprogress.MathRiddles_idMathRiddle = this.idMathRiddle;
            this.userprogress.MathRiddle_Done = 1;
            this.userprogress.UserCoins = this.userprogress.UserCoins + 4;
            this.userprogressService.updateUserprogress(this.userbase.IdUser, this.userprogress);
            this.mathriddleService
                .getNextRiddle(this.currentRiddle.idMathRiddle)
                .then((riddles) => {
                this.riddledata = riddles;
                this.datafetched = true;
            });
            setTimeout(() => {
                if (this.datafetched == true) {
                    this.isDataAvailable = false;
                    this.router.navigateByUrl('/mathplay/' + this.riddledata.idMathRiddle);
                }
            }, 500);
        }
    }
}
MathPlayComponent.ɵfac = function MathPlayComponent_Factory(t) { return new (t || MathPlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mathriddles_ser_service__WEBPACK_IMPORTED_MODULE_1__["MathriddlesSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userbase_ser_service__WEBPACK_IMPORTED_MODULE_3__["UserbaseSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__["UserprogressSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
MathPlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MathPlayComponent, selectors: [["app-math-play"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "godimage"], ["alt", "Riddle", 2, "max-height", "550px", 3, "src"], [1, "inputarea"], [1, "row"], ["type", "text", "name", "anserbox", "id", "answerbox", "disabled", ""], [3, "click"]], template: function MathPlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MathPlayComponent_div_0_Template, 32, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDataAvailable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGgtcGxheS9tYXRoLXBsYXkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MathPlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-math-play',
                templateUrl: './math-play.component.html',
                styleUrls: ['./math-play.component.css']
            }]
    }], function () { return [{ type: _mathriddles_ser_service__WEBPACK_IMPORTED_MODULE_1__["MathriddlesSerService"] }, { type: ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"] }, { type: _userbase_ser_service__WEBPACK_IMPORTED_MODULE_3__["UserbaseSerService"] }, { type: _userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__["UserprogressSerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "pluZ":
/*!**************************************************!*\
  !*** ./src/app/quiz-play/quiz-play.component.ts ***!
  \**************************************************/
/*! exports provided: QuizPlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizPlayComponent", function() { return QuizPlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs/lib/anime.es */ "HTht");
/* harmony import */ var _quiz_ser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz-ser.service */ "+3i6");
/* harmony import */ var _userbase_ser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userbase-ser.service */ "cwxq");
/* harmony import */ var _userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userprogress-ser.service */ "r4Qa");
/* harmony import */ var ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-encrypt-cookie */ "0h9A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function QuizPlayComponent_a_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/quizplay/", ctx_r0.currentQuiz.idQuiz - 1, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function QuizPlayComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizPlayComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.CheckAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuizPlayComponent_a_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/quizplay/", ctx_r2.currentQuiz.idQuiz + 1, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class QuizPlayComponent {
    constructor(quizService, userbaseService, userprogressService, cookie, route, router) {
        this.quizService = quizService;
        this.userbaseService = userbaseService;
        this.userprogressService = userprogressService;
        this.cookie = cookie;
        this.route = route;
        this.router = router;
        this.ChosenAnswer = null;
        this.optionArray = ["#Op1", "#Op2", "#Op3", "#Op4"];
        this.dataloaded = false;
        this.userbase = {
            IdUser: null,
            Username: '',
            UserPassword: '',
            UserEmail: '',
            UserPhoneNumber: null,
            UserAge: null
        };
        this.userprogress = {
            Userbase_IdUser: 0,
            PicWordDB_PicWordID: 0,
            PicWordDB_PicDone: 0,
            MathRiddles_idMathRiddle: 0,
            MathRiddle_Done: 0,
            Quiz_idQuiz: 0,
            Quiz_QuizDone: 0,
            UserCoins: 0,
            UserLevel: 0
        };
    }
    ngOnInit() {
        if (this.cookie.get("user", false) == '') {
            this.routeSub = this.route.params.subscribe(params => {
                this.idQuiz = params['idQuiz'];
                if (this.idQuiz == null || this.idQuiz == 0) {
                    this.idQuiz = 1;
                }
                this.quizService
                    .getSingleQuestion(this.idQuiz)
                    .then((quizzes) => {
                    this.currentQuiz = quizzes;
                });
                setTimeout(() => {
                    // this.router.navigate(['/']);
                    $("#h3quizquestion").html(this.currentQuiz.QuizQuestion);
                    $("#h5quizdetail").html(this.currentQuiz.QuizQuestionDetail);
                    $("#Op1").html(this.currentQuiz.QuizOp1);
                    $("#Op2").html(this.currentQuiz.QuizOp2);
                    $("#Op3").html(this.currentQuiz.QuizOp3);
                    $("#Op4").html(this.currentQuiz.QuizOp4);
                    $('#opselecth').remove();
                    $('#correctlabel').remove();
                    this.dataloaded = true;
                    Object(animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_1__["default"])({
                        targets: this.optionArray,
                        color: "#ffffff",
                        duration: 300,
                        easing: 'linear'
                    });
                }, 300);
            });
        }
        else {
            this.usernamecookie = this.cookie.get("user", false);
            this.keycookie = this.cookie.get(this.usernamecookie + '-k', false);
            this.passcookie = this.cookie.get(this.usernamecookie.valueOf(), true, this.keycookie.valueOf());
            // alert(this.passcookie);
            this.routeSub = this.route.params.subscribe(params => {
                this.idQuiz = params['idQuiz'];
                this.userbaseService.getUserbyUserName(this.usernamecookie)
                    .then((userbase) => {
                    this.userbase = userbase;
                });
                setTimeout(() => {
                    this.userprogressService.getUserProgress(this.userbase.IdUser)
                        .then((userprogress) => {
                        this.userprogress = userprogress;
                    });
                    setTimeout(() => {
                        this.idQuiz = this.userprogress.Quiz_idQuiz;
                        this.quizdone = this.userprogress.Quiz_QuizDone;
                        if (this.idQuiz == null || this.idQuiz == 0) {
                            this.idQuiz = 1;
                        }
                        else if (this.idQuiz != null || this.idQuiz != 0) {
                            if (this.quizdone == 1) {
                                this.idQuiz = this.idQuiz + 1;
                            }
                        }
                        this.quizService
                            .getSingleQuestion(this.idQuiz)
                            .then((quizzes) => {
                            this.currentQuiz = quizzes;
                        });
                        setTimeout(() => {
                            $("#h3quizquestion").text(this.currentQuiz.QuizQuestion);
                            $("#h5quizdetail").text(this.currentQuiz.QuizQuestionDetail);
                            $("#Op1").text(this.currentQuiz.QuizOp1);
                            $("#Op2").text(this.currentQuiz.QuizOp2);
                            $("#Op3").text(this.currentQuiz.QuizOp3);
                            $("#Op4").text(this.currentQuiz.QuizOp4);
                            $('#opselecth').remove();
                            $('#correctlabel').remove();
                            $('#coin_head').text(this.userprogress.UserCoins);
                            $('#level_head').text("Level: " + this.userprogress.UserLevel);
                            this.dataloaded = true;
                            Object(animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_1__["default"])({
                                targets: this.optionArray,
                                color: "#ffffff",
                                duration: 300,
                                easing: 'linear'
                            });
                        }, 100);
                    }, 300);
                }, 300);
            });
        }
    }
    OptionClicked(event) {
        this.a = event.target.id;
        $('#opselecth').remove();
        switch (this.a) {
            case "Op1":
                this.ChosenAnswer = this.currentQuiz.QuizOp1;
                break;
            case "Op2":
                this.ChosenAnswer = this.currentQuiz.QuizOp2;
                break;
            case "Op3":
                this.ChosenAnswer = this.currentQuiz.QuizOp3;
                break;
            case "Op4":
                this.ChosenAnswer = this.currentQuiz.QuizOp4;
                break;
            default:
                this.ChosenAnswer = null;
                break;
        }
        let coption = "#" + this.a;
        let restArray = this.optionArray.filter(function (option) {
            return option != coption;
        });
        // console.log(restArray);
        Object(animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_1__["default"])({
            targets: coption,
            color: "#fff111",
            duration: 300,
            easing: 'linear'
        });
        Object(animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_1__["default"])({
            targets: restArray,
            color: "#ffffff",
            duration: 300,
            easing: 'linear'
        });
    }
    CheckAnswer() {
        // alert('Hey');
        if (this.ChosenAnswer == null) {
            $("#Op4").after("<h5 id=\"opselecth\">Please Select an Option!</h5>");
        }
        else if (this.currentQuiz.QuizC_Op == this.ChosenAnswer) {
            Object(animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_1__["default"])({
                targets: "#" + this.a,
                color: "#39FF14",
                duration: 100,
                easing: 'linear'
            });
            $("#Op4").after("<h5 style=\"color: #39FF14;\" id=\"opselecth\">Correct!</h5>");
            this.userprogress.Quiz_idQuiz = this.idQuiz;
            this.userprogress.Quiz_QuizDone = 1;
            this.userprogress.UserCoins = this.userprogress.UserCoins + 4;
            // console.log(this.userprogress);
            this.userprogressService.updateUserprogress(this.userbase.IdUser, this.userprogress);
            $("#opselecth").after("<h5 id='correctlabel'>Loading next question...</h5>");
            this.dataloaded = false;
            setTimeout(() => {
                this.router.navigate(['/quizplay/' + (this.currentQuiz.idQuiz + 1)]);
            }, 3000);
        }
        else {
            $("#Op4").after("<h5 style=\"color: red;\" id=\"opselecth\">Incorrect!!</h5>");
            $("#opselecth").after("<h5 id='correctlabel'>Please Try Again!</h5>");
            setTimeout(() => {
                $('#opselecth').remove();
                $('#correctlabel').remove();
                Object(animejs_lib_anime_es__WEBPACK_IMPORTED_MODULE_1__["default"])({
                    targets: this.optionArray,
                    color: "#ffffff",
                    duration: 300,
                    easing: 'linear'
                });
            }, 2000);
        }
    }
}
QuizPlayComponent.ɵfac = function QuizPlayComponent_Factory(t) { return new (t || QuizPlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_quiz_ser_service__WEBPACK_IMPORTED_MODULE_2__["QuizSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userbase_ser_service__WEBPACK_IMPORTED_MODULE_3__["UserbaseSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__["UserprogressSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_5__["NgxEncryptCookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
QuizPlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuizPlayComponent, selectors: [["app-quiz-play"]], decls: 30, vars: 4, consts: [[1, "container"], ["id", "banner", 1, "page-header"], [1, "row"], [1, "col-lg-12"], [1, "container", "col-lg-8", "col-md-10", "col-sm-12", "col-xs-12"], [1, "col-xs-12", "col-lg-12", "col-lg-offset-1", "border-primary"], ["id", "h3quizquestion", 1, "card-header"], [1, "card-body"], ["id", "h5quizdetail", 1, "card-subtitle", "text-muted", "font-italic"], ["id", "Op1", 1, "card-title", "op1", 2, "cursor", "pointer", 3, "click"], ["id", "Op2", 1, "card-title", "op2", 2, "cursor", "pointer", 3, "click"], ["id", "Op3", 1, "card-title", "op3", 2, "cursor", "pointer", 3, "click"], ["id", "Op4", 1, "card-title", "op4", 2, "cursor", "pointer", 3, "click"], ["class", "pull-left btn btn-danger", 3, "href", 4, "ngIf"], ["class", "pull-right btn btn-primary", "href", "#", "style", "margin-right:15px;", 3, "click", 4, "ngIf"], ["class", "pull-right btn btn-primary", "style", "margin-right:15px;", 3, "href", 4, "ngIf"], [1, "pull-left", "btn", "btn-danger", 3, "href"], ["href", "#", 1, "pull-right", "btn", "btn-primary", 2, "margin-right", "15px", 3, "click"], [1, "pull-right", "btn", "btn-primary", 2, "margin-right", "15px", 3, "href"]], template: function QuizPlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Loading Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Loading Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizPlayComponent_Template_h4_click_17_listener($event) { return ctx.OptionClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Loading Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizPlayComponent_Template_h4_click_19_listener($event) { return ctx.OptionClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Loading Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizPlayComponent_Template_h4_click_21_listener($event) { return ctx.OptionClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Loading Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizPlayComponent_Template_h4_click_23_listener($event) { return ctx.OptionClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Loading Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, QuizPlayComponent_a_26_Template, 2, 1, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, QuizPlayComponent_button_28_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, QuizPlayComponent_a_29_Template, 2, 1, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataloaded && ctx.currentQuiz.idQuiz > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataloaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataloaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1aXotcGxheS9xdWl6LXBsYXkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizPlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quiz-play',
                templateUrl: './quiz-play.component.html',
                styleUrls: ['./quiz-play.component.css']
            }]
    }], function () { return [{ type: _quiz_ser_service__WEBPACK_IMPORTED_MODULE_2__["QuizSerService"] }, { type: _userbase_ser_service__WEBPACK_IMPORTED_MODULE_3__["UserbaseSerService"] }, { type: _userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__["UserprogressSerService"] }, { type: ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_5__["NgxEncryptCookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "r4Qa":
/*!*********************************************!*\
  !*** ./src/app/userprogress-ser.service.ts ***!
  \*********************************************/
/*! exports provided: UserprogressSerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprogressSerService", function() { return UserprogressSerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserprogressSerService {
    constructor(http) {
        this.http = http;
        this.userprogressURL = "http://localhost:3000/api/userprog";
    }
    // getUserProgress() : Promise<void | Userprogress[]>{
    //   return this.http.get(this.userprogressURL)
    //   .toPromise()
    //   .then(response => response as Userprogress[])
    //   .catch(this.ErrorMethod);
    // }
    getUserProgress(Userbase_IdUser) {
        return this.http.get(this.userprogressURL + '/' + Userbase_IdUser)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    createUserProgress(newUserProgress) {
        return this.http.post(this.userprogressURL, newUserProgress)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    updateUserprogress(Userbase_IdUser, updateUserprogress) {
        return this.http.put(this.userprogressURL + "/" + Userbase_IdUser, updateUserprogress)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    deleteUserProgress(Userbase_IdUser) {
        return this.http.delete(this.userprogressURL + "/" + Userbase_IdUser)
            .toPromise()
            .then(response => response)
            .catch(this.ErrorMethod);
    }
    ErrorMethod(error) {
        console.log("something is not working");
    }
    ;
}
UserprogressSerService.ɵfac = function UserprogressSerService_Factory(t) { return new (t || UserprogressSerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserprogressSerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserprogressSerService, factory: UserprogressSerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserprogressSerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _userbase_ser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../userbase-ser.service */ "cwxq");
/* harmony import */ var ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-encrypt-cookie */ "0h9A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userprogress-ser.service */ "r4Qa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");











function SignupComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Input Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please input valid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_7_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_7_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.signupForm.controls.UserEmail.errors == null ? null : ctx_r0.signupForm.controls.UserEmail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.signupForm.controls.UserEmail.errors == null ? null : ctx_r0.signupForm.controls.UserEmail.errors.email);
} }
function SignupComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Input Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The minimum length of the Username should be 4 Characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Special Characters Allowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_9_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_9_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_div_9_div_3_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.signupForm.controls.Username.errors == null ? null : ctx_r1.signupForm.controls.Username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.signupForm.controls.Username.errors == null ? null : ctx_r1.signupForm.controls.Username.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.signupForm.controls.Username.errors == null ? null : ctx_r1.signupForm.controls.Username.errors.pattern);
} }
function SignupComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Input a Phone Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Special Characters Allowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_11_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_11_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.controls.UserPhoneNumber.errors == null ? null : ctx_r2.signupForm.controls.UserPhoneNumber.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.controls.UserPhoneNumber.errors == null ? null : ctx_r2.signupForm.controls.UserPhoneNumber.errors.pattern);
} }
function SignupComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Input a Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password cannot be less than 8 Characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_13_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_13_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.controls.UserPassword.errors == null ? null : ctx_r3.signupForm.controls.UserPassword.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.controls.UserPassword.errors == null ? null : ctx_r3.signupForm.controls.UserPassword.errors.minlength);
} }
function SignupComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Input Proper age ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Age can be between 1-200 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_15_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_15_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.signupForm.controls.UserAge.errors == null ? null : ctx_r4.signupForm.controls.UserAge.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.signupForm.controls.UserAge.errors == null ? null : ctx_r4.signupForm.controls.UserAge.errors.pattern);
} }
class SignupComponent {
    constructor(userbaseService, userprogressService, router, cookie, ngzone, signupFormBuilder) {
        this.userbaseService = userbaseService;
        this.userprogressService = userprogressService;
        this.router = router;
        this.cookie = cookie;
        this.ngzone = ngzone;
        this.signupFormBuilder = signupFormBuilder;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"],
            UserPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"],
            UserEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"],
            UserPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"],
            UserAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]
        });
        this.userbase = {
            IdUser: null,
            Username: '',
            UserPassword: '',
            UserEmail: '',
            UserPhoneNumber: null,
            UserAge: null
        };
        this.userprogress = {
            Userbase_IdUser: 0,
            PicWordDB_PicWordID: 0,
            PicWordDB_PicDone: 0,
            MathRiddles_idMathRiddle: 0,
            MathRiddle_Done: 0,
            Quiz_idQuiz: 0,
            Quiz_QuizDone: 0,
            UserCoins: 0,
            UserLevel: 0
        };
    }
    ngOnInit() {
        if (this.cookie.get("user", false) != '') {
            setTimeout(() => {
                this.router.navigate(['/']);
            }, 500);
        }
        else {
            this.signupForm = this.signupFormBuilder.group({
                Username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userbase.Username, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$")
                ]),
                UserPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userbase.UserPassword, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
                ]),
                UserEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userbase.UserEmail, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
                ]),
                UserPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userbase.UserPhoneNumber, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")
                ]),
                UserAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.userbase.UserAge, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$")
                ])
            });
        }
    }
    CreateUser(userbase) {
        this.userbaseService.createUser(userbase)
            .then((createdUser) => {
            this.ngzone.run(() => {
                // this.router.navigate(['/']);
            });
        });
    }
    CreateUserprogress(userprogress) {
        this.userprogressService.createUserProgress(userprogress)
            .then((createdUser) => {
            this.ngzone.run(() => {
                this.router.navigate(['/']);
            });
        });
    }
    Validation(signupForm) {
        this.checkr = true;
        // this.Username=signupForm.value.Username;
        // this.UserPassword=signupForm.value.UserPassword;
        // this.UserEmail=signupForm.value.UserEmail;
        this.UserPhoneNumber = signupForm.value.UserPhoneNumber;
        // this.UserAge=signupForm.value.UserAge;
        if (RegExp("^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$").test(signupForm.value.Username)) {
            this.userbase.Username = signupForm.value.Username;
        }
        else {
            alert("incorrect username values!");
            this.checkr = false;
        }
        if (signupForm.value.UserPassword.length >= 8) {
            this.userbase.UserPassword = signupForm.value.UserPassword;
        }
        else {
            alert("Invalid entries in password!");
            this.checkr = false;
        }
        if (RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$").test(signupForm.value.UserEmail)) {
            this.userbase.UserEmail = signupForm.value.UserEmail;
        }
        else {
            alert("Invalid Entries for Email!");
            this.checkr = false;
        }
        if (RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$").test(signupForm.value.UserPhoneNumber)) {
            this.UserPhoneNumber = this.UserPhoneNumber.replace(/[\D]/g, '');
            this.userbase.UserPhoneNumber = Number(this.UserPhoneNumber);
        }
        else {
            alert("Invalid Entries for Phone Number!");
            this.checkr = false;
        }
        if (RegExp("^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$").test(signupForm.value.UserAge)) {
            this.userbase.UserAge = signupForm.value.UserAge;
        }
        else {
            alert("Invalid Entries for Age!");
            this.checkr = false;
        }
        if (this.checkr == true) {
            var key = this.cookie.generateKey();
            console.log(key);
            this.CreateUser(this.userbase);
            signupForm.reset();
            setTimeout(() => {
                this.userbaseService.getUserbyUserName(this.userbase.Username)
                    .then((userbase) => {
                    this.userbase = userbase;
                });
                setTimeout(() => {
                    alert(this.userbase.IdUser);
                    this.userprogress.Userbase_IdUser = this.userbase.IdUser;
                    this.CreateUserprogress(this.userprogress);
                    this.cookie.set("user", this.userbase.Username, false);
                    this.cookie.set(this.userbase.Username, this.userbase.UserPassword, true, key, 2);
                    this.cookie.set(this.userbase.Username + "-k", key, false);
                }, 300);
            }, 300);
        }
        else {
            alert("Something went wrong!");
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userbase_ser_service__WEBPACK_IMPORTED_MODULE_1__["UserbaseSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__["UserprogressSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_userbase_ser_service__WEBPACK_IMPORTED_MODULE_1__["UserbaseSerService"], ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"]])], decls: 19, vars: 6, consts: [["rel", "shortcut icon", "href", "../../assets/img/favicon.ico"], [1, "container"], [1, "container", "col-lg-6", "col-md-10", "sm-12"], [3, "formGroup", "submit"], ["type", "email", "name", "Email", "id", "Email", "formControlName", "UserEmail", "placeholder", "Email", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "text", "name", "Username", "id", "Username", "placeholder", "Username", "formControlName", "Username", 1, "form-control"], ["type", "tel", "name", "Phone", "id", "Phone", "formControlName", "UserPhoneNumber", "placeholder", "Phone", 1, "form-control"], ["type", "password", "name", "Password", "id", "Password", "formControlName", "UserPassword", "placeholder", "Password", 1, "form-control"], ["type", "number", "name", "Age", "id", "Age", "formControlName", "UserAge", "placeholder", "Age", 1, "form-control"], [1, "d-flex", "flex-row", "quizlogohome"], ["type", "submit", "value", "submit", "name", "signbtn"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "QuizBot | Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignupComponent_Template_form_submit_5_listener() { return ctx.Validation(ctx.signupForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignupComponent_div_7_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignupComponent_div_9_Template, 4, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignupComponent_div_11_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_div_13_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SignupComponent_div_15_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign-Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.UserEmail.invalid && (ctx.signupForm.controls.UserEmail.dirty || ctx.signupForm.controls.UserEmail.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.Username.invalid && (ctx.signupForm.controls.Username.dirty || ctx.signupForm.controls.Username.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.UserPhoneNumber.invalid && (ctx.signupForm.controls.UserPhoneNumber.dirty || ctx.signupForm.controls.UserPhoneNumber.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.UserPassword.invalid && (ctx.signupForm.controls.UserPassword.dirty || ctx.signupForm.controls.UserPassword.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.UserAge.invalid && (ctx.signupForm.controls.UserAge.dirty || ctx.signupForm.controls.UserAge.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css'],
                providers: [_userbase_ser_service__WEBPACK_IMPORTED_MODULE_1__["UserbaseSerService"], ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"]]
            }]
    }], function () { return [{ type: _userbase_ser_service__WEBPACK_IMPORTED_MODULE_1__["UserbaseSerService"] }, { type: _userprogress_ser_service__WEBPACK_IMPORTED_MODULE_4__["UserprogressSerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-encrypt-cookie */ "0h9A");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.module */ "ZAI4");
/* harmony import */ var _userbase_ser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userbase-ser.service */ "cwxq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










function LoginComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please Input Username ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The minimum length of the Username should be 4 Characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Special Characters Allowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_8_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_8_div_2_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_8_div_3_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.value.Username.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.value.Username.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.value.Username.errors.forbiddenName);
} }
class LoginComponent {
    constructor(userbaseService, router, ngZone, cookie, loginFormBuilder) {
        this.userbaseService = userbaseService;
        this.router = router;
        this.ngZone = ngZone;
        this.cookie = cookie;
        this.loginForm = loginFormBuilder.group({
            Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength[4], Object(_app_module__WEBPACK_IMPORTED_MODULE_3__["forbiddenNameValidator"])(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)],
            Password: ''
        });
    }
    ngOnInit() {
    }
    loginAcc(loginForm) {
        this.userbaseService.getUserbyUserName(loginForm.Username)
            .then((userbase) => {
            this.currentUser = userbase;
        });
        setTimeout(() => {
            if (loginForm.Password === this.currentUser.UserPassword) {
                var key = this.cookie.generateKey();
                console.log(key);
                this.cookie.set(loginForm.Username, loginForm.Password, true, key, 2);
                this.cookie.set(loginForm.Username + " k", key, false);
                this.cookie.set("user", loginForm.Username, false);
                this.router.navigate(['/']);
            }
        }, 500);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userbase_ser_service__WEBPACK_IMPORTED_MODULE_4__["UserbaseSerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"]])], decls: 14, vars: 2, consts: [["rel", "shortcut icon", "href", "../../assets/img/favicon.ico"], [1, "container"], [1, "container", "col-lg-6", "col-md-10", "sm-12"], [3, "formGroup", "submit"], [1, "d-flex", "flex-row"], ["type", "text", "formControlName", "Username", "name", "Username", "id", "Username", "placeholder", "Username"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "password", "formControlName", "Password", "name", "Password", "id", "Password", "placeholder", "Password"], [1, "d-flex", "flex-row", "quizlogohome"], ["type", "submit", "value", "submit", "name", "l"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "QuizBot | Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_5_listener() { return ctx.loginAcc(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fieldset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.value.Username.invalid && (ctx.loginForm.value.Username.dirty || ctx.loginForm.value.Username.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
                providers: [ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"]]
            }]
    }], function () { return [{ type: _userbase_ser_service__WEBPACK_IMPORTED_MODULE_4__["UserbaseSerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: ngx_encrypt_cookie__WEBPACK_IMPORTED_MODULE_2__["NgxEncryptCookieService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map