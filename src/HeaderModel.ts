import {HeaderDualPickListModel} from "dual-pick-list-ng";

export class HeaderModel{
  left:Array<HeaderDualPickListModel> =[];
  right:Array<HeaderDualPickListModel> =[];
  constructor(left = [],right = []){
    this.left = left;
    this.right = right;
  }
}
