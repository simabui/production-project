import { useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import Portal from "../Portal/Portal";
import * as cls from "./Modal.module.scss";

export interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;
export default function Modal({ className, children, isOpen, onClose, lazy }: ModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeydown);
    }

    return () => {
      window.removeEventListener("keydown", onKeydown);
      clearTimeout(timerRef.current);
      setIsClosing(false);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
    return () => {
      setIsMounted(false);
    };
  }, [isOpen]);

  const mods: Record<string, boolean | undefined> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  function onKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      closeHandler();
    }
  }

  function closeHandler() {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
      }, ANIMATION_DELAY);
    }
  }

  function contentHandler(e: React.MouseEvent) {
    e.stopPropagation();
  }

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={contentHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
