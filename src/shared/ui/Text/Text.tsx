import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Text.module.scss";

export enum TextTheme {
  PRIMARY = "primary",
  ERROR = "error",
}

export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export function Text({ className, title, text, theme = TextTheme.PRIMARY }: TextProps) {
  const mods = {
    [cls[theme]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
}
