import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';
import { CoreModule } from './core/core.module';
import { UserComponent } from './core/components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserManualComponent } from './core/components/user-manual/user-manual.component';
import { EventsComponent } from './core/components/events/events.component';
import { NotificationsComponent } from './core/components/notifications/notifications.component';
import { ReviewsComponent } from './core/components/reviews/reviews.component';
import { TopicsComponent } from './core/components/topics/topics.component';
import { MenuComponent } from './core/components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    ForgotPasswordComponent,
    UserComponent,
    UserManualComponent,
    EventsComponent,
    NotificationsComponent,
    ReviewsComponent,
    TopicsComponent,
    MenuComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  exports:[
    UserComponent
  ],

  providers: [],

  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
