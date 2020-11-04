import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ReadTaskComponent } from './read-task/read-task.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/create-task', pathMatch: 'full' },
      { path: 'create-task', component : CreateTaskComponent },
      { path: 'read-task', component : ReadTaskComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CreateTaskComponent,
    ReadTaskComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
