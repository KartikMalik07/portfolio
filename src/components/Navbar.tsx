"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-xl">
          KM.
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:opacity-70 transition-opacity ${
                  pathname === item.href ? "font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:kartikmalik71004@gmail.com"
            className="text-sm underline hover:opacity-70 transition-opacity"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/kartik-malik-a69391284/"
            target="_blank"
            rel="noreferrer"
            className="text-sm underline hover:opacity-70 transition-opacity"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className="block w-full h-0.5 bg-gray-900"></span>
            <span className="block w-full h-0.5 bg-gray-900"></span>
            <span className="block w-full h-0.5 bg-gray-900"></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b md:hidden">
            <div className="p-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-sm ${
                    pathname === item.href ? "font-medium" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t space-y-2">
                <a
                  href="mailto:kartikmalik71004@gmail.com"
                  className="block text-sm underline"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/kartik-malik-a69391284/"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
