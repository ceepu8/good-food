import { useRef } from "react";
import { cn } from "../../../utils";
import { useOnClickOutside } from "../../../hooks/shared/useClickOutside";
import { Button } from "../Button";
import useLockBodyScroll from "../../../hooks/shared/useLockBodyScroll";
import Heading from "../Heading";

type ModalProps = {
  handleClose: () => void;
  show: Boolean;
  children: React.ReactNode;
  className?: string;
  onOk?: () => void;
  disabled?: boolean | undefined;
  title?: string
};

export const ModalTrigger = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Modal = ({
  handleClose,
  show,
  children,
  className,
  onOk = () => {},
  disabled = false,
  title = "",
  ...props
}: ModalProps) => {
  const ref = useRef(null);
  useOnClickOutside<HTMLDivElement>(ref, handleClose);
  useLockBodyScroll(show);

  const rootClassName = cn(
    "fixed h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all",
    "bg-white w-full max-h-[80%] overflow-auto xs:w-[80%] xs:max-w-[720px]",
    "flex flex-col p-6 xs:rounded-lg",
    show ? "visible opacity-100" : "invisible opacity-0",
    className
  );

  const overlayClassName = cn(
    "fixed top-0 left-0 w-full h-full bg-black/30 transition-all",
    show ? "visible opacity-100" : "invisible opacity-0"
  );
  return (
    <div className={overlayClassName}>
      <section ref={ref} className={rootClassName}>
        <Heading size="2xl" className="text-center shrink-0">{title}</Heading>
        <div className="flex-1">{children}</div>
        <div className="flex space-x-4">
          <Button variant="ghost" onClick={handleClose} className="ml-auto">
            Close
          </Button>
          <Button onClick={onOk} className="ml-auto" disabled={disabled}>
            Ok
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
