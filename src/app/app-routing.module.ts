import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { NotFoundModule } from './not-found/not-found.module';
import { IntroModule } from './intro/intro.module';
import { IntroComponent } from './intro/intro.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InstallComponent } from './install/install.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'install', component: InstallComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  bootstrap: [ IndexComponent ],
  imports: [
    CommonModule,
    IntroModule,
    NotFoundModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    ),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
