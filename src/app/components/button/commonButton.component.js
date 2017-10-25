"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CommonButtonComponent = /** @class */ (function () {
    function CommonButtonComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CommonButtonComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], CommonButtonComponent.prototype, "title", void 0);
    CommonButtonComponent = __decorate([
        core_1.Component({
            selector: 'common-button',
            template: "\n        <button class=\"btn\" [ngClass]=type>{{title}}</button>\n    ",
            styles: [" .btn {\n        color: white;\n        text-align: center;\n        text-decoration: none;\n        display: flex;\n        font-size: 16px;\n        margin-bottom: 2%;\n        cursor: pointer;\n        flex: 1;\n        width: 100%;\n        padding: 10px 20px;\n        border-radius: 5%;\n    }\n    \n    .btn:hover {\n        border: 1px solid brown;\n    }\n    .edit {\n        background-color: blueviolet;\n        border: 1px solid darkorchid;\n    }\n    .edit:hover {\n        background-color: darkorchid; \n    }\n    .delete {\n        background-color: #485563;\n        border: 1px solid royalblue;\n    }\n    .delete:hover {\n        background-color: brown;\n    }"]
        })
    ], CommonButtonComponent);
    return CommonButtonComponent;
}());
exports.CommonButtonComponent = CommonButtonComponent;
//# sourceMappingURL=commonButton.component.js.map