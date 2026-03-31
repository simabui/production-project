import { useState } from "react";
import { useTranslation } from "react-i18next";

import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/Applink";
import { Button, SizeButton, ThemeButton } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import * as cls from "./SideBar.module.scss";

interface SideBarProps {
  className?: string;
}

export default function SideBar({ className }: SideBarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

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
        <AppLink to={RoutePath.main} theme={AppLinkTheme.SECONDARY} className={cls.item}>
          <MainIcon className={cls.icon} />
          <span className={cls.link}>{t("main")}</span>
        </AppLink>

        <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY} className={cls.item}>
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>{t("about")}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
}
