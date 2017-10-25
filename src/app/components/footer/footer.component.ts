import { Component } from '@angular/core';

@Component({
    selector: 'app-footer-component',
    template: '<footer class="info">© 2017 Aksana Tolstoguzova</footer>',
    styles: [`
        .info {
            font-size: 12px;
            font-style: italic;
        }
    `]
})
export class FooterComponent {

}
