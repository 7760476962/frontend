import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateditemComponent } from './needy/donateditem/donateditem.component';
import { FeedbackComponent } from './needy/feedback/feedback.component';


import { HomeComponent } from './needy/home/home/home.component';

import { MainComponent } from './needy/main/main.component';
import { NeedyComponent } from './needy/needy.component';
import { RequestsComponent } from './needy/requests/requests.component';
import { SigninComponent } from './pages/pages/signin/signin.component';




const routes: Routes = [

  {
    path: "main/items",
    component: DonateditemComponent
  },
  
  {
    path: "main/home",
    component: HomeComponent
  },
  
  

  {
    path: 'needy ',
    component: NeedyComponent
    
  },
  {
    path: 'main',
    component: MainComponent
  },
  
  
  {


    path: 'signin',
    component: SigninComponent
   

  },
  {
    path: 'main/notify',
  component: RequestsComponent
  },
  {
    path: 'feedback',
  component: FeedbackComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule , ]
})
export class AppRoutingModule { }
