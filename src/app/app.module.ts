import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { DialogModule } from './dialog/dialog.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from './components/course/courseList.component';
import { CourseComponent } from './components/course/course.component';
import { IconEditComponent } from './components/icon/iconEdit.component';
import { IconDeleteComponent } from './components/icon/iconDelete.component';
import { CommonButtonComponent } from './components/button/commonButton.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchComponent } from './components/search/search.component';
import { IconSearchComponent } from './components/icon/iconSearch.component';
import { LoginComponent  } from './components/login/login.component';
import { LogoutComponent } from "./components/logout/logout.component";

@NgModule({
    imports:      [BrowserModule,  FormsModule, DialogModule, BrowserAnimationsModule ],
    declarations: [AppComponent, HeaderComponent, CourseListComponent, CourseComponent,
        CommonButtonComponent, FooterComponent, IconEditComponent, IconDeleteComponent,
        LogoComponent, SearchComponent, IconSearchComponent, LoginComponent, LogoutComponent],
    bootstrap:    [AppComponent],
})
export class AppModule { }
