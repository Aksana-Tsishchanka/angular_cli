import { Component, Input } from '@angular/core';

@Component({
    selector:    'app-icon-edit',
    templateUrl: './svgIcons/edit.html',
    styles: [ `:host {
            width: 30px;
            transition: transform .3s ease;
            cursor: pointer;
        }
        :host:hover {
            transform: scale(1.2);
        }
    `]
})

export class IconEditComponent {

}
