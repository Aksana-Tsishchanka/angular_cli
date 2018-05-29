import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../../interfaces/course.interface';

@Component({
    selector:    'app-course',
    template: `
        <div class="container">
            <div class="infoContainer">
                <div class="info">
                    <div class="detailsTitle">
                        <div class="title">{{getCourse().title}}</div>
                        <div class="duration">{{getCourse().duration}}</div>
                    </div>
                </div>
                <div class="description">{{getCourse().description}}</div>
                <div class="detailsDate">
                    <div>{{getCourse().dateOfCreating}}</div>
                </div>
            </div>
            <div class="btnContainer">
                <app-icon-edit (click)="editCourse()"></app-icon-edit>
                <app-icon-delete (click)="deleteCourse()"></app-icon-delete>
            </div>
        </div>
    `,
    styleUrls: ['./course.component.css'],
})

export class CourseComponent {
    @Input() private course: Course;
    @Output() private onEdit = new EventEmitter<string>();
    @Output() private onDelete = new EventEmitter<string>();

    public getCourse() {
      return this.course;
    }

    public editCourse() {
        this.onEdit.emit(this.course.id);
    }

    public deleteCourse() {
        this.onDelete.emit(this.course.id);
    }
}
