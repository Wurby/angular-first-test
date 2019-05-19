import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BubsComponent } from './bubs/bubs.component';
import { JimmyComponent } from './jimmy/jimmy.component';

@NgModule({
  declarations: [AppComponent, BubsComponent, JimmyComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
