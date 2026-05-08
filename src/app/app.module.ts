import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component'
import { AboutComponent} from './components/about/about.component'
import { DetailComponent} from './components/details/details.component'
 import { FooterComponent } from './components/footer/footer.component'
import { AppRoutingModule } from './app-routing.module';

@NgModule({

    imports: [
        AppComponent,
        HeaderComponent,
        AboutComponent,
        DetailComponent,
        FooterComponent,
        BrowserModule,
        RouterModule,
        AppRoutingModule
    ]

})

export class AppModule { }
