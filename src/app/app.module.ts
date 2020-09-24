import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RubikModule } from './routes/rubik/rubik.module';
import { environment } from 'src/environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RubikModule,
    environment.production ? [] : AkitaNgDevtools.forRoot({ maxAge: 50 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
