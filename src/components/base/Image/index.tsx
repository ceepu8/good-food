import React, { CSSProperties } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  style,
  onClick,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onClick={onClick}
      {...props}
    />
  );
};

export default Image;
