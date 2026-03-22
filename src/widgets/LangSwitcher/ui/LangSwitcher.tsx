import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import * as cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export default function LangSwitcher({ className }: LangSwitcherProps) {
  const { i18n } = useTranslation();
  function toggleLanguage() {
    i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
  }

  return (
    <Button className={classNames(cls.Langswitcher, {}, [className])} theme={ThemeButton.CLEAR} onClick={toggleLanguage}>
      {i18n.language}
    </Button>
  );
}
