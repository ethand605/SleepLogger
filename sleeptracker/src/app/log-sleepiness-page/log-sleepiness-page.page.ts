import { Component, OnInit } from '@angular/core';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from "@capacitor/storage";
import { SleepService } from '../services/sleep.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-log-sleepiness-page',
  templateUrl: './log-sleepiness-page.page.html',
  styleUrls: ['./log-sleepiness-page.page.scss'],
})
export class LogSleepinessPagePage implements OnInit {
  loggedValue:string;
  note:string;
  date:string;
  sleepiness:StanfordSleepinessData;

  constructor(private sleepService:SleepService, private navCtrl:NavController) {

  }

  ngOnInit() {
    
  }

  saveSleepiness() {
    this.back();
    let date = new Date(this.date);
    let value = this.loggedValue;
    let note = this.note;
    this.sleepiness = new StanfordSleepinessData(date, parseInt(value), '0',note);
    this.sleepService.logSleepinessData(this.sleepiness);
  }

  get staticScales(){
    return StanfordSleepinessData.ScaleValues;
  }

  back(){
		this.navCtrl.back();
	}

}
