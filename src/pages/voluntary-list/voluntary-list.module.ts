import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoluntaryListPage } from './voluntary-list';
import { SwipeToDismissLayout1Module } from '../../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module';

@NgModule({
  declarations: [
    VoluntaryListPage,
  ],
  imports: [
    IonicPageModule.forChild(VoluntaryListPage),
    SwipeToDismissLayout1Module
  ],
})
export class VoluntaryListPageModule {}
