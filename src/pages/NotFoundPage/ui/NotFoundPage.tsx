import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}
export default function NotFoundPage({ className }: NotFoundPageProps) {
  const { t } = useTranslation();
  return <div className={classNames(cls.NotFoundPage, {}, [className])}>{t("notFound")}</div>;
}
