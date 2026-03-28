"use client";

import { useState, FormEvent } from 'react';
import { Send, MessageSquare, Compass, Anchor, ChevronLeft, ChevronRight } from 'lucide-react';

// Tạo sẵn bộ dữ liệu giả ngẫu nhiên 50 bài để làm ví dụ
const generateDummyMessages = () => {
  const messages = [];
  const names = ["Roronoa Zoro", "Nami Hoa Tiêu", "Sanji Chân Đen", "Usopp Xạ Thủ", "Chopper Bác Sĩ", "Robin Khảo Cổ"];
  const dates = ["Hôm qua", "2 ngày trước", "1 tuần trước", "1 tháng trước"];
  const contents = [
    "Khóa học quá hay, giúp mình hiểu rõ về chân dung khách hàng thật sự là gì!",
    "Chỉ mất 2 ngày để học hết Đảo Khởi Nguyên, cảm ơn Thuyền Trưởng.",
    "Làm sao để liên kết Make.com với Zalo OA được ạ? Trạm MarTech ảo diệu quá.",
    "Vừa ra đơn nhờ áp dụng Mô hình AIDA trong Content lúc sáng nay.",
    "Khái niệm LTV và CAC thực sự thay đổi cách mình chi tiền chạy Ads.",
    "Từ giờ không thèm quan tâm dăm ba cái View ảo Vanity Metrics nữa.",
    "Màu sắc Visual Design làm đẹp quá, đọc cả ngày không chán mắt.",
    "Bounty của mình tăng lên 50tr Beri rồi, đã quá!"
  ];

  for (let i = 1; i <= 48; i++) {
    messages.push({
      id: i + 3, // Bắt đầu từ 4 vì ta có 3 bài ghim mẫu
      name: names[Math.floor(Math.random() * names.length)],
      date: dates[Math.floor(Math.random() * dates.length)],
      message: contents[Math.floor(Math.random() * contents.length)],
    });
  }

  // Trộn thêm 3 bài mẫu lên trên cùng
  return [
    {
      id: 1,
      name: "Thợ Săn Tiền Thưởng 9x",
      date: "Vừa xong",
      message: "Em thích nhất lúc đọc về Tâm lý Mua Hàng ở Đảo Khởi Nguyên. Thật sự khóa học đã khai sáng em, bỏ được tật viết văn rườm rà!",
    },
    {
      id: 2,
      name: "Sanji Nấu Phở",
      date: "3 tiếng trước",
      message: "Mình đang kẹt ở tư duy xây phễu Marketing TOFU-MOFU, cám ơn Thuyền trưởng đã giải thích bằng cách ví von như tiệm phở xóm. Mình đã áp dụng và ra đơn đầu tiên trong hôm nay 🏴‍☠️🔥",
    },
    {
      id: 3,
      name: "Hoa Tiêu Lạc Đường",
      date: "Hôm qua",
      message: "Cho mình hỏi cái vụ Make.com ở đảo MarTech cài đặt báo tin nhắn Zalo thì có cần phải mua gói nâng cấp Pro không ạ?",
    },
    ...messages
  ];
};

const initialMessages = generateDummyMessages();

export default function ContactBoard() {
  const [messages, setMessages] = useState(initialMessages);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // State for form
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputName.trim() || !inputMessage.trim()) return;

    const newMsg = {
      id: Date.now(),
      name: inputName,
      date: "Vừa gửi",
      message: inputMessage
    };

    // Đẩy tin nhắn mới lên đầu
    setMessages([newMsg, ...messages]);

    // Xóa trắng form
    setInputName("");
    setInputMessage("");

    // Tự động nhảy về trang 1 để xem tin nhắn mới
    setCurrentPage(1);
  };

  const totalPages = Math.min(5, Math.ceil(messages.length / itemsPerPage));

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMessages = messages.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-4 bg-blue-900/20 rounded-full mb-6 text-blue-400 border border-blue-800/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <MessageSquare className="w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-4 tracking-tight">Trạm Denden Mushi</h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Nơi để lại lời nhắn ẩn danh cho Thuyền Trưởng. Hãy xem những tờ thư trôi dạt trên biển của các thành viên khác nhé! Êi mà có lẫn mấy tờ quảng cáo thì bỏ qua nha, biển rộng mà.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Box Nhập Tin Nhỏ Lại */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-6 sticky top-24">
            <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-500" />
              Viết Thư Gửi Đi
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-400 mb-2">
                  Bí danh / Biệt hiệu
                </label>
                <input
                  type="text"
                  id="name"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-slate-700 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-slate-200 placeholder-slate-600 text-sm"
                  placeholder="VD: Hải Tặc Mũ Rơm"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-400 mb-2">
                  Nội dung truyền tin
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-black border border-slate-700 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none text-slate-200 placeholder-slate-600 text-sm"
                  placeholder="Viết cảm nghĩ của bạn..."
                  required
                />
              </div>

              <div className="bg-black/50 p-3 rounded-xl border border-slate-800 flex items-start gap-3">
                <div className="mt-0.5">
                  <input type="checkbox" id="human" className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-500 focus:ring-blue-500 focus:ring-offset-slate-900 cursor-pointer" required />
                </div>
                <label htmlFor="human" className="text-xs text-slate-400 cursor-pointer">
                  Tôi là Thủy Thủ thật.
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-900/20 transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                Gửi vào bưu cục
              </button>
            </form>
          </div>
        </div>

        {/* Các Bức Thư Cổ Bên Phải */}
        <div className="lg:col-span-2 flex flex-col h-[800px]">
          <div className="flex justify-between items-center mb-4 flex-shrink-0">
            <h3 className="text-xl font-bold text-slate-200">Nhật Ký Hành Trình</h3>
            <span className="text-sm px-3 py-1 bg-slate-800 text-slate-400 rounded-full border border-slate-700">Trang {currentPage} / {totalPages}</span>
          </div>

          <div className="space-y-4 overflow-y-auto flex-grow pr-2 pb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {currentMessages.map((msg) => (
              <div
                key={msg.id}
                className="relative bg-[#fdf8eab3] backdrop-blur-sm p-6 sm:p-8 rounded-[2px] shadow-sm transform transition-all border-[#d1baa2] border overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                {/* Ancient letter effect elements */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-black transform rotate-45 translate-x-4 -translate-y-4 shadow-inner z-10" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none mix-blend-multiply" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4 border-b border-[#c8aa86] pb-3">
                    <div className="flex items-center gap-2 text-[#5a4634]">
                      <Anchor className="w-4 h-4" />
                      <span className="font-bold underline decoration-2 underline-offset-4 decoration-[#c8aa86]">{msg.name}</span>
                    </div>
                    <span className="text-sm font-medium text-[#876e53] italic">
                      {msg.date}
                    </span>
                  </div>

                  <p className="text-[#3a2d20] leading-relaxed font-serif text-lg">
                    "{msg.message}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-4 mt-6 flex-shrink-0 border-t border-slate-800 pt-6">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Trang trước
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors font-medium text-sm
                    ${currentPage === idx + 1 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors"
            >
              Tiếp theo
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
