import { Component } from '@angular/core';

@Component({
    selector:    'app-icon-search',
    templateUrl: './svgIcons/search.html',
    styles: [ `
        :host {
            width: 30px;
            transition: transform .3s ease;
            cursor: pointer;
            line-height: 2;
        }
        :host:hover {
            transform: scale(1.2);
        }
    `]
})

export class IconSearchComponent {

}
