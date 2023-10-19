import { ReactNode } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  className?: string;
  children: ReactNode;
  disabled?: Boolean;
}

type CombinedProps = CustomLinkProps & LinkProps;

const Link: React.FC<CombinedProps> = ({
  to,
  className,
  children,
  disabled,
  ...rest
}) => {
  if (disabled) {
    return <div>{children}</div>;
  }

  // You can add custom logic or styles here if needed
  return (
    <RouterLink to={to} className={className} {...rest}>
      {children}
    </RouterLink>
  );
};

export default Link;
