import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { UserManualComponent } from './core/components/user-manual/user-manual.component';
import { EventsComponent } from './core/components/events/events.component';
import { UserComponent } from './core/components/user/user.component';
import { TopicsComponent } from './core/components/topics/topics.component';
import { NotificationsComponent } from './core/components/notifications/notifications.component';
import { ReviewsComponent } from './core/components/reviews/reviews.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';


const routes: Routes = [

  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path: 'login', pathMatch: 'full', component: LoginComponent },
  {path: 'signup', pathMatch: 'full', component: SignupComponent },
  {path:'forgot-password', pathMatch: 'full', component: ForgotPasswordComponent},
  {path:'user-manual', pathMatch: 'full', component: UserManualComponent},
  {path:'events', pathMatch: 'full', component: EventsComponent},
  {path:'reviews',pathMatch: 'full', component:ReviewsComponent},
  {path:'topics',pathMatch: 'full', component:TopicsComponent},
  {path:'notifications',pathMatch: 'full', component:NotificationsComponent},
 //Wild Card Route for 404 request
 { path: '**', pathMatch: 'full',
 component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
