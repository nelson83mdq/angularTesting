import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectComponent } from './subject/subject.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { ParametricComponent } from './parametric/parametric.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    HttpTestComponent,
    PlaceHolderComponent,
    ParametricComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
