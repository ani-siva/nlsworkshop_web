import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({

    imports: [CommonModule, RouterLink],
    selector: 'web-header',
    templateUrl: 'header.html',
    styleUrl: 'header.css'
})

export class HeaderComponent {
    title = 'Nonlinear Science: A Multidisciplinary Perspective';
    date = '29 & 30 Jan 2026';
    loc = 'Bharathidasan University';

    scrollTo(fragment: string) {
        setTimeout(() => {
            document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });}, 100);
    }
}
