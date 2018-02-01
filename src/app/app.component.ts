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
  constructor(){
    this.items = [
      new ItemModel(1, 'Batman'),
      new ItemModel(2, 'Super-Man'),
      new ItemModel(3, 'Robin'),
      new ItemModel(4, 'Daredevil'),
      new ItemModel(5, 'Cyclops')
    ];

    this.leftList = [
      new HeaderDualPickListModel('ID','id'),
      new HeaderDualPickListModel('Description','description'),
    ];

    this.rightList = [
      new HeaderDualPickListModel('ID','id'),
      new HeaderDualPickListModel('Description','description'),
    ];

    this.headerConfig = new HeaderModel(this.leftList, this.rightList);

  }

  getInfo(evento){
    console.log(evento);
  }






}
