import { useTheme } from "app/providers/themeProvider/index";
import { classNames } from "shared/lib/classNames/classNames";
import { NavBar } from "widgets/Navbar/index";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { AppRouter } from "./providers/themeProvider/router";
import "./styles/index.scss";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <ThemeSwitcher />
      <NavBar />
      <AppRouter />
    </div>
  );
}
