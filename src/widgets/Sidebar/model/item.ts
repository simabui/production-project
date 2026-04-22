import { FunctionComponent, SVGProps } from "react";

import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
  path: string;
  text: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    icon: MainIcon,
    text: "main",
  },
  {
    path: RoutePath.about,
    icon: AboutIcon,
    text: "about",
  },
  {
    path: RoutePath.profile,
    icon: ProfileIcon,
    text: "profile",
  },
];
