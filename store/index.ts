import { atom } from "recoil";

const sidebarShow = atom({
  key: "sidebar-show",
  default: false,
});

const darkState = atom({
  key: "darkmoderec",
  default: 'light',
});

export { sidebarShow, darkState };
