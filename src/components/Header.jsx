import { EVENT_TITLE } from "../data/content.js";

export default function Header() {
  return (
    <header className="mb-6 flex flex-col items-start text-left">
      <div
        className="mb-3 h-px w-14 animate-floatGlow bg-gradient-to-r from-cyan/70 to-transparent"
        aria-hidden="true"
      />
      <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {EVENT_TITLE}
      </h1>
    </header>
  );
}
