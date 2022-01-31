import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './core/components/header/header.module';
import { SidenavigationModule } from './core/components/sidenavigation/sidenavigation.module';
import { StopTrainingModule } from './pages/training/pages/stop-training/stop-training.module';
import { AuthService } from './core/services/auth/auth.service';
import { ExerciseService } from './core/services/exercise/exercise.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { UIService } from './core/services/ui/ui.service';
import { SharedModule } from './core/modules/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducer';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HeaderModule,
        SidenavigationModule,
        StopTrainingModule,
        SharedModule,
        // provideFirebaseApp(() => initializeApp(environment.firebase)),
        // provideAuth(() => getAuth()),
        // provideDatabase(() => getDatabase()),
        // provideAnalytics(() => getAnalytics()),
        // provideFirestore(() => getFirestore())
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(),
        AngularFireStorageModule,
        AngularFireAuthModule,
        StoreModule.forRoot(reducers, {}),
    ],
    providers: [AuthService, ExerciseService, ScreenTrackingService, UserTrackingService, UIService],
    bootstrap: [AppComponent],
})
export class AppModule {}
