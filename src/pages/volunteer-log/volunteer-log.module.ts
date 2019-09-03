import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolunteerLogPage } from './volunteer-log';
//import { ExpandableLayout1Module } from '../../components/list-view/expandable/layout-1/expandable-layout-1.module';
import { SegmentLayout3Module } from '../../components/segment/layout-3/segment-layout-3.module';
@NgModule({
  declarations: [
    VolunteerLogPage,
  ],
  imports: [
    IonicPageModule.forChild(VolunteerLogPage),
  //  ExpandableLayout1Module,
    SegmentLayout3Module
  ],
})
export class VolunteerLogPageModule {}
