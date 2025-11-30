import {Component} from '@angular/core';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {ChatWindowComponent} from '../../components/chat-window/chat-window.component';
import {RightBarComponent} from '../../components/right-bar/right-bar.component';

@Component({
	selector: 'app-main-chat',
	imports: [
		SidebarComponent,
		ChatWindowComponent,
		RightBarComponent
	],
	templateUrl: './main-chat.component.html',
	styleUrl: './main-chat.component.css'
})
export class MainChatComponent {

}
