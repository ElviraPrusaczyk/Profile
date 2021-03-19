import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialMediaLinksComponent } from './profile/social-media-links/social-media-links.component';
import { WelcomeComponent } from './profile/welcome/welcome.component';
import { PublicationsComponent } from './profile/publications/publications.component';
import { ResearchComponent } from './profile/research/research.component';
import { ContactComponent } from './profile/contact/contact.component';
import { TeachingComponent } from './profile/teaching/teaching.component';
import { AboutComponent } from './profile/about/about.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './profile/home/home.component';
import { PresentationsComponent } from './profile/presentations/presentations.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'presentations', component: PresentationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'teaching', component: TeachingComponent },
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
    NavigationMenuComponent,
    HomeComponent,
    PresentationsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
