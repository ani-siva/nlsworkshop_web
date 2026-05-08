import { HostListener, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './components/header/header.component'
import { AboutComponent} from './components/about/about.component'
import { DetailComponent} from './components/details/details.component'
import {FooterComponent} from './components/footer/footer.component'


//Base
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, DetailComponent, FooterComponent],
 templateUrl: './app.component.html',
 styleUrl: './app.css'

//  template:'<router-outlet></router-outlet>'
//  templateUrl: './app.html',
})


export class AppComponent {

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}


