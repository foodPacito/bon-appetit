import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HandPickPage } from './hand-pick';

@NgModule({
  declarations: [
    HandPickPage,
  ],
  imports: [
    IonicPageModule.forChild(HandPickPage),
  ],
})
export class HandPickPageModule {}
