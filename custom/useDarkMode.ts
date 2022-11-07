import { useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import { darkState } from "../store";

function useDarkMode() {
  // const [recTheme, setRecTheme] = useRecoilState(darkState);
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [colorTheme, setTheme];
}
export default useDarkMode;
