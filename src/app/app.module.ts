import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ContactComponent } from './contact/contact.component';
import { OnlyadminComponent } from './onlyadmin/onlyadmin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { DocsComponent } from './docs/docs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';  
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DocsComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ProfileDetailsComponent,
    ContactComponent,
    OnlyadminComponent,
    ForbiddenComponent,
    SignupComponent,
    ProfileComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule, 
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
