import { Routes } from '@angular/router';
import { GameComponent } from './game/game/game.component'
import { LoginComponent } from './authentication/login/login.component'
import { RegisterComponent } from './authentication/register/register.component';
import { ContentComponent } from './mainContent/content/content.component';


export const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

];
