import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FormsModule],
    template: `
        <article>
            <h1>Blog Post</h1>
            <section>
                <label
                    >Post Title
                    <input
                        type="text"
                        id="title"
                        name="title"
                        [(ngModel)]="title"
                /></label>

                <label
                    >Post Body
                    <textarea
                        id="body"
                        name="body"
                        [(ngModel)]="body"
                    ></textarea>
                </label>
            </section>
            <section>
                <p>Title: {{ title }}</p>
                <p>Body: {{ body }}</p>
            </section>
        </article>
    `,
})
export class AppComponent {
    title: string = '';
    body: string = '';
}
