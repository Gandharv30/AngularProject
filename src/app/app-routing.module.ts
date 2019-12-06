import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';


const routes: Routes = [{path:'',component:HeaderComponent},
{path:'',component:FooterComponent},
{path:'',component:BannerComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegistrationComponent}
]; //path of component

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HeaderComponent,FooterComponent,BannerComponent];
