import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import Input from "shared/ui/Input/Input";
import * as cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input type="text" placeholder={t("inputName")} className={cls.input} autoFocus />
      <Input type="password" placeholder={t("inputPassword")} className={cls.input} />
      <button className={cls.loginBtn}>{t("buttonLogin")}</button>
    </div>
  );
}
