import {Routes} from '@angular/router';
import {AuthLayoutsComponent} from './layouts/auth-layouts/auth-layouts.component';
import {ChatLayoutsComponent} from './layouts/chat-layouts/chat-layouts.component';

export const routes: Routes = [
	// handle routes for login/signup
	{
		path: '',
		component: AuthLayoutsComponent,
		children: [
			{
				path: 'login',
				loadComponent: () => import('./layouts/auth-layouts/pages/login/login.component').then(p => p.LoginComponent),
			},
			{
				path: 'signup',
				loadComponent: () => import('./layouts/auth-layouts/pages/signup/signup.component').then(p => p.SignupComponent),
			},

			// by default redirect to the login page
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full',
			}
		]
	},

	// handle routes for chat
	{
		path: 'chat',
		component: ChatLayoutsComponent,
		children: [
			{
				path: 'messages',
				loadComponent: () => import('./layouts/chat-layouts/pages/main-chat/main-chat.component').then(p => p.MainChatComponent),
			},

			// by default redirect to the login page
			{
				path: '',
				redirectTo: 'messages',
				pathMatch: 'full',
			}
		]
	},

	// handle all other routes
	{
		path: '**',
		redirectTo: 'login',
		pathMatch: 'full',
	}
];
