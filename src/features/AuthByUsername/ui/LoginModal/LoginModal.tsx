import { classNames } from "shared/lib/classNames/classNames";
import Modal from "shared/ui/Modal/Modal";

import { Suspense } from "react";
import Loader from "widgets/Loader/Loader";
import LoginFormAsync from "../LoginForm/LoginForm.async";
import * as cls from "./LoginModal.module.scss";

export interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export function LoginModal({ className, isOpen, onClose }: LoginModalProps) {
  return (
    <Modal className={classNames(cls.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
}
