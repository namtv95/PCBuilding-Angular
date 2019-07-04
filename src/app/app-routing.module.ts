import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { SettingViewComponent } from './setting-view/setting-view.component';

const routes: Routes = [
  { path: 'main-view', component: MainViewComponent },
  { path: '', redirectTo: '/main-view', pathMatch: 'full' },
  { path: '**', component: MainViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
