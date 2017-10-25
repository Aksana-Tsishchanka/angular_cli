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
var CourseComponent = /** @class */ (function () {
    function CourseComponent() {
        this.onEdit = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
    }
    CourseComponent.prototype.edit = function () {
        this.onEdit.emit(this.course.id);
    };
    CourseComponent.prototype.delete = function () {
        this.onDelete.emit(this.course.id);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CourseComponent.prototype, "course", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CourseComponent.prototype, "onEdit", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CourseComponent.prototype, "onDelete", void 0);
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'course',
            template: "\n        <div class=\"container\">\n            <div class=\"infoContainer\">\n                <div class=\"info\">\n                    <div class=\"detailsTitle\">\n                        <div class=\"title\">{{course.title}}</div>\n                        <div class=\"duration\">{{course.duration}}</div>\n                    </div>\n                </div>\n                <div class=\"description\">{{course.description}}</div>\n                <div class=\"detailsDate\">\n                    <div>{{course.dateOfCreating}}</div>\n                </div>\n            </div>\n            <div class=\"btnContainer\">\n                <icon-edit (click)=\"edit()\"></icon-edit>\n                <icon-delete (click)=\"delete()\"></icon-delete>\n            </div>\n        </div>\n    ",
            styles: ["\n        :host {  \n            border: 1px solid #d5c9e2;\n            margin-bottom: 2%;\n            width: 100%;\n            min-width: 300px;\n            margin-right: 2%;\n            padding: 20px;\n        }\n        \n        :host:hover {\n            background-color:rgba(0,0,255,0.1);\n        }\n        .container {\n            display: flex;\n            flex-wrap: wrap;\n            height: 100%;\n        }\n        .info, .infoContainer, .detailsTitle, .detailsDate {\n            display: flex;\n        }\n        .infoContainer {\n            flex: 3;\n            flex-direction: column;\n        }\n        .description {\n            flex: 1;\n            margin-top: 10px;\n            font-size: 12px;\n            line-height: 1.6;\n        }\n        .info {\n            justify-content: space-between;\n            font-size: 14px;\n        }\n        .btnContainer {\n            display: flex;\n            justify-content: space-between;\n        }\n        .title {\n            color: #50c6db;\n            font-size: 16px;\n        }\n        .duration {\n            border-left: 1px solid grey;\n            padding-left: 10px;\n            color: grey;\n            font-size: 14px;\n            margin-left: 10px;\n        }\n        .detailsDate {\n            font-size: 12px;\n            font-style: italic;\n            color: grey;\n            line-height: 2;\n        }\n    "]
        })
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map