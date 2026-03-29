'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Tránh hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/60 animate-pulse" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Chuyển giao diện sáng' : 'Chuyển giao diện tối'}
      title={isDark ? 'Chuyển giao diện sáng' : 'Chuyển giao diện tối'}
      className={`
        relative flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300
        ${isDark
          ? 'border-slate-600 bg-slate-800/60 text-amber-400 hover:bg-slate-700 hover:border-amber-500/50'
          : 'border-amber-300 bg-amber-50 text-amber-600 hover:bg-amber-100 hover:border-amber-400'
        }
      `}
    >
      <span className="transition-transform duration-300">
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </span>
    </button>
  );
}
