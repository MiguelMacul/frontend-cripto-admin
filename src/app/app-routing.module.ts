import { NgModule } from '@angular/core';
import { HomeComponent } from './componets/pages/home/home.component';
import { LoginComponent } from './componets/pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
