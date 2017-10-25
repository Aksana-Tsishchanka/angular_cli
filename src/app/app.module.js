"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
// import { MatDialogModule } from '@angular/material';
var app_component_1 = require("./app.component");
var header_component_1 = require("./components/header/header.component");
var courseList_component_1 = require("./components/course/courseList.component");
var course_component_1 = require("./components/course/course.component");
var iconEdit_component_1 = require("./components/icon/iconEdit.component");
var iconDelete_component_1 = require("./components/icon/iconDelete.component");
var commonButton_component_1 = require("./components/button/commonButton.component");
var footer_component_1 = require("./components/footer/footer.component");
var logo_component_1 = require("./components/logo/logo.component");
var search_component_1 = require("./components/search/search.component");
var iconSearch_component_1 = require("./components/icon/iconSearch.component");
var modal_component_1 = require("./components/modal/modal.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, courseList_component_1.CourseListComponent, course_component_1.CourseComponent,
                commonButton_component_1.CommonButtonComponent, footer_component_1.FooterComponent, iconEdit_component_1.IconEditComponent, iconDelete_component_1.IconDeleteComponent,
                logo_component_1.LogoComponent, search_component_1.SearchComponent, iconSearch_component_1.IconSearchComponent, modal_component_1.ModalComponent],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map