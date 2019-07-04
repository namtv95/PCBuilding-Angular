import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { SettingViewComponent } from './setting-view/setting-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PopupModule } from 'ng2-opd-popup';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    SettingViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    PopupModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
