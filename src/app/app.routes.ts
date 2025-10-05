import { Routes } from '@angular/router';
import { Home } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { Cart } from './header/cart/cart';
import { ProfileComponent } from './profile/profile.component';
import { Products } from './products/products';
import { ProductList } from './products/product-list/product-list';

export const routes: Routes = [
    {path:"", redirectTo:"home",pathMatch:'full'},
    {path:'home', component:Home},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'products', component:Products},
    {path:'cart', component:Cart},
    {path:'profile', component:ProfileComponent},
    {path:'search', component:ProductList}
];
