import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "app/providers/StoreProvider/hooks/useAppDispatch";
import { getUserAuthData, userActions } from "entities/User/index";
import { LoginModal } from "features/AuthByUsername/index";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import * as cls from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  function onToggleModal() {
    setIsAuthModal((prev) => !prev);
  }
  function onLogout() {
    dispatch(userActions.logout());
  }

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onLogout}>
          {t("logout")}
        </Button>
      </div>
    );
  }
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
        {t("enter")}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />}
    </div>
  );
}
