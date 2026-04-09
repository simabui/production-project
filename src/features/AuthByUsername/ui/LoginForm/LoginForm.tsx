import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "app/providers/StoreProvider/hooks/useAppDispatch";
import { getLoginState } from "features/AuthByUsername/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUsername/services/loginByUsername/loginByUsername";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { loginActions } from "../../model/slice/loginSlice";
import * as cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const loginForm = useSelector(getLoginState);

  function onChangeUsername(value: string) {
    dispatch(loginActions.setUserName(value));
  }

  function onChangePassword(value: string) {
    dispatch(loginActions.setPassword(value));
  }

  async function onLoginClick() {
    const result = await loginByUsername({ username: loginForm.username, password: loginForm.password });
    dispatch(result);
  }

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t("formTitle")} />
      {loginForm?.error && <Text text={loginForm.error} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        placeholder={t("inputName")}
        className={cls.input}
        autoFocus
        onChange={onChangeUsername}
        value={loginForm.username}
      />
      <Input
        type="password"
        placeholder={t("inputPassword")}
        className={cls.input}
        onChange={onChangePassword}
        value={loginForm.password}
      />
      <Button theme={ThemeButton.OUTLINE} className={cls.loginBtn} onClick={onLoginClick} disabled={loginForm.isLoading}>
        {t("buttonLogin")}
      </Button>
    </div>
  );
}
