import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestReviewsPage } from './rest-reviews';

@NgModule({
  declarations: [
    RestReviewsPage,
  ],
  imports: [
    IonicPageModule.forChild(RestReviewsPage),
  ],
})
export class RestReviewsPageModule {}
