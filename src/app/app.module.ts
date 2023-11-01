import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';
import { HomeComponent } from '@pages/home/home.component';
import { TaskComponent } from '@pages/task/task.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { SettingsComponent } from '@pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TaskComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
