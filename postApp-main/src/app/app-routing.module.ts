import { DetailsComponent } from './components/details/details.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './manager/add-blog/add-blog.component';
import { ManagerpostComponent } from './manager/managerpost/managerpost.component';
const routes: Routes = [
  {
    path: 'post',
    loadChildren: () =>
      import('./components/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
   {
     path: 'manager',
     loadChildren: () =>
       import('./manager/manager/manager.module').then(
         (m) => m.ManagerModule
       ),
   },
  // { path:'add', component: AddBlogComponent },
  // {path:'manager',component:ManagerpostComponent},
  // {path:'details', component:DetailsComponent},
  {
    path: '',
    redirectTo: 'post',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
