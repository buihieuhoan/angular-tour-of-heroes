import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  //add the dashboard route
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  //add a default route
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  //add a hero detail route
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
