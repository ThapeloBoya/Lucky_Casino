import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'; // Make sure HomeComponent exists

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Ensure RouterModule is imported
  exports: [RouterModule]  // Export RouterModule so it can be used in AppModule
})
export class AppRoutingModule { }
