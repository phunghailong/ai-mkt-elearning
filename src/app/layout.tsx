import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import ChatNami from '@/components/ChatNami';

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin', 'vietnamese'], variable: '--font-space-grotesk' });

const BASE_URL = 'https://ai-mkt-elearning.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Đại Hải Trình Marketing x AI — Học Marketing & AI Thực Chiến',
    template: '%s | Đại Hải Trình Marketing x AI',
  },
  description:
    'Khoá học Marketing ứng dụng AI miễn phí bằng tiếng Việt. Chinh phục 8 chủ đề Marketing từ cơ bản đến nâng cao: Chiến lược, Content, Thiết kế, Đa kênh, MarTech và Đo lường. Học cùng AI thực chiến từ A-Z.',
  keywords: [
    'học marketing', 'marketing AI', 'marketing tiếng Việt', 'khoá học marketing miễn phí',
    'AI marketing', 'chiến lược marketing', 'content marketing', 'digital marketing',
    'martech', 'automation marketing', 'học AI', 'ChatGPT marketing', 'SEO marketing',
    'marketing thực chiến', 'đại hải trình marketing', 'phùng hải long',
  ],
  authors: [{ name: 'Phùng Hải Long', url: BASE_URL }],
  creator: 'Phùng Hải Long',
  publisher: 'Đại Hải Trình MARKIGAI - Marketing x AI',
  category: 'Education',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: BASE_URL,
    siteName: 'Đại Hải Trình MARKIGAI - Marketing x AI',
    title: 'Đại Hải Trình MARKIGAI — Học Marketing & AI Thực Chiến',
    description:
      'Khoá học Marketing ứng dụng AI miễn phí bằng tiếng Việt. Chinh phục 8 đảo kiến thức Marketing từ cơ bản đến nâng cao.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Đại Hải Trình MARKIGAI - Marketing x AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Đại Hải Trình MARKIGAI - Marketing x AI — Học Marketing & AI Thực Chiến',
    description: 'Khoá học Marketing ứng dụng AI miễn phí bằng tiếng Việt. 8 chủ đề từ cơ bản đến nâng cao.',
    images: ['/logo.png'],
    creator: '@phunghailong',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'vi-VN': BASE_URL,
    },
  },
};

// JSON-LD Schema cho Website
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Đại Hải Trình Marketing x AI',
  url: BASE_URL,
  description: 'Khoá học Marketing ứng dụng AI miễn phí bằng tiếng Việt',
  inLanguage: 'vi-VN',
  author: {
    '@type': 'Person',
    name: 'Phùng Hải Long',
    email: 'longphung.com@gmail.com',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/island/{search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// JSON-LD Schema cho Organization
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Đại Hải Trình Marketing x AI',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: 'Nền tảng học Marketing ứng dụng AI miễn phí bằng tiếng Việt',
  founder: {
    '@type': 'Person',
    name: 'Phùng Hải Long',
  },
  sameAs: [
    'https://github.com/phunghailong/ai-mkt-elearning',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${spaceGrotesk.variable} bg-[#0A0A0A] text-slate-200 antialiased flex flex-col min-h-screen relative`}>
        {/* Lớp nền ảnh biển cả Mờ và Tối */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48f15006-bc11-49fa-ae79-396c79c46b6a/dd08wpj-21229b10-291e-47c4-8625-235a8f32e7cf.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'blur(5px) brightness(0.5)',
          }}
        />

        {/* Khung nội dung đè lên trên ảnh nền */}
        <div className="relative z-10 flex flex-col min-h-screen w-full pt-16">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <ChatNami />
          <footer className="w-full text-center py-6 mt-12 border-t border-slate-900 border-opacity-50">
            <p className="text-sm text-slate-500 font-medium">© 2026 MARKIGAI - Phùng Hải Long. All rights reserved.</p>
            <p className="text-slate-500 text-xs mt-2 italic">
              Mọi thắc mắc vui lòng liên hệ:
              <a href="mailto:longphung.com@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4">
                longphung.com@gmail.com
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
