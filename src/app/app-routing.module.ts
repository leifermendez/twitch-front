import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '', //TODO: http://localhost:4200/
    component: HomeComponent
  },
  {
    path: ':user',//TODO: http://localhost:4200/LEIFER
    component: HomeComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
