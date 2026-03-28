import { Bot } from 'lucide-react';

export const island7 = {
  id: 7,
  title: "#7: Đảo Tương Lai",
  slug: "dao-tuong-lai",
  icon: Bot,
  description: `<div class="font-bold text-[#e8dcc7] mb-2 border-b border-[#4a3b2c] pb-1">MarTech Automation</div>
  <ul class="space-y-1.5 list-none text-[13px] mt-2">
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Bức tranh tổng quan về MarTech</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Vòng Đời Khách Hàng (CRM Lifecycle)</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Email Marketing - Tài sản số</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Tự động hóa Make / Zapier</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> 4 Công nghệ MarTech cần biết</li>
  </ul>`,
  color: "from-slate-700 to-stone-600",
  videoUrl: "",
  toc: [
    { id: 'martech-landscape', title: '7.1 MarTech là gì? Bức tranh tổng quan' },
    { id: 'crm-lifecycle', title: '7.2 Vòng Đời Khách Hàng (CRM Lifecycle)' },
    { id: 'email-marketing', title: '7.3 Email Marketing - Tài sản số của bạn' },
    { id: 'ai-nocode', title: '7.4 Automation Không Cần Code (Make/Zapier/N8N)' },
    { id: 'martech-tools', title: '7.5 Bản đồ Công nghệ MarTech: 4 Ứng Dụng Cần Biết' },
  ],
  contentHtml: `
    <div class="space-y-12">
      <p class="text-lg leading-relaxed text-slate-300">Nhân viên chăm sóc khách hàng đôi khi có những ngày mệt mỏi, hay quên chúc mừng sinh nhật, hoặc vô tình sót mấy tin nhắn của khách đêm khuya. <br>Chào mừng bạn đến với Kỷ nguyên MarTech - nơi hệ thống làm việc ngay cả khi bạn đang ngủ!</p>

      <h3 id="martech-landscape" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">7.1 MarTech là gì? Bức tranh tổng quan</h3>
      <p class="text-slate-300 mb-4">MarTech = Marketing + Technology. Nói đơn giản: đó là tập hợp các công cụ và phần mềm giúp bạn làm marketing thông minh hơn, tự động hơn - thay vì làm thủ công từng bước.</p>
      <p class="text-slate-300 mb-6">Triết lý cốt lõi: <i>"Gửi đúng thông điệp - tới đúng người - vào đúng lúc họ cần nhất."</i> Đây không phải là spam SMS hàng loạt. Đây là sự chăm sóc có chủ đích, được hỗ trợ bởi dữ liệu.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 mb-8">
        <div class="bg-indigo-900/20 border border-slate-800 p-5 rounded-xl border-t-2 border-t-blue-500">
          <strong class="text-blue-400 text-lg">Omnichannel (Đa kênh liền mạch)</strong>
          <p class="mt-3 text-sm text-slate-300 leading-relaxed">Bạn bỏ quên chiếc áo trong giỏ hàng trên điện thoại vì bận nghe cuộc gọi. 5 phút sau mở máy tính, quảng cáo chiếc áo đó hiện lên kèm mã freeship. Đó chính là Omnichannel - liền mạch, tự nhiên, và rất khó cưỡng lại.</p>
        </div>
        <div class="bg-indigo-900/20 border border-slate-800 p-5 rounded-xl border-t-2 border-t-purple-500">
          <strong class="text-purple-400 text-lg">Single Customer View (Nhìn thấy toàn bộ lịch sử khách)</strong>
          <p class="mt-3 text-sm text-slate-300 leading-relaxed">Khách hàng phàn nàn tuần trước về đơn thiếu hàng. Lần sau khi gọi lại, nhân viên đã nhìn thấy ghi chú đó và chủ động xin lỗi trước - thay vì ngờ nghệch mời thêm gói khuyến mãi. Đó là CRM làm đúng việc của nó.</p>
        </div>
      </div>

      <div class="bg-slate-900/50 border border-slate-700 rounded-xl p-5 text-sm text-slate-400">
        <strong class="text-slate-300 block mb-2">📌 Lưu ý thực tế:</strong>
        Không phải doanh nghiệp nào cũng cần dùng hết bộ công cụ MarTech ngay từ đầu. Một shop nhỏ chỉ cần email automation + Zalo OA là đủ. Doanh nghiệp lớn hơn mới cần CDP, Lead Scoring... Quan trọng là hiểu <strong>bức tranh tổng thể</strong> để chọn đúng công cụ cho giai đoạn của mình.
      </div>

      <h3 id="crm-lifecycle" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">7.2 Vòng Đời Khách Hàng (CRM Lifecycle) - Giữ chân lâu dài hơn tìm mới</h3>
      <p class="text-slate-300 mb-4">Tìm một khách mới tốn chi phí quảng cáo gấp 5-7 lần so với giữ một khách cũ. Vì vậy, CRM không phải "xa xỉ phẩm" mà là vũ khí cạnh tranh. Hành trình chăm sóc đi qua 3 giai đoạn:</p>
      
      <div class="space-y-4 text-slate-300 text-sm">
         <div class="bg-black/40 border border-slate-800 p-4 rounded-xl flex items-start gap-4">
           <span class="text-3xl text-slate-600 font-black flex-shrink-0">🚀</span>
           <div>
             <strong class="text-emerald-400 block mb-1">Onboarding (Chào đón - 7 ngày đầu sau mua):</strong>
             <p class="text-sm text-slate-300">Khách vừa mua lò vi sóng, tự động nhận email hướng dẫn "3 món nướng không cần chảo dầu" kèm video lắp đặt. Đơn giản nhưng hiệu quả: khách cảm thấy được quan tâm ngay từ đầu, ít hoàn hàng hơn.</p>
           </div>
         </div>
         <div class="bg-black/40 border border-slate-800 p-4 rounded-xl flex items-start gap-4">
           <span class="text-3xl text-slate-600 font-black flex-shrink-0">🌱</span>
           <div>
             <strong class="text-amber-400 block mb-1">Nurturing (Nuôi dưỡng & Bán kèm - 30 ngày tiếp theo):</strong>
             <p class="text-sm text-slate-300">Biết khách mới mua laptop, hệ thống tự gửi voucher 30% cho balo chống sốc cùng thương hiệu. Bán thêm (Cross-sell) mà không cần nhân sự nào làm thủ công.</p>
           </div>
         </div>
         <div class="bg-black/40 border border-slate-800 p-4 rounded-xl flex items-start gap-4">
           <span class="text-3xl text-slate-600 font-black flex-shrink-0">❤️‍🩹</span>
           <div>
             <strong class="text-rose-400 block mb-1">Win-back (Gọi khách quay lại - sau 90 ngày):</strong>
             <p class="text-sm text-slate-300">Zalo OA tự nhắn: <em>"90 ngày rồi chưa gặp chị! Cửa hàng bí mật gửi tặng chị phiếu mua 1 món dưới 200k miễn phí - coi như mời cafe hàn huyên."</em> Đơn giản, thân thiện, và rất có hiệu quả.</p>
           </div>
         </div>
      </div>

      <h3 id="email-marketing" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">7.3 Email Marketing - Tài Sản Số Không Ai Cướp Được</h3>
      <p class="text-slate-300 mb-4">Tưởng tượng một buổi sáng, Facebook khóa fanpage 1 triệu follow của bạn vì "vi phạm chính sách" mà không báo trước. Tất cả công sức xây dựng bỗng dưng <em>biến mất</em>. Điều đó hoàn toàn có thể xảy ra bất cứ lúc nào. Chính vì vậy, bạn phải có <strong>danh sách email riêng lưu trên máy chủ của mình.</strong></p>

      <ul class="list-none pl-0 space-y-4 text-slate-300 text-sm mt-6">
        <li class="bg-slate-900 p-4 rounded-xl border border-slate-800 border-l-4 border-l-indigo-500 shadow-inner">
          <span class="text-indigo-400 font-bold block mb-1 text-lg">Email là tài sản riêng của bạn (Owned Media):</span>
          Follower trên TikTok, Facebook có thể bị khóa, bị thuật toán bóp reach bất cứ lúc nào. Nhưng một danh sách 10.000 email khách hàng lưu trong hệ thống của bạn thì mãi là của bạn. Nhấn 1 nút, toàn bộ danh sách nhận được tin nhắn ngay lập tức. ROI của email marketing trung bình đạt <strong>36$ cho mỗi 1$ chi phí</strong> - cao nhất trong tất cả kênh marketing.
        </li>
      </ul>

      <h3 id="ai-nocode" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">7.4 Automation Không Cần Code: Make.com - Zapier - N8N</h3>
      <p class="text-slate-300 mb-4">Thay vì cứ ngồi copy-paste từng thông tin khách hàng mới từ form về Excel, rồi lại mở Google Sheet báo cho team qua Telegram... bạn có thể dùng Make.com / Zapier / N8N để làm việc đó tự động hoàn toàn.</p>
      
      <div class="bg-emerald-900/10 border border-emerald-900/50 p-6 rounded-2xl">
        <h4 class="text-emerald-400 font-bold mb-4 flex items-center gap-2">🛠 Ví dụ Automation đơn giản bằng Make.com</h4>
        <div class="bg-black/90 p-5 rounded-xl border border-slate-800/80 font-mono text-sm leading-relaxed overflow-x-auto text-slate-300">
          <span class="text-white font-bold">1. [TRIGGER — Mồi nổ kích hoạt]:</span> Khách điền form đăng ký nhận tài liệu miễn phí trên Facebook Lead Ads.<br/><br/>
          <span class="text-pink-400 font-bold">2. [2 ACTION tự động song song]:</span><br/>
          → (Nhánh A): Tên + SĐT tự động vào Google Sheet và báo ngay cho team sales qua nhóm Zalo.<br/>
          → (Nhánh B): Email + Tên tự động vào danh sách Mailchimp và kích hoạt chuỗi email nuôi dưỡng 7 ngày.
        </div>
      </div>

      <h3 id="martech-tools" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-16 scroll-mt-24">7.5 Bản đồ Công nghệ MarTech: 4 Ứng Dụng Đáng Khám Phá</h3>
      <p class="text-slate-300 mb-6">Dưới đây là 4 loại công nghệ phổ biến trong hệ sinh thái MarTech. Đây là phần <strong>giới thiệu để bạn có bức tranh tổng quan</strong> - không phải áp lực phải triển khai ngay tất cả. Mỗi doanh nghiệp có nguồn lực và giai đoạn khác nhau, hãy chọn thứ phù hợp nhất với bài toán của mình.</p>

      <div class="space-y-6">

        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-sky-500/40 transition-all">
          <div class="flex items-start gap-4">
            <div class="text-4xl flex-shrink-0">🤖</div>
            <div class="flex-1">
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Công nghệ 01</p>
              <strong class="text-sky-400 text-xl block mb-3">Chatbot AI - Nhân viên bán hàng không biết mệt</strong>
              <p class="text-slate-300 text-sm leading-relaxed mb-3">Không còn là những con bot trả lời theo kịch bản "bấm phím 1, phím 2" gây ức chế. Chatbot AI hiện nay (như GPT-4, Claude) có thể <em>hiểu ý định khách hàng</em>, tư vấn sản phẩm như người thật và chốt đơn ngay trong cửa sổ chat.</p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-3 py-1 bg-sky-900/30 text-sky-300 text-xs rounded-full border border-sky-800/50">Facebook Messenger</span>
                <span class="px-3 py-1 bg-sky-900/30 text-sky-300 text-xs rounded-full border border-sky-800/50">Zalo</span>
                <span class="px-3 py-1 bg-sky-900/30 text-sky-300 text-xs rounded-full border border-sky-800/50">Website Chat</span>
              </div>
              <div class="bg-sky-900/10 border border-sky-900/40 rounded-lg p-3 text-xs text-sky-300">
                💡 <strong>Gợi mở:</strong> Tìm hiểu về "AI Agent" - những trợ lý AI có khả năng tự thực hiện tác vụ (như đặt lịch hẹn, tạo hóa đơn) chứ không chỉ biết nói suông.
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-purple-500/40 transition-all">
          <div class="flex items-start gap-4">
            <div class="text-4xl flex-shrink-0">🗄️</div>
            <div class="flex-1">
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Công nghệ 02</p>
              <strong class="text-purple-400 text-xl block mb-3">CDP - Customer Data Platform (Siêu hồ sơ khách hàng)</strong>
              <p class="text-slate-300 text-sm leading-relaxed mb-3">Hãy tưởng tượng bạn có một cuốn sổ thần kỳ ghi chép lại: khách A đã xem gì trên Web, đã mua gì ở Shopee, đã phàn nàn gì trên Fanpage. CDP gom tất cả về một chỗ để bạn <em>hiểu khách hơn cả người yêu họ</em>.</p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-800/50">Dữ liệu nội bộ doanh nghiệp</span>
                <span class="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full border border-purple-800/50">Cross-platform</span>
              </div>
              <div class="bg-purple-900/10 border border-purple-900/40 rounded-lg p-3 text-xs text-purple-300">
                💡 <strong>Gợi mở:</strong> Tìm hiểu cách "Hợp nhất dữ liệu" để tránh việc khách đã mua hàng rồi mà vẫn bị quảng cáo bám đuổi món đồ đó.
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-amber-500/40 transition-all">
          <div class="flex items-start gap-4">
            <div class="text-4xl flex-shrink-0">🎯</div>
            <div class="flex-1">
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Công nghệ 03</p>
              <strong class="text-amber-400 text-xl block mb-3">Lead Scoring - Máy quét "khách sộp"</strong>
              <p class="text-slate-300 text-sm leading-relaxed mb-3">Công nghệ tự động <em>chấm điểm khách hàng</em>. Ai hay vào xem web, ai hay mở email sẽ được điểm cao. Khi điểm đạt mức "máu mua hàng", hệ thống sẽ báo ngay cho nhân viên sale nhảy vào chốt - thay vì gọi điện tràn lan cho cả ngàn người.</p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-3 py-1 bg-amber-900/30 text-amber-300 text-xs rounded-full border border-amber-800/50">Hệ thống CRM</span>
                <span class="px-3 py-1 bg-amber-900/30 text-amber-300 text-xs rounded-full border border-amber-800/50">HubSpot / Salesforce</span>
              </div>
              <div class="bg-amber-900/10 border border-amber-900/40 rounded-lg p-3 text-xs text-amber-300">
                💡 <strong>Gợi mở:</strong> Tìm hiểu về "Marketing Qualified Lead (MQL)" để biết lúc nào nên tấn công, lúc nào nên nuôi dưỡng.
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-emerald-500/40 transition-all">
          <div class="flex items-start gap-4">
            <div class="text-4xl flex-shrink-0">🦎</div>
            <div class="flex-1">
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Công nghệ 04</p>
              <strong class="text-emerald-400 text-xl block mb-3">Dynamic Content - Nội dung "tắc kè hoa"</strong>
              <p class="text-slate-300 text-sm leading-relaxed mb-3">Cùng một website hoặc email, nhưng người thích bóng đá vào xem sẽ thấy hình ảnh thể thao, người thích nấu ăn vào sẽ thấy hình ảnh nhà bếp. Nội dung <em>tự biến đổi để chiều lòng từng cá nhân</em> - tăng tỷ lệ chuyển đổi đáng kể.</p>
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-xs rounded-full border border-emerald-800/50">Website</span>
                <span class="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-xs rounded-full border border-emerald-800/50">Landing Page</span>
                <span class="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-xs rounded-full border border-emerald-800/50">Email</span>
              </div>
              <div class="bg-emerald-900/10 border border-emerald-900/40 rounded-lg p-3 text-xs text-emerald-300">
                💡 <strong>Gợi mở:</strong> Tìm hiểu về "A/B Testing" tự động bằng AI để xem phiên bản nội dung nào hái ra tiền nhiều hơn.
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-12">
        <h4 class="text-lg font-bold text-slate-200 mb-4">📊 Bảng tóm tắt: Vai trò từng công nghệ trong bộ máy MarTech</h4>
        <div class="overflow-x-auto rounded-xl border border-slate-700/80">
          <table class="w-full text-sm text-slate-300">
            <thead>
              <tr class="bg-slate-800/80 text-slate-200">
                <th class="text-left px-5 py-3 font-semibold w-1/3">Công nghệ</th>
                <th class="text-left px-5 py-3 font-semibold">Vai trò trong "bộ máy"</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800">
              <tr class="hover:bg-slate-800/40 transition-colors">
                <td class="px-5 py-3 font-medium text-emerald-400">Make/Zapier/N8N</td>
                <td class="px-5 py-3 text-slate-400">"Dây điện" kết nối tất cả ứng dụng lại với nhau.</td>
              </tr>
              <tr class="hover:bg-slate-800/40 transition-colors">
                <td class="px-5 py-3 font-medium text-sky-400">Chatbot AI</td>
                <td class="px-5 py-3 text-slate-400">"Lễ tân" tiếp đón và chốt đơn tức thì 24/7.</td>
              </tr>
              <tr class="hover:bg-slate-800/40 transition-colors">
                <td class="px-5 py-3 font-medium text-indigo-400">Email Marketing</td>
                <td class="px-5 py-3 text-slate-400">"Người đưa thư" nhắc nhở và nuôi dưỡng tình cảm.</td>
              </tr>
              <tr class="hover:bg-slate-800/40 transition-colors">
                <td class="px-5 py-3 font-medium text-purple-400">CRM (HubSpot / Salesforce)</td>
                <td class="px-5 py-3 text-slate-400">"Bộ nhớ" lưu trữ mọi thông tin khách hàng.</td>
              </tr>
              <tr class="hover:bg-slate-800/40 transition-colors">
                <td class="px-5 py-3 font-medium text-amber-400">Lead Scoring</td>
                <td class="px-5 py-3 text-slate-400">"Trinh sát" phát hiện khách đang sẵn sàng mua.</td>
              </tr>
              <tr class="hover:bg-slate-800/40 transition-colors">
                <td class="px-5 py-3 font-medium text-rose-400">CDP</td>
                <td class="px-5 py-3 text-slate-400">"Thám tử" gom và phân tích dữ liệu toàn diện về khách.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mt-10 bg-slate-900/60 border border-slate-700 rounded-xl p-6">
        <h4 class="text-slate-200 font-bold mb-3">🧭 Bắt đầu từ đâu?</h4>
        <p class="text-slate-400 text-sm leading-relaxed">Đừng để danh sách công cụ dài này gây choáng ngợp. Nguyên tắc đơn giản: <strong class="text-slate-300">giải quyết bài toán thực tế trước, chọn công cụ sau.</strong></p>
        <ul class="mt-3 space-y-2 text-sm text-slate-400 list-none pl-0">
          <li class="flex items-start gap-2"><span class="text-emerald-500 mt-0.5">→</span> Đang bị mất lead vì thiếu chăm sóc? → <strong class="text-slate-300">EmailAutomation + ZaloOA</strong>.</li>
          <li class="flex items-start gap-2"><span class="text-emerald-500 mt-0.5">→</span> Sales gọi điện tràn lan không hiệu quả? → <strong class="text-slate-300">Lead Scoring</strong>.</li>
          <li class="flex items-start gap-2"><span class="text-emerald-500 mt-0.5">→</span> Làm việc thủ công tốn nhiều thời gian? → <strong class="text-slate-300">Make/Zapier/N8N</strong>.</li>
          <li class="flex items-start gap-2"><span class="text-emerald-500 mt-0.5">→</span> Muốn chăm sóc khách 24/7 mà không tốn nhân sự? → <strong class="text-slate-300">ChatbotAI</strong>.</li>
        </ul>
      </div>

    </div>
  `,
  sources: [],
  quiz: [
    {
      id: 1,
      question: "Triết lý cốt lõi của MarTech là gì?",
      options: ["Gửi SMS hàng loạt cho tất cả mọi người", "Gửi đúng thông điệp — tới đúng người — vào đúng lúc họ cần nhất", "Dùng bot để trả lời tự động 24/7 bất kể hoàn cảnh", "Chỉ cần content hay là đủ, không cần dữ liệu"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Tại sao danh sách email của doanh nghiệp quý giá hơn follower trên mạng xã hội?",
      options: ["Vì email truyền thống hơn và ai cũng biết dùng", "Vì follower Facebook/TikTok có thể bị khóa hoặc thuật toán bóp reach bất cứ lúc nào. Email là tài sản riêng bạn sở hữu hoàn toàn.", "Vì gửi email miễn phí còn chạy ads phải tốn tiền", "Vì email có thể gắn nhiều hình ảnh và video hơn"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Trong CRM, 'Win-back' được kích hoạt khi nào?",
      options: ["Khi khách hàng vừa mua hàng lần đầu", "Khi khách hàng đã lâu không quay lại (ví dụ 90 ngày không mua) — gửi ưu đãi đặc biệt để kéo họ trở lại", "Khi khách hàng phàn nàn về sản phẩm", "Khi muốn upsell cho khách mua nhiều hơn"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "CDP (Customer Data Platform) giúp doanh nghiệp làm gì?",
      options: ["Chạy quảng cáo Facebook hiệu quả hơn", "Gom dữ liệu khách hàng từ nhiều kênh (Web, Shopee, Fanpage...) về một chỗ để hiểu khách toàn diện", "Tạo content tự động bằng AI", "Quản lý kho hàng và đơn vị vận chuyển"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "ROI trung bình của Email Marketing so với chi phí bỏ ra là bao nhiêu?",
      options: ["1$ chi ra — 3$ thu về", "1$ chi ra — 36$ thu về (cao nhất trong tất cả kênh marketing)", "1$ chi ra — 10$ thu về", "Email marketing không đo được ROI"],
      correctAnswer: 1
    }
  ]
};
