import { Component, OnInit } from '@angular/core';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';
import { ActionSheetController } from '@ionic/angular'
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-view-sleepiness',
  templateUrl: './view-sleepiness.page.html',
  styleUrls: ['./view-sleepiness.page.scss'],
})
export class ViewSleepinessPage implements OnInit {

  constructor(private sleepService:SleepService, private actionSheetController:ActionSheetController) { }

  ngOnInit() {
  }

  presentToast(idxSleepiness:number, keyInAll:string) {
    
    this.actionSheetController.create({
      header: 'Delete this log?',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          Storage.remove({key:keyInAll});
          SleepService.AllSleepinessData[idxSleepiness].hideCard();
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
