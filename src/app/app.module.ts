import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JaugeComponent } from './jauge/jauge.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    JaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"smartbin-443fd","appId":"1:914970913088:web:a13a1a4f097f2f1bfc72a5","databaseURL":"https://smartbin-443fd-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"smartbin-443fd.appspot.com","apiKey":"AIzaSyDlM8YPGrhjxuEtAyqm6xONLoo2IBShfaU","authDomain":"smartbin-443fd.firebaseapp.com","messagingSenderId":"914970913088","measurementId":"G-93H3FMH136"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
