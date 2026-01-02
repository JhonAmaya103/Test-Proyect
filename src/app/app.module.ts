import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FormuComponent } from './formu/formu.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';

import { registerLocaleData } from '@angular/common';
import localeEsCO from '@angular/common/locales/es-CO';

registerLocaleData(localeEsCO);

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    DetalleComponent,
    FormuComponent,
    ListaCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' } // Configurar la localización de Colombia
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
