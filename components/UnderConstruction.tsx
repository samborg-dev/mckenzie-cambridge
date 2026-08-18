"use client";

import { useEffect } from "react";
import Crest from "@/components/Crest";

/**
 * Full-screen "liquid glass" overlay shown while the site is being built.
 * Coloured light sources drift behind a frosted panel, which refracts them
 * through a blurred, saturated backdrop with specular edge highlights.
 *
 * To take the site live, remove <UnderConstruction /> from app/layout.tsx.
 */
export default function UnderConstruction() {
  // The overlay is fixed, so keep the page behind it from scrolling under the glass.
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  return (
    <div className="uc-overlay" role="dialog" aria-modal="true" aria-labelledby="uc-title">
      <div className="uc-bg" aria-hidden="true">
        <span className="uc-blob uc-blob-1" />
        <span className="uc-blob uc-blob-2" />
        <span className="uc-blob uc-blob-3" />
      </div>

      <div className="uc-card">
        <Crest height={72} className="uc-crest" />

        <span className="uc-eyebrow">McKenzie Cambridge Preparatory Academy</span>

        <h1 id="uc-title" className="uc-title">
          Under Construction
        </h1>

        <p className="uc-sub">
          We&rsquo;re putting the finishing touches on our new home online.
          Please check back soon.
        </p>

        <div className="uc-bar" aria-hidden="true" />

        <div className="uc-motto">
          <span className="lat">Crescimus Discendo, Ducimus Intellectu</span>
          <span className="eng">We grow by learning, we lead with knowledge.</span>
        </div>
      </div>
    </div>
  );
}
