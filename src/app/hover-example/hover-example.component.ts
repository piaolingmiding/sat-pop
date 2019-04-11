import { Component } from '@angular/core';


@Component({
  selector: 'app-hover-example',
  styleUrls: ['hover-example.component.scss'],
  template: `
    <div class="hover-anchor"
        [satPopoverAnchorFor]="p"
        (mouseenter)="p.open()"
        (mouseleave)="p.close()">
      Hover me
    </div>

    <sat-popover #p horizontalAlign="after">
      <div class="tooltip-wrapper">
        Multi-line <br> <i>Tooltip</i>
      </div>
    </sat-popover>
  `
})
export class HoverExample {

}