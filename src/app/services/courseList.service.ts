import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course.interface';
import { COURSE_LIST } from '../mocks/mock-courseList';

@Injectable()
export class CourseListService {
    public getList(): Course[] {
        return COURSE_LIST;
    }

    public getCourse(id): Course {
        return COURSE_LIST.filter( // use find
            (el: Course) => el.id === id
        )[0];
    }

    public createCourse(course): void {
        const id = COURSE_LIST[COURSE_LIST.length - 1].id + 1;
        const newCourse = {
            id,
            title: course.title || '',
            dateOfCreating: course.dateOfCreating || '',
            duration: course.duration || '',
            description: course.description || ''
        };
        COURSE_LIST.push(newCourse);
    }
    public updateCourse(updatedCourse: Course): void {
        const index = this.findCourseIndex(updatedCourse.id, COURSE_LIST);
        console.log(index);
        if (Object.keys(updatedCourse) && index > -1) {
            COURSE_LIST[index] = updatedCourse;
        }
    }
    public deleteCourse(id) {
        const index = this.findCourseIndex(id, COURSE_LIST);
        COURSE_LIST.splice(index, 1);
    }
    private findCourseIndex(id, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                return i;
            }
        }
        return -1;
    }
}
