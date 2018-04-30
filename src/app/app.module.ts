import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks.component';
import { AutoGrowDirective } from './auto-grow.directive';
import { HttpModule }    from '@angular/http';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    TasksComponent,
    AutoGrowDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
