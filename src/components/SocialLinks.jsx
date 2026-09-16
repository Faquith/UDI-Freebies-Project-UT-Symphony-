import { useState } from "react";
import { Instagram, Twitter, Facebook, Users } from "lucide-react";
import Modal from "./Modal.jsx";
import { socialLinks, DISCORD_ICON, WHATSAPP_ICON } from "../data/content.js";

function LinkCard({ label, icon: Icon, iconSrc, onClick, href }) {
  const commonClasses =
    "group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/40 hover:bg-white/[0.07] hover:shadow-[0_0_30px_-10px_rgba(94,231,255,0.5)]";
  const inner = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-panel text-cyan">
        {iconSrc ? (
          <img src={iconSrc} alt="" className="h-6 w-6 object-contain" />
        ) : (
          <Icon size={18} />
        )}
      </span>
      <span className="font-medium">{label}</span>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
      >
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={commonClasses}>
      {inner}
    </button>
  );
}

function SocialMediaModal({ open, onClose }) {
  const items = [
    {
      label: "UDI Official Instagram",
      href: socialLinks.instagram,
      icon: Instagram,
    },
    { label: "UDI Official Twitter", href: socialLinks.twitter, icon: Twitter },
  ];
  return (
    <Modal open={open} onClose={onClose} labelledBy="social-title">
      <h2 id="social-title" className="text-2xl font-semibold text-white">
        Sosial Media Kami
      </h2>
      <div className="mt-6 flex flex-col gap-3">
        {items.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white transition-all hover:border-cyan/40 hover:bg-white/[0.07]"
          >
            <Icon size={20} className="text-cyan" />
            <span className="font-medium">{label}</span>
          </a>
        ))}
      </div>
    </Modal>
  );
}

export default function SocialLinks() {
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-3">
        <LinkCard
          label="Our Social Media Accounts"
          icon={Users}
          onClick={() => setSocialOpen(true)}
        />
        <LinkCard
          label="UDI Discord Server"
          iconSrc={DISCORD_ICON}
          href={socialLinks.discord}
        />
        <LinkCard
          label="UDI Facebook Group"
          icon={Facebook}
          href={socialLinks.facebook}
        />
        <LinkCard
          label="UDI Whatsapp Group"
          iconSrc={WHATSAPP_ICON}
          href={socialLinks.whatsapp}
        />
      </div>
      <SocialMediaModal
        open={socialOpen}
        onClose={() => setSocialOpen(false)}
      />
    </>
  );
}
