import { useAppDispatch } from "app/providers/StoreProvider/hooks/useAppDispatch";
import { fetchProfileData, ProfileCard, profileReducer } from "entities/Profile";
import { useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import DynamicModuleLoader, { ReducersList } from "shared/lib/components/DynamicModuleLoader";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

export default function ProfilePage({ className }: ProfilePageProps) {
  // const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(className)}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
}
