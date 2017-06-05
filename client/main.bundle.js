webpackJsonp([1,4],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Algs; });
var Algs = (function () {
    function Algs() {
    }
    /*static shuffle(o) {
        for(var j:number, x:number, i:number = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }*/
    Algs.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    return Algs;
}());
//# sourceMappingURL=algs.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__algs__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sound__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExampleQuestion; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//var fs = window['require']('fs');
var SoundService = (function () {
    function SoundService(http) {
        this.http = http;
        this.url = '/api/results';
    }
    ;
    SoundService.prototype.getQuestions = function () {
        var listOfSounds = [];
        var defaults = { "title": "Wybierz dźwięk który usłyszałeś." };
        for (var key in __WEBPACK_IMPORTED_MODULE_3__sound__["a" /* Data */]) {
            __WEBPACK_IMPORTED_MODULE_3__sound__["a" /* Data */][key].forEach(function (sound) { return listOfSounds.push(__WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */].fromJson(sound, defaults)); });
        }
        return __WEBPACK_IMPORTED_MODULE_2__algs__["a" /* Algs */].shuffle(listOfSounds).slice(0, 3);
    };
    SoundService.prototype.saveAnswers = function (questions) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* RequestOptions */]({ headers: headers }); // Create a request option
        //var headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        /* this.http.post('www.google.com',
             {firstName:'Joe',lastName:'Smith'},
             {headers:headers}).subscribe(r=>{});*/
        this.http.post(this.url, questions, options).subscribe(function () { });
        console.log(questions[0].toJsonString());
    };
    SoundService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], SoundService);
    return SoundService;
    var _a;
}());
var ExampleQuestion = __WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */].fromJson({
    "url": "assets/Cynizm_ewa.mp3",
    "title": "Wybierz dźwięk który usłyszałeś.",
    "answer": "",
    "left": "cynizm",
    "right": "cynizm"
});
//# sourceMappingURL=sound.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 351;


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(471);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answers; });
var Answers = ["Cynizm", "Ofiara", "Lustro", "Pokora", "Spokój", "Stanie"];
//# sourceMappingURL=Answers.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sound_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(soundService) {
        this.soundService = soundService;
        /*
          0 - instructions
          1 - questions
          2 - thanks
        3 - questionaire
        */
        this.controller = 0;
        this.time = 1;
        this.resultsSaved = false;
        this.answeredQuestions = [];
        this.currentQuestion = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    AppComponent.prototype.nextQuestion = function () {
        this.currentQuestion.next(this.questions[0]);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.questions = this.soundService.getQuestions();
        this.timeline();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        //	this.currentQuestion.next(ExampleQuestion);
    };
    AppComponent.prototype.progressTimeline = function () {
        this.time++;
        this.timeline();
    };
    AppComponent.prototype.timeline = function () {
        switch (this.time) {
            case 0:
                // code...
                break;
            case 1:
                this.controller = 0;
                this.instructions = "Witamy. Je\u017Celi zgadzasz si\u0119 wzi\u0105c udzia\u0142 w naszym badaniu kliknij dalej.";
                break;
            case 2:
                this.controller = 0;
                this.instructions = "Najpierw pod\u0142\u0105cz s\u0142uchawki a nast\u0119pnie przetestujemy ich d\u017Awi\u0119k";
                break;
            case 3:
                this.controller = 4;
                break;
            case 4:
                this.controller = 0;
                this.instructions = "Teraz us\u0142yszysz seri\u0119 d\u017Awi\u0119k\u00F3w. Prosimy aby\u015B po ka\u017Cdym d\u017Awi\u0119ku wybra\u0142 ten kt\u00F3ry us\u0142ysza\u0142e\u015B.";
                break;
            case 5:
                this.controller = 1;
                this.currentQuestion.next(__WEBPACK_IMPORTED_MODULE_1__sound_service__["b" /* ExampleQuestion */]);
                break;
            case 6:
                this.controller = 0;
                this.instructions = "D\u017Awi\u0119k kt\u00F3ry w\u0142a\u015Bnie us\u0142ysza\u0142e\u015B by\u0142 testowy. Je\u017Celi jeste\u015B got\u00F3w kliknij \"Dalej\" aby przej\u015B\u0107 do w\u0142a\u015Bciwego badania.";
                break;
            case 7:
                this.controller = 1;
                this.nextQuestion();
                break;
            case 8:
                this.controller = 0;
                this.instructions = "Teraz prosimy aby\u015B wype\u0142ni\u0142 kwestionariusz.";
            case 9:
                this.controller = 3;
                break;
            default:
                this.controller = 2;
                break;
        }
    };
    AppComponent.prototype.questionAnswered = function (question) {
        if (this.time == 5) {
            this.progressTimeline();
        }
        else {
            this.answeredQuestions.push(question);
            this.questions.shift();
            if (this.questions.length == 0) {
                //zapisz wyniki	
                this.progressTimeline();
            }
            else {
                this.nextQuestion();
            }
        }
    };
    AppComponent.prototype.exitExperiment = function () {
        this.time = 100;
        this.timeline();
    };
    AppComponent.prototype.saveResults = function () {
        this.soundService.saveAnswers(this.answeredQuestions);
        //this.resultsSaved = true;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(537),
            styles: [__webpack_require__(526)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sound_service__["a" /* SoundService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__sound_service__["a" /* SoundService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//timeline:
// Input nazwy - 0
// instrukcja - 1
// testowy - 2
// instrukcja - 3
// pytania - 4
// (test) - 5
// dziekowanie - 6 - default 
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sound_question_sound_question_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sound_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__input_input_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__instructions_instructions_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__thanks_thanks_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__questionnaire_questionnaire_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__headset_test_headset_test_component__ = __webpack_require__(463);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sound_question_sound_question_component__["a" /* SoundQuestion */],
                __WEBPACK_IMPORTED_MODULE_7__input_input_component__["a" /* InputComponent */],
                __WEBPACK_IMPORTED_MODULE_8__instructions_instructions_component__["a" /* InstructionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__thanks_thanks_component__["a" /* ThanksComponent */],
                __WEBPACK_IMPORTED_MODULE_10__questionnaire_questionnaire_component__["a" /* QuestionnaireComponent */],
                __WEBPACK_IMPORTED_MODULE_11__headset_test_headset_test_component__["a" /* HeadsetTestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__sound_service__["a" /* SoundService */],
                { provide: 'Window', useValue: Window }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadsetTestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadsetTestComponent = (function () {
    function HeadsetTestComponent() {
        this._next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this._brokenHeadset = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.controller = 0;
        this.instructions = "Prawdopodobnie masz za\u0142o\u017Cone s\u0142uchawki na odwr\u00F3t. Za\u0142\u00F3\u017C je tak aby ka\u017Cda ze s\u0142uchawek przylega\u0142a teraz do innego ucha.";
        this.title = "Wybierz w którym uchu usłyszałeś dźwięk";
        this.noSoundMsg = "Wygląda na to że twoje słuchawki nie działają poprawnie. Niestety udział w badaniu jest niemożliwy :(";
    }
    HeadsetTestComponent.prototype.ngOnInit = function () {
        this.audioLeft = new Audio();
        this.audioLeft.src = "assets/Tone_left.mp3";
        this.audioLeft.load();
        this.audioRight = new Audio();
        this.audioRight.src = "assets/Tone_right.mp3";
        this.audioRight.load();
        this.playTest("left");
    };
    HeadsetTestComponent.prototype.playTest = function (ear) {
        if (ear == "left") {
            this.ear = ear;
            this.audioLeft.play();
        }
        else {
            this.ear = ear;
            this.audioRight.play();
        }
    };
    HeadsetTestComponent.prototype.afterInstructions = function () {
        this.controller = 0;
        this.ear = "left";
        this.audioLeft.play();
    };
    HeadsetTestComponent.prototype.answerQuestion = function (ear) {
        var _this = this;
        this.audiotStop(this.audioLeft);
        this.audiotStop(this.audioRight);
        if (ear != this.ear) {
            this.controller = 1;
        }
        else if (ear == "left") {
            this.controller = 2;
            setTimeout(function () {
                _this.controller = 0;
                _this.ear = "right";
                _this.audioRight.play();
            }, 1000);
        }
        else {
            this.controller = 2;
            setTimeout(function () {
                _this.controller = 0;
                _this.next();
            }, 1000);
        }
    };
    HeadsetTestComponent.prototype.noSound = function () {
        this.controller = 3;
    };
    HeadsetTestComponent.prototype.noSoundReact = function () {
        this._brokenHeadset.next(true);
    };
    HeadsetTestComponent.prototype.next = function () {
        this._next.next(true);
    };
    HeadsetTestComponent.prototype.audiotStop = function (aud) {
        aud.pause();
        aud.currentTime = 0;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])('next'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], HeadsetTestComponent.prototype, "_next", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])('brokenHeadset'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _b) || Object)
    ], HeadsetTestComponent.prototype, "_brokenHeadset", void 0);
    HeadsetTestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-headset-test',
            template: __webpack_require__(538),
            styles: [__webpack_require__(527)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeadsetTestComponent);
    return HeadsetTestComponent;
    var _a, _b;
}());
//# sourceMappingURL=headset-test.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponent = (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-input',
            template: __webpack_require__(539),
            styles: [__webpack_require__(528)]
        }), 
        __metadata('design:paramtypes', [])
    ], InputComponent);
    return InputComponent;
}());
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstructionsComponent = (function () {
    function InstructionsComponent() {
        this.button = true;
        this._next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    InstructionsComponent.prototype.next = function () {
        this._next.next(true);
    };
    InstructionsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])('instructions'), 
        __metadata('design:type', String)
    ], InstructionsComponent.prototype, "instruction", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])('button'), 
        __metadata('design:type', Boolean)
    ], InstructionsComponent.prototype, "button", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])('next'), 
        __metadata('design:type', Object)
    ], InstructionsComponent.prototype, "_next", void 0);
    InstructionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-instructions',
            template: __webpack_require__(540),
            styles: [__webpack_require__(529)]
        }), 
        __metadata('design:paramtypes', [])
    ], InstructionsComponent);
    return InstructionsComponent;
}());
//# sourceMappingURL=instructions.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question() {
    }
    Question.prototype.copy = function (values) {
        values = values || {};
        var question = new Question();
        question.url = values.url || this.url;
        question.title = values.title || this.title;
        question.answer = values.answer || this.answer;
        question.left_sound = values.left_sound || this.left_sound;
        question.right_sound = values.right_sound || this.right_sound;
        return question;
    };
    Question.fromJson = function (json, defaults) {
        defaults = defaults ? defaults : {};
        var question = new Question();
        question.url = defaults.url || json.url;
        question.title = defaults.title || json.title;
        question.left_sound = defaults.left || json.left;
        question.right_sound = defaults.right || json.right;
        return question;
    };
    Question.prototype.toJsonString = function () {
        return JSON.stringify(this);
    };
    return Question;
}());
//# sourceMappingURL=question.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionnaireComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionnaireComponent = (function () {
    function QuestionnaireComponent() {
        this.next = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.firstQuestionaire = [];
        this.secondQuestionaire = [];
        this.thirdQuestionaire = [];
    }
    QuestionnaireComponent.prototype.ngOnInit = function () {
        var _this = this;
        words.forEach(function (word) {
            _this.firstQuestionaire.push((new wordSymbol(word)));
            _this.secondQuestionaire.push((new wordSymbol(word)));
            _this.thirdQuestionaire.push((new wordSymbol(word)));
        });
        this.controller = 0;
    };
    QuestionnaireComponent.prototype.nextPage = function () {
        this.controller++;
        if (this.controller > 5) {
            this.next.next(true);
        }
    };
    QuestionnaireComponent.prototype.toggleWord = function (rep, index) {
        var map = {
            "1": "firstQuestionaire",
            "2": "secondQuestionaire",
            "3": "thirdQuestionaire",
        };
        this[map[rep]][index].progress();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], QuestionnaireComponent.prototype, "next", void 0);
    QuestionnaireComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-questionnaire',
            template: __webpack_require__(541),
            styles: [__webpack_require__(530)]
        }), 
        __metadata('design:paramtypes', [])
    ], QuestionnaireComponent);
    return QuestionnaireComponent;
    var _a;
}());
var wordSymbol = (function () {
    function wordSymbol(name) {
        this.symbol = 0;
        this.name = name;
        this.symbol = 0;
    }
    wordSymbol.prototype.progress = function () {
        this.symbol = (this.symbol + 1) % 3;
    };
    return wordSymbol;
}());
var words = [
    "wszechstronność",
    "taktowność",
    "optymizm",
    "bezinteresowność",
    "bezpośredniość",
    "uczciwość",
    "odwaga",
    "ofiarność",
    "moralność",
    "szczerość",
    "prawdomówność",
    "odpowiedzialność",
    "samodzielność",
    "nowoczesność",
    "aktywność",
    "delikatność",
    "wrażliwość",
    "otwartość",
    "staranność",
    "naturalność",
    "dojrzałość",
    "wierność",
    "punktualność",
    "stanowczość",
    "refleksyjność",
    "energiczność",
    "twórczość",
    "atrakcyjność",
    "pracowitość",
    "spostrzegawczość",
    "towarzyskość",
    "ambicja",
    "niezależność",
    "stałość",
    "uprzejmość",
    "sumienność",
    "słowność",
    "wyrozumiałość",
    "zwinność",
    "zrównoważenie",
    "śmiałość",
    "czułość",
    "partnerstwo",
    "cierpliwość",
    "lojalność",
    "odporność psychiczna",
    "dobroć",
    "uroda",
    "obowiązkowość",
    "krytyczność",
    "rozmowność",
    "ufność",
    "spontaniczność",
    "uczynność",
    "poczucie humoru",
    "pewność siebie",
    "religijność",
    "barwność",
    "rozsądek",
    "zaradność",
    "wnikliwość",
    "emocjonalność",
    "wytrwałość",
    "tolerancyjność",
    "skromność",
    "elegancja",
    "inteligencja",
    "łagodność",
    "praktyczność",
    "oryginalność"
];
//# sourceMappingURL=questionnaire.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__algs__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Answers__ = __webpack_require__(460);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundQuestion; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SoundQuestion = (function () {
    function SoundQuestion() {
        this._question = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"]();
        this._answer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.answers = __WEBPACK_IMPORTED_MODULE_3__Answers__["a" /* Answers */];
        this.showAnswers = false;
        this.showQuestion = false;
        this.counter = 3;
    }
    SoundQuestion.prototype.countToPlay = function (count) {
        if (this.counter == 0) {
            clearInterval(count);
            console.log(this.audio.src);
            this.audio.play();
        }
        else
            this.counter--;
    };
    SoundQuestion.prototype.nextQuestion = function (question) {
        var _this = this;
        this.showQuestion = false;
        setTimeout(function () {
            _this.question = question;
            _this.title = _this.question.title;
            _this.showQuestion = true;
            _this.showAnswers = false;
            _this.counter = 3;
            setTimeout(function () {
                var count = setInterval(function () { return _this.countToPlay(count); }, 700);
                _this.audio = new Audio();
                _this.audio.src = _this.question.url;
                _this.audio.load();
                __WEBPACK_IMPORTED_MODULE_2__algs__["a" /* Algs */].shuffle(_this.answers);
                _this.audio.onended = (function () { _this.showAnswers = true; });
            }, 500);
        }, 500);
    };
    SoundQuestion.prototype.answerQuestion = function (answer) {
        var question = this.question.copy({ answer: answer.toLowerCase() });
        this._answer.next(question);
    };
    SoundQuestion.prototype.ngOnInit = function () {
        var _this = this;
        this._question.subscribe(function (question) { return _this.nextQuestion(question); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])('question'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"]) === 'function' && _a) || Object)
    ], SoundQuestion.prototype, "_question", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])('answer'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _b) || Object)
    ], SoundQuestion.prototype, "_answer", void 0);
    SoundQuestion = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'sound-question',
            template: __webpack_require__(542),
            styles: [__webpack_require__(531)]
        }), 
        __metadata('design:paramtypes', [])
    ], SoundQuestion);
    return SoundQuestion;
    var _a, _b;
}());
//# sourceMappingURL=sound-question.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
var Data = {
    "Automatyczne": [
        {
            "url": "assets/Sounds/Automatyczne/L-ofiara-spokoj-P.mp3",
            "title": "",
            "answer": "",
            "left": "ofiara",
            "right": "spokoj"
        },
        {
            "url": "assets/Sounds/Automatyczne/L-ofiara-stanie-P.mp3",
            "title": "",
            "answer": "",
            "left": "ofiara",
            "right": "stanie"
        },
        {
            "url": "assets/Sounds/Automatyczne/L-spokoj-ofiara-P.mp3",
            "title": "",
            "answer": "",
            "left": "spokoj",
            "right": "ofiara"
        },
        {
            "url": "assets/Sounds/Automatyczne/L-spokoj-stanie-P.mp3",
            "title": "",
            "answer": "",
            "left": "spokoj",
            "right": "stanie"
        },
        {
            "url": "assets/Sounds/Automatyczne/L-stanie-ofiara-P.mp3",
            "title": "",
            "answer": "",
            "left": "stanie",
            "right": "ofiara"
        },
        {
            "url": "assets/Sounds/Automatyczne/L-stanie-spokoj-P.mp3",
            "title": "",
            "answer": "",
            "left": "stanie",
            "right": "spokoj"
        }
    ],
    "Refleksyjne": [
        {
            "url": "assets/Sounds/Refleksyjne/L-cynizm-pokora-P.mp3",
            "title": "",
            "answer": "",
            "left": "cynizm",
            "right": "pokora"
        },
        {
            "url": "assets/Sounds/Refleksyjne/L-cynizm-lustro-P.mp3",
            "title": "",
            "answer": "",
            "left": "cynizm",
            "right": "lustro"
        },
        {
            "url": "assets/Sounds/Refleksyjne/L-pokora-cynizm-P.mp3",
            "title": "",
            "answer": "",
            "left": "pokora",
            "right": "cynizm"
        },
        {
            "url": "assets/Sounds/Refleksyjne/L-pokora-lustro-P.mp3",
            "title": "",
            "answer": "",
            "left": "pokora",
            "right": "lustro"
        },
        {
            "url": "assets/Sounds/Refleksyjne/L-lustro-cynizm-P.mp3",
            "title": "",
            "answer": "",
            "left": "lustro",
            "right": "cynizm"
        },
        {
            "url": "assets/Sounds/Refleksyjne/L-lustro-pokora-P.mp3",
            "title": "",
            "answer": "",
            "left": "lustro",
            "right": "pokora"
        }
    ],
    "AutRef-par": [
        {
            "url": "assets/Sounds/AutRef-parami/L-cynizm-ofiara-P.mp3",
            "title": "",
            "answer": "",
            "left": "cynizm",
            "right": "ofiara"
        },
        {
            "url": "assets/Sounds/AutRef-parami/L-lustro-stanie-P.mp3",
            "title": "",
            "answer": "",
            "left": "lustro",
            "right": "stanie"
        },
        {
            "url": "assets/Sounds/AutRef-parami/L-ofiara-cynizm-P.mp3",
            "title": "",
            "answer": "",
            "left": "ofiara",
            "right": "cynizm"
        },
        {
            "url": "assets/Sounds/AutRef-parami/L-pokora-spokoj-P.mp3",
            "title": "",
            "answer": "",
            "left": "pokora",
            "right": "spokoj"
        },
        {
            "url": "assets/Sounds/AutRef-parami/L-spokoj-pokora-P.mp3",
            "title": "",
            "answer": "",
            "left": "spokoj",
            "right": "pokora"
        },
        {
            "url": "assets/Sounds/AutRef-parami/L-stanie-lustro-P.mp3",
            "title": "",
            "answer": "",
            "left": "stanie",
            "right": "lustro"
        }
    ],
    "AutRef-kom": [
        {
            "url": "assets/Sounds/AutRef-kom/L-cynizm-spokoj-P.mp3",
            "title": "",
            "answer": "",
            "left": "cynizm",
            "right": "spokoj"
        },
        {
            "url": "assets/Sounds/AutRef-kom/L-cynizm-stanie-P.mp3",
            "title": "",
            "answer": "",
            "left": "cynizm",
            "right": "stanie"
        },
        {
            "url": "assets/Sounds/AutRef-kom/L-lustro-ofiara-P.mp3",
            "title": "",
            "answer": "",
            "left": "lustro",
            "right": "ofiara"
        },
        {
            "url": "assets/Sounds/AutRef-kom/L-lustro-spokoj-P.mp3",
            "title": "",
            "answer": "",
            "left": "lustro",
            "right": "spokoj"
        },
        {
            "url": "assets/Sounds/AutRef-kom/L-ofiara-lustro-P.mp3",
            "title": "",
            "answer": "",
            "left": "ofiara",
            "right": "lustro"
        },
        {
            "url": "assets/Sounds/AutRef-kom/L-ofiara-pokora-P.mp3",
            "title": "",
            "answer": "",
            "left": "ofiara",
            "right": "pokora"
        },
        {
            "url": "assets/Sounds/AutRef-kom/L-pokora-ofiara-P.mp3",
            "title": "",
            "answer": "",
            "left": "pokora",
            "right": "ofiara"
        },
        {
            "url": "assets/Sounds/AutRef-kom/L-pokora-stanie-P.mp3",
            "title": "",
            "answer": "",
            "left": "pokora",
            "right": "stanie"
        },
        {
            "url": "assets/Sounds/AutRef-kom/L-spokoj-cynizm-P.mp3",
            "title": "",
            "answer": "",
            "left": "spokoj",
            "right": "cynizm"
        },
        {
            "url": "assets/Sounds/AutRef-kom/L-spokoj-lustro-P.mp3",
            "title": "",
            "answer": "",
            "left": "spokoj",
            "right": "lustro"
        },
        {
            "url": "assets/Sounds/AutRef-kom/L-stanie-cynizm-P.mp3",
            "title": "",
            "answer": "",
            "left": "stanie",
            "right": "cynizm"
        },
        {
            "url": "assets/Sounds/AutRef-kom/L-stanie-cynizm-P.mp3",
            "title": "",
            "answer": "",
            "left": "stanie",
            "right": "cynizm"
        }
    ]
};
//# sourceMappingURL=sound.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThanksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThanksComponent = (function () {
    function ThanksComponent() {
        this.saveResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    ThanksComponent.prototype.ngOnInit = function () {
        this.emmitSave();
    };
    ThanksComponent.prototype.emmitSave = function () {
        this.saveResults.next(true);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], ThanksComponent.prototype, "resultsSaved", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], ThanksComponent.prototype, "saveResults", void 0);
    ThanksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-thanks',
            template: __webpack_require__(543),
            styles: [__webpack_require__(532)]
        }), 
        __metadata('design:paramtypes', [])
    ], ThanksComponent);
    return ThanksComponent;
    var _a;
}());
//# sourceMappingURL=thanks.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".body{\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tposition: relative;\r\n}\r\n.main-wrapper{\r\n\tposition: relative;\r\n\t\r\n\tmax-width: 600px;\r\n\theight: 700px;\r\n\t\r\n\tpadding: 50px;\r\n\t\r\n\ttop: 50px;\r\n\r\n\t//border: 1px black solid;\r\n\tborder-top: none;\r\n\tborder-left: none;\r\n\t\r\n\tmargin: auto;\r\n\tbackground-color: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".wrapper{\r\n\twidth: 100%;\r\n\tborder: 0.5px grey solid;\r\n\theight: calc((100%-100px));\r\n}\r\n.counter{\r\n\theight: calc((50%-100px));\r\n\ttext-align: center;\r\n\tposition: relative;\r\n}\r\n.counter > span{\r\n\tposition: absolute;\r\n\tbottom: 20px;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n}\r\n.question{\r\n\tborder: 0.5px grey solid;\r\n\tborder-left: none;\r\n\tborder-right: none;\r\n\theight: 100px;\r\n\ttext-align: center;\r\n\tpadding: 40px 0;\r\n}\r\n.answers{\r\n\twidth: 100%;\r\n\theight: calc(50% - 100px);\r\n\theight: -webkit-calc(50% - 100px);\r\n\r\n\tdisplay: -webkit-box;\r\n\r\n\tdisplay: -ms-flexbox;\r\n\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\t-ms-flex-line-pack: distribute;\r\n\t    align-content: space-around;\r\n}\r\n\r\n.counter-text{\r\n\tfont-size: 150px;\r\n\tcolor: darkgrey;\r\n}\r\n.title-text{\r\n\tfont-size: 20px;\r\n\tcolor: darkgrey;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".instruction-wrapper{\r\n\theight: 80%;\r\n\tpadding-top: -webkit-calc((80% - 20px) / 2);\r\n\ttext-align: center;\r\n}\r\n\r\n.instruction-wrapper > span{\r\n\tfont-size: 20px;\r\n\tcolor: darkgrey;\r\n}\r\n\r\n.button-wrapper{\r\n\theight: 20%;\r\n\tposition: relative;\r\n\tpadding-top: -webkit-calc((20% - 50px) / 2);\r\n}\r\n\r\n.button-wrapper > .button{\r\n\tmargin: auto;\r\n\theight: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".questionaire-wrapper{\r\n\twidth: 1000px;\r\n\theight: 100%;\r\n\tmargin-left: -webkit-calc(50% - 500px);\r\n\r\n}\r\n.questionaire-body{\r\n\twidth: 100%;\r\n\theight: 80%;\r\n\r\n\r\n\ttext-align: center;\r\n}\r\n.questionaire-button{\r\n\tpadding-top: 20px;\r\n\theight: 20%;\r\n\ttext-align: center;\r\n}\r\n\r\n.questionaire-button > span{\r\n\tpadding-left: 50px;\r\n\tpadding-right: 50px;\r\n}\r\n\r\n\r\n.counter-text{\r\n\tfont-size: 150px;\r\n\tcolor: darkgrey;\r\n}\r\n.title-text{\r\n\tfont-size: 20px;\r\n\tcolor: darkgrey;\r\n}\r\n\r\np {\r\n\tfont-size: 20px;\r\n\tcolor: darkgrey;\r\n}\r\n\r\n.questionaire-textarea-wrapper{\r\n\theight: 100%;\r\n}\r\n\r\n.questionaire-words{\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\t-ms-flex-line-pack: distribute;\r\n\t    align-content: space-around;\r\n}\r\n\r\n.word{\r\n\tfont-size: 20px;\r\n\r\n\theight: 24px;\r\n\twidth: 25%;\r\n\r\n\tpadding: 2px 2px;\r\n\tpadding-left: 40px;\r\n\tbox-sizing: border-box;\r\n\tcolor: darkgrey;\r\n\r\n\t//border: 1px darkgrey solid;\r\n\r\n\ttext-align: left;\r\n}\r\n\r\n.empty{\r\n\tcontent: \"\";\r\n\tcursor: inherit;\r\n}\r\n\r\n.point{\r\n\tcursor: pointer;\r\n}\r\n\r\n.questionaire-opis{\r\n\twidth: 100%;\r\n\theight: -webkit-calc(50%);\r\n}\r\n\r\n.questionaire-textarea{\r\n\twidth: 50%;\r\n\theight: 50%;\r\n\tmargin: auto;\r\n}\r\n\r\n.questionaire-textarea > div{\r\n\twidth: 100%;\r\n\theight: 20px;\r\n\t\r\n\ttext-align: left; \r\n}\r\n\r\n.questionaire-textarea > textarea{\r\n\tresize: none;\r\n\toutline: none;\r\n\twidth: 100%;\r\n\theight: -webkit-calc((90% - 20px));\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".wrapper{\r\n\twidth: 100%;\r\n\tborder: 0.5px grey solid;\r\n\theight: calc((100%-100px));\r\n}\r\n.counter{\r\n\theight: calc((50%-100px));\r\n\ttext-align: center;\r\n\tposition: relative;\r\n}\r\n.counter > span{\r\n\tposition: absolute;\r\n\tbottom: 20px;\r\n\t-webkit-transform: translateX(-50%);\r\n\t        transform: translateX(-50%);\r\n}\r\n.question{\r\n\tborder: 0.5px grey solid;\r\n\tborder-left: none;\r\n\tborder-right: none;\r\n\theight: 100px;\r\n\ttext-align: center;\r\n\tpadding: 40px 0;\r\n}\r\n.answers{\r\n\twidth: 100%;\r\n\theight: calc(50% - 100px);\r\n\theight: -webkit-calc(50% - 100px);\r\n\r\n\tdisplay: -webkit-box;\r\n\r\n\tdisplay: -ms-flexbox;\r\n\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: horizontal;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-direction: row;\r\n\t        flex-direction: row;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n\t-ms-flex-line-pack: distribute;\r\n\t    align-content: space-around;\r\n}\r\n\r\n.counter-text{\r\n\tfont-size: 150px;\r\n\tcolor: darkgrey;\r\n}\r\n.title-text{\r\n\tfont-size: 20px;\r\n\tcolor: darkgrey;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)();
// imports


// module
exports.push([module.i, ".thanks-wrapper{\r\n\twidth: 100%;\r\n\theight: 80%;\r\n\r\n\tpadding-top: -webkit-calc((100% - 40px) / 2);\r\n\tpadding-bottom: -webkit-calc((100% - 40px) / 2);\r\n\r\n\ttext-align: center;\r\n}\r\n.thanks-button{\r\n\theight: 20%;\r\n\ttext-align: center;\r\n}\r\n\r\n.thanks-button > span{\r\n\tpadding-left: 50px;\r\n\tpadding-right: 50px;\r\n}\r\n\r\n.thanks-wrapper > span, .thanks-button > span {\r\n\tfont-size: 30px;\r\n\tcolor: darkgrey;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n\t<div class=\"main-wrapper\">\n\t\t<app-headset-test *ngIf=\"controller == 4\" (brokenHeadset)=\"exitExperiment()\" (next)=\"progressTimeline($event)\"></app-headset-test>\n\t\t<app-instructions *ngIf=\"controller == 0\" (next)=\"progressTimeline($event)\" [instructions]=\"instructions\"></app-instructions>\n\t\t<sound-question [ngClass]=\"{'hide': (controller != 1)}\" [question]=\"currentQuestion.asObservable()\" (answer)=\"questionAnswered($event)\">loading sound-question</sound-question>\n\t\t<app-thanks *ngIf=\"controller == 2\" [resultsSaved]=\"resultsSaved\" (saveResults)=\"saveResults()\"></app-thanks>\n\t\t<app-questionnaire *ngIf=\"controller == 3\" (next)=\"progressTimeline($event)\"> </app-questionnaire>\n\t</div>\n</div>"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<app-instructions *ngIf=\"controller == 1\" (next)=\"afterInstructions()\" [instructions]=\"instructions\"></app-instructions>\n<app-instructions *ngIf=\"controller == 2\" [button]=\"'false'\" [instructions]=\"'Dobrze'\"></app-instructions>\n<app-instructions *ngIf=\"controller == 3\" (next)=\"noSoundReact()\" [button]=\"true\" [instructions]=\"noSoundMsg\"></app-instructions>\n<div class=\"wrapper\" *ngIf=\"controller == 0\">\n\t<div class=\"counter\">\n\t\t<span class=\"counter-text\">\n\t\t\t<span class=\"fa fa-headphones\"></span>\n\t\t</span>\n\t</div>\n\t<div class=\"question\">\n\t\t<span class=\"title-text\"> {{title}} </span>\n\t</div>\n\t<div class=\"answers\">\n\t\t<div class=\"button\" (click)=\"answerQuestion('left')\"> Lewe </div>\n\t\t<div class=\"button\" (click)=\"answerQuestion('right')\"> Prawe </div>\n\t\t<div class=\"button\" (click)=\"noSound()\"> Nic nie slyszę </div>\n\t</div>\n</div>"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<p>\n  input works!\n</p>\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<div class=\"instruction-wrapper\">\n\t<span> {{instruction}} </span>\n</div>\n<div *ngIf=\"button == true\" class=\"button-wrapper\">\n\t<div class=\"button\" (click)=\"next()\">Dalej</div>\n</div>\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports) {

module.exports = "<div class=\"questionaire-wrapper\">\n\t<div class=\"questionaire-body\">\n\t\t<div *ngIf=\"controller==0\" polecenie1>\n\t\t\t<p>Niniejszy kwestionariusz zawiera listę rzeczowników – nazw cech mogących służyć  do charakteryzowania ludzi.</p>\n\t\t\t<p>Prosimy o przeczytanie całej listy oraz zaznaczenie na niej tych cech, których używa Pan(i) myśląc o innych ludziach. Prosimy o postawienie krzyżyka \"<span class=\"fa fa-times\"></span>\" obok każdej cechy, która się Panu(i) nasunie.</p>\n\t\t\t<p>Następnie prosimy o ponowne przeczytanie listy i wybranie z cech zaznaczonych przez Pana(nią) krzyżykami  dziesięciu cech, których używa Pan(i) najczęściej myśląc o innych ludziach</p>\n\t\t\t<p>Prosimy o otoczenie kółkami krzyżyków - <span class=\"fa fa-times-circle-o\"></span> odnoszących się do tych 10 wybranych cech </p>\n\t\t\t<p>Kliknij pozycję aby zaznaczy ją <span class=\"fa fa-time\"></span>, a następnie kliknij ponownie aby otoczyć - <span class=\"fa fa-times-circle-o\"></span> - kółkiem</p>\n\t\t</div>\n\t\t<div *ngIf=\"controller==1\" wykrelsanki1>\n\t\t\t<div class=\"questionaire-title\"></div>\n\t\t\t<div class=\"questionaire-words title-text\">\n\t\t\t\t<div *ngFor=\"let word of firstQuestionaire; let i=index\" class=\"word\" >\n\t\t\t\t\t<span class=\"point\">\n\t\t\t\t\t\t<span class=\"fa fa-{{ ({'0': 'square-o', '1': 'times', '2': 'times-circle-o'})[word.symbol] }}\"></span>\n\t\t\t\t\t\t<span (click)=\"toggleWord(1, i)\">{{word.name}}</span>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"word empty\"></div>\n\t\t\t\t<div class=\"word empty\"></div>\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"controller==2\" class=\"questionaire-textarea-wrapper\" pole tekstowe>\n\t\t\t<div class=\"questionaire-title\"></div>\n\t\t\t<div class=\"questionaire-opis\">\n\t\t\t\t<p>Prosimy teraz pomyśleć o innych ludziach i zastanowić się, jacy ludzie są Panu(i) bliscy?</p>\n\t\t\t\t<p>O jakich ludziach przede wszystkim  Pan(i)  MY, zaliczając się do ich grona?</p>\n\t\t\t\t<p>Określenia MY używamy często w odniesieniu do różnych grup i kategorii ludzi. Prosimy, aby zastanowił (a) się Pan(i) nad tym, o jakiej grupie lub kategorii myśli Pan(i) przede wszystkim, używając określenia MY?</p>\n\t\t\t\t<p>Prosimy, aby postarał (a) się Pan (i) w dowolnej formie dokończyć poniższe  zdanie pierwszymi skojarzeniami, jakie przyjdą Panu (i) na myśl:</p>\n\t\t\t</div>\n\t\t\t<div class=\"questionaire-textarea\">\n\t\t\t\t<div class=\"title-text\">MY  to</div>\n\t\t\t\t<textarea></textarea>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div *ngIf=\"controller==3\" polecenie2>\n\t\t\t<p> Prosimy teraz pomyśleć o ludziach, w stosunku do których używa Pan(i) określenia MY.</p>\n\t\t\t<p>Korzystając z listy na następnej stronie prosimy o zaznaczenie krzyżykami tych spośród cech, które nasuwają się Panu (i) często, gdy próbuje Pan (i) opisać i charakteryzować Was.</p>\n\t\t\t<p>Następnie prosimy, aby jeszcze raz przeczytał (a) Pan (i) cechy oznaczone krzyżykami i wybrał (a) spośród nich 10 najczęściej używanych.</p>\n\t\t\t<p>Prosimy o otoczenie kółkami krzyżyków –  <span class=\"fa fa-times-circle-o\"></span>  – odnoszących się do tych 10 ostatecznie wybranych cech.</p>\n\t\t\t<p>Kliknij pozycję aby zaznaczy ją <span class=\"fa fa-time\"></span>, a następnie kliknij ponownie aby otoczyć - <span class=\"fa fa-times-circle-o\"></span> - kółkiem</p>\n\n\t\t</div>\n\t\t<div *ngIf=\"controller==4\" wykreslanki2>\n\t\t\t<div class=\"questionaire-title\"></div>\n\t\t\t<div class=\"questionaire-words title-text\">\n\t\t\t\t<div *ngFor=\"let word of secondQuestionaire; let i=index\" class=\"word\" >\n\t\t\t\t\t<span class=\"point\">\n\t\t\t\t\t\t<span class=\"fa fa-{{ ({'0': 'square-o', '1': 'times', '2': 'times-circle-o'})[word.symbol] }}\"></span>\n\t\t\t\t\t\t<span (click)=\"toggleWord(2, i)\">{{word.name}}</span>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"word empty\"></div>\n\t\t\t\t<div class=\"word empty\"></div>\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"controller==5\" polecenie2>\n\t\t\t<p>Zachęcamy teraz Pana (nią) do skupienia uwagi na sobie samym (ej).</p>\n\t\t\t<p>Korzystając z listy na następnej stronie prosimy o zaznaczenie krzyżykami tych spośród cech, które nasuwają się Panu (i) często, gdy próbuje Pan (i) opisać i charakteryzować samego siebie.</p>\n\t\t\t<p>Następnie prosimy, aby jeszcze raz przeczytał (a) Pan (i)  cechy oznaczone krzyżykami i wybrał (a) spośród nich 10 najczęściej używanych do samoopisu rzeczowników.</p>\n\t\t\t<p>Prosimy o otoczenie kółkiem krzyżyków – <span class=\"fa fa-times-circle-o\"></span> - odnoszących się do tych 10 ostatecznie wybranych cech.</p>\n\t\t\t<p>Kliknij pozycję aby zaznaczy ją <span class=\"fa fa-time\"></span>, a następnie kliknij ponownie aby otoczyć - <span class=\"fa fa-times-circle-o\"></span> - kółkiem</p>\n\t\t</div>\n\t\t<div *ngIf=\"controller==6\" wykreslanki2>\n\t\t\t<div class=\"questionaire-title\"></div>\n\t\t\t<div class=\"questionaire-words title-text\">\n\t\t\t\t<div *ngFor=\"let word of thirdQuestionaire; let i=index\" class=\"word\" >\n\t\t\t\t\t<span class=\"point\">\n\t\t\t\t\t\t<span class=\"fa fa-{{ ({'0': 'square-o', '1': 'times', '2': 'times-circle-o'})[word.symbol] }}\"></span>\n\t\t\t\t\t\t<span (click)=\"toggleWord(3, i)\">{{word.name}}</span>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"word empty\"></div>\n\t\t\t\t<div class=\"word empty\"></div>\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"questionaire-button\">\n\t\t<span class=\"button\" (click)=\"nextPage()\" >Next</span>\n\t</div>\n</div>"

/***/ }),

/***/ 542:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [ngClass]=\"{'hide': (!showQuestion)}\">\r\n\t<div class=\"counter\">\r\n\t\t<span class=\"counter-text\">\r\n\t\t\t<span *ngIf=\"counter > 0\">{{counter}}</span>\r\n\t\t\t<span *ngIf=\"counter == 0\" class=\"fa fa-headphones\"></span>\r\n\t\t</span>\r\n\t</div>\r\n\t<div class=\"question\">\r\n\t\t<span class=\"title-text\"> {{title}} </span>\r\n\t</div>\r\n\t<div class=\"answers\">\r\n\t\t<div *ngFor=\"let answer of answers\" class=\"button\" [ngClass]=\"{'hide': (!showAnswers)}\" (click)=\"answerQuestion(answer)\">{{ answer }}</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 543:
/***/ (function(module, exports) {

module.exports = "<div class=\"thanks-wrapper\">\n\t<span>Dziękujemy za udział w badaniu.</span>\n</div>\n<!-- <div class=\"thanks-button\">\n\t<span *ngIf=\"!resultsSaved\" (click)=\"emmitSave()\" class=\"button\">Zapisz wyniki</span>\n\t<span *ngIf=\"resultsSaved\">Wyniki zostały zapisane. Możesz bezpiecznie wyjść z programu.</span>\n</div> -->\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(352);


/***/ })

},[821]);
//# sourceMappingURL=main.bundle.js.map