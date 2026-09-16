import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

export default function Modal({ open, onClose, children, labelledBy }) {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
    >
      <div className="absolute inset-0 bg-[#050611]" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-cyan/20 bg-panel shadow-[0_0_60px_-15px_rgba(94,231,255,0.35)] animate-modalIn">
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="sticky top-4 float-right mr-4 mt-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X size={18} />
        </button>
        <div className="px-6 pb-8 pt-16 sm:px-10 sm:pt-10">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
