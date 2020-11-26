import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavigationBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
