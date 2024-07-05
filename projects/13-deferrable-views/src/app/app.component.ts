import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts>Load Posts</button>
      @defer (on interaction(loadPosts); prefetch on idle) {
        <app-posts />
    } @placeholder {
    <section>
            <i>(press "Load Posts" to retrieve the posts)</i>
    </section>
    }
    </section>
  `,
})
export class AppComponent {}
