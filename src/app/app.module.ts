import {HttpClientModule} from '@angular/common/http';
import {ProdService} from './prod.service';
import { ProdComponent } from './prod.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent, ProdComponent
  ],
  providers: [ProdService],
  bootstrap: [AppComponent],
})
export class AppModule { }
