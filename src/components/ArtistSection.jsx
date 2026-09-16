import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Modal from "./Modal.jsx";
import { artists, contributors } from "../data/content.js";

function ArtistRow({ person }) {
  const card = (
    <div className="flex h-full items-center gap-4 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 transition-colors hover:border-cyan/30 hover:bg-white/[0.06]">
      <img
        src={person.image}
        alt={person.name}
        className="h-14 w-14 shrink-0 rounded-full border border-white/10 object-cover"
      />
      <p className="font-medium text-white">{person.name}</p>
      {person.link && (
        <ExternalLink
          size={16}
          className="ml-auto shrink-0 text-white/30 transition-colors group-hover:text-cyan"
          aria-hidden="true"
        />
      )}
    </div>
  );

  if (!person.link) return card;

  return (
    <a
      href={person.link}
      target="_blank"
      rel="noopener noreferrer"
      title={`Lihat portofolio ${person.name}`}
      className="group block rounded-xl transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60"
    >
      {card}
    </a>
  );
}

function ThanksCard({ person }) {
  const card = (
    <div className="flex flex-col items-center gap-2 text-center">
      <img
        src={person.image}
        alt={person.name}
        className="h-16 w-16 rounded-full border border-white/10 object-cover transition-colors group-hover:border-cyan/50"
      />
      <p className="text-sm text-white/80 transition-colors group-hover:text-cyan">
        {person.name}
      </p>
    </div>
  );

  if (!person.link) return card;

  return (
    <a
      href={person.link}
      target="_blank"
      rel="noopener noreferrer"
      title={`Lihat portofolio ${person.name}`}
      className="group rounded-xl transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60"
    >
      {card}
    </a>
  );
}

function ContributorsModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} labelledBy="contributors-title">
      <h2
        id="contributors-title"
        className="text-center text-2xl font-semibold text-white"
      >
        Our Collab Team
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {artists.map((a, i) => (
          <ArtistRow key={i} person={a} />
        ))}
      </div>

      <div className="mt-10 border-t border-white/10 pt-8">
        <h3 className="text-center text-lg font-medium text-white">
          Special Thanks to:
        </h3>
        <div className="mt-6 flex flex-wrap justify-center gap-8">
          {contributors.map((c, i) => (
            <ThanksCard key={i} person={c} />
          ))}
        </div>
      </div>

      <p className="mt-10 text-center text-sm italic text-mint/80">…and you!</p>
    </Modal>
  );
}

export default function ArtistSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-4 self-start rounded-full border border-cyan/30 bg-cyan/10 px-6 py-3 text-sm font-medium text-mint transition-all hover:border-cyan/60 hover:bg-cyan/20 hover:text-white"
      >
        Lihat Semua Artist &amp; Kontributor
      </button>
      <ContributorsModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
