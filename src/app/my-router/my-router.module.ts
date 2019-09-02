import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { StyleComponent } from '../style/style.component';
import { DynamicHostComponent } from '../dynamic-host/dynamic-host.component';
import { MyHhttpComponent } from '../my-hhttp/my-hhttp.component';

const routes:Routes = [
  {path:'',component: HomeComponent},
  {path:'dynamic',component: DynamicHostComponent},
  {path:'myhttp',component: MyHhttpComponent},
  {path:'style',component: StyleComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class MyRouterModule { }
