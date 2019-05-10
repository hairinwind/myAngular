import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { MyAsyncComponent } from './my-async/my-async.component';

const routes: Routes = [
    { path: 'heros', component: HerosComponent },
    { path: 'async', component: MyAsyncComponent },
    { path: 'keystroke', component: 'KeystrokeComponent'},
    { path: '', redirectTo: '/heros', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
