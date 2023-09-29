import { useState } from "react";
import styles from "./App.module.css";
import "./global.css";
import { Avatar } from "./components/Avatar";

import DarkThemeAvatar from "/src/assets/avatar.jpg";
import LightThemeAvatar from "/src/assets/avatar-light.jpg";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  function currentAvatar() {
    return theme === "dark" ? DarkThemeAvatar : LightThemeAvatar;
  }

  return (
    <div
      className={`${styles.container} ${theme === "light" ? styles.light : ""}`}
    >
      <Avatar filepath={currentAvatar()} />

      <div className={styles.switch} onClick={toggleTheme}>
        <button></button>
        <span></span>
      </div>
    </div>
  );
}

export default App;
