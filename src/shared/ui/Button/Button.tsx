import { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}
export enum SizeButton {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
}

export function Button({ className, children, theme, square, size = SizeButton.M, ...props }: ButtonProps) {
  const mods = { [cls.square]: square };
  const additionalClasses = [className, cls[theme], cls[size]];

  return (
    <button className={classNames(cls.Button, mods, additionalClasses)} {...props}>
      {children}
    </button>
  );
}
