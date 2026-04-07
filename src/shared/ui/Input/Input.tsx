import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
  value?: string;
  onChange?: (value: string) => void;
}
const CART_WIDTH = 9.5;

export default function Input({ value, onChange, type = "text", placeholder, autoFocus, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  }

  function onBlur() {
    setIsFocused(false);
  }

  function onFocus() {
    setIsFocused(true);
  }

  function onSelect(e: React.SyntheticEvent<HTMLInputElement, Event>) {
    const target = e.target as HTMLInputElement;
    setCaretPosition(target.selectionStart || 0);
  }

  return (
    <div className={classNames(cls.InputWrapper, {}, [])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          value={value}
          onChange={onChangeHandler}
          type={type}
          {...rest}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
        />
        {isFocused && <span className={cls.caret} style={{ left: caretPosition * CART_WIDTH }} />}
      </div>
    </div>
  );
}
