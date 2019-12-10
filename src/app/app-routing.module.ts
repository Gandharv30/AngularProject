import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { BuyersPageComponent } from './buyer/buyers-page/buyers-page.component';
import { ViewAllComponent } from './buyer/view-all/view-all.component';


const routes: Routes = [//{path:'',component:HeaderComponent},
//path:'',component:FooterComponent},
//{path:'',component:BannerComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegistrationComponent},
// {path:'buyerPage',component:BuyersPageComponent},
//{path:'viewAll',component:ViewAllComponent},
{
  path: 'buyerPage',
  loadChildren: './buyer/buyer.module#BuyerModule',
}


]; //path of component

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HeaderComponent,FooterComponent,BannerComponent,ViewAllComponent];
