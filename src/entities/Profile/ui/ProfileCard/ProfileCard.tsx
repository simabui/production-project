import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import Input from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";
import * as cls from "./ProfileCard.module.scss";

export function ProfileCard() {
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={cls.ProfileCard}>
      <div className={cls.header}>
        <Text title={t("profile")} />
        <Button theme={ThemeButton.OUTLINE} className={cls.editBtn}>
          {t("edit")}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.first} placeholder={t("placeholderName")} className={cls.input} />
        <Input value={data?.lastname} placeholder={t("placeholderLastName")} className={cls.input} />
      </div>
    </div>
  );
}
