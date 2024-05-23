import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {ProductDetailsComponent} from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
// @NgModule({
//      declarations: [InvoiceComponent],
//   imports: [BrowserModule,],
//   providers: [],
//   bootstrap: [],

// })
    @NgModule({
imports: [ BrowserModule,
      FormsModule,HttpClientModule   ],
declarations: [InvoiceComponent ],
bootstrap: [  ]
})   

export class AppModule {}