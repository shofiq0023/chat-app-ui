import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FaIconComponent, IconDefinition} from '@fortawesome/angular-fontawesome';
import {faComments} from '@fortawesome/free-solid-svg-icons/faComments';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {faRocket} from '@fortawesome/free-solid-svg-icons/faRocket';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
	selector: 'app-signup',
	imports: [
		RouterLink,
		FaIconComponent
	],
	templateUrl: './signup.component.html',
	styleUrl: './signup.component.css'
})
export class SignupComponent {
	// fontawesome icon definitions
	public chatIcon: IconDefinition = faComments;
	public eyeIcon: IconDefinition = faEye;
	public googleIcon: IconDefinition = faGoogle;
	public facebookIcon: IconDefinition = faFacebook;
	public rocketIcon: IconDefinition = faRocket;
	public checkIcon: IconDefinition = faCheck;
}
