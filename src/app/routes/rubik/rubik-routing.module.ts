import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RubiksComponent } from './components/rubiks/rubiks.component';

const routes: Routes = [
  { path: 'rubiks', component: RubiksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RubikRoutingModule { }
