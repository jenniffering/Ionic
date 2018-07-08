import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProveedorProvider} from '../../providers/proveedor/proveedor';
import { InfocPage }  from '../infoc/infoc';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  infoc = "infoc";

  usuarios: any = []
 
  constructor(public navCtrl: NavController, public proveedor: ProveedorProvider) {

  }
 ionViewDidLoad(){

  this.proveedor.obtenerDatos()
  .subscribe(

    (data)=>{this.usuarios= data;},
    (error)=>{console.log(error);}
  )
 }
 moreInfo(datoSeleccionado){
   this.navCtrl.push(InfocPage,datoSeleccionado);
 }
 

}
