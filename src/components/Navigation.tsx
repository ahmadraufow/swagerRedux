"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "@/src/i18n/navigation";
import LangSwitch from "./langSwitch";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              AppLogo
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 border-b-2 ${
                      isActive
                        ? "border-indigo-500 text-neutral-900 dark:text-white"
                        : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:border-neutral-300 dark:hover:border-neutral-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center border-l border-neutral-200 dark:border-neutral-800 pl-6 ml-2">
              <LangSwitch />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
