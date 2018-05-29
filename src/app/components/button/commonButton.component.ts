import { Component, Input } from '@angular/core';

@Component({
    selector:    'app-common-button',
    template: `
        <button class="btn" [ngClass]=type>{{title}}</button>
    `,
    styles: [` .btn {
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        margin-bottom: 2%;
        cursor: pointer;
        flex: 1;
        width: 100%;
        padding: 10px 20px;
        border-radius: 5%;
    }
    .submit {
      background-color: lightslategrey;
      border: none;
      padding: 5px;
      transition: background-color 1s ease-out;
    }
    .submit:hover {
      background-color: olivedrab;
    }
    `]
})

export class CommonButtonComponent {
    @Input() private type = 'submit';
    @Input() private title = 'Click';
}
