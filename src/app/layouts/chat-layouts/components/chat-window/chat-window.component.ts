import {Component} from '@angular/core';
import {FaIconComponent, IconDefinition} from '@fortawesome/angular-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {faHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import {faBell} from '@fortawesome/free-solid-svg-icons/faBell';
import {faMicrophone} from '@fortawesome/free-solid-svg-icons/faMicrophone';
import {faPaperclip} from '@fortawesome/free-solid-svg-icons/faPaperclip';
import {faCamera} from '@fortawesome/free-solid-svg-icons/faCamera';
import {faFaceSmile} from '@fortawesome/free-solid-svg-icons/faFaceSmile';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons/faPaperPlane';

@Component({
	selector: 'app-chat-window',
	imports: [
		FaIconComponent
	],
	templateUrl: './chat-window.component.html',
	styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
	public searchIcon: IconDefinition = faSearch;
	public heartIcon: IconDefinition = faHeart;
	public bellIcon: IconDefinition = faBell;
	public micIcon: IconDefinition = faMicrophone;
	public paperClipIcon: IconDefinition = faPaperclip;
	public cameraIcon: IconDefinition = faCamera;
	public emojiIcon: IconDefinition = faFaceSmile;
	public sendIcon: IconDefinition = faPaperPlane;
}
