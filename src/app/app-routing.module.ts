import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { VerificationComponent } from './components/verification/verification.component';

import { AdminComponent } from './components/admin/admin.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';

import { GetAllSellersComponent } from './components/get-all-sellers/get-all-sellers.component';

import { GetBooksForVerificationComponent } from './components/get-books-for-verification/get-books-for-verification.component';
import { CartComponent } from './components/cart/cart.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { ViewWishlistComponent } from './components/view-wishlist/view-wishlist.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { GetallwishListComponent } from './components/getallwish-list/getallwish-list.component';
import { VericationSuccessPageComponent } from './components/verication-success-page/verication-success-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'verification/:token', component: VerificationComponent },
  { path:'verificationSuccess/:token',component:VericationSuccessPageComponent},
  { path: 'admin-dashboard/sellers', component: GetAllSellersComponent },
  { path: 'successPage', component: SuccessPageComponent },
  { path: 'viewWishList', component: ViewWishlistComponent },
  { path: 'myorders', component: MyordersComponent },
  { path: 'viewallWishList', component: GetallwishListComponent },
  {
    path: 'getallbooks',
    component: GetallbooksComponent,
  },
  { path: 'addbook', component: AddBookComponent },
  { path: 'updateBook', component: UpdateBookComponent },
  { path: 'successPage', component: SuccessPageComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'getallbooks', pathMatch: 'full' },
      {
        path: 'getallbooks',
        component: GetallbooksComponent,
      },
      { path: 'cart', component: CartComponent },
      { path: 'successPage', component: SuccessPageComponent },
    ],
  },
  {
    path: 'admin-dashboard',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'sellers', pathMatch: 'full' },
      { path: 'sellers', component: GetAllSellersComponent },
      {
        path: 'booksForVerification',
        component: GetBooksForVerificationComponent,
      },
    ],
  },
  {
    path: 'vendor-dashboard',
    component: VendorDashboardComponent,
    children: [
      { path: '', redirectTo: 'display-books', pathMatch: 'full' },
      {
        path: 'display-books',
        component: DisplayBooksComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  DashboardComponent,
  VerificationComponent,
  AdminComponent,
  CartComponent,
  GetAllSellersComponent,
];
