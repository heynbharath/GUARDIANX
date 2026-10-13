"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Activity, Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Living Guardian", href: "#living-guardian-hero" },
    { name: "The Vision", href: "#human-truth" },
    { name: "Daily Rhythm", href: "#rhythm" },
    { name: "Interactive Space", href: "#interactive-guardian" },
    { name: "Response Console", href: "#demo" },
    { name: "Architecture", href: "#architecture" },
    { name: "Ethical Principles", href: "#principles" },
    { name: "Project", href: "#project" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#071311]/90 backdrop-blur-md border-b border-gx-border py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-white/[0.04] py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#top"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gx-mint rounded-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gx-lime to-gx-emerald flex items-center justify-center text-[#08221a] shadow-[0_0_20px_rgba(72,214,162,0.35)] group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center font-display font-extrabold text-xl tracking-tight text-gx-text">
                guardian<span className="text-gx-mint">x</span>
              </div>
              <div className="text-[9px] font-mono tracking-widest text-gx-muted uppercase font-medium leading-none">
                Elderly Remote Safety
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-gx-muted">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gx-mint transition-colors tracking-wide py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#demo">
              <Button size="sm" className="group">
                <span>Explore Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gx-muted hover:text-gx-text hover:bg-gx-panel/50 border border-gx-border focus:outline-none focus:ring-2 focus:ring-gx-mint"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Overlay and Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[61px] bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-50 lg:hidden bg-[#091714]/95 backdrop-blur-2xl border-b border-gx-border px-5 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gx-text hover:text-gx-mint active:bg-gx-panel/50 py-3 px-2 rounded-xl border-b border-gx-border/30 flex items-center justify-between transition-colors min-h-[44px]"
                >
                  <span className="font-display font-medium tracking-wide">{link.name}</span>
                  <span className="text-xs text-gx-mint/60 font-mono">→</span>
                </a>
              ))}
              <div className="pt-4 mt-2">
                <a
                  href="#demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button size="md" className="w-full justify-center shadow-glow">
                    <span>Explore Interactive Demo</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
