import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent, NgFor, CommonModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public apps = [
        {
            name: "Todo",
            link: "todo"
        },
        {
            name: "Calculator",
            link: "calculator"
        },
        {
            name: "Random Number Generator",
            link: "random-number-generator"
        },
        {
            name: "AG Grid",
            link: "ag-grid"
        },
        {
            name: "Guess The Number",
            link: "guess-the-number"
        }
    ]

    constructor(private titleService: Title, private router: Router) { }

    ngOnInit(): void {
        this.titleService.setTitle('MultiMate | Home');
    }

    onKeyDown(event: KeyboardEvent, index: number) {
        const key = event.key;
        if (key === 'ArrowLeft' || key === 'ArrowRight') {
            event.preventDefault();
            const direction = key === 'ArrowLeft' ? -1 : 1;
            const newIndex = Math.max(0, Math.min(this.apps.length - 1, index + direction));
        }
    }

    handleClick(app: string) {
        const lowerCaseAppName = app.toLowerCase();
        switch (lowerCaseAppName) {
            case "todo":
                this.router.navigate(['/todo']);
                break;
            case "calculator":
                this.router.navigate(['/calculator']);
                break;
            case "random number generator":
                this.router.navigate(['/random-number-generator']);
                break;
            case "ag grid":
                this.router.navigate(['/ag-grid']);
                break;
            case "guess the number":
                this.router.navigate(['/guess-the-number']);
                break;
            default:
                break;
        }
    }

    trackByIndex(index: number, item: any): number {
        return index;
    }

}
