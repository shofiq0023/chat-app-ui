import {Injectable, OnInit} from '@angular/core';
import {Contact} from '../models/contacts.model';

@Injectable({
	providedIn: 'root'
})
export class ContactsService {
	public contacts: Contact[] = [];

	// TEMPORARY DATA
	private personNames: string[] = [
		"Rakib",
		"Sajid",
		"Shuvo",
		"Mehedi",
		"Shawon",
		"Nafis",
		"Raihan",
		"Ashik",
		"Imran",
		"Rifat",
		"Tanmoy",
		"Jahid",
		"Sumon",
		"Nipu",
		"Fahim"
	];

	// TEMPORARY DATA
	private lastMessages: string[] = [
		"Hey, what’s up?",
		"Did you reach home safely?",
		"Call me when you're free.",
		"I'll get back to you soon.",
		"Sounds good!",
		"Can we talk later?",
		"Don't forget about tomorrow’s meeting.",
		"Just checking in.",
		"Let me know if you need anything.",
		"Thanks for the help!",

		// Long messages
		"I was thinking about the plan for this weekend. We could go out for lunch first and then decide what to do next.",
		"I read your message earlier but was busy with work. I'll explain everything once I’m done here.",
		"The file you sent looks good, but I think we should review it one more time before submitting, just to be safe.",
		"I’m on the way right now. Traffic is terrible today, so it might take a bit longer than usual."
	];

	constructor() {
		for (let i = 0; i < 13; i++) {
			this.contacts.push(
				new Contact(
					this.randomId(),
					this.getRandomName(),
					Math.floor(Math.random() * 10),        // unseen messages
					this.getRandomLastMessage(),
					this.getRandomTime()
				)
			);
		}
	}

	private getRandomName(): string {
		return this.personNames[
			Math.floor(Math.random() * this.personNames.length)
			];
	}

	private getRandomLastMessage(): string {
		return this.lastMessages[
			Math.floor(Math.random() * this.lastMessages.length)
			];
	}

	private randomId(length: number = 8): string {
		return Math.random().toString(36).substring(2, 2 + length);
	}

	private getRandomTime(): string {
		const hour = Math.floor(Math.random() * 12) + 1;           // 1–12
		const minute = Math.floor(Math.random() * 60)              // 0–59
			.toString()
			.padStart(2, "0");

		const ampm = Math.random() > 0.5 ? "AM" : "PM";

		return `${hour}:${minute} ${ampm}`;
	}

	public getContacts(): Contact[] {
		return this.contacts;
	}
}
