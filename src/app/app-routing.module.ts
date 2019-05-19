import { JimmyComponent } from './jimmy/jimmy.component';
import { BubsComponent } from './bubs/bubs.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bubs',
  },
  {
    path: 'bubs',
    component: BubsComponent,
  },
  {
    path: 'jimmy',
    component: JimmyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
