import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FaIconComponent, IconDefinition} from '@fortawesome/angular-fontawesome';
import {faPencil} from '@fortawesome/free-solid-svg-icons/faPencil';
import {ContactsService} from '../../../../services/contacts.service';
import {Contact} from '../../../../models/contacts.model';

@Component({
	selector: 'app-sidebar',
	imports: [
		RouterLink,
		FaIconComponent
	],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
	public pencilIcon: IconDefinition = faPencil;

	public contacts: Contact[] = [];

	constructor(private contactsService: ContactsService) {
	}

	ngOnInit() {
		this.contacts = this.contactsService.getContacts();
	}
}
