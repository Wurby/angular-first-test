import { BestStateComponent } from './best-state/best-state.component';
import { JimmyComponent } from './jimmy/jimmy.component';
import { BubsComponent } from './bubs/bubs.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  {
    path: 'best-state',
    component: BestStateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
