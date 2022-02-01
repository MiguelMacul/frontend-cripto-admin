import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/struct/header/header.component';
import { ListCriptoComponent } from './componets/struct/header/element/list-cripto/list-cripto.component';
import { IteamComponent } from './componets/struct/header/element/list-cripto/iteam/iteam.component';
import { ContainerComponent } from './componets/struct/container/container.component';
import { FooterComponent } from './componets/struct/footer/footer.component';
import { HomeComponent } from './componets/pages/home/home.component';
import { LoginComponent } from './componets/pages/login/login.component';
import { LateAComponent } from './componets/pages/home/late-a/late-a.component';
import { MonedaComponent } from './componets/pages/home/late-a/moneda/moneda.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListCriptoComponent,
    IteamComponent,
    ContainerComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LateAComponent,
    MonedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
