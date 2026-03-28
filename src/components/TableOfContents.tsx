'use client';

import { TOCItem } from '@/data/courses';

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <aside className="w-64 flex-shrink-0 hidden xl:block sticky top-24 self-start max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="pl-6 border-l-2 border-slate-800">
        <h3 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-4">Nội Dung Bài</h3>
        <nav className="flex flex-col space-y-2.5">
          {items.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors leading-relaxed"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
