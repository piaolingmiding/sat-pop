import { Component } from '@angular/core';


@Component({
  selector: 'app-simple-example',
  styleUrls: ['simple-example.component.scss'],
  template: `
    <button [satPopoverAnchorFor]="p" (click)="p.toggle()">More Info</button>

    <sat-popover #p horizontalAlign="after" verticalAlign="above">
      <div class="info-wrapper">
        Username: {{ user.username }} <br>
        Posts: {{ user.posts }}
      </div>
    </sat-popover>
  `
})
export class SimpleExample {

  user = { username: 'pickles', posts: 14 };

}