import { generate } from 'shortid';

export class SleepData {
	id:string;
	loggedAt:Date;
	keyInAll:string;
	hide:boolean;

	constructor(key:string) {
		//Assign a random (unique) ID. This may be useful for comparison (e.g., are two logged entries the same).
		this.id = generate();
		this.loggedAt = new Date();
		this.keyInAll=key;
		this.hide=false;
	}

	hideCard(){
		this.hide=true;
	}

	summaryString():string {
		return 'Unknown sleep data';
	}

	dateString():string {
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}
}
