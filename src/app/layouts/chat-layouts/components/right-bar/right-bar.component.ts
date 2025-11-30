import {Component} from '@angular/core';
import {FaIconComponent, IconDefinition} from '@fortawesome/angular-fontawesome';
import {faCommentDots} from '@fortawesome/free-solid-svg-icons/faCommentDots';
import {faVideo} from '@fortawesome/free-solid-svg-icons/faVideo';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons/faPhoneVolume';
import {faUserGroup} from '@fortawesome/free-solid-svg-icons/faUserGroup';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons/faFilePdf';
import {faMusic} from '@fortawesome/free-solid-svg-icons/faMusic';
import {faImage} from '@fortawesome/free-solid-svg-icons/faImage';

@Component({
	selector: 'app-right-bar',
	imports: [
		FaIconComponent
	],
	templateUrl: './right-bar.component.html',
	styleUrl: './right-bar.component.css'
})
export class RightBarComponent {
	public chatIcon: IconDefinition = faCommentDots;
	public voiceCallIcon: IconDefinition = faPhoneVolume;
	public videoCallIcon: IconDefinition = faVideo;
	public friendsIcon: IconDefinition = faUserGroup;
	public filePdfIcon: IconDefinition = faFilePdf;
	public fileVideoIcon: IconDefinition = faVideo;
	public fileMusicIcon: IconDefinition = faMusic;
	public fileImageIcon: IconDefinition = faImage;
}
