import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import ChatNami from '@/components/ChatNami';

const inter = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin', 'vietnamese'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'AI MKT - Đại Hải Trình',
  description: 'Nâng tầm tư duy Marketing với Trí tuệ Nhân tạo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
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
            <p className="text-sm text-slate-500 font-medium">© 2026 Phùng Hải Long. All rights reserved.</p>
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
