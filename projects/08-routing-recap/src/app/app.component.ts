import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    template: ` <h1>Welcome to {{ title }}!</h1>
        <section>
            <h2>Navigation</h2>
            <ul>
                <li><a routerLink="/">Home</a></li>
                <li><a routerLink="/products">Products</a></li>
            </ul>
        </section>
        <section>
            <h2>Products</h2>
            <ul>
                @for (title of productTitles; track $index) {
                <li>
                    <a [routerLink]="['details', $index]"
                        >{{ $index }}. {{ title }}</a
                    >
                </li>
                }
            </ul>
        </section>
        <section>
            <router-outlet />
        </section>`,
    styles: [
        `
            section {
                margin-top: 10px;
                margin-bottom: 20px;
            }
        `,
    ],
})
export class AppComponent {
    title = '08-routing-recap';

    productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
