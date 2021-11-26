import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.page.html',
  styleUrls: ['./view-page.page.scss'],
})
export class ViewPagePage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  goToViewOvernight(){
		this.navCtrl.navigateForward('/view-overnight');
	}

	goToViewSleepiness(){
		this.navCtrl.navigateForward('/view-sleepiness');
	}

}
