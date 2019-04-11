import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SatPopoverModule } from '@ncstate/sat-popover';

import { AppComponent } from './app.component';

import { SimpleExample } from './simple-example/simple-example.component';
import { HoverExample } from './hover-example/hover-example.component';
import { EditExample } from './edit-example/edit-example.component';
import { EditForm } from './edit-example/edit-form.component';
import { MenuExample } from './menu-example/menu-example.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SatPopoverModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    SimpleExample,
    HoverExample,
    EditExample,
    EditForm,
    MenuExample,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
