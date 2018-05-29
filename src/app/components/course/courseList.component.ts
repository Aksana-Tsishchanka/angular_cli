import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course.interface';
import { CourseListService } from '../../services/courseList.service';
import { DialogService } from '../../dialog/dialog.service';

@Component({
    selector:    'app-course-list',
    providers: [ CourseListService, DialogService ],
    template: `
        <div class="flex-container">
            <app-course *ngFor="let course of getCourseList()"
                    [course]=course
                    (onEdit)="onEdit($event)"
                    (onDelete)="onDelete($event)"
            >
            </app-course>
        </div>
    `,
    styles: [` .flex-container {
        display: flex;
        flex: 1;
        flex-flow: wrap;
    }
    `]
})

export class CourseListComponent implements OnInit {
    private show = false;

    constructor(private courseListService: CourseListService, private dialogService: DialogService) {
    }

    public ngOnInit() {
        console.log(this.getCourseById('1'));

    }
    public getCourseList(): Course[] {
        return this.courseListService.getList();
    }

    public getCourseById(id): Course {
        return this.courseListService.getCourse(id);
    }
    public updateCourse(course: any): void {
        this.courseListService.updateCourse(course);
    }
    public onEdit(id: string) {
        console.log(`edit course with id: ${id}`);
        this.updateCourse({
             id,
             title: 'updated Course'
        });
    }
    public deleteCourse(id: string) {
        console.log(id);
        this.courseListService.deleteCourse(id);
    }

    public onDelete(id: string) {
        console.log(`delete course with id: ${id}`);
      this.dialogService
        .confirm('', 'Do you want delete this course?')
        .subscribe(res => {
          if (res) {
            this.deleteCourse(id);
          }
        });
    }
}
