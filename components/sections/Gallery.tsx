import ImagePlaceholder from "@/components/ImagePlaceholder";

interface GalleryProps {
  soft?: boolean;
}

export default function Gallery({ soft }: GalleryProps) {
  return (
    <section className={soft ? "soft" : undefined}>
      <div className="container">
        <div className="section-head center">
          <div className="kicker">Media</div>
          <h2>A glimpse of what&apos;s to come</h2>
          <p>[Placeholder — swap these for real photos, or let us provide high-quality stock images to start.]</p>
        </div>
        <div className="gallery">
          <ImagePlaceholder className="wide" label="Feature photo" />
          <ImagePlaceholder label="Photo" />
          <ImagePlaceholder label="Photo" />
          <ImagePlaceholder label="Photo" />
          <ImagePlaceholder label="Photo" />
          <ImagePlaceholder className="wide" label="Video thumbnail" />
        </div>
      </div>
    </section>
  );
}
