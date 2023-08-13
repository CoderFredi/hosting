import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { HomeComponent } from './home/home.component';
import { AuthoGuard } from './auth/autho.guard';
import { FilesComponent } from './files/files.component';
import { AdminComponent } from './admin/admin.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path: 'login',
    component:SellerComponent
  },
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'files',
    component:FilesComponent
  },
  {
    path: 'contact',
    component:ContactPageComponent
  },
  {
    path: 'store',
    component:StoreComponent
  },
  {
    path: 'admin',
    component:AdminComponent,
    canActivate: [AuthoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
