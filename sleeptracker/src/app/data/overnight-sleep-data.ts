import { SleepData } from './sleep-data';

export class OvernightSleepData extends SleepData {
	private sleepStart:Date;
	private sleepEnd:Date;
	//private keyInAll:string;
	//public hide:boolean;

	constructor(sleepStart:Date, sleepEnd:Date, key:string) {
		super(key);
		this.sleepStart = sleepStart;
		this.sleepEnd = sleepEnd;
		//this.keyInAll=key;
		//this.hide=false;
	}

	summaryString():string {
		var sleepStart_ms = this.sleepStart.getTime();
		var sleepEnd_ms = this.sleepEnd.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = sleepEnd_ms - sleepStart_ms;
		    
		// Convert to hours and minutes
		return Math.floor(difference_ms / (1000*60*60)) + " hrs, " + Math.floor(difference_ms / (1000*60) % 60) + " mins";
	}

	dateString():string {
		//return "Night of " + this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
		return this.sleepStart.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
	}

	set pos(str:string){
		this.keyInAll=str;
	}

	

	get keyInStorage():string{
		return this.keyInAll;
	}

	get startTime():Date {
		return this.sleepStart;
	}
	get endTime():Date {
		return this.sleepEnd;
	}

	
}
