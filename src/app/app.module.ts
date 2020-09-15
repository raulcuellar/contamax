import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InventarioComponent } from './inventario/inventario.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    InventarioComponent,
    IngresoComponent,
    EgresoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
