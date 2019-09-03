import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostCreatePage } from './post-create';
import { FormLayout4Module } from '../../components/forms/layout-4/form-layout-4.module';
@NgModule({
  declarations: [
    PostCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(PostCreatePage),
    FormLayout4Module
  ],
})
export class PostCreatePageModule {}
