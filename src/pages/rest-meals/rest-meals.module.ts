import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestMealsPage } from './rest-meals';

@NgModule({
  declarations: [
    RestMealsPage,
  ],
  imports: [
    IonicPageModule.forChild(RestMealsPage),
  ],
})
export class RestMealsPageModule {}
