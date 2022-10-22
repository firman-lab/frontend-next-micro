import { atom } from "recoil";

const sidebarShow = atom({
    key: "sidebar-show",
    default: false,
});

export default sidebarShow;