import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PeopleListComponent} from './components/people-list/people-list.component'
import {PeopleRegisterComponent} from './components/people-register/people-register.component'
import {PeopleEditComponent} from './components/people-edit/people-edit.component'
import {PeopleSearchComponent} from './components/people-search/people-search.component';

const routes: Routes = [
  {path: 'people-list', component: PeopleListComponent},
  {path: 'registro-persona', component: PeopleRegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'people-edit/:id', component: PeopleEditComponent },
  {path: 'people-search', component: PeopleSearchComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
