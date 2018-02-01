import {ItemDualPickListModel} from "dual-pick-list-ng";

export class ItemModel extends ItemDualPickListModel{
  id:number;
  description:string;

  constructor(id, description,selected = false){
    super();
    this.id = id;
    this.description = description;

    this.left = !selected;
    this.right = selected;
  }
}
