import { useState } from "react";
import { useTranslation } from "react-i18next";

import { LoginModal } from "features/AuthByUsername/index";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import * as cls from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  function onToggleModal() {
    setIsAuthModal((prev) => !prev);
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
        {t("enter")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
    </div>
  );
}
