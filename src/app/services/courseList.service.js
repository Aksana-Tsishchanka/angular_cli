"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_courseList_1 = require("../mocks/mock-courseList");
var CourseListService = /** @class */ (function () {
    function CourseListService() {
    }
    CourseListService.prototype.getList = function () {
        return mock_courseList_1.COURSE_LIST;
    };
    CourseListService.prototype.getCourse = function (id) {
        return mock_courseList_1.COURSE_LIST.filter(// use find
        function (el) { return el.id === id; })[0];
    };
    CourseListService.prototype.createCourse = function (course) {
        var id = mock_courseList_1.COURSE_LIST[mock_courseList_1.COURSE_LIST.length - 1].id + 1;
        var newCourse = {
            id: id,
            title: course.title || '',
            dateOfCreating: course.dateOfCreating || '',
            duration: course.duration || '',
            description: course.description || ''
        };
        mock_courseList_1.COURSE_LIST.push(newCourse);
    };
    CourseListService.prototype.updateCourse = function (updatedCourse) {
        var index = this.findCourseIndex(updatedCourse.id, mock_courseList_1.COURSE_LIST);
        console.log(index);
        if (Object.keys(updatedCourse) && index > -1) {
            mock_courseList_1.COURSE_LIST[index] = updatedCourse;
        }
    };
    CourseListService.prototype.deleteCourse = function (id) {
        var index = this.findCourseIndex(id, mock_courseList_1.COURSE_LIST);
        mock_courseList_1.COURSE_LIST.splice(index, 1);
    };
    CourseListService.prototype.findCourseIndex = function (id, list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                return i;
            }
        }
        return -1;
    };
    CourseListService = __decorate([
        core_1.Injectable()
    ], CourseListService);
    return CourseListService;
}());
exports.CourseListService = CourseListService;
//# sourceMappingURL=courseList.service.js.map