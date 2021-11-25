/* from the Stanford Sleepiness Scale */
/* https://web.stanford.edu/~dement/sss.html */

import { SleepData } from './sleep-data';

export class StanfordSleepinessData extends SleepData {
	public static ScaleValues = [undefined,//Sleepiness scale starts at 1
	'Feeling active, vital, alert, or wide awake', //1
	'Functioning at high levels, but not at peak; able to concentrate', //2
	'Awake, but relaxed; responsive but not fully alert', //3
	'Somewhat foggy, let down', //4
	'Foggy; losing interest in remaining awake; slowed down', //5
	'Sleepy, woozy, fighting sleep; prefer to lie down', //6
	'No longer fighting sleep, sleep onset soon; having dream-like thoughts']; //7

	private loggedValue:number;
	private loggedNote:string;
	//private keyInAll:string;
	//public hide:boolean;

	constructor(loggedAt:Date = new Date(), loggedValue:number, key:string,loggedNote:string="") {
		super(key);
		this.loggedAt = loggedAt;
		this.loggedValue = loggedValue;
		this.loggedNote = loggedNote;
		//this.keyInAll=key;
		//this.hide=false;
		
	}

	summaryString():string {
		return this.loggedValue + " " + StanfordSleepinessData.ScaleValues[this.loggedValue];
	}

	dateString():string {
		//return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
		return this.loggedAt.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}

	set pos(str:string){
		this.keyInAll=str;
	}


	get keyInStorage():string{
		return this.keyInAll;
	}

	get date():Date {
		return this.loggedAt;
	}

	get rating():string {
		return String(this.loggedValue);
	}

	get note():string {
		return this.loggedNote;
	}
}
