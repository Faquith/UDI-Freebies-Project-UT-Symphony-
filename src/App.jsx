import Header from "./components/Header.jsx";
import FreebieSlider from "./components/FreebieSlider.jsx";
import ArtistSection from "./components/ArtistSection.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import {
  COMMUNITY_NAME,
  COMMUNITY_ICON,
  BACKGROUND_IMAGE,
} from "./data/content.js";

function Starfield() {
  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 1.6 + 0.6,
    delay: Math.random() * 5,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute animate-twinkle rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-void font-display text-white">
      {/* Background image (edit BACKGROUND_IMAGE in src/data/content.js) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(108,92,231,0.25), transparent 55%), radial-gradient(circle at 90% 80%, rgba(94,231,255,0.12), transparent 45%), linear-gradient(180deg, #050611 0%, #0a0e1f 45%, #050611 100%)",
        }}
        aria-hidden="true"
      />
      <Starfield />

      {/* Two-column layout on desktop: freebies + collab team on the left,
          community name + social links on the right. Stacks to one
          column on mobile/tablet, in the same reading order. */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-12">
        {/* Left column */}
        <div className="flex flex-col items-start">
          <Header />
          <FreebieSlider />
          <ArtistSection />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 lg:pt-14">
          <div className="flex items-center justify-center gap-3 rounded-xl border border-lavender/25 bg-lavender/10 px-6 py-4 text-center shadow-[0_0_30px_-12px_rgba(162,155,254,0.5)]">
            <img
              src={COMMUNITY_ICON}
              alt=""
              aria-hidden="true"
              className="h-6 w-6 shrink-0 rounded-full object-cover"
            />
            <p className="text-base font-medium text-white sm:text-lg">
              {COMMUNITY_NAME}
            </p>
          </div>
          <SocialLinks />
        </div>
      </div>

      <footer className="relative z-10 pb-10 text-center text-xs text-white/30">
        {COMMUNITY_NAME} — dibuat dengan ❤ untuk komunitas.
      </footer>
    </div>
  );
}
