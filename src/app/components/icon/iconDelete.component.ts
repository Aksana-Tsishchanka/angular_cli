import { Component } from '@angular/core';

/* templateUrl: './app/assets/svgIcons/delete.svg' */
@Component({
    selector:    'app-icon-delete',
    templateUrl: './svgIcons/delete.html',
    styles: [ `
        :host {
            width: 30px;
            transition: transform .3s ease;
            cursor: pointer;
        }
        :host:hover {
            transform: scale(1.2);
        }
    `]
})

export class IconDeleteComponent {

}
