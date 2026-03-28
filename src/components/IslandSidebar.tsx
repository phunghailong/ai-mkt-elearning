'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { courses } from '@/data/courses';

export default function IslandSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block sticky top-24 self-start bg-[#0A0A0A] border border-slate-800 rounded-2xl shadow-sm p-4 h-[calc(100vh-8rem)] overflow-y-auto">
      <h3 className="text-xs font-black uppercase text-slate-500 tracking-wider mb-4 px-3">Bản Đồ Hải Trình</h3>
      <nav className="space-y-1">
        {courses.map((course) => {
          const isActive = pathname === `/island/${course.slug}`;
          return (
            <Link 
              key={course.id} 
              href={`/island/${course.slug}`}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-blue-900/30 text-blue-400 font-bold border border-blue-900/50' 
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200 group border border-transparent'
              }`}
            >
              <div className={`p-1.5 rounded-md ${isActive ? `bg-gradient-to-br ${course.color} text-white` : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'}`}>
                <course.icon className="w-4 h-4" />
              </div>
              <span className="text-sm">{course.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
