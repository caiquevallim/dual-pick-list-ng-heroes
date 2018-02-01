import { Component } from '@angular/core';
import {ItemModel} from "../ItemModel";
import {HeaderModel} from "../HeaderModel";
import {HeaderDualPickListModel} from "dual-pick-list-ng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dual pick list ng';

  items:Array<ItemModel>=[];
  leftList: Array<HeaderDualPickListModel>=[];
  rightList: Array<HeaderDualPickListModel>=[];
  headerConfig: HeaderModel;
  powers:Array<any>=[];
  constructor(){
    this.items = [
      new ItemModel(1, 'Batman', false, 1),
      new ItemModel(2, 'Super-Man',true,2),
      new ItemModel(3, 'Robin',true,3),
      new ItemModel(4, 'Daredevil',true, 4),
      new ItemModel(5, 'Cyclops',true, 0)
    ];

    this.powers.push({id:1, text:"Fly"},{id:2, text:"Fire"}, {id:3, text:"Wind"},{id:4, text:"Water"});

    this.leftList = [
      new HeaderDualPickListModel('ID','id'),
      new HeaderDualPickListModel('Description','description'),
      new HeaderDualPickListModel('Active', 'isActive', true, null, null, true),
      new HeaderDualPickListModel('Powers', 'idPower',true,this.powers,null,null)
    ];

    let btnFn = (item)=>{
      if(!item.idPower || item.idPower <=0)
        return;
      let power = this.powers.find(it=>it.id == item.id);
      if(power)
        alert('The hero '+item.description+ ' has the '+power.text+' power');

      item.isSelected = true;//if you wanna just click in the button and you wont need to select the item
    };
    this.rightList = [
      new HeaderDualPickListModel('ID','id'),
      new HeaderDualPickListModel('Description','description'),
      new HeaderDualPickListModel('What Power is it?','', true,null, btnFn )
    ];

    this.headerConfig = new HeaderModel(this.leftList, this.rightList);

  }

  getInfo(evento){
    console.log(evento);
  }






}
