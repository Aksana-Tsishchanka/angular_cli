"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IconEditComponent = /** @class */ (function () {
    function IconEditComponent() {
    }
    IconEditComponent = __decorate([
        core_1.Component({
            selector: 'icon-edit',
            templateUrl: './app/assets/svgIcons/edit.svg',
            styles: ["        \n        :host {\n            width: 30px;\n            transition: transform .3s ease;\n            cursor: pointer;\n        }\n\n        :host:hover {\n            transform: scale(1.2);\n        }\n    "]
        })
    ], IconEditComponent);
    return IconEditComponent;
}());
exports.IconEditComponent = IconEditComponent;
//# sourceMappingURL=iconEdit.component.js.map