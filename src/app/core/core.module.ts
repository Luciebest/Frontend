import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//const components = [MenuComponent, RegisterComponent, PageNotFoundComponent];
const components = [ RegisterComponent, PageNotFoundComponent];
@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule],
})
export class CoreModule {}
