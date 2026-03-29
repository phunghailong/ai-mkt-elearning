import React from 'react';
import {
  Compass, Map, Sparkles, MessageSquare, Eye, Users, PenTool, LayoutTemplate, Share2, Mail, BarChart3, HelpCircle
} from 'lucide-react';

export default function HuongDanPage() {
  const islandsInfo = [
    {
      id: 1,
      name: 'Thị Trường & Định Vị',
      icon: Eye,
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10 border-amber-500/30',
      desc: 'Khoanh vùng Đại dương Xanh. AI giúp bạn dò quét Đối thủ và tìm Ra Lỗ hổng riêng cho bạn không ai có.'
    },
    {
      id: 2,
      name: 'Thấu Cảm Khách Hàng',
      icon: Users,
      color: 'text-rose-400',
      bgColor: 'bg-rose-400/10 border-rose-500/30',
      desc: 'Bóc trần sự thật ngầm hiểu (Insights). Tái hiện chân dung Khách hàng qua AI Personas để viết nội dung đúng tim đen.'
    },
    {
      id: 3,
      name: 'Chiến Lược & Kế Hoạch',
      icon: Map,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-400/10 border-indigo-500/30',
      desc: '"Sợi chỉ đỏ" tổng thể. Hướng dẫn AI lên Chiến dịch, chia ngân sách 70-20-10 và tạo ra Key Message.'
    },
    {
      id: 4,
      name: 'Kế Hoạch Nội Dung',
      icon: PenTool,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10 border-blue-500/30',
      desc: 'Biến thông điệp Mẹ thành Ma trận 3 Pillar. AI sẽ làm máy nghiền Content sinh lịch đăng 30 ngày Phễu Tofu, Mofu, Bofu.'
    },
    {
      id: 5,
      name: 'Thiết Kế Visual',
      icon: LayoutTemplate,
      color: 'text-teal-400',
      bgColor: 'bg-teal-400/10 border-teal-500/30',
      desc: 'Tự tay làm Art Director. Xây Brand Guide, Prompt trên NanoBanana/ Midjourney... và xuất hàng loạt Banner bằng Canva.'
    },
    {
      id: 6,
      name: 'Đa Kênh Digital',
      icon: Share2,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10 border-emerald-500/30',
      desc: 'Mở rộng lãnh thổ ra Facebook, TikTok, Zalo OA... AI phân luồng nhiệm vụ từng kênh làm phễu hay làm chốt.'
    },
    {
      id: 7,
      name: 'Email & CRM Automation',
      icon: Mail,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10 border-purple-500/30',
      desc: 'Kéo khách hàng "ngủ đông" sống dậy. AI nuôi dưỡng tự động bằng Email/SMS/Zalo ZNS/AI Chat thả thính.'
    },
    {
      id: 8,
      name: 'Báo Cáo & Phân Tích',
      icon: BarChart3,
      color: 'text-sky-400',
      bgColor: 'bg-sky-400/10 border-sky-500/30',
      desc: 'Nhìn Data chẩn bệnh. Đưa File Excel hệ thống tự đọc báo động sai ở khâu nào.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">

      {/* Hero Intro */}
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[100px] z-0"></div>
        <h1 className="relative z-10 text-4xl sm:text-5xl font-extrabold text-stone-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-indigo-300 mb-6">
          Hồ sơ <strong className="text-amber-600 dark:text-amber-500">Đại Hải Trình MARKIGAI</strong>
        </h1>
        <p className="relative z-10 text-lg text-stone-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Chào các Thuyền trưởng đến với <strong className="text-stone-800 dark:text-white">MARKIGAI - Đại Hải Trình Marketing x AI</strong>.
          <br />
          <span className="block mt-4 italic text-stone-700 dark:text-slate-200">
            "Dùng AI để làm việc thông minh hơn, dùng Marketing để lan tỏa giá trị rộng hơn và dùng Ikigai để sống ý nghĩa hơn."
          </span>
          <br />
          Triết lý này tin rằng: Khi một người làm marketing tìm thấy điểm giao thoa giữa Công cụ (AI) với Kỹ năng (Marketing) và Lẽ sống (Ikigai), họ sẽ trở thành 1 người làm nghề có giá trị và hạnh phúc.
        </p>
      </div>

      {/* Target Audience Section */}
      <div className="mb-20 bg-stone-100 dark:bg-[#1B2332]/40 border border-stone-300 dark:border-[#8b7355]/30 rounded-3xl p-8 sm:p-10 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] group-hover:bg-amber-500/10 transition-all duration-700"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-6 flex items-center gap-3">
            <Compass className="w-6 h-6" />
            "Đại Hải Trình MARKIGAI" Này Dành Cho Ai?
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-[#0A0A0A]/60 flex items-center justify-center shrink-0 border border-stone-300 dark:border-slate-700">
                <span className="text-xl">🌊</span>
              </div>
              <div>
                <strong className="text-stone-800 dark:text-slate-100 text-lg block mb-1">Các Thuỷ Thủ Tân Binh (Newbies)</strong>
                <p className="text-stone-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">Những người mới chân ướt chân ráo bước lên tàu khám phá Đại Hải Trình Marketing, đang ngợp trong mớ bòng bong lý thuyết, loay hoay chưa biết phải giương buồm bắt đầu từ đâu.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-[#0A0A0A]/60 flex items-center justify-center shrink-0 border border-stone-300 dark:border-slate-700">
                <span className="text-xl">⚓</span>
              </div>
              <div>
                <strong className="text-stone-800 dark:text-slate-100 text-lg block mb-1">Các Thuyền Trưởng Đương Nhiệm (Mid/Senior)</strong>
                <p className="text-stone-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">Những người đã chinh chiến, dạn dày sương gió một thời gian, nhưng đang bị mất phương hướng trước "siêu bão" AI đổ bộ. Đây là trạm dừng chân để bạn hiệu chỉnh lại chiếc la bàn, kết hợp độ nhạy bén thực chiến với vũ khí công nghệ mới.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-[#0A0A0A]/60 flex items-center justify-center shrink-0 border border-stone-300 dark:border-slate-700">
                <span className="text-xl">👑</span>
              </div>
              <div>
                <strong className="text-stone-800 dark:text-slate-100 text-lg block mb-1">Các Đô Đốc Lão Làng (Veterans/Experts)</strong>
                <p className="text-stone-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">Những Thuyền trưởng gạo cội dày dạn kinh nghiệm tình cờ ghé ngang qua quán hải trình. Rất mong các vị trưởng bối cứ thoải mái dạo chơi và để lại vài lời chỉ giáo quý giá để cộng đồng ngày một hoàn thiện!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sâu chuỗi 8 Đảo */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-8 border-b border-stone-300 dark:border-slate-800 pb-4">
          <Compass className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          <h2 className="text-3xl font-bold text-stone-800 dark:text-slate-100">Bức Tranh Tổng Quan 8 Hòn Đảo tại MARKIGAI</h2>
        </div>

        <p className="text-stone-500 dark:text-slate-400 mb-8 max-w-4xl text-base leading-relaxed">
          Để không bị lạc lối giữa biển thông tin, bạn phải hiểu rõ <strong>La Bàn định hướng</strong>. Kiến thức của Đảo trước chính là Nguyên liệu để AI giải bài toán ở Đảo sau. <br />Ví dụ: Không thể lên Kế hoạch Content (Đảo 4) nếu chưa có Key Message cắm chốt (Đảo 3). <br />Tuy nhiên nếu Thuyền trưởng đã biết phần nào, hoàn toàn có thể lướt qua cho vui. À, nếu có phần nào chưa "ngon" thì báo tôi ngay nha, rất mong được chỉ giáo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line on Desktop */}
          <div className="hidden lg:block absolute top-[120px] left-8 right-8 h-0.5 bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-sky-500/20 z-0"></div>

          {islandsInfo.map((island) => (
            <div key={island.id} className={`relative z-10 flex flex-col p-6 rounded-2xl border backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-lg ${island.bgColor}`}>
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-white/50 dark:bg-[#0A0A0A]/50 ${island.color}`}>
                  <island.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-black text-stone-500 dark:text-slate-500 bg-stone-100 dark:bg-slate-900/50 px-2 py-1 rounded-md">
                  ĐẢO {island.id}
                </span>
              </div>
              <h3 className={`text-lg font-bold mb-3 ${island.color}`}>{island.name}</h3>
              <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed flex-grow">
                {island.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hướng dẫn tương tác Nami */}
      <div className="bg-stone-100 dark:bg-[#1B2332]/50 border border-stone-300 dark:border-slate-700/80 rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] group-hover:bg-indigo-500/20 transition-all duration-700"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-indigo-500 flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(99,102,241,0.4)]">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-800 dark:text-slate-100">Hoa Tiêu Nami - Trợ Thủ AI 24/7</h2>
              <p className="text-indigo-500 dark:text-indigo-300 mt-1 font-medium">Bí kíp học cùng AI trong Đại Hải Trình</p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-stone-600 dark:text-slate-300 mt-8 space-y-6">
            <p>
              Góc dưới cùng bên phải màn hình luôn có sự hiện diện của <strong>AI Nami</strong>. Thay vì phải copy/paste ra ChatGPT ở tab khác, bạn có thể gọi Nami ngay trên hệ thống. Nami đã được "nhập liệu" toàn bộ bí mật của 8 Đảo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-[#0A0A0A]/60 p-5 rounded-xl border border-stone-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                  <strong className="text-stone-700 dark:text-slate-200">Ví dụ Prompt Hỏi Lý thuyết</strong>
                </div>
                <p className="text-sm text-stone-500 dark:text-slate-400 line-clamp-3 italic">
                  "Nami ơi, tôi đang đọc Đảo 3 nhưng nghe định nghĩa Phễu TOFU MOFU BOFU rối rắm quá. Bạn hãy giải thích lại rạch ròi bằng ví dụ bán son môi xem nào."
                </p>
              </div>

              <div className="bg-white dark:bg-[#0A0A0A]/60 p-5 rounded-xl border border-stone-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                  <strong className="text-stone-700 dark:text-slate-200">Ví dụ Prompt Xin Bài Tập Riêng</strong>
                </div>
                <p className="text-sm text-stone-500 dark:text-slate-400 italic">
                  "Áp dụng Workflow AI ở Phần 2 của Đảo 4 (Content Plan). Tôi đang mở quán Bò Né vỉa hè vốn 30 triệu. Cậu viết cho tôi bộ Keyword Pillars theo công thức Đảo 4 nhé!"
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-500/10 border-l-4 border-indigo-500 rounded-r-lg">
              <p className="text-indigo-700 dark:text-indigo-200 m-0">
                <strong>Mẹo:</strong> Nami không chỉ biết lý thuyết. Nami là người thiết kế hệ thống này nên cô ấy thuộc lòng <strong>Mã Prompt</strong> trong các Case Study. Bạn cứ ra lệnh đổi nội dung Case sang ngành nghề của bạn, Nami sẽ tuôn ra kết quả ngay lập tức.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
