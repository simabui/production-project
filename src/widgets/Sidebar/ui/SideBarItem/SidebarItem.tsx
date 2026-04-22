import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/Applink";
import { SidebarItemType } from "../../model/item";
import * as cls from "./SidebarItem.module.scss";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export default memo(function SidebarItem({ item, collapsed }: SidebarItemProps) {
  const { t } = useTranslation();
  return (
    <AppLink to={item.path} theme={AppLinkTheme.SECONDARY} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
      <item.icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
