import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './Footer/Footer.component';
import { HeaderComponent } from './Header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';
import { DetailsService } from './services/details.service';
import { HomeModule } from './home/home.module';
import { ListingModule } from './listing/listing.module';

@NgModule({
    // All the component & pipes
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        NotFoundComponent,
        DetailsComponent
    ],

    // All the modules
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        HomeModule,
        ListingModule
    ],

    // All the services
    providers:[
        DetailsService
    ],

    // only and only main component
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}