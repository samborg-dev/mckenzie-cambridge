"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Crest from "@/components/Crest";
import { navItems } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="McKenzie Cambridge Preparatory Academy — home">
          <Crest size={46} />
          <span className="wordmark">
            <span className="wm-name">McKenzie Cambridge</span>
            <span className="wm-sub">Preparatory Academy</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="nav-links">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn btn-primary">
            Inquire
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="nav-mobile" id="mobile-menu">
          <div className="container">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "active" : undefined}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
              Inquire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
