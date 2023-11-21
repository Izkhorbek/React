import menuItemModel from "./menuItemModel";
export default interface cardItemModel {
  id?: number;
  menuItemId?: number;
  menuItem?: menuItemModel;
  quantity?: number;
}
