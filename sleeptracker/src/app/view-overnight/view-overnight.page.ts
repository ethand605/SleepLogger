import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { ActionSheetController } from '@ionic/angular'
import { Storage } from '@capacitor/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-overnight',
  templateUrl: './view-overnight.page.html',
  styleUrls: ['./view-overnight.page.scss'],
})
export class ViewOvernightPage implements OnInit {

  constructor(public actionSheetController:ActionSheetController,public sleepService:SleepService,public navCtrl:NavController) {
   }

  ngOnInit() {
  }

  back(){
		this.navCtrl.back();
	}

  presentToast(idxInOvernightSleep:number, keyInAll:string) {
    
    this.actionSheetController.create({
      header: 'Delete this log?',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          //console.log('Delete clicked'); 
          //console.log(i);
          //SleepService.
          //delete from:local storage, both arrays?, and delete the card
          Storage.remove({key:keyInAll});
          SleepService.AllOvernightData[idxInOvernightSleep].hideCard();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          //console.log('Cancel clicked'); 
          
        }
      }]
        }).then((actionSheet) => {
        actionSheet.present();
      })
  }
  
}
