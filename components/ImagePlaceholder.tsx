import type { CSSProperties } from "react";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  style?: CSSProperties;
}

export default function ImagePlaceholder({
  label = "Image placeholder",
  className = "",
  style,
}: ImagePlaceholderProps) {
  return (
    <div className={`imgph ${className}`} style={style} role="img" aria-label={label}>
      <span className="imgph-tag">{label}</span>
    </div>
  );
}
