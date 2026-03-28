import { courses } from '@/data/courses';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100 mb-4">
          Đại Hải Trình Marketing x AI
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Đi tìm kho báu One Piece của riêng bạn - Chinh phục Đại Hải Trình Marketing dữ dội nhưng đầy thú vị, bằng tri thức và sức mạnh AI.<br />
          Căng buồm ra khơi cùng tôi nào!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="group relative bg-[#1c140d] rounded-sm border-2 border-[#4a3b2c]/80 p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(200,170,134,0.15)] hover:-translate-y-1 flex flex-col h-full overflow-hidden">

            {/* Texture nền giấy cổ */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none mix-blend-overlay" />

            {/* 4 Góc viền trang trí kiểu Bản đồ */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8b7355] opacity-40 group-hover:opacity-100 transition-opacity m-1" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#8b7355] opacity-40 group-hover:opacity-100 transition-opacity m-1" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#8b7355] opacity-40 group-hover:opacity-100 transition-opacity m-1" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8b7355] opacity-40 group-hover:opacity-100 transition-opacity m-1" />

            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${course.color} opacity-70`} />

            <div className="relative z-10 flex items-center gap-4 mb-5">
              <div className={`p-2 rounded-sm border border-[#5c4a3d] bg-gradient-to-br ${course.color} bg-opacity-20 shadow-inner w-fit`}>
                <course.icon className="w-7 h-7 text-[#d4c3b3]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif font-bold text-xl leading-tight text-[#e8dcc7] tracking-wide">{course.title}</h3>
            </div>

            <div
              className="relative z-10 text-sm text-[#b5a38f] mb-6 flex-grow leading-relaxed font-medium"
              dangerouslySetInnerHTML={{ __html: course.description }}
            />

            <div className="relative z-10 mt-auto pt-5 border-t border-[#4a3b2c]/50">
              <Link
                href={`/island/${course.slug}`}
                className={`text-sm font-bold text-[#fef9f2] bg-gradient-to-r ${course.color} hover:contrast-125 rounded-sm py-3 px-5 flex items-center justify-between shadow-[0_4px_10px_rgba(0,0,0,0.5)] transform group-hover:scale-[1.02] transition-all w-full border border-[#8b7355]/30`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">🏴‍☠️</span> Khám phá
                </span>
                <span className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
