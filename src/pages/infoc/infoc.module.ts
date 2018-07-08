import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfocPage } from './infoc';

@NgModule({
  declarations: [
    InfocPage,
  ],
  imports: [
    IonicPageModule.forChild(InfocPage),
  ],
})
export class InfocPageModule {}
