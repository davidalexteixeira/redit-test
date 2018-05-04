import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ItemsService } from './services/items.service';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { SingleItemComponent } from './components/single-item/single-item.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';



// -- routes
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'checkout',  component: CheckoutComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'item-details', component: ItemDetailsComponent },
  { path: 'summary', component: SummaryPageComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CheckoutComponent,
    HomepageComponent,
    ItemDetailsComponent,
    SingleItemComponent,
    SummaryPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
