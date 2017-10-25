import { Course } from '../interfaces/course.interface';

export const COURSE_LIST: Course[] = [
    {
        id: '1',
        title: 'Angular 2',
        dateOfCreating: '12 Sep 2017',
        duration: '60 min',
        description: 'React makes it painless to create interactive UIs. Design simple views for ' +
        'each state in your application, ' +
        'and React will efficiently update and render just the right ' +
        'components when your data changes.\n' +
        '\n' +
        'Declarative views make your code more predictable and easier to debug.'
    },
    {
        id: '2',
        title: 'React.js',
        dateOfCreating: '13 Sep 2017',
        duration: '70 min',
        description: 'React makes it painless to create interactive UIs. Design simple views for ' +
        'each state in your application, ' +
        'and React will efficiently update and render just the right ' +
        'components when your data changes.\n' +
        '\n' +
        'Declarative views make your code more predictable and easier to debug.'
    },
    {
        id: '3',
        title: 'Redux',
        dateOfCreating: '14 Sep 2017',
        duration: '80 min',
        description: 'Build encapsulated components that manage their own state, ' +
        'then compose them to make complex UIs.\n' +
        '\n' +
        'Since component logic is written in JavaScript instead of templates, ' +
        'you can easily pass rich data through your app and keep state out of the DOM.'
    },
];
