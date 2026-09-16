import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { freebies } from "../data/content.js";

export default function FreebieSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const count = freebies.length;

  const goTo = useCallback((i) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Auto-slide, paused while the user is interacting (hover / focus)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => goTo(index + 1), 5000);
    return () => clearInterval(t);
  }, [index, paused, goTo]);

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) prev();
    else if (delta < -40) next();
    touchStartX.current = null;
  };

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Slide area */}
      <div
        className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-panel/70 shadow-[0_0_50px_-10px_rgba(108,92,231,0.4)]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {freebies.map((f, i) => (
          <div
            key={i}
            aria-hidden={i !== index}
            className="absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-700 ease-out"
            style={{
              opacity: i === index ? 1 : 0,
              pointerEvents: i === index ? "auto" : "none",
            }}
          >
            <img
              src={f.image}
              alt={`Freebie oleh ${f.artist}`}
              className="max-h-full max-w-full rounded-xl object-contain"
              draggable={false}
            />
          </div>
        ))}

        <button
          onClick={prev}
          aria-label="Freebie sebelumnya"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-2 text-white/80 backdrop-blur-sm transition-all hover:bg-black/50 hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          aria-label="Freebie berikutnya"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-2 text-white/80 backdrop-blur-sm transition-all hover:bg-black/50 hover:text-white"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {freebies.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ke freebie ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-cyan" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Artist name bar — full width, right under the slider, syncs with the active slide */}
      <div className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-center">
        <p className="text-sm tracking-wide text-mint">
          Karya oleh <span className="font-medium text-white">{freebies[index].artist}</span>
        </p>
      </div>
    </div>
  );
}
