import { Component, OnInit } from '@angular/core';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { Storage } from '@capacitor/storage';
import { SleepService } from '../services/sleep.service';
import { ToastController } from '@ionic/angular'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-log-overnight-sleep',
  templateUrl: './log-overnight-sleep.page.html',
  styleUrls: ['./log-overnight-sleep.page.scss'],
})

export class LogOvernightSleepPage implements OnInit {
  private sleepStart:Date;
	private sleepEnd:Date;
  //private loggedDate:Date;
  private overnightSleep:OvernightSleepData;

  constructor(private sleepService:SleepService, private navCtrl:NavController) { }

  ngOnInit() {
  }

  saveOvernight() {
    this.back();
    let start = new Date(this.sleepStart);
    let end = new Date(this.sleepEnd);
    this.overnightSleep=new OvernightSleepData(start,end,'0');//don't use the key that's set here. this does not wait for the promises
                                                              //'0' is a placeholder
  
    this.sleepService.logOvernightData(this.overnightSleep);
    
	}

  back(){
		this.navCtrl.back();
	}
}
