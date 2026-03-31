import { classNames } from "shared/lib/classNames/classNames";

import * as cls from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}></div>
    </div>
  );
}
