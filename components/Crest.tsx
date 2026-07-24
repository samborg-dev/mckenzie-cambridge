/**
 * McKenzie Cambridge crest — renders the crest image from /public/crest.png.
 * The file is a transparent-background emblem, so it sits cleanly on any color.
 */
const RATIO = 702 / 388; // intrinsic aspect ratio of crest.png

interface CrestProps {
  height?: number;
  className?: string;
  alt?: string;
}

export default function Crest({
  height = 44,
  className = "",
  alt = "McKenzie Cambridge Preparatory Academy crest",
}: CrestProps) {
  return (
    <img
      className={`crest ${className}`}
      src="/crest.png"
      alt={alt}
      height={height}
      width={Math.round(height * RATIO)}
      style={{ height, width: "auto" }}
      draggable={false}
    />
  );
}
