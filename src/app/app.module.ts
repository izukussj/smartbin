import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddBinComponent } from './components/add-bin/add-bin.component';
import { BinsListComponent } from './components/bins-list/bins-list.component';
import { BinsDetailsComponent } from './components/bins-details/bins-details.component';
import { FormsModule } from '@angular/forms';
import { JaugePoubelleComponent } from './components/jauge-poubelle/jauge-poubelle.component'; // Import FormsModule here


@NgModule({
  declarations: [
    AppComponent,
    AddBinComponent,
    BinsListComponent,
    BinsDetailsComponent,
    JaugePoubelleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
