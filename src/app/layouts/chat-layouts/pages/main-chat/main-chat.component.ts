import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {ChatWindowComponent} from '../../components/chat-window/chat-window.component';

@Component({
	selector: 'app-main-chat',
	imports: [
		SidebarComponent,
		ChatWindowComponent,
		RouterLink
	],
	templateUrl: './main-chat.component.html',
	styleUrl: './main-chat.component.css'
})
export class MainChatComponent {

}
