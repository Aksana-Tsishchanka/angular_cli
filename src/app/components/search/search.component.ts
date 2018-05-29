import { Component } from '@angular/core';

@Component({
    selector:    'app-search',
    template: `<div class="searchContainer">
            <input 
                    class="search"
                    type="text" 
                    placeholder="search for courses"
                    [(ngModel)]="value"
                    (keyup.enter)="onEnter()"
            />
            <div class="icon">
                <app-icon-search (click)="getInputValue()"></app-icon-search>
            </div>
        </div>
        `,
    styles: [ `
        :host {
            width: 100%;
            display: flex;
        }
        .searchContainer {
            display: flex;
            width: 45%;
            align-items: center;
            position: relative;
        }
        
        .search {
            height: 2rem;
            font-size: 0.8rem;
            margin-bottom: 20px;
            padding-left: 10px;
            width: 100%;
            min-width: 100px;
            display: block;
        }
        .search::placeholder {
            font-style: italic;
        }
        .icon {
            position: absolute;
            right: 5px;
            width: 30px;
            top: 4px;
        }
    `]
})

export class SearchComponent {
    private value = '';

    public onEnter() {
        console.log(this.value);
    }

    public getInputValue() {
        console.log(this.value);
    }
}
