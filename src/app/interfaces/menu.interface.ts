import {Submenu} from "./submenu.interface";

export interface Menu {
  title: string;
  icon: string;
  submenu: Submenu[];
}
