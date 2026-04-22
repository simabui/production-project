import { memo, useState } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { SidebarItemList } from "widgets/Sidebar/model/item";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import SidebarItem from "../SideBarItem/SidebarItem";
import * as cls from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}

export default memo(function SideBar({ className }: SideBarProps) {
  const [collapsed, setCollapsed] = useState(false);

  function onToggle() {
    setCollapsed((prev) => !prev);
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])} data-testid="sidebar">
      <Button
        onClick={onToggle}
        data-testid="sidebar-toggle"
        className={cls.collapsedBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        square
        size={SizeButton.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        {SidebarItemList.map((item) => (
          <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
});
