import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import Quiz, { type Question } from '@/components/Quiz';
import TableOfContents from '@/components/TableOfContents';
import type { Metadata } from 'next';

const BASE_URL = 'https://ai-mkt-elearning.vercel.app';

// Map slug → mô tả SEO từng đảo
const islandSeoDescriptions: Record<string, string> = {
  'ban-do-marketing': 'Học nền tảng Marketing: Nhu cầu, Mong muốn, Tháp Maslow, định vị thị trường và ứng dụng AI trong phân tích khách hàng.',
  'dao-nghien-cuu': 'Nghiên cứu thị trường với AI: phân tích đối thủ, tìm Blue Ocean, khảo sát khách hàng và xây dựng Persona bằng ChatGPT.',
  'chien-luoc-tuong-thanh': 'Xây dựng chiến lược Marketing: STP, định vị thương hiệu, Key Message, ngân sách 70-20-10 và lên Kế hoạch Marketing tổng thể với AI.',
  'xuong-noi-dung': 'Content Marketing từ A-Z: Phễu nội dung, Storytelling, Social Media Content, lịch đăng bài và ứng dụng AI tạo nội dung.',
  'xuong-sang-tao': 'Thiết kế Marketing với AI: Tâm lý học thị giác, Brand Identity, Logo, Image Prompt cho MidJourney và Canva AI.',
  'dao-bao-to': 'Phân phối đa kênh (Omnichannel): Viral Marketing, Facebook Ads, TikTok Ads, Google Ads, TMĐT và chiến lược ngân sách quảng cáo.',
  'dao-tuong-lai': 'MarTech & Automation Marketing: CRM Lifecycle, Email Marketing, Make/Zapier, Chatbot AI, CDP và Lead Scoring.',
  'kho-bau-du-lieu': 'Đo lường & Phân tích Marketing: Google Analytics 4, Tracking Pixel, CAC, LTV, CRO, A/B Test và ứng dụng AI đọc báo cáo.',
};

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) return {};

  const description =
    islandSeoDescriptions[course.slug] ||
    `Học ${course.title} trong khoá học Marketing AI miễn phí bằng tiếng Việt — Đại Hải Trình Marketing x AI.`;

  const canonicalUrl = `${BASE_URL}/island/${course.slug}`;

  return {
    title: course.title,
    description,
    keywords: [
      course.title,
      'marketing AI',
      'học marketing',
      'khoá học marketing miễn phí',
      'digital marketing tiếng Việt',
    ],
    openGraph: {
      type: 'article',
      locale: 'vi_VN',
      url: canonicalUrl,
      siteName: 'Đại Hải Trình Marketing x AI',
      title: `${course.title} | Đại Hải Trình Marketing x AI`,
      description,
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} | Đại Hải Trình Marketing x AI`,
      description,
      images: ['/logo.png'],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function IslandPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  const canonicalUrl = `${BASE_URL}/island/${course.slug}`;
  const description =
    islandSeoDescriptions[course.slug] ||
    `Học ${course.title} trong khoá học Marketing AI miễn phí — Đại Hải Trình Marketing x AI.`;

  // JSON-LD Course Schema cho từng đảo
  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description,
    url: canonicalUrl,
    inLanguage: 'vi-VN',
    isAccessibleForFree: true,
    provider: {
      '@type': 'Person',
      name: 'Phùng Hải Long',
      url: BASE_URL,
    },
    educationalLevel: 'Beginner to Intermediate',
    teaches: description,
    courseMode: 'online',
  };

  // JSON-LD BreadcrumbList
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: course.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
    </>
  );
}
