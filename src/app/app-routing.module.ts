import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './gebruikers/gebruikers.component';
import { UserResolver } from './gebruikers/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
    {
    path: 'employees',
    component: EmployeesComponent
  },
   { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', 
  component: LoginComponent, canActivate: [AuthGuard] 
},
  { path: 'register',
   component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', 
  component: UserComponent,  resolve: { data: UserResolver}}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
