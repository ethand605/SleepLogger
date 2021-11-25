import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = false;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor() {
		//Storage.clear();
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
			SleepService.LoadDefaultData = false;
		}
		// Storage.keys().then((k)=>{
		// 	console.log(k);
		// })
		this.loadDataFromStorage();
	}

	public get staticOvernightData():OvernightSleepData[]{
		return SleepService.AllOvernightData;
	}

	public get staticSleepinessData():StanfordSleepinessData[]{
		return SleepService.AllSleepinessData;
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00'),'0'));
		this.logSleepinessData(new StanfordSleepinessData(new Date('February 19, 2021 14:38:00'),4,  ' '));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00'),'2'));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		//key is the length of the string
		let key:string = SleepService.AllSleepData.length.toString();
		//console.log("sleep service:"+key);
		sleepData.pos=key;
		let value = sleepData.startTime+','+sleepData.endTime;
		Storage.set(({
			key: key,
			value: value,
		  }));

		SleepService.AllSleepData.push(sleepData);
		//console.log("inserted:"+SleepService.AllSleepData.length.toString());
		SleepService.AllOvernightData.push(sleepData);
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		let key:string = SleepService.AllSleepData.length.toString();
		//console.log("sleep service:"+key);
		let value:string = sleepData.date + ',' + sleepData.rating + ',' + sleepData.note;
		sleepData.pos=key;
		Storage.set(({
			key: key,
			value: value,
		  }));

		SleepService.AllSleepData.push(sleepData);
		//console.log("inserted:"+SleepService.AllSleepData.length.toString());
		SleepService.AllSleepinessData.push(sleepData);
	}
	
	private isOvernight(data:string):boolean{
		return data.indexOf(',')==data.lastIndexOf(',');
	}


	private loadDataFromStorage(){
		Storage.keys().then((k)=>{
			k.keys.forEach((key)=>{
				Storage.get({key:key}).then((data)=>{
					if(this.isOvernight(data.value)){
						SleepService.AllOvernightData.push(new OvernightSleepData(new Date(data.value.split(',')[0]), new Date(data.value.split(',')[1]),key));	
						SleepService.AllSleepData.push(new OvernightSleepData(new Date(data.value.split(',')[0]), new Date(data.value.split(',')[1]),key));
					}else{
						let date:Date = new Date(data.value.split(',')[0]);
						let rating:string = data.value.split(',')[1];
						let note:string = data.value.split(',')[2];
						SleepService.AllSleepinessData.push(new StanfordSleepinessData(date, parseInt(rating),key,note));
						SleepService.AllSleepData.push(new StanfordSleepinessData(date, parseInt(rating),key, note));
					}
				})
			})
			
		});
		

		

	}
}