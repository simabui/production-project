import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Applink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  to: string;
  children: React.ReactNode;
  theme: AppLinkTheme;
}

export default function Applink(props: AppLinkProps) {
  const { to, className, theme, children } = props;

  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
}
