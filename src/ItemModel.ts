import {ItemDualPickListModel} from "dual-pick-list-ng";

export class ItemModel extends ItemDualPickListModel{
  id:number;
  description:string;
  isActive:boolean;
  idPower:number;

  constructor(id, description, isActive = true, idPower=null, selected = false){
    super();
    this.id = id;
    this.description = description;
    this.isActive = isActive;
    this.idPower = idPower;

    this.left = !selected;
    this.right = selected;
  }
}
