import { createPortal } from "react-dom";

export interface PortalProps {
  element?: HTMLElement;
  children?: React.ReactNode;
}

export default function Portal({ element = document.body, children }: PortalProps) {
  if (!element) {
    return null;
  }

  return createPortal(children, element);
}
