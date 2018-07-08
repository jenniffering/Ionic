import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infoc',
  templateUrl: 'infoc.html',
})
export class InfocPage {

  objetoRecibido: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.objetoRecibido = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfocPage');
  }

}
