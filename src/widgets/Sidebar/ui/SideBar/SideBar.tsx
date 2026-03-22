import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import * as cls from "./Sidebar.module.scss";

interface SideBarProps {
  className?: string;
}

export default function SideBar({ className }: SideBarProps) {
  const [collapsed, setCollapsed] = useState(false);

  function onToggle() {
    setCollapsed((prev) => !prev);
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}
