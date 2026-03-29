'use client';

import Link from 'next/link';
import { Compass, BookOpen, Coffee, Send, ScrollText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Đại Hải Trình', href: '/', icon: Compass },
  { name: 'Hướng dẫn', href: '/huong-dan', icon: BookOpen },
  { name: 'Tiếp Lương', href: '/donate', icon: Coffee },
  { name: 'Truyền Tin', href: '/contact', icon: Send },
  { name: 'Hồ Sơ Mật', href: '/about', icon: ScrollText },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 dark:bg-[#0A0A0A]/80 light:bg-[#faf7f3]/90 backdrop-blur-md border-b border-slate-900 dark:border-slate-900 light:border-stone-200 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="/logo.png" alt="MARKIGAI Logo" className="w-9 h-9 object-contain" />
            <span className="font-bold text-xl tracking-tight text-slate-100 dark:text-slate-100 light:text-stone-900 logo-text transition-colors">
              MARKIGAI
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden sm:flex sm:items-center sm:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 px-1 pt-1 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-amber-400 dark:text-amber-400 light:text-amber-600'
                      : 'text-slate-400 dark:text-slate-400 light:text-stone-500 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-amber-600'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Nav */}
          <div className="flex items-center gap-3 sm:hidden">
            <div className="flex space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-400 dark:text-slate-400 light:text-stone-500 hover:text-blue-400 p-2 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            {/* Theme Toggle Mobile */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
