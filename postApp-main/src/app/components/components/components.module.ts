import { UsersComponent } from './../users/users.component';
import { PostDetailsComponent } from './../post-details/post-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { FormsModule } from '@angular/forms';
import { PostComponent } from '../post/post.component';
@NgModule({
  declarations: [PostComponent,PostDetailsComponent,UsersComponent],
  imports: [CommonModule, ComponentsRoutingModule, FormsModule],
  exports:[]
})
export class ComponentsModule {}
