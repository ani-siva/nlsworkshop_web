import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent} from './components/header/header.component'
import { AboutComponent} from './components/about/about.component'
import { DetailComponent} from './components/details/details.component'
import {FooterComponent} from './components/footer/footer.component'

export const routes: Routes = [
    {path: '', component: HeaderComponent },
    {path: 'about', component:AboutComponent},
    {path: 'detail', component:DetailComponent},
    {path: 'footer', component:FooterComponent},
    {path: '**', redirectTo:''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
