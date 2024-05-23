import { Routes } from '@angular/router';
import {ProductDetailsComponent} from './product-details/product-details.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    { path: 'product-details', component: ProductDetailsComponent },
    { path: 'invoicefghgfh', component: InvoiceComponent },
    { path: '',   redirectTo: '/product-details', pathMatch: 'full' }, 
    { path: '**', component: PageNotFoundComponent},
];
