import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'webinar', loadChildren: () => import('./webinar/webinar.module').then(m => m.WebinarModule) },
  { path: '', redirectTo: '/webinar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
