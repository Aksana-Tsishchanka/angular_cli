"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.value = '';
    }
    SearchComponent.prototype.onEnter = function () {
        console.log(this.value);
    };
    SearchComponent.prototype.getInputValue = function () {
        console.log(this.value);
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            template: "\n        <div class=\"searchContainer\">\n            <input \n                    class=\"search\"\n                    type=\"text\" \n                    placeholder=\"search for courses\"\n                    [(ngModel)]=\"value\"\n                    (keyup.enter)=\"onEnter()\"\n            />\n            <div class=\"icon\">\n                <icon-search (click)=\"getInputValue()\"></icon-search>\n            </div>\n        </div>\n        ",
            styles: ["\n        :host {\n            width: 100%;\n            display: flex;\n        }\n        .searchContainer {\n            display: flex;\n            width: 45%;\n            align-items: center;\n            position: relative;\n        }\n        \n        .search {\n            height: 2rem;\n            font-size: 0.8rem;\n            margin-bottom: 20px;\n            padding-left: 10px;\n            width: 100%;\n            min-width: 100px;\n            display: block;\n        }\n        .search::placeholder {\n            font-style: italic;\n        }\n        .icon {\n            position: absolute;\n            right: 5px;\n            width: 30px;\n            top: 4px;\n        }\n    "]
        })
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map