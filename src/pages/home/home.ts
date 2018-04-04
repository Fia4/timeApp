import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpPage } from '../help/help';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  myfunction() {
    console.log('Function is working');
  }

  gotohelp() {
    console.log('Navigate to Help');
    this.navCtrl.push(HelpPage, {

    })

  }
}
