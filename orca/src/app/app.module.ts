import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { GetACardComponent } from './get-a-card/get-a-card.component';
import { RegisteredCardsComponent } from './registered-cards/registered-cards.component';

const appRoutes: Routes = [
    { 
        path: ''   ,
        component: HomeComponent  
    },
    {
        path: 'get-a-card',
        component: GetACardComponent
    },
    {
        path: 'registered-cards',
        component: RegisteredCardsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    GetACardComponent,
    RegisteredCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
