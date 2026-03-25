import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";
import * as cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export default function PageError({ className }: PageErrorProps) {
  const { t } = useTranslation();
  function reloadPage() {
    location.reload();
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>{t("somethingWentWrong")}</h1>
      <Button onClick={reloadPage}>{t("reloadPage")}</Button>
    </div>
  );
}
