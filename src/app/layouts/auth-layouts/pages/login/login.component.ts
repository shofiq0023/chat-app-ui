import {Component} from '@angular/core';
import {FontAwesomeModule, IconDefinition} from '@fortawesome/angular-fontawesome';
import {faComments} from '@fortawesome/free-solid-svg-icons/faComments';
import {faEye} from '@fortawesome/free-solid-svg-icons/faEye';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';
import {RouterLink} from '@angular/router';

@Component({
	selector: 'app-login',
	imports: [FontAwesomeModule, RouterLink],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})
export class LoginComponent {
	// fontawesome icon definitions
	public chatIcon: IconDefinition = faComments;
	public eyeIcon: IconDefinition = faEye;
	public googleIcon: IconDefinition = faGoogle;
	public facebookIcon: IconDefinition = faFacebook;
}
