import { useTranslation } from "react-i18next";

interface ProfilePageProps {
  className?: string;
}

export default function ProfilePage() {
  const { t } = useTranslation();

  return <div>PROFILE PAGE</div>;
}
