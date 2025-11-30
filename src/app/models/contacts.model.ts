export class Contact {
	public id!: string;
	public name?: string;
	public unseenMessage?: number;
	public lastMessage?: string;
	public messageTime?: string;

	constructor(id: string, name?: string, unseenMessage?: number, lastMessage?: string, messageTime?: string) {
		this.id = id;
		this.name = name;
		this.unseenMessage = unseenMessage;
		this.lastMessage = lastMessage;
		this.messageTime = messageTime;
	}
}

