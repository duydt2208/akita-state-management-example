import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RubikRoutingModule } from './rubik-routing.module';
import { RubiksComponent } from './components/rubiks/rubiks.component';



@NgModule({
  declarations: [RubiksComponent],
  imports: [
    CommonModule,
    RubikRoutingModule
  ]
})
export class RubikModule { }
