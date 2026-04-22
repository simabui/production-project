import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "app/providers/StoreProvider/hooks/useAppDispatch";
import { getLoginError } from "entities/User/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "entities/User/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "entities/User/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "entities/User/selectors/getLoginUsername/getLoginUsername";
import { loginByUsername } from "features/AuthByUsername/services/loginByUsername/loginByUsername";
import { classNames } from "shared/lib/classNames/classNames";
import DynamicModuleLoader from "shared/lib/components/DynamicModuleLoader";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import * as cls from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

export default function LoginForm({ className, onSuccess }: LoginFormProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  function onChangeUsername(value: string) {
    dispatch(loginActions.setUserName(value));
  }

  function onChangePassword(value: string) {
    dispatch(loginActions.setPassword(value));
  }

  async function onLoginClick() {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }

  return (
    <DynamicModuleLoader reducers={{ loginForm: loginReducer }} removeAfterUnmount={false}>
      <div className={classNames(cls.LoginForm, {}, [className])}>
        <Text title={t("formTitle")} />
        {error && <Text text={error} theme={TextTheme.ERROR} />}
        <Input type="text" placeholder={t("inputName")} className={cls.input} autoFocus onChange={onChangeUsername} value={username} />
        <Input type="password" placeholder={t("inputPassword")} className={cls.input} onChange={onChangePassword} value={password} />
        <Button theme={ThemeButton.OUTLINE} className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
          {t("buttonLogin")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
}
