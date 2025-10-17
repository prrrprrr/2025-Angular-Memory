import { Routes } from '@angular/router';
import { GameComponent } from './game/game/game.component'
import { LoginComponent } from './authentication/login/login.component'
import { RegisterComponent } from './authentication/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';


export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    title: 'Welcome page',
  },
  {
    path: 'game',
    component: GameComponent,
    title: 'Memory game',
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
