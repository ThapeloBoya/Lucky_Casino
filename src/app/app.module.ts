import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';  // <-- Import HttpClientModule here
import { AppRoutingModule } from './app-routing.module';  // <-- Import AppRoutingModule
import { ApiService } from './services/api.service';  // <-- Ensure ApiService is provided here
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent
    // other components...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // <-- Import the AppRoutingModule here
    HttpClientModule,   // <-- HttpClientModule should be imported in AppModule
    MatCardModule,
    MatButtonModule,
  ],
  providers: [ApiService],  // <-- Ensure ApiService is provided
  bootstrap: [AppComponent]
})
export class AppModule {}
