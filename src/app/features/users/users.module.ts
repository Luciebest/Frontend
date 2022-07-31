import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserOverviewComponent } from './user-overview/user-overview.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';


@NgModule({
  declarations: [
    UserOverviewComponent,
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
