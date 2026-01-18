import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { Cart } from './header/cart/cart';
import { ProfileComponent } from './profile/profile.component';
import { Products } from './products/products';
import { ProductList } from './products/product-list/product-list';
import { Vendor } from './vendor/vendor';  
import { YourAccount } from './user-profile/your-account/your-account';
import { Order } from './user-profile/order/order';
import { LoginSecurity } from './user-profile/login-security/login-security';
import { LogoutComponent } from './auth/logout/logout/logout';



export const routes: Routes = [
    {path:"", redirectTo:"home",pathMatch:'full'},
    {path:'home', component:Home},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'products', component:Products},
    {path:'cart', component:Cart},
    {path:'profile', component:ProfileComponent},
    {path:'search', component:ProductList},
    {path:'vendor', component:Vendor},
    {path:'your-account', component:YourAccount},
    {path:'order', component:Order},
    {path:'loginsecurity', component:LoginSecurity},
    {path:'logout',component:LogoutComponent}
];



export class AppRoutingModule {}
