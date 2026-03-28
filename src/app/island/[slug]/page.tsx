import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import Quiz, { type Question } from '@/components/Quiz';
import TableOfContents from '@/components/TableOfContents';

export default async function IslandPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="pb-24 flex gap-8 items-start relative">
      <div className="flex-1 min-w-0">
        {/* Header Topic */}
        <div className="relative bg-[#1c140d] rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-[#4a3b2c] overflow-hidden mb-8">
          {/* Texture nền giấy cổ */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none mix-blend-overlay" />
          
          {/* 4 Góc viền */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#8b7355] opacity-30 m-2" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#8b7355] opacity-30 m-2" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#8b7355] opacity-30 m-2" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#8b7355] opacity-30 m-2" />

          <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${course.color} opacity-80`} />
          <div className="relative z-10 p-8 md:p-10">
            <div className="flex items-center gap-4 mb-5">
              <div className={`p-4 rounded-sm border-2 border-[#5c4a3d] bg-gradient-to-br ${course.color} bg-opacity-20 shadow-inner`}>
                <course.icon className="w-10 h-10 text-[#d4c3b3]" strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#e8dcc7] tracking-wide leading-tight drop-shadow-md">
                {course.title}
              </h1>
            </div>
            <p className="text-xl text-[#b5a38f] font-medium leading-relaxed max-w-4xl">
              <div dangerouslySetInnerHTML={{ __html: course.description }} />
            </p>
          </div>
        </div>

        {/* Main Text Content */}
        <div className="bg-[#110d0a]/95 backdrop-blur-md rounded-sm border border-[#3a2d20] shadow-xl p-8 md:p-10 mb-8 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-screen" />
          <div 
            className="relative z-10 prose prose-lg md:prose-xl prose-invert max-w-none text-[#d1baa2] prose-headings:font-serif prose-headings:text-[#e8dcc7] prose-strong:text-[#fef9f2] prose-a:text-amber-500 hover:prose-a:text-amber-400 prose-img:rounded-sm prose-img:border-4 prose-img:border-[#2a2016] prose-hr:border-[#3a2d20]"
            dangerouslySetInnerHTML={{ __html: course.contentHtml }}
          />
          
          {course.videoUrl && (
             <div className="mt-16">
               <h3 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                 <span className="text-3xl">🎥</span> Tư Liệu Video Bổ Trợ
               </h3>
               <div className="aspect-w-16 aspect-h-9 relative rounded-2xl overflow-hidden shadow-lg w-full bg-gray-900" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  src={course.videoUrl} 
                  title={`${course.title} Video Player`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                />
              </div>
             </div>
          )}

          {course.sources && course.sources.length > 0 && (
            <div className="mt-16 pt-8 border-t border-slate-800 bg-slate-950 rounded-2xl p-6">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Nguồn tham khảo / Học thuật
              </h3>
              <ul className="space-y-3">
                {course.sources.map((source: any, idx: number) => (
                  <li key={idx} className="flex flex-col">
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-medium inline-block underline decoration-blue-800 underline-offset-4 decoration-2">
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bounty Quiz Section */}
        {course.quiz && course.quiz.length > 0 && (
          <Quiz questions={course.quiz as Question[]} islandName={course.title} />
        )}
      </div>

      {course.toc && course.toc.length > 0 && (
        <TableOfContents items={course.toc} />
      )}
    </div>
  );
}
