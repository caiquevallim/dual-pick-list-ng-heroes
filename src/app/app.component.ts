import { Component } from '@angular/core';
import {ItemModel} from "../ItemModel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dual pick list ng';

  items:Array<ItemModel>=[];
  constructor(){
    this.items = [
      new ItemModel(1, 'Batman'),
      new ItemModel(2, 'Super-Man'),
      new ItemModel(3, 'Robin'),
      new ItemModel(4, 'Daredevil'),
      new ItemModel(5, 'Cyclops')
    ];

  }






}
