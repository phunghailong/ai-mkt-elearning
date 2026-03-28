import { Target } from 'lucide-react';

export const island3 = {
  id: 3,
  title: "#3: Đảo Chiến Lược",
  slug: "dao-chien-luoc",
  icon: Target,
  description: `<div class="font-bold text-[#e8dcc7] mb-2 border-b border-[#4a3b2c] pb-1">Tổng Bộ Chiến Lược</div>
  <ul class="space-y-1.5 list-none text-[13px] mt-2">
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Bản đồ Marketing Plan</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Chiến Lược Phễu (Funnel)</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Bài Toán Ngân Sách Marketing</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Đo Lường: KPI & S.M.A.R.T</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Ứng dụng AI Lập Master Action Plan</li>
  </ul>`,
  color: "from-stone-700 to-stone-600",
  videoUrl: "",
  toc: [
    { id: 'theory-sep', title: '— Phần 1: Lý Thuyết Chiến Lược —' },
    { id: 'marketing-plan', title: '3.1 Bản Đồ Chỉ Huy: Marketing Plan 1 Trang' },
    { id: 'funnel-strategy', title: '3.2 Chiến Lược Phễu (Funnel): Mồi Nhử & Cắn Câu' },
    { id: 'budget-allocation', title: '3.3 Bài Toán Chia Cơm: Ngân Sách Marketing' },
    { id: 'kpi-metrics', title: '3.4 La Bàn Đo Lường: KPI & S.M.A.R.T' },
    { id: 'ai-sep', title: '— Phần 2: Ứng Dụng AI —' },
    { id: 'ai-workflow-strategy', title: '3.5 Ứng dụng AI Lập Master Action Plan' },
    { id: 'ai-case-study', title: '3.6 Thực Chiến: 2 Case Study Ngành VN' }
  ],
  contentHtml: `
    <div class="space-y-12">
      <p class="text-lg leading-relaxed text-slate-300">- Thực thi là giải quyết câu hỏi: 'Làm thế nào?' (How). <br><em>Ví dụ: Người thợ (đầu bếp) tập trung vào việc làm sao để sợi mì dai nhất, nước dùng đậm nhất.</em> <br>- Chiến lược là trả lời câu hỏi: 'Tại sao làm?' và 'Làm cái gì để thắng?' (Why & What). <br><em>Ví dụ: Chiến lược gia (chủ nhà hàng) tập trung vào việc tại sao lại mở quán, bán cho ai, bán ở đâu, giá bao nhiêu, làm sao để có lãi.</em> <br>=> Nhìn ra nhu cầu ẩn giấu của thị trường và biến nó thành một kế hoạch kinh doanh có lãi chính là bản lĩnh của người cầm lái. <br>Cùng khai mở tầm nhìn chiến lược tại đây.</p>

      <div class="bg-rose-950/20 border border-rose-500/30 p-6 rounded-xl mt-6 mb-4">
        <h4 class="text-rose-400 font-bold text-lg mb-4 flex items-center gap-2">
          <span>⚠️</span> Giải Mã Từ Vựng: 3 Cấp Độ Mà 90% Dân Marketing Đang Dùng Nhầm
        </h4>
        <p class="text-slate-300 text-sm mb-4 italic">Chiến lược, Kế hoạch, Chiến dịch là 3 thứ khác nhau hoàn toàn. Dùng nhầm = Ra lệnh sai = Đội quân đánh lạc hướng!</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div class="bg-[#1B2332] p-4 rounded-xl border border-rose-500/20">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🗓️</span>
              <strong class="text-rose-400 text-base">Chiến lược (Strategy)</strong>
            </div>
            <p class="text-slate-500 text-xs uppercase font-bold mb-1 tracking-wider">Đại cục dài hạn • 1–3 năm</p>
            <p class="text-slate-300 leading-relaxed">Đường lối lớn của Tổng Tư lệnh. Định hướng toàn bộ con tàu sẽ đi theo hướng nào trong năm tới.</p>
            <p class="text-rose-300 text-xs italic mt-2">Ví dụ: "Chuyển đổi từ Bán thô sang Bán dịch vụ Phần mềm cao cấp cho SME."</p>
          </div>
          <div class="bg-[#1B2332] p-4 rounded-xl border border-amber-500/20">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">🗺️</span>
              <strong class="text-amber-400 text-base">Kế Hoạch (Marketing Plan)</strong>
            </div>
            <p class="text-slate-500 text-xs uppercase font-bold mb-1 tracking-wider">Bản đồ thực thi • Năm / Quý</p>
            <p class="text-slate-300 leading-relaxed">Bản đồ chi tiết biến Chiến lược thành hành động. Có KPI, Ngân sách %, Kênh phân phối, Thông điệp cốt lõi.</p>
            <p class="text-amber-300 text-xs italic mt-2">Ví dụ: "Kế hoạch Q3: 200 khách dùng thử, ngân sách 150tr, kênh chính LinkedIn + Demo Call."</p>
          </div>
          <div class="bg-[#1B2332] p-4 rounded-xl border border-emerald-500/20">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">⚡</span>
              <strong class="text-emerald-400 text-base">Chiến Dịch (Campaign)</strong>
            </div>
            <p class="text-slate-500 text-xs uppercase font-bold mb-1 tracking-wider">Mũi dùi ngắn hạn • 1–3 tháng</p>
            <p class="text-slate-300 leading-relaxed">Một đợt tấn công tập trung hỏa lực vào 1 mục tiêu cụ thể. Phục vụ Kế hoạch lớn hơn.</p>
            <p class="text-emerald-300 text-xs italic mt-2">Ví dụ: "Chiến dịch 'Back to School' tháng 9: Flash sale 48h, ưu đãi dành riêng cho Học sinh/Sinh viên."</p>
          </div>
        </div>
        <div class="mt-4 p-3 bg-rose-900/20 rounded-lg border border-rose-500/20 flex items-start gap-2">
          <span class="text-rose-400 text-lg">🔑</span>
          <p class="text-sm text-slate-300">Ghi nhớ: <strong class="text-white">Chiến lược</strong> nói <em>"Đi đâu"</em> → <strong class="text-white">Kế hoạch</strong> nói <em>"Đi bằng cách nào"</em> → <strong class="text-white">Chiến dịch</strong> nói <em>"Đánh vào ngày nào, bằng thứ gì"</em>. Ba thứ phải cùng một hướng mới không hỗn loạn.</p>
        </div>
      </div>

      <div id="theory-sep" class="flex items-center gap-3 mt-10 mb-8">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        <span class="px-4 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full">Phần 1 — Lý Thuyết Chiến Lược</span>
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      </div>

      <h3 id="marketing-plan" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">3.1 Bản Đồ Chỉ Huy: Marketing Plan Trên 1 Trang Giấy</h3>
      <p class="text-slate-300 mb-6">Xin đừng vẽ những bản kế hoạch dài 50 trang rồi vứt xó. Một chiến lược thực chiến xuất sắc có thể gói gọn trên 1 mặt giấy A4 bao gồm 3 khối chính (Deep Dive):</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-slate-300 mb-6">
        <div class="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-4 border-t-red-500 hover:border-red-500/30 transition-colors shadow-lg">
          <strong class="text-red-400 text-lg block mb-3 border-b border-slate-800 pb-2">1. Khối Vạch Đích (Tiền & Người)</strong>
          <p class="mb-3 text-slate-400">Nhiều Sếp/ Marketer chỉ đặt mục tiêu chung chung "Tăng doanh số", nhưng trong Marketing, phải quy đổi được Tiền thành Người:</p>
          <ul class="list-disc pl-4 space-y-2 text-slate-300">
            <li><strong class="text-slate-200">Đích kinh doanh (Business Goal):</strong> Cần thu về bao nhiêu tỷ?</li>
            <li><strong class="text-slate-200">Đích tiếp cận (Marketing Goal):</strong> Để ra tiền tỷ cần ra bao nhiêu người? Mục tiêu 300 Lead thì phải làm rõ đó là Lead chất lượng (cần tư vấn thực) thay vì vài ba cái Lead rác chạy rông.</li>
          </ul>
        </div>
        
        <div class="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-4 border-t-orange-500 hover:border-orange-500/30 transition-colors shadow-lg">
          <strong class="text-orange-400 text-lg block mb-3 border-b border-slate-800 pb-2">2. Khối Đường Đi ("Sợi chỉ đỏ")</strong>
          <p class="mb-3 text-slate-400">Trọng tâm trả lời 1 câu gãy gọn: Tại sao họ phải chọn nền tảng/sản phẩm của bạn giữa một bạt ngàn đối thủ?</p>
          <ul class="list-disc pl-4 space-y-2 text-slate-300">
            <li><strong class="text-slate-200">USP (Lợi điểm độc nhất):</strong> Đừng nói "Sản phẩm tốt nhất". Hãy nói "Tính năng duy nhất giải quyết Vấn đề X trong Y giờ đồng hồ".</li>
            <li><strong class="text-slate-200">Định vị:</strong> Bạn là ai trong tâm trí họ? (VD: Bạn là một Chuyên gia thực chiến hay Cỗ máy AI giá rẻ).</li>
          </ul>
        </div>

        <div class="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-4 border-t-amber-500 hover:border-amber-500/30 transition-colors shadow-lg">
          <strong class="text-amber-400 text-lg block mb-3 border-b border-slate-800 pb-2">3. Khối Động Cơ (Cỗ máy thực thi)</strong>
          <p class="mb-3 text-slate-400">Bản đồ tác chiến mà không chỉ định danh tướng, không ghi rõ thời hạn thì mãi là tờ vé số hết hạn.</p>
          <ul class="list-disc pl-4 space-y-2 text-slate-300">
            <li><strong class="text-slate-200">Kênh chiến thuật:</strong> Chọn mặt kênh phải dựa theo Khách hàng. Bán thuốc khớp U55 thì đừng ném lưới lên Thread City.</li>
            <li><strong class="text-slate-200">Owner (Ngưới chịu trách nhiệm):</strong> Khẩu hiệu "Tất cả cùng làm" nghĩa là "Không thằng nào làm cả". Giao tên định đoạt trên sổ rành mạch!</li>
          </ul>
        </div>
      </div>

      <div class="bg-indigo-950/30 border border-indigo-500/30 p-6 md:p-8 rounded-xl mt-8">
        <h4 class="text-indigo-400 font-bold text-xl mb-6 flex items-center gap-2 pb-3 border-b border-indigo-500/20">
          <span class="text-2xl">🧩</span> Bổ sung 3 Mảnh ghép của Kế Hoạch 10 Điểm
        </h4>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-[#1B2332] p-5 rounded-xl border border-slate-700/80 hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all">
            <strong class="text-slate-100 flex items-center gap-2 mb-2"><span class="text-2xl">🤝</span> A. Hậu mãi (Retention)</strong>
            <p class="text-xs text-slate-400 mb-4 block">Đừng chỉ Săn bắn, người làm chủ cuộc chơi phải "Nuôi dưỡng":</p>
            <ul class="text-sm space-y-3 text-slate-300">
              <li><span class="text-indigo-400 font-semibold block mb-0.5">LTV (Giá trị vòng đời):</span> Kế hoạch biến khách mua 1 lần thành Fan cuồng.</li>
              <li><span class="text-indigo-400 font-semibold block mb-0.5">Referral (Giới thiệu):</span> Kích thích khách cũ dắt khách mới lên tàu.</li>
            </ul>
          </div>

          <div class="bg-[#1B2332] p-5 rounded-xl border border-slate-700/80 hover:border-rose-500/50 hover:shadow-[0_0_15px_rgba(244,63,94,0.2)] transition-all">
            <strong class="text-slate-100 flex items-center gap-2 mb-2"><span class="text-2xl">🌪️</span> B. Ma trận Rủi ro</strong>
            <p class="text-xs text-slate-400 mb-4 block">Chuẩn bị Phương Án B giúp Thuyền trưởng luôn ngủ ngon:</p>
            <ul class="text-sm space-y-3 text-slate-300">
              <li><span class="text-rose-400 font-semibold block mb-0.5">FB khóa TK Quảng cáo?</span> Thủ sẵn Zalo/Email dự phòng. Mua trước BM.</li>
              <li><span class="text-amber-500 font-semibold block mb-0.5">Đối thủ xả hàng phá giá?</span> Đẩy mạnh gói Dịch vụ chăm sóc sau bán. Không đua rớt giá.</li>
            </ul>
          </div>

          <div class="bg-[#1B2332] p-5 rounded-xl border border-slate-700/80 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all">
            <strong class="text-slate-100 flex items-center gap-2 mb-2"><span class="text-2xl">🤖</span> C. Trợ lực AI</strong>
            <p class="text-xs text-slate-400 mb-4 block">Marketing x AI là vũ khí siêu việt trong thời đại mới:</p>
            <ul class="text-sm space-y-3 text-slate-300">
              <li><span class="text-emerald-400 font-semibold block mb-0.5">Nghiên cứu:</span> Perplexity/Gemini soi và bóc điểm yếu đối thủ.</li>
              <li><span class="text-emerald-400 font-semibold block mb-0.5">Nội dung:</span> GPT/Claude thiết kế 30 ngày Content Video.</li>
              <li><span class="text-emerald-400 font-semibold block mb-0.5">Đo lường:</span> Đoán doanh thu qua AI Analytics.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-14 mb-5 flex items-center gap-3">
        <h4 class="text-2xl font-bold text-slate-100 tracking-wider">The Master Table - Demo</h4>
        <span class="px-3 py-1 bg-amber-500/20 text-amber-500 text-[10px] uppercase font-black rounded-full border border-amber-500/30 tracking-widest leading-none">Bảng Vận Hành</span>
      </div>
      <div class="overflow-x-auto mb-6 shadow-[0_0_20px_rgba(0,0,0,0.4)] rounded-xl border border-slate-700/50">
        <table class="w-full text-sm text-left text-slate-300 border-collapse">
          <thead class="bg-[#121826] text-slate-300 border-b border-slate-700">
            <tr>
              <th class="px-5 py-4 font-bold w-[12%]">Giai đoạn</th>
              <th class="px-5 py-4 font-bold w-[20%] text-amber-500">Mục tiêu (SMART)</th>
              <th class="px-5 py-4 font-bold w-[28%]">Chiến lược (How to win)</th>
              <th class="px-5 py-4 font-bold w-[25%]">Hành động & Ngân sách</th>
              <th class="px-5 py-4 font-bold w-[15%] text-indigo-400">Công cụ AI trợ lực</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60">
            <tr class="bg-slate-900/30 hover:bg-slate-800/80 transition-colors">
              <td class="px-5 py-4">
                <span class="font-bold text-slate-200 block mb-1">ToFu</span>
                <span class="text-[11px] text-slate-500 uppercase font-semibold">Trước bán</span>
              </td>
              <td class="px-5 py-4">
                <span class="inline-block bg-slate-800 text-slate-200 px-2 py-1 rounded text-xs border border-slate-700 font-semibold shadow-sm mb-1">Thu hút 10.000 Traffic</span>
              </td>
              <td class="px-5 py-4 text-slate-400">Đánh diện rộng vào <strong class="text-slate-200">Nỗi đau thao thức Mất ngủ</strong></td>
              <td class="px-5 py-4">
                <ul class="space-y-1.5 text-[13px]">
                  <li class="flex items-start gap-1"><span class="text-blue-400 mt-0.5">▪</span> Ads Video FB (5tr)</li>
                  <li class="flex items-start gap-1"><span class="text-blue-400 mt-0.5">▪</span> Thuê 2 Micro-KOL</li>
                </ul>
              </td>
              <td class="px-5 py-4 text-indigo-300 text-[13px]">Midjourney tạo hình, ChatGPT viết kịch bản</td>
            </tr>
            <tr class="bg-slate-900/20 hover:bg-slate-800/80 transition-colors">
              <td class="px-5 py-4">
                <span class="font-bold text-amber-500 block mb-1">MoFu - BoFu</span>
                <span class="text-[11px] text-slate-500 uppercase font-semibold">Trong bán</span>
              </td>
              <td class="px-5 py-4">
                <span class="inline-block bg-amber-900/40 text-amber-400 px-2 py-1 rounded text-xs border border-amber-500/30 font-bold shadow-sm mb-1">Chốt 350 Đơn Hàng Mới</span>
              </td>
              <td class="px-5 py-4 text-slate-400">Tặng Quả Khủng gây cảm giác <strong class="text-rose-400">Khan hiếm 24 Giờ</strong></td>
              <td class="px-5 py-4">
                <ul class="space-y-1.5 text-[13px]">
                  <li class="flex items-start gap-1"><span class="text-amber-500 mt-0.5">▪</span> Đội Telesale Sói già 5 Người</li>
                  <li class="flex items-start gap-1"><span class="text-amber-500 mt-0.5">▪</span> Chatbot Zalo kịch bản AI</li>
                </ul>
              </td>
              <td class="px-5 py-4 text-indigo-300 text-[13px]">AI Script Generator dọn câu thoại Chốt Sale</td>
            </tr>
            <tr class="bg-slate-900/30 hover:bg-slate-800/80 transition-colors">
              <td class="px-5 py-4">
                <span class="font-bold text-indigo-400 block mb-1">Retention</span>
                <span class="text-[11px] text-slate-500 uppercase font-semibold">Sau bán</span>
              </td>
              <td class="px-5 py-4">
                <span class="inline-block bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded text-xs border border-indigo-500/30 font-semibold shadow-sm mb-1">20% Khách Referral</span>
              </td>
              <td class="px-5 py-4 text-slate-400">Tặng Thẻ <strong class="text-indigo-300">Thành Viên Đặc Quyền</strong> duy nhất Hành tinh</td>
              <td class="px-5 py-4">
                <ul class="space-y-1.5 text-[13px]">
                  <li class="flex items-start gap-1"><span class="text-indigo-400 mt-0.5">▪</span> Chuỗi Email Drip Tự động</li>
                  <li class="flex items-start gap-1"><span class="text-indigo-400 mt-0.5">▪</span> SMS Chúc mừng nạp sinh nhật</li>
                </ul>
              </td>
              <td class="px-5 py-4 text-indigo-300 text-[13px]">AI CRM Phân Loại Dữ liệu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex items-start gap-4 p-5 bg-gradient-to-r from-slate-900 to-amber-900/20 rounded-xl border border-amber-500/30 mb-8 shadow-md">
        <div class="bg-amber-500/20 p-2 rounded-lg text-amber-500"><span class="text-2xl block">💡</span></div>
        <div>
          <strong class="text-amber-400 text-lg block mb-1">Lời khuyên cho "Đại Hải Trình" của bạn:</strong>
          <p class="text-sm text-slate-300 leading-relaxed italic">Marketing Plan không cần phải hoàn hảo ngay từ đầu. Hãy nhớ kim chỉ nam: <strong>"Một bản kế hoạch 80% được thực hiện tốt, mang đi nã đạn ra biển khơi nhanh chóng, còn lớn lao hơn gấp vạn lần một bản kế hoạch 100% nằm yên trong ngăn kéo Tòa Tháp."</strong></p>
        </div>
      </div>

      <h3 id="funnel-strategy" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">3.2 Chiến Lược Phễu Bán Hàng (Marketing Funnel): Mồi Nhử & Cắn Câu</h3>
      <p class="text-slate-300 mb-4 inline-block font-semibold border-b border-orange-500 pb-1">Đừng bao giờ Xin Cưới Ngay Lần Đầu Trò Chuyện!</p>
      <p class="text-slate-300 text-sm mb-4">Mọi doanh nghiệp lụi bại đều vì lỗi này: Chạy Quảng Cáo 1 Tỷ Trực Tiếp Bán Gói Khám Chữa Răng 50 Triệu Đồng cho một Người Lạ Hoắc qua đường. Không ai mua cả! Hành trình bắt buộc phải đi rớt từ Miệng Phễu xuống Đáy Phễu. <em>(Ah, đoạn này lại cấn cấn đúng ko? Sao Tiktok Video bán hàng ầm ầm luôn? Từ từ bên dưới nhé):</em></p>

      <div class="bg-black/40 border border-slate-800 rounded-2xl p-6 shadow-inner mb-6">
         <ul class="space-y-4 text-sm text-slate-300">
            <li class="flex flex-col md:flex-row items-start gap-4">
             <div class="flex-shrink-0 w-40 pt-1"><div class="h-10 px-2 bg-gradient-to-r from-red-600 to-red-400 rounded-lg flex items-center justify-center font-bold text-white shadow-lg w-full text-center text-sm">TOFU<br/>(Nhận Thức)</div></div>
             <div class="flex-1 text-sm"><strong class="text-red-400">1. Đỉnh Phễu Lôi Kéo (Traffic):</strong> Mục đích chỉ để Khách Hàng biết Cửa Hàng tồn tại. <br/><em>Ví dụ: Đăng Video Tiktok Giải Trí hài hước về việc Nhổ Răng Khôn bị sưng má tấu hài. Không dính dáng xíu nào Mùi Tiền.</em></div>
           </li>
           <li class="flex flex-col md:flex-row items-start gap-4">
             <div class="flex-shrink-0 w-40 pt-1"><div class="h-10 px-2 bg-gradient-to-r from-amber-600 to-amber-400 rounded-lg flex items-center justify-center font-bold text-white shadow-lg w-full text-center text-sm md:w-[90%] mx-auto md:mx-0">MOFU<br/>(Cân Nhắc)</div></div>
             <div class="flex-1 text-sm"><strong class="text-amber-400">2. Giữa Phễu Nuôi Dưỡng (Lead Gen):</strong> Đưa ra một "Miếng Mồi Găm Vô Lưới". <br/><em>Ví dụ: Tặng Suất Cạo Vôi Răng 0 Đồng. Điều kiện: Khách để lại Số Điện Thoại & Tên (Lead). Tại đây, chuyên môn Bác Sĩ gây Sốc Khách bằng thái độ Phục Vụ Tử Tế vượt Giá Tiền.</em></div>
           </li>
           <li class="flex flex-col md:flex-row items-start gap-4">
             <div class="flex-shrink-0 w-40 pt-1"><div class="h-10 px-2 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg flex items-center justify-center font-bold text-white shadow-lg w-full text-center text-sm md:w-[80%] mx-auto md:mx-0">BOFU<br/>(Chuyển Đổi)</div></div>
             <div class="flex-1 text-sm"><strong class="text-emerald-400">3. Đáy Phễu Chốt Đơn (Conversion):</strong> Thu Hoạch Hàng Siêu Lợi Nhuận.<br/><em>Ví dụ: Sau Cạo Vôi 1 Tuần, Tổng Đài gọi Mời Khách Hàng tham gia Gói Phục Hình Răng Sứ với ưu đãi Cuối Cùng. Lúc này Tỷ Lệ Mua Tăng X3 Lần vì Niềm Tin đã Đúc Sẵn Ở Lớp Giữa!</em></div>
           </li>
         </ul>
      </div>

      <div class="bg-indigo-900/20 border border-indigo-500/30 p-6 rounded-xl mt-8 space-y-4 mb-4">
        <h4 class="text-indigo-400 font-bold text-xl mb-2 flex items-center gap-2">
          <span>⚡</span> Góc nhìn mở rộng: "Mưa dầm thấm lâu" (Deep Funnel) vs "Đánh nhanh thắng nhanh" (Flat Funnel)
        </h4>
        <p class="text-slate-300 italic mb-4">
          Cái phễu TOFU-MOFU-BOFU truyền thống trên thường áp dụng cho Sản phẩm giá trị cao (High-Involvement) - nơi khách hàng cần rất nhiều niềm tin trước khi "xuống tiền". Nhưng với TikTok Shop hay Short Video, cuộc chơi đã thay đổi!
        </p>

        <div class="space-y-4">
          <div>
            <strong class="text-slate-100 text-lg block mb-1">1. Trình độ Quyết định (Sự khác biệt cốt lõi)</strong>
            <p class="text-slate-300">Không phải sản phẩm nào cũng cần phễu dài dằng dặc. Nó phụ thuộc vào mức độ rủi ro khách hàng cảm nhận:</p>
            <ul class="list-disc pl-5 mt-2 space-y-2 text-slate-400">
              <li><strong class="text-slate-200">Giá thấp/Cảm hứng (Low-Involvement):</strong> Ốp lưng 50k, khô gà. Khách không cần "nuôi dưỡng" 7 ngày. Phễu bị nén lại (Collapsed Funnel) chỉ trong 30-60 giây của video.</li>
              <li><strong class="text-slate-200">Giá trị cao/Kỹ thuật (High-Involvement):</strong> Gói nha khoa cao cấp 50 triệu. Chốt Sale ngay trong 60 giây tỉ lệ rớt là 99%. Lúc này, cái phễu sâu 3 tầng ở trên là Bắt buộc!</li>
            </ul>
          </div>

          <div class="pt-2">
            <strong class="text-slate-100 text-lg block mb-1">2. TikTok không xóa bỏ phễu, nó chỉ "Nén" phễu</strong>
            <p class="text-slate-300">Ngay cả khi mua hàng qua Reels/TikTok trong 1 phút, não người vẫn đi qua đủ 3 bước, nhưng với tốc độ "ánh sáng":</p>
            <ul class="list-disc pl-5 mt-2 space-y-2 text-slate-400">
              <li><strong class="text-red-400">TOFU (3s đầu):</strong> Cái hook (mồi nhử) video khiến họ khựng lại. <em class="text-slate-500">(Nhận thức)</em></li>
              <li><strong class="text-amber-400">MOFU (15s tiếp):</strong> Thấy đồ ăn quá mọng nước, áo quá đẹp v.v. <em class="text-slate-500">(Cân nhắc)</em></li>
              <li><strong class="text-emerald-400">BOFU (10s cuối):</strong> Thấy deal hời sốc, giỏ hàng vàng nhấp nháy. <em class="text-slate-500">(Chốt đơn)</em></li>
            </ul>
            <p class="text-slate-300 mt-2 font-medium">=> Đây không phải là "Vô phễu", mà là "Phễu tức thì" (Instant Funnel).</p>
          </div>

          <div class="pt-2">
            <strong class="text-slate-100 text-lg block mb-1">3. Khi nào Phễu phức tạp trở thành "Gánh nặng"?</strong>
            <p class="text-slate-300">Bán đồ vài chục, vài trăm nghìn mà bắt khách: <em class="text-slate-400">Để email -> Xem Zoom 2 tiếng -> Đợi sale gọi</em>, thì bạn đang tự th/ắt cổ chính mình. Sai lầm lớn nhất là Phức tạp hóa những thứ đơn giản!</p>
            <p class="text-amber-400 font-bold mt-2">Nguyên tắc: Giá trị sản phẩm càng thấp, hành trình mua hàng càng phải mượt & ngắn.</p>
          </div>
        </div>

        <div class="overflow-x-auto mt-6">
          <table class="w-full text-sm text-left text-slate-300 border-collapse border border-slate-700/50 rounded-lg hidden sm:table">
            <thead class="bg-indigo-950/50 text-indigo-300">
              <tr>
                <th class="px-4 py-3 border border-slate-700/50 w-1/4">Đặc điểm</th>
                <th class="px-4 py-3 border border-slate-700/50 w-1/3">Phễu Sâu (Mưa dầm thấm lâu)</th>
                <th class="px-4 py-3 border border-slate-700/50 w-1/3">Phễu Nén (Đánh nhanh thắng nhanh)</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-slate-900/40 hover:bg-slate-900/60 transition-colors">
                <td class="px-4 py-3 border border-slate-700/50 font-semibold text-slate-400">Sản phẩm</td>
                <td class="px-4 py-3 border border-slate-700/50">BĐS, Bảo hiểm, B2B, Nha khoa,...</td>
                <td class="px-4 py-3 border border-slate-700/50">Thời trang, Tiêu dùng nhanh, Đồ ăn</td>
              </tr>
              <tr class="bg-slate-900/20 hover:bg-slate-900/60 transition-colors">
                <td class="px-4 py-3 border border-slate-700/50 font-semibold text-slate-400">Thời gian</td>
                <td class="px-4 py-3 border border-slate-700/50">Vài tuần đến vài tháng</td>
                <td class="px-4 py-3 border border-slate-700/50">Vài chục giây đến vài phút</td>
              </tr>
              <tr class="bg-slate-900/40 hover:bg-slate-900/60 transition-colors">
                <td class="px-4 py-3 border border-slate-700/50 font-semibold text-slate-400">Kênh chính</td>
                <td class="px-4 py-3 border border-slate-700/50">Webinar, Zalo/Email Drip, Telesale</td>
                <td class="px-4 py-3 border border-slate-700/50">Tiktok Shop, Reels, Livestream</td>
              </tr>
              <tr class="bg-slate-900/20 hover:bg-slate-900/60 transition-colors">
                <td class="px-4 py-3 border border-slate-700/50 font-semibold text-slate-400">Yếu tố Chốt</td>
                <td class="px-4 py-3 border border-slate-700/50">Niềm tin, Kiến thức chuyên gia (Authority)</td>
                <td class="px-4 py-3 border border-slate-700/50">Cảm xúc bùng nổ (FOMO), Rẻ, Tiện (Shoppertainment)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 id="budget-allocation" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">3.3 Bài Toán Chia Cơm: Phân Bổ Ngân Sách Marketing (Budgeting)</h3>
      <p class="text-slate-300 mb-4">Doanh nghiệp mới thường đốt 100% Cạn Vốn vào Quảng Cáo Bán Hàng (Sale Ads) trên FB, để rồi lúc Giông Bão, FB Khoá Tài Khoản -> Trắng Tay Công Ty Nghỉ Chơi. Bạn cần Quy Tắc Danh Mục Đầu Tư!</p>
      
      <div class="bg-blue-900/10 border-l-4 border-blue-600 p-6 rounded-r-xl mt-6">
         <h4 class="text-blue-400 font-bold text-xl mb-3">Quy Tắc Lõi 70 - 20 - 10 Chống Phá Sản</h4>
         <div class="space-y-4 text-slate-300 text-sm">
            <p><strong class="text-white">✅ 70% Ngân Sách "Nồi Cơm Hiện Tại" (Now):</strong> Đổ vào các Kênh Đã Chững Minh Chắc Cú Ra Tiền Sáng Hôm Sau Rõ Ràng. (VD: Facebook Ads Bán Sản phẩm Đang Lướt Hot Trend, Google Keyword Mua Hàng). Giới đầu tư gọi là Cash Cow (Con Bò Đua Sữa Mới Ra).</p>
            <p><strong class="text-white">🛠 20% Ngân Sách "Máy Bơm Khởi Nguồn Tương Lai" (Next):</strong> Đầu tư Trồng Rau Ăn Sang Năm. Trích Quỹ thuê Thuật Sĩ Viết Bài SEO Nuôi Web Dài Hạn, Nhờ Xây Cất Trạm Kênh Youtube Tri Thức. Dù Hôm Nay Trắng Mắt Chưa Thấy Đơn, 6 Tháng Tiếp Nó Mới Nổi Lên Trục Vét Lưới Lãi Bằng Bông!</p>
            <p><strong class="text-white">🚀 10% Ngân Sách "Xổ Số Đột Phá Điên Rồ" (New):</strong> Ném vào Lồng Thử Thử Nghiệm Game Lạ Thú, Công Cụ AI Thuê Trợ Lý Robot Tạo Giọng Khủng Bố, Hoặc Đầu Tư Rải Cho 1 TikToker Lạ Hoắc Đập Hộp Review Đầy Rủi Ro... Đốt mất thì Nhạc Nhỏ, Mà Trúng Phát Lên Đám Đỉnh Mây!</p>
         </div>
      </div>

      <div class="mt-8">
        <h4 class="text-xl font-bold text-amber-500 mb-4 flex items-center gap-2">
          <span>⛽</span> 4 Chiến thuật Nạp năng lượng (Tính Ngân Sách) cho Tàu
        </h4>
        <div class="grid md:grid-cols-2 gap-6 text-slate-300">
          
          <div class="bg-slate-900/50 border border-slate-700/50 p-5 rounded-xl hover:border-amber-500/50 transition-colors">
            <strong class="text-slate-100 text-lg flex items-center gap-2 mb-2">
              <span class="text-2xl">🎣</span> 1. Tính theo % Doanh thu
            </strong>
            <p class="text-sm font-semibold text-amber-400 mb-3 border-b border-slate-800 pb-2">"Nạp nhiên liệu theo lượng cá đánh bắt được" (An toàn)</p>
            <p class="text-sm mb-2">Cách phổ biến và an toàn nhất. Bạn trích tiền thu được để tái đầu tư: <strong>Ngân sách = Doanh thu mục tiêu × % Ngành</strong></p>
            <ul class="list-disc pl-5 space-y-1 text-sm text-slate-400 mb-3">
              <li><strong>B2B:</strong> 2% - 5%</li>
              <li><strong>B2C (Bán lẻ, FMCG):</strong> 5% - 10%</li>
              <li><strong>Startup/Sản phẩm mới:</strong> 12% - 20%</li>
            </ul>
            <p class="text-xs text-emerald-400 bg-emerald-900/20 p-2 rounded">✅ Ưu điểm: Đảm bảo Marketing luôn tỉ lệ thuận với sức tăng trưởng.</p>
          </div>

          <div class="bg-slate-900/50 border border-slate-700/50 p-5 rounded-xl hover:border-amber-500/50 transition-colors">
            <strong class="text-slate-100 text-lg flex items-center gap-2 mb-2">
              <span class="text-2xl">🗺️</span> 2. Theo Mục tiêu và Nhiệm vụ
            </strong>
            <p class="text-sm font-semibold text-amber-400 mb-3 border-b border-slate-800 pb-2">"Nạp đủ xăng để tới được đảo tiếp theo" (Quyết tâm)</p>
            <p class="text-sm mb-2">Tính "ngược" từ dưới lên. (Objective-and-Task). Thay vì hỏi "có bao nhiêu tiền", hãy hỏi "cần bao nhiêu tiền để đạt mục tiêu".</p>
            <ul class="list-disc pl-5 space-y-1 text-sm text-slate-400 mb-3">
              <li><strong>Xác định mục tiêu:</strong> Cần 1.000 đơn hàng.</li>
              <li><strong>Liệt kê nhiệm vụ:</strong> Chạy Ads, thuê KOLs.</li>
              <li><strong>Tính toán chi phí:</strong> 1 đơn tốn 100k Ads ➝ Cần 100 triệu.</li>
            </ul>
            <p class="text-xs text-emerald-400 bg-emerald-900/20 p-2 rounded">✅ Ưu điểm: Biết chính xác chi tiền cho cái gì, không "đốt tiền" vô định.</p>
          </div>

          <div class="bg-slate-900/50 border border-slate-700/50 p-5 rounded-xl hover:border-amber-500/50 transition-colors">
            <strong class="text-slate-100 text-lg flex items-center gap-2 mb-2">
              <span class="text-2xl">🦈</span> 3. Giá trị Vòng đời (CAC & LTV)
            </strong>
            <p class="text-sm font-semibold text-amber-400 mb-3 border-b border-slate-800 pb-2">"Đổi mồi nhỏ lấy cá lớn" (Thông minh)</p>
            <p class="text-sm mb-2">Phù hợp mô hình khách mua nhiều lần (SaaS, Khóa học...). Công thức vàng: <strong>CAC &lt; 1/3 LTV</strong>.</p>
            <ul class="list-disc pl-5 space-y-1 text-sm text-slate-400 mb-2">
              <li><strong>LTV:</strong> Lợi nhuận 1 khách hàng mang lại cả đời.</li>
              <li><strong>CAC:</strong> Chi phí tối đa để kiếm 1 khách mới.</li>
            </ul>
            <p class="text-xs text-slate-400 italic">Ví dụ: Học viên mang lại lợi nhuận 10tr/2 năm. Bạn có thể chi tới 3.3tr để kiếm 1 học viên mà vẫn lãi bền vững.</p>
          </div>

          <div class="bg-slate-900/50 border border-slate-700/50 p-5 rounded-xl hover:border-amber-500/50 transition-colors">
            <strong class="text-slate-100 text-lg flex items-center gap-2 mb-2">
              <span class="text-2xl">🔭</span> 4. Theo Đối thủ (Competitive Parity)
            </strong>
            <p class="text-sm font-semibold text-amber-400 mb-3 border-b border-slate-800 pb-2">"Nhìn thuyền bên cạnh để tăng tốc" (Phòng thủ)</p>
            <p class="text-sm mb-2">Chiến thuật "Thám báo". Dùng SimilarWeb, SpyFu xem đối thủ chi bao nhiêu để không hụt hơi.</p>
            <p class="text-sm text-slate-400 mb-3">Nếu họ phủ sóng toàn Tiktok, bạn không thể bung 1 triệu/tháng mà mơ sẽ thắng được.</p>
            <p class="text-xs text-emerald-400 bg-emerald-900/20 p-2 rounded">✅ Ưu điểm: Giữ vững vị thế trong vùng biển tranh chấp gay gắt.</p>
          </div>
          
        </div>
        
        <div class="flex items-start gap-4 mt-6 p-5 bg-[#1B2332] rounded-xl border border-slate-700">
          <div class="bg-amber-900/30 p-2 rounded-lg"><span class="text-2xl block">💡</span></div>
          <div>
            <strong class="text-amber-400 text-lg block mb-1">Lời khuyên từ Thuyền Trưởng:</strong>
            <p class="text-sm text-slate-300 leading-relaxed">Hãy luôn kết hợp <strong>Cách 1 (% Doanh thu)</strong> để có Khung số tổng an toàn trên cùng (đảm bảo không sập tiệm), và <strong>Cách 2 (Mục tiêu & Nhiệm vụ)</strong> để bóc tách ngược chi tiết phải chi tiền cho cái gì nhằm hạn chế đốt tiền mù thị giác!</p>
          </div>
        </div>
      </div>

      <h3 id="kpi-metrics" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">3.4 La Bàn Đo Lường: Thiết lập KPI & Mục tiêu S.M.A.R.T</h3>
      <p class="text-slate-300 mb-4">Đo lường nhầm mục tiêu sẽ Dẫn Quân lao vào Vách Núi. Hãy nhìn vào Chỉ Số Trọng Yếu (KPI - Key Performance Indicator) dưới góc nhìn sắc bén S.M.A.R.T.</p>
      
      <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mb-6">
         <p class="text-emerald-400 text-lg md:text-xl font-mono text-center leading-snug tracking-wider drop-shadow-lg font-bold">"THU VỀ 350 ĐƠN HÀNG TRỰC TUYẾN KỲ VỌNG (<span class="text-white">S - Cụ thể, Đo đếm được</span>) Ở KHU VỰC MIỀN NAM (<span class="text-white">A - Có tính khả thi, Thực tế</span>) TRONG VÒNG 10 NGÀY TỚI ĐÂY, VỚI NGÂN SÁCH TRƯỢT TỐI ĐA CHỈ 15 TRIỆU (<span class="text-white">T - Quản trị Khung Thời gian Rõ Ràng</span>) LÀM KPI CHỈ ĐIỂM CHUYÊN MÔN RÕ RÀNG (<span class="text-white">R - Relevant Liên Quan Tới Sự Sống Còn Của Khối Bán!</span>)"</p>
      </div>

      <div class="bg-indigo-900/20 border border-indigo-500/30 p-6 rounded-xl mt-8 space-y-6">
        <h4 class="text-indigo-400 font-bold text-xl mb-2 flex items-center gap-2">
          <span>🔬</span> Góc nhìn mở rộng: Giải phẫu La bàn S.M.A.R.T
        </h4>

        <div>
           <strong class="text-slate-100 text-lg block mb-2">1. Giải mã sâu hơn về ví dụ 350 đơn hàng</strong>
           <p class="text-slate-300 mb-2">Học viên thường hay nhầm lẫn giữa các chữ cái. Hãy bóc tách ví dụ trên thành một "bản quyết định chiến đấu":</p>
           <ul class="list-disc pl-5 space-y-2 text-slate-400">
             <li><strong class="text-emerald-400">S (Specific - Cụ thể):</strong> Không phải là "tăng doanh số", mà là "350 đơn". Cụ thể hơn nữa là ở "Khu vực miền Nam". <em class="text-slate-300">Mẹo: Càng cụ thể, đội ngũ thực thi (Content, Ads) càng dễ nhắm mục tiêu.</em></li>
             <li><strong class="text-amber-400">M (Measurable - Đo lường):</strong> Con số 350 đơn và ngân sách 15 triệu là thước đo. Bạn đang đặt ra một chỉ số CPA (Cost Per Acquisition) mục tiêu là: 15.000.000 / 350 ≈ <strong>42.857 VNĐ/đơn</strong>.</li>
             <li><strong class="text-blue-400">A (Achievable - Khả thi):</strong> Hãy nhìn vào dữ liệu quá khứ. Nếu trước đây 1 đơn hàng tốn 100k, mà giờ ép mục tiêu 42k là phi thực tế. Chữ A giúp Marketer không "ảo tưởng sức mạnh".</li>
             <li><strong class="text-rose-400">R (Relevant - Liên quan):</strong> "Liên quan tới sự sống còn của khối bán". Nếu công ty đang thừa đơn nhưng thiếu nhân viên giao hàng, thì việc chạy thêm 350 đơn là vô nghĩa. Mục tiêu phải giải quyết đúng nỗi đau hiện tại.</li>
             <li><strong class="text-purple-400">T (Time-bound - Thời hạn):</strong> 10 ngày. Nếu không chốt 10 ngày, con số 350 đơn này có thể kéo dài 1 năm, và lúc đó chi phí cố định (mặt bằng, lương) sẽ "nuốt chửng" lợi nhuận.</li>
           </ul>
        </div>

        <div class="pt-2 border-t border-indigo-500/20">
           <strong class="text-slate-100 text-lg block mb-2">2. Phân biệt Chỉ số Kết quả và Chỉ số Dẫn dắt (Lagging vs Leading)</strong>
           <p class="text-slate-300 mb-2">Trong Đại Hải Trình, Marketer cần nhìn cả 2 loại chỉ số trên la bàn:</p>
           <ul class="list-disc pl-5 space-y-2 text-slate-400">
             <li><strong class="text-slate-200">Chỉ số kết quả (Lagging):</strong> Là 350 đơn hàng. Nó xảy ra xong rồi rụng xuống mới đếm được (Quá muộn để xoay chuyển).</li>
             <li><strong class="text-slate-200">Chỉ số dẫn dắt (Leading):</strong> Là những tín hiệu tiên phong giúp đạt được 350 đơn đó (VD: Tỷ lệ click CTR, Số lượt Inbox/ngày, Tỷ lệ chốt đơn CR của sale).</li>
           </ul>
           <p class="mt-3 text-emerald-400 bg-emerald-900/20 p-3 border border-emerald-500/30 rounded inline-block">💡 <strong>Lời khuyên:</strong> Nếu sau 2 ngày (Time-bound) mà chưa nổ đơn nào, hãy nhìn ngay vào "Chỉ số dẫn dắt" (Ví dụ xem Ads có ai Comment không) để sửa sai, thay vì nhắm mắt đợi đến ngày thứ 10 mới biết mình vỡ nợ.</p>
        </div>

        <div class="bg-[#1B2332] border border-slate-700 p-5 rounded-lg mt-4 shadow-xl">
           <strong class="text-amber-500 text-lg flex items-center gap-2 mb-3 border-b border-slate-700 pb-2">
             <span>⚓</span> Lệnh triệu tập Thuyền trưởng: Checklist "Sáng mai đi làm"
           </strong>
           <p class="text-slate-300 mb-3 text-sm">Trước khi gật đầu duyệt một kế hoạch, hãy hỏi 3 câu xương máu này:</p>
           <ul class="space-y-3 text-slate-200 font-medium">
              <li class="flex items-start gap-3"><span class="text-amber-500 mt-0.5">✓</span> Con số này (Ví dụ: 350 đơn) dựa trên thông số lịch sử nào hay chỉ là "bốc thuốc" trên mây?</li>
              <li class="flex items-start gap-3"><span class="text-amber-500 mt-0.5">✓</span> Nếu ngân sách 15 triệu bị vọt xà lên 20 triệu giữa chừng, chúng ta có dũng khí dừng lại cắt máu không?</li>
              <li class="flex items-start gap-3"><span class="text-amber-500 mt-0.5">✓</span> Quỹ 10 ngày này có đâm sầm vào đợt Sale Dập Kho của đối thủ hay ngày Lễ lớn nào không?</li>
           </ul>
        </div>
      </div>

      <div id="ai-sep" class="flex items-center gap-3 mt-16 mb-8">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        <span class="px-4 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest rounded-full">Phần 2 — Ứng Dụng AI Chuyên Sâu</span>
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      </div>

      <h3 id="ai-workflow-strategy" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">3.5 Ứng Dụng AI Lập Master Action Plan</h3>
      <p class="text-slate-300 mb-6">Đây là kỹ năng tạo ra sức mạnh cộng hưởng: Bạn đã có <strong>Insight</strong> từ Đảo 2, AI sẽ giúp bạn chuyển hóa chúng thành <strong>Bản đồ Tác chiến Tổng thể</strong> rõ ràng đến từng con số, từng Thông điệp, từng chiến dịch - chỉ trong 1 buổi làm việc.</p>

      <div class="space-y-6">

        <div class="relative pl-10 pb-8 border-l-2 border-indigo-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-indigo-600 border-2 border-indigo-400 flex items-center justify-center text-white text-xs font-bold">1</div>
          <strong class="text-indigo-300 text-lg block mb-1">Bước 1: Nạp Bối Cảnh (Context Loading)</strong>
          <p class="text-slate-400 text-sm mb-3">Cho AI hiểu bạn đang ở vị trí nào trên bản đồ. Đây là Prompt nền tảng cho mọi chiến lược.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-indigo-400 font-mono font-bold">step_1_context.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178]">
              <p>Tôi đang kinh doanh [<span class="text-indigo-300">Mô tả Sản phẩm/Dịch vụ cụ thể</span>].</p>
              <p class="mt-2">Khách hàng mục tiêu: [<span class="text-indigo-300">Đặc điểm nhân khẩu học + Hành vi mua hàng cốt lõi</span>].</p>
              <p class="mt-2">Lợi điểm độc nhất (USP): [<span class="text-indigo-300">Điều duy nhất chỉ tôi làm được</span>].</p>
              <p class="mt-2">Nguồn lực thực tế: Vốn [<span class="text-indigo-300">X triệu</span>], Nhân sự [<span class="text-indigo-300">Y người</span>], Thời gian [<span class="text-indigo-300">Z tháng</span>].</p>
              <p class="mt-2">Mục tiêu kinh doanh: [<span class="text-indigo-300">Con số cụ thể: Doanh thu, Số đơn, Số Lead</span>].</p>
              <p class="mt-3 text-slate-500"># Hãy ghi nhớ toàn bộ bối cảnh này. Tôi sẽ bắt đầu hỏi bạn từng phần.</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-8 border-l-2 border-indigo-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-amber-600 border-2 border-amber-400 flex items-center justify-center text-white text-xs font-bold">2</div>
          <strong class="text-amber-300 text-lg block mb-1">Bước 2: AI Phân Rã Kế Hoạch (Action Plan Breakdown)</strong>
          <p class="text-slate-400 text-sm mb-3">Yêu cầu AI lần lượt giải quyết từng Bài toán của Kế hoạch Tổng: Thông điệp, Kênh, Ngân sách và Timeline.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-amber-400 font-mono font-bold">step_2_master_plan.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178] space-y-3">
              <p class="text-slate-500"># BÀI TOÁN 1: THÔNG ĐIỆP CỐT LÕI</p>
              <p>Dựa trên bối cảnh trên, hãy đề xuất <span class="text-amber-300">1 Thông điệp Cốt lõi (Key Message)</span> mạnh nhất, đánh trúng nỗi đau khách hàng. Thông điệp phải ngắn hơn 15 từ.</p>
              <p class="text-slate-500 mt-2"># BÀI TOÁN 2: KÊNH PHÂN PHỐI</p>
              <p>Xác định <span class="text-amber-300">3 Kênh Marketing</span> tối ưu nhất cho tệp khách hàng này. Lý giải tại sao mỗi kênh là lựa chọn đúng đắn.</p>
              <p class="text-slate-500 mt-2"># BÀI TOÁN 3: PHÂN BỔ NGÂN SÁCH</p>
              <p>Áp dụng quy tắc <span class="text-amber-300">70-20-10</span> chia cụ thể [X triệu] vào 3 kênh trên. Gán KPI CPA mục tiêu cho từng kênh.</p>
              <p class="text-slate-500 mt-2"># BÀI TOÁN 4: TIMELINE HÀNH ĐỘNG</p>
              <p>Lập <span class="text-amber-300">Lịch Triển Khai 90 ngày</span> chia theo 3 giai đoạn (Khởi động - Tăng tốc - Tối ưu). Mỗi giai đoạn: Nhiệm vụ chính & Mốc KPI kiểm tra.</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-2 border-l-2 border-indigo-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-rose-600 border-2 border-rose-400 flex items-center justify-center text-white text-xs font-bold">3</div>
          <strong class="text-rose-300 text-lg block mb-1">Bước 3: Kích Hoạt "Shark Tank" Phản Biện Kế Hoạch</strong>
          <p class="text-slate-400 text-sm mb-3">Sau khi có Bản kế hoạch, đừng vội Execute! Ném nó vào "Hội đồng Cá Mập" để AI vạch trần các Điểm mù chết người.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-rose-400 font-mono font-bold">step_3_shark_tank.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178]">
              <p>Bây giờ hãy đóng vai <span class="text-rose-300">Giám đốc Đầu tư lạnh lùng, khắc nghiệt, không nể nang</span>. Hãy đọc lại toàn bộ Kế hoạch trên và trả lời:</p>
              <p class="mt-2">1. Kể tên <span class="text-rose-300">3 Rủi ro chết người</span> mà tôi chưa dự liệu trong kế hoạch này?</p>
              <p class="mt-1">2. Nếu đối thủ phản công ngay trong tuần đầu, <span class="text-rose-300">Điểm yếu nào</span> sẽ bị khai thác đầu tiên?</p>
              <p class="mt-1">3. Đề xuất <span class="text-rose-300">Phương án B cụ thể</span> để phòng thủ nếu kịch bản xấu nhất xảy ra.</p>
            </div>
          </div>
        </div>

      </div>

      <h3 id="ai-case-study" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-16 scroll-mt-24">3.6 Demo: 2 Case Study Ngành Việt Nam</h3>
      <p class="text-slate-300 mb-6">Xem cách Workflow 3 bước trên được áp dụng vào 2 ngành hoàn toàn khác nhau để tạo ra 2 Bản Kế hoạch rạch ròi, thực chiến.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Case 01 -->
        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all flex flex-col">
          <div class="flex items-center gap-3 mb-6">
            <div class="text-4xl drop-shadow-md">🏋️</div>
            <div>
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider">Case Study 01 — Ngành Fitness</p>
              <strong class="text-amber-400 text-xl block mt-1">Phòng Yoga Local Quận 7</strong>
            </div>
          </div>
          <div class="space-y-4 text-sm flex-1">
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B1</span> Bối cảnh & Vấn đề</p>
              <p class="text-slate-300 pl-8">Phòng tập mới mở, ngân sách hạn hẹp 80 triệu, bị vây quanh bởi các chuỗi Gym lớn. Mục tiêu sống còn: Cần 200 hội viên trong 3 tháng đầu để bù đắp chi phí mặt bằng.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B2</span> Giải pháp ứng dụng AI</p>
              <p class="text-slate-300 pl-8">Dùng Prompt "Master Plan", AI chỉ ra lỗ hổng: Không đối đầu giảm cân với chuỗi lớn. AI xác định tệp "Mẹ bỉm sữa tuổi 28-40 quanh bán kính 3km" và key message: <em>"Không định hình ép cân - Chỉ cần Khỏe thả lỏng để tự tin."</em></p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B3</span> Bản đồ triển khai (70-20-10)</p>
              <p class="text-slate-300 pl-8">
                • <strong>70% (56tr)</strong>: Cắm cờ Google Maps & Facebook Ads Re-targeting bán kính 3km.<br/>
                • <strong>20% (16tr)</strong>: Book 5 Micro-KOL Mẹ bỉm sống ngay khu chung cư lân cận review.<br/>
                • <strong>10% (8tr)</strong>: Test kênh TikTok với content "1 ngày yoga chữa lành".
              </p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B4</span> Kết quả & Bài học</p>
              <p class="text-amber-300 pl-8 font-medium">Đạt 215 hội viên sau 2 tháng. Bài học: Khi tài nguyên nhỏ giọt, phải đánh tỉa cục bộ (Localize) thay vì vung tiền rải rác trên diện rộng.</p>
            </div>
          </div>
        </div>

        <!-- Case 02 -->
        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-indigo-500/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all flex flex-col">
          <div class="flex items-center gap-3 mb-6">
            <div class="text-4xl drop-shadow-md">👗</div>
            <div>
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider">Case Study 02 — Thời Trang</p>
              <strong class="text-indigo-400 text-xl block mt-1">Local Brand Mùa Launching</strong>
            </div>
          </div>
          <div class="space-y-4 text-sm flex-1">
            <div class="space-y-1.5">
              <p class="text-indigo-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">B1</span> Bối cảnh & Vấn đề</p>
              <p class="text-slate-300 pl-8">Brand mới ra mắt Bộ sưu tập (BST) Mùa Thu, target Gen Z 20-28 tuổi. Bài toán đoạt mạng: Target 500 đơn trong tháng ra mắt với ngân sách gói gọn 60 triệu.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-indigo-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">B2</span> Giải pháp ứng dụng AI</p>
              <p class="text-slate-300 pl-8">AI phân rã USP và lập kế hoạch chiến dịch. Thông điệp dội bom: <em>"Mặc những gì bạn thực sự là - không phải những gì họ muốn bạn mặc."</em> AI đánh giá tỉ lệ chốt đơn cao nhất hiện tại nằm ở Video ngắn.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-indigo-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">B3</span> Bản đồ triển khai (70-20-10)</p>
              <p class="text-slate-300 pl-8">
                • <strong>70% (42tr)</strong>: Dồn hỏa lực vào TikTok Shop Live & Ads video In-feed (luồng chốt đơn nhanh nhất).<br/>
                • <strong>20% (12tr)</strong>: Thuê 3 Fashion/Streetwear KOL chụp Lookbook chất lừ đăng FB/IG.<br/>
                • <strong>10% (6tr)</strong>: Thử nghiệm Instagram Story Ads tệp Lookalike (Tệp tương tự).
              </p>
            </div>
            <div class="space-y-1.5">
              <p class="text-indigo-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">B4</span> Kết quả & Bài học</p>
              <p class="text-indigo-300 pl-8 font-medium">Cháy hàng 600 đơn ngay vòng 3 tuần. Bài học: Đối với sự kiện đẩy số cấp tốc (Launching/Sale), ném 70% tiền vào Kênh chốt đơn nóng (Direct Sales) thay vì Kênh duy trì nhận diện.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  sources: [],
  quiz: [
    {
      id: 1,
      question: "Câu đố Sinh Tử về Phễu (Funnel): Tại sao Ném Ngay Voucher Giảm Lấy Răng Sỉ Gói 50 Triệu Đồng cho người lạ hoắc trên Facebook thì lại thất bại thê thảm?",
      options: ["Facebook ghét Ngành Răng", "Người lạ chưa hề biết bạn là ai (Chưa Tồn Tại Nhận Thức - TOFU) nên Cảm Giác Phòng Bị Lừa Đảo Quá Lớn Chặn Đường Rơi Tiền.", "Video không đủ Dẹp Đỉnh Hoạ Điểm", "Voucher Quá Thấp"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Khối Động Cơ (Execution & Budget) trong 1 Bản Marketing Page Lõi tập trung Trả Lời Điều Gì Lớn Nhất?",
      options: ["Logo màu xanh hay màu hồng đệm?", "Chúng ta nhắm đến Nữ 18-24 tuổi khu vực Hà Nội Mê Ăn Gà Trưa", "Tập trung Ngân Sách Đánh 3 Kênh Chọi Fb/Tiktok Tốn Bao Nhiêu Đạn Cụ Thể, Ai làm Cầm Cờ Lệnh Đốc Thúc?", "Mục tiêu 10% Trưởng Nhóm Sinh Nhật Mạng"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Quy tắc rải Đạn (Ngân Sách Budgeting) 70-20-10, Ý Đồ Nhánh 10% Vốn Ngân Sách Điên Rồ là Nuôi Giấc Mộng Gì?",
      options: ["Bỏ lợn tiết kiệm", "Ném vào Đống Rác Thử Trò Chơi Mới Hên Xui Đột Phá Lớn (Vd Mướn AI KOLS Lạ Đi Đập Review Tố Liều Nuôi Kỳ Vọng Bom Tấn Giải Tỏa Ít Đứt)", "Lấy 10% trả vay nặng lãi", "Trà đá Nhân Sự"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Mục tiêu K.P.I nào sau đây được gọi là Chuẩn SMART Cắt Phăng Ảo Tưởng?",
      options: ["Năm sau Mình Trở Thành Sói Đầu Đàn Nghành Mĩ Phẩm VN Cho Toàn Quốc Trố Mắt Lấy Đất Bể Biển!", "Đạt 60 Triệu Doanh Số Tăng 10% trên Mảng TikTok Shop từ LiveStream lúc 20h Nghỉ Tết Dương Lịch Sắp Tới Tranh Tài Hạng B với Budget 25 Triệu Có Hạn Đo. Rõ Cọc Tiêu Khung Số Cụ Thể Đo Cân Đo.", "Quyết bán Mọi Đồ Tồn Tủ Lấy Lực Đẩy Hỗ Thăng Mây Khói Này Tự Nhiên Ra Mua Hết Tiền Chỗ.", "Chạy cho tới khi nào cạn vố thôi dừng Khuyến Mãi Gói Khủng Cười Hút Không Ai Mê Thâm Tuý"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "Để AI nhận diện Rủi Ro ẩn Chết Đuối Mặt Không Tên trong Kế hoạch Kinh Doanh (Business Plan), Phải bắt nó hóa thân Role gì Khốc Liệt?",
      options: ["Người mẹ ru ngủ dỗ dành xoa dịu hiền lương", "1 Chuyên Viên Content Hay Xấu Trổ Thư Bay Bướm Hoa Khéo", "1 Giám Đốc Cấp Cáo Lạnh Lùng / Hoặc Cá Mập Đầu Tư (Shark) Soi Soi Từng Lỗ Hổng Tiền Cắt Nháp Lắc Lọt Hạch Mọi Móc Ngóc Chỗ Ngu Ngốc Nhất Rút Bạc Trống Không.", "Trợ lý Chat Cười Khủng Hoảng Hỗ Trợ Đầy Rẫy Hỏi Gì Đọc Có Sách Vở Thui Chút Cho Vui Trông Hoa Mắt."],
      correctAnswer: 2
    }
  ]
};
