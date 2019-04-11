import { Component, QueryList, ViewChildren } from '@angular/core';
import { SatPopover } from '@ncstate/sat-popover';

interface MenuItem {
  val: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-menu-example',
  styleUrls: ['menu-example.component.scss'],
  template: `
    <pre *ngIf="!selection">Select a menu item</pre>
    <pre *ngIf="selection">You've selected: {{ selection }}</pre>

    <button [satPopoverAnchorFor]="menu" (click)="menu.toggle()">Menu</button>

    <sat-popover #menu horizontalAlign="after" hasBackdrop>
      <div class="menu-wrapper" tabIndex="0">
        <button *ngFor="let item of menuItems"
            class="menu-item"
            [satPopoverAnchorFor]="child"
            (click)="item.children ? child.toggle() : select([item.val])">

          {{ item.val }} <span *ngIf="item.children">></span>

          <sat-popover #child horizontalAlign="after" hasBackdrop>
            <div class="menu-wrapper" tabIndex="0">
              <button *ngFor="let childItem of item.children"
                  class="menu-item"
                  (click)="select([item.val, childItem.val])">
                {{ childItem.val }}
              </button>
            </div>
          </sat-popover>

        </button>
      </div>
    </sat-popover>
  `
})
export class MenuExample {

  @ViewChildren(SatPopover) allPopovers: QueryList<SatPopover>;

  selection: string[];

  /** For a simplified (ahem, lazy) demo, the menu has max depth of 2. */
  menuItems: MenuItem[] = [
    { val: 'Save' },
    { val: 'Edit' },
    {
      val: 'New',
      children: [
        { val: 'Document' },
        { val: 'Project' },
      ]
    }
  ];

  select(values: string[]) {
    this.selection = values;

    // close all popovers
    this.allPopovers.forEach(p => p.close());
  }



}