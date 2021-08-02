import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StatsComponent } from './stats/stats.component';
import { TransformComponent } from './transform/transform.component';
import { ActivitiesComponent } from './activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    TransformComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
