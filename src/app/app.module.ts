import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialMediaLinksComponent } from './social-media-links/social-media-links.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PublicationsComponent } from './publications/publications.component';
import { ResearchComponent } from './research/research.component';
import { ContactComponent } from './contact/contact.component';
import { TeachingComponent } from './teaching/teaching.component';
import { AboutComponent } from './about/about.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaLinksComponent,
    WelcomeComponent,
    PublicationsComponent,
    ResearchComponent,
    ContactComponent,
    TeachingComponent,
    AboutComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
