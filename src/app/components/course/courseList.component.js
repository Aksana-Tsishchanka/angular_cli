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
var courseList_service_1 = require("../../services/courseList.service");
var CourseListComponent = /** @class */ (function () {
    function CourseListComponent(courseListService) {
        this.courseListService = courseListService;
    }
    CourseListComponent.prototype.ngOnInit = function () {
        console.log(this.getCourseById('1'));
    };
    CourseListComponent.prototype.getCourseList = function () {
        return this.courseListService.getList();
    };
    CourseListComponent.prototype.getCourseById = function (id) {
        return this.courseListService.getCourse(id);
    };
    CourseListComponent.prototype.updateCourse = function (course) {
        this.courseListService.updateCourse(course);
    };
    CourseListComponent.prototype.onEdit = function (id) {
        console.log("edit course with id: " + id);
        this.updateCourse({
            id: id,
            title: 'updated Course'
        });
    };
    CourseListComponent.prototype.deleteCourse = function (id) {
        console.log(id);
        this.courseListService.deleteCourse(id);
    };
    CourseListComponent.prototype.onDelete = function (id) {
        console.log("delete course with id: " + id);
        var result = window.confirm('Do you really want remove this course?');
        if (result) {
            this.deleteCourse(id);
        }
    };
    CourseListComponent = __decorate([
        core_1.Component({
            selector: 'course-list',
            providers: [courseList_service_1.CourseListService],
            template: "\n        <mat-form-field>\n            This is modal\n        </mat-form-field>\n        <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n        <div class=\"flex-container\">\n            <course *ngFor=\"let course of getCourseList()\"\n                    [course]=course\n                    (onEdit)=\"onEdit($event)\"\n                    (onDelete)=\"onDelete($event)\"\n            >\n            </course>\n        </div>\n    ",
            styles: [" .flex-container {\n        display: flex;\n        flex: 1;\n        flex-flow: wrap;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [courseList_service_1.CourseListService])
    ], CourseListComponent);
    return CourseListComponent;
}());
exports.CourseListComponent = CourseListComponent;
//# sourceMappingURL=courseList.component.js.map