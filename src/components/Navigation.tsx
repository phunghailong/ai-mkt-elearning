import Link from 'next/link';
import { Compass, BookOpen, Coffee, Send, ScrollText } from 'lucide-react';

const navItems = [
  { name: 'Đại Hải Trình', href: '/', icon: Compass },
  { name: 'Hướng dẫn', href: '/huong-dan', icon: BookOpen },
  { name: 'Tiếp Lương', href: '/donate', icon: Coffee },
  { name: 'Truyền Tin', href: '/contact', icon: Send },
  { name: 'Hồ Sơ Mật', href: '/about', icon: ScrollText },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-9 h-9 object-contain" />
              <span className="font-bold text-xl tracking-tight text-slate-100">AI Marketing x PHL</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="inline-flex items-center gap-2 px-1 pt-1 text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center sm:hidden">
            {/* Mobile menu button could go here, for simplicity showing icons only */}
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 p-2"
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
