import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerpostComponent } from '../managerpost/managerpost.component';
import { AddBlogComponent } from '../add-blog/add-blog.component';


@NgModule({
  declarations: [ManagerpostComponent,AddBlogComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule
  ]
})
export class ManagerModule { }
