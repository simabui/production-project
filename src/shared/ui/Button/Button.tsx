import { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export function Button({ className, children, theme, ...props }: ButtonProps) {
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...props}>
      {children}
    </button>
  );
}
