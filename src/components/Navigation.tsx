"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/features", label: "Features" },
    { href: "/community", label: "Community" },
    { href: "/privacy", label: "Privacy" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-black/5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          After<span className="gradient-text">Trials</span>
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-light tracking-wide hover:text-black/60 transition-colors"
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  className="absolute bottom-[-4px] left-0 right-0 h-[1px] gradient-underline"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}