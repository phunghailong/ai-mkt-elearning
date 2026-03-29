import { ScrollText, Medal, Sailboat } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hồ Sơ Mật - Phùng Hải Long',
};

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.82a8.22 8.22 0 0 0 4.81 1.54V6.91a4.85 4.85 0 0 1-1.04-.22z" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/phunghailong',
    Icon: FacebookIcon,
    color: 'text-blue-400 hover:text-blue-300',
    bg: 'bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30',
    label: '/phunghailong',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/phunghailong',
    Icon: LinkedinIcon,
    color: 'text-sky-400 hover:text-sky-300',
    bg: 'bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/30',
    label: '/in/phunghailong',
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@phunghailongst',
    Icon: TikTokIcon,
    color: 'text-pink-400 hover:text-pink-300',
    bg: 'bg-pink-500/10 hover:bg-pink-500/20 border-pink-500/30',
    label: '@phunghailongst',
  },
  {
    name: 'Email',
    href: 'mailto:longphung.com@gmail.com',
    Icon: MailIcon,
    color: 'text-amber-400 hover:text-amber-300',
    bg: 'bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/30',
    label: 'longphung.com@gmail.com',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <ScrollText className="w-16 h-16 mx-auto text-indigo-500 mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4">Hồ Sơ Thuyền Trưởng</h1>
        <p className="text-xl text-slate-400">
          Cùng bạn chinh phục Đại Hải Trình Marketing x AI
        </p>
      </div>

      {/* Bio Card — text only */}
      <div className="bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-800 mb-12 p-8 md:p-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 border border-indigo-500/20 text-sm font-bold mb-6 w-fit">
          <Medal className="w-4 h-4" />
          Founder &amp; Instructor
        </div>

        <h2 className="text-3xl font-black text-slate-100 mb-8">Thân gửi anh em!</h2>

        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>
            Chào người anh em, tôi là một người lăn lộn trên Đại hải trình Marketing hơn 15 năm nay và gần 3 năm mò mẫm Haki AI bá vương (hiện tại vẫn đang ngày đêm rèn luyện mấy cái của nợ này).
          </p>
          <p>
            Trên hành trình đầy giông bão ấy, tôi đã được gặp gỡ, hỗ trợ và trực tiếp đào tạo nhiều anh chị em đồng đội. Từ những người lính mới ra khơi đến các thuyền trưởng lão luyện, tôi đã cùng anh em trải qua vô vàn sóng gió thị trường để thấu hiểu tường tận những nỗi đau, sự vất vả khi phải vật lộn với hàng tá công cụ số phức tạp mỗi ngày, những kiến thức mới, xu hướng mới (nói chứ nghĩ cũng lắm lúc nản).
          </p>
          <p>
            Đó là lý do <strong>MARKIGAI - Đại Hải Trình Marketing x AI</strong> được sinh ra! Tôi KHÔNG PHẢI LÀ CHUYÊN GIA, và đây không phải là một khóa học, mà là một tấm "Bản Đồ Kho Báu" tinh gọn nhất. Tôi đã cố gắng loại bỏ mớ lý thuyết phức tạp, để gửi tặng anh em <strong>Tư duy ứng dụng AI vào Marketing Thực Chiến (AI-First Mindset)</strong> dựa trên kinh nghiệm cá nhân kết hợp cùng AI. À vì thế chắc chắn sẽ còn nhiều thiếu sót, có gì anh em góp ý nhẹ tay nhé.
          </p>
          <p className="font-black text-amber-500 pt-4 border-t border-slate-800 mt-6 italic">
            "Biển cả luôn sóng gió, công cụ AI có thể thay đổi sau 1 đêm, nhưng Haki Tư Duy của một Thuyền Trưởng thực thụ thì trường tồn với thời gian."
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-900/10 rounded-3xl p-8 border border-blue-900/30">
          <Sailboat className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-200 mb-2">Mục tiêu dự án MARKIGAI</h3>
          <p className="text-slate-400">Giúp +10.000 Marketer tiếp cận kiến thức Marketing bài bản hơn, quy trình ứng dụng AI hiệu quả hơn, rút ngắn thời gian chạy Task tay chân để tập trung cho chiến lược xuất chúng, hoặc đơn giản là... có thời gian nghỉ ngơi cafe hoặc đi chơi với người thương.</p>
        </div>
        <div className="bg-emerald-900/10 rounded-3xl p-8 border border-emerald-900/30">
          <ScrollText className="w-10 h-10 text-emerald-500 mb-4" />
          <h3 className="text-xl font-bold text-slate-200 mb-2">Hành trình tiếp theo</h3>
          <p className="text-slate-400">Dự án MARKIGAI sẽ liên tục cập nhật để bắt kịp những công nghệ, xu hướng mới nhất.</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 md:p-10">
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Kết nối với tôi</h2>
        <p className="text-slate-400 mb-8">Tôi thường xuyên chia sẻ kiến thức Marketing &amp; AI trên các nền tảng bên dưới. Ghé thăm và cùng đàm đạo chuyện đời, chuyện nghề nhé!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socialLinks.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${s.bg}`}
            >
              <div className={`shrink-0 ${s.color}`}>
                <s.Icon />
              </div>
              <div>
                <p className={`font-bold ${s.color}`}>{s.name}</p>
                <p className="text-slate-400 text-sm">{s.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
