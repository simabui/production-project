import { Counter } from "entities/Counter/index";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation("about");

  return (
    <div>
      {t("title")}
      <Counter />
    </div>
  );
}
