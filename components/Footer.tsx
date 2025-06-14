"use client";

export default function Footer() {
  return (
    <footer className="text-center text-neutral-500 text-sm py-4 border-t border-neutral-800 mt-8">
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  );
}
