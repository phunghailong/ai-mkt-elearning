import { LineChart } from 'lucide-react';

export const island8 = {
  id: 8,
  title: "#8: Kho Báu Dữ Liệu",
  slug: "kho-bau-du-lieu",
  icon: LineChart,
  description: `<div class="font-bold text-[#e8dcc7] mb-2 border-b border-[#4a3b2c] pb-1">Đo Lường & Tối Ưu</div>
  <ul class="space-y-1.5 list-none text-[13px] mt-2">
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Chỉ số "phù du" vs Chỉ số thực chiến</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> CAC & LTV - Bài toán sống còn</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Google Analytics 4 & Tracking Pixel</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Tối ưu tỷ lệ chuyển đổi (CRO & A/B Test)</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Ứng dụng AI: Đọc báo cáo & ra quyết định</li>
  </ul>`,
  color: "from-yellow-700 to-amber-600",
  videoUrl: "",
  toc: [
    { id: 'vanity-metrics', title: '8.1 Chỉ số "phù du" vs Chỉ số thực chiến' },
    { id: 'cac-ltv', title: '8.2 CAC & LTV - Bài toán sống còn của marketing' },
    { id: 'pixel-tracking', title: '8.3 Google Analytics 4 (GA4) & Tracking Pixel' },
    { id: 'cro-abtest', title: '8.4 CRO & A/B Test - Tối ưu không ngừng' },
    { id: 'ai-report-analysis', title: '8.5 Ứng dụng AI: Đọc báo cáo & ra quyết định' },
    { id: 'ai-case-study-8', title: '8.6 Thực chiến: Case Study Shop Thời Trang' }
  ],
  contentHtml: `
    <div class="space-y-12">
      <p class="text-lg leading-relaxed text-slate-300"><em>"Không thể quản trị những gì bạn không đo lường được."</em> Cảm giác "hôm nay bán đắt" hay "video này hay lắm" không thể thay thế cho một con số cụ thể. <br>Đảo cuối cùng này sẽ giúp bạn đặt đúng công cụ đo lường để biết mình đang thắng hay đang thua, và thua ở đâu.</p>

      <h3 id="vanity-metrics" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">8.1 Chỉ số "phù du" và Chỉ số thực chiến</h3>
      <p class="text-slate-300 mb-6">Có những con số trông rất đẹp trong slide báo cáo, nhưng thực ra chẳng giúp ích gì cho việc ra quyết định. Đây là sự khác biệt quan trọng bạn cần nắm.</p>

      <div class="grid md:grid-cols-2 gap-6 my-6 text-slate-300 text-sm">
        <div class="bg-rose-900/20 p-6 rounded-2xl border border-rose-900/50 shadow-inner">
           <strong class="text-rose-400 text-lg block mb-3">❌ Chỉ số "phù du" (Vanity Metrics)</strong>
           <ul class="space-y-3">
             <li><strong class="text-white">Ví dụ: Lượt like, số follower, lượt xem video.</strong></li>
             <li>Bạn có một video đạt 1 triệu lượt xem. Nghe hay đấy - nhưng nếu người xem là học sinh cấp 1 và bạn đang bán nội thất 30 triệu/bộ thì con số đó không có nghĩa lý gì với doanh thu.<br/><br/>
             Con số lớn nhưng không liên quan đến mục tiêu kinh doanh = chỉ số phù du.</li>
           </ul>
        </div>
        
        <div class="bg-emerald-900/20 p-6 rounded-2xl border border-emerald-900/50 shadow-inner">
           <strong class="text-emerald-400 text-lg block mb-3">✅ Chỉ số thực chiến (Actionable Metrics)</strong>
           <ul class="space-y-3">
             <li><strong class="text-white">Ví dụ: Tỷ lệ chuyển đổi, chi phí mỗi đơn (CPO), tỷ lệ hoàn hàng.</strong></li>
             <li>Những chỉ số này giúp bạn hành động ngay: <em>"Tỷ lệ khách bỏ giỏ hàng đang tăng 50% - chắc nút thanh toán đang bị lỗi. Gọi kỹ thuật kiểm tra ngay!"</em><br/><br/>
             Chỉ số tốt = chỉ số giúp bạn biết phải làm gì tiếp theo.</li>
           </ul>
        </div>
      </div>

      <div class="bg-slate-900/50 border border-amber-800/40 rounded-xl p-5 text-sm text-slate-400">
        <strong class="text-amber-400 block mb-2">💡 Nguyên tắc đơn giản: 1 triệu views rồi sao?</strong>
        Trước khi đưa một chỉ số vào báo cáo, hỏi: <em>"Nếu chỉ số này tăng gấp đôi, tôi sẽ làm gì khác đi?"</em> Nếu câu trả lời là "không biết" - đó là chỉ số phù du, bỏ đi.
      </div>

      <h3 id="cac-ltv" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">8.2 CAC & LTV - Bài toán sống còn của marketing</h3>
      <p class="text-slate-300 mb-4">Đây là cặp đôi quan trọng nhất mà bất kỳ người làm marketing nào cũng phải hiểu. Nếu không nắm được 2 con số này, bạn có thể đang chạy ads càng nhiều càng lỗ mà không biết.</p>

      <div class="bg-black/40 border border-slate-800 rounded-2xl p-6 shadow-inner mb-6">
         <h4 class="text-amber-400 font-bold mb-4 text-lg">CAC vs LTV - Đôi bạn quyết định bạn đang lãi hay lỗ</h4>
         <ul class="space-y-4 text-sm text-slate-300 mt-4">
           <li class="flex items-start gap-3">
             <span class="text-yellow-500 mt-1 flex-shrink-0">📌</span> 
             <div>
               <strong class="text-white">CAC (Customer Acquisition Cost - Chi phí để có 1 khách hàng mới):</strong><br/>
               = Tổng chi phí quảng cáo ÷ Số khách hàng mua hàng trong kỳ.<br/>
               <span class="text-slate-400 italic">Ví dụ: Chi 10 triệu ads, được 50 đơn → CAC = 200.000đ/khách.</span>
             </div>
           </li>
           <li class="flex items-start gap-3">
             <span class="text-yellow-500 mt-1 flex-shrink-0">📌</span> 
             <div>
               <strong class="text-white">LTV (Lifetime Value - Tổng tiền 1 khách mang lại trong suốt thời gian gắn bó):</strong><br/>
               = Giá trị đơn hàng trung bình × Số lần mua × Thời gian trung thành.<br/>
               <span class="text-slate-400 italic">Ví dụ: Khách mua áo bình quân 500k/lần, mua 2 lần/năm, gắn bó 2 năm → LTV = 2 triệu.</span>
             </div>
           </li>
           <li class="flex items-center gap-3 bg-red-900/20 p-3 rounded-lg border border-red-900/50 mt-4">
             <span class="text-red-500 font-bold text-xl flex-shrink-0">🔴</span> 
             <div><strong>Nguy hiểm khi LTV &lt; CAC:</strong> Chi 200k để lấy một khách mang về 150k - bạn đang lỗ mỗi đơn hàng. Chạy ads càng nhiều càng thiệt.</div>
           </li>
           <li class="flex items-center gap-3 bg-emerald-900/20 p-3 rounded-lg border border-emerald-900/50 mt-4">
             <span class="text-emerald-500 font-bold text-xl flex-shrink-0">🟢</span> 
             <div><strong>Chuẩn bền vững (LTV ≥ 3× CAC):</strong> Bỏ ra 200k để lấy khách mang về 600k+ - mỗi đồng quảng cáo đều có lời. Có thể yên tâm mở rộng.</div>
           </li>
         </ul>
      </div>

      <h3 id="pixel-tracking" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">8.3 Google Analytics 4 (GA4) & Tracking Pixel</h3>
      <p class="text-slate-300 mb-4">Các nền tảng quảng cáo (Facebook, TikTok) thường "tự khen" kết quả của mình - báo hiệu quả hơn thực tế. Để biết sự thật, bạn cần đặt công cụ đo lường của riêng mình.</p>
      
      <div class="bg-blue-900/10 border-l-4 border-blue-600 p-6 rounded-r-xl mt-6">
         <h4 class="text-blue-400 font-bold text-xl mb-4">2 công cụ theo dõi quan trọng nhất</h4>
         <div class="space-y-5 text-slate-300 text-sm">
            <div>
              <strong class="text-white block mb-1">1. Google Analytics 4 (GA4) - Bức tranh toàn cảnh:</strong>
              <p>Cho biết: Bao nhiêu người vào web? Họ đến từ đâu (Facebook, TikTok, Google Search hay gõ thẳng địa chỉ)? Họ dùng điện thoại hay máy tính? Họ rời trang ở bước nào trong quá trình mua hàng?</p>
              <p class="text-slate-400 mt-1 italic">GA4 là "dashboard" tổng quan giúp bạn thấy khách đến và đi như thế nào.</p>
            </div>
            <div>
              <strong class="text-white block mb-1">2. Facebook Pixel / TikTok Pixel - Theo dõi hành trình từng bước:</strong>
              <p>Đặt một đoạn code nhỏ trên website, Pixel sẽ ghi lại từng hành động của khách: xem sản phẩm → thêm giỏ hàng → thanh toán → hoàn tất. Thông tin này được gửi ngược về Facebook/TikTok để hệ thống tìm thêm người giống khách hàng của bạn, và "nhắc nhở" khách bỏ giỏ hàng quay lại mua.</p>
            </div>
         </div>
      </div>
      
      <h3 id="cro-abtest" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">8.4 CRO & A/B Test - Tối ưu không ngừng nghỉ</h3>
      <p class="text-slate-300 mb-4">CRO (Conversion Rate Optimization) = Tối ưu tỷ lệ chuyển đổi. Đây là tư duy: thay vì đổ thêm tiền mua traffic, hãy làm cho traffic hiện tại chuyển đổi tốt hơn trước.</p>
      <p class="text-slate-300 mb-4">Ví dụ: Website đang có 1.000 khách/ngày, tỷ lệ mua 1%. Thay vì tốn tiền tăng lên 2.000 khách, bạn có thể tối ưu để tỷ lệ mua tăng lên 2% - kết quả như nhau nhưng ngân sách ads không thay đổi.</p>
      
      <div class="bg-indigo-900/20 p-6 rounded-2xl border border-indigo-900/50 shadow-inner mt-4">
         <h4 class="text-indigo-400 font-bold text-lg mb-3">🧪 A/B Test - Để dữ liệu phán quyết thay cho cảm giác</h4>
         <ul class="space-y-4 text-sm text-slate-300 mt-4">
            <li class="flex items-start gap-3">
              <span class="text-indigo-400 font-bold flex-shrink-0">Là gì?</span>
              <span>Thay vì họp cãi nhau "Nút xanh đẹp hơn hay nút đỏ?", bạn chia traffic thành 2 nhóm: nhóm A thấy nút xanh, nhóm B thấy nút đỏ. Sau 1-2 tuần, nhóm nào có tỷ lệ click cao hơn thì thắng. Không cần cãi - dữ liệu tự nói.</span>
            </li>
            <li class="flex items-start gap-3 text-slate-400 italic">
              <span class="text-amber-400 font-bold not-italic flex-shrink-0">⚠️ Lưu ý:</span>
              <span>Mỗi lần test chỉ thay đổi <strong class="text-slate-200">1 yếu tố duy nhất</strong> (màu nút, hoặc tiêu đề, hoặc ảnh - không phải tất cả cùng lúc). Thay nhiều thứ cùng lúc thì không biết cái nào gây ra sự khác biệt.</span>
            </li>
            <li class="bg-indigo-900/30 p-3 rounded-lg text-slate-300">
              <strong class="text-white">Những thứ đáng A/B Test nhất:</strong> Tiêu đề trang (Headline), nút kêu gọi hành động (CTA), hình ảnh sản phẩm chính, giá hiển thị (giá đầy đủ vs giá sau giảm), form đăng ký ngắn vs dài.
            </li>
         </ul>
      </div>

      <div id="ai-sep-8" class="flex items-center gap-3 mt-16 mb-8">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        <span class="px-4 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-bold uppercase tracking-widest rounded-full">Phần 2 — Ứng Dụng AI Chuyên Sâu</span>
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      </div>

      <h3 id="ai-report-analysis" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">8.5 Ứng dụng AI: Đọc báo cáo & Ra quyết định</h3>
      <p class="text-slate-300 mb-6">Bài toán thường gặp: Nhìn vào đống Excel 5.000 dòng mà không biết rút ra điều gì. AI giúp bạn <strong>biến dữ liệu thô thành bản tóm tắt chiến thuật</strong> trong 10 phút và kết nối ngược lại với Kế hoạch từ Đảo 3 để điều chỉnh kịp thời.</p>

      <div class="space-y-6">

        <div class="relative pl-10 pb-8 border-l-2 border-violet-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-violet-700 border-2 border-violet-400 flex items-center justify-center text-white text-xs font-bold">1</div>
          <strong class="text-violet-300 text-lg block mb-1">Bước 1: Nạp dữ liệu & Yêu cầu AI tóm tắt nhanh</strong>
          <p class="text-slate-400 text-sm mb-3">Upload file CSV/Excel hoặc dán dữ liệu thô vào, yêu cầu AI phân tích theo đúng 3 câu hỏi chiến thuật.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-violet-400 font-mono font-bold">step_1_data_summary.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178]">
              <p>Tôi vừa đính kèm file [<span class="text-violet-300">Tên file</span>] chứa dữ liệu [<span class="text-violet-300">kết quả chiến dịch/doanh thu tháng/lượng tương tác</span>].</p>
              <p class="mt-2">Hãy phân tích với tư cách <span class="text-violet-300">chuyên gia Business Intelligence</span> và trả lời 3 câu hỏi:</p>
              <p class="text-slate-500 mt-2"># CÂU 1: Chỉ số nào đang TỐT hơn kế hoạch? Tại sao? (Để nhân đôi nó)</p>
              <p class="text-slate-500"># CÂU 2: Chỉ số nào đang TỆ hơn kế hoạch? Nguyên nhân gốc rễ là gì? (Để cắt hoặc thay đổi)</p>
              <p class="text-slate-500"># CÂU 3: Có insight ẩn nào trong dữ liệu mà mắt thường không thấy không? (Cơ hội đang bỏ lỡ)</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-8 border-l-2 border-violet-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-amber-600 border-2 border-amber-400 flex items-center justify-center text-white text-xs font-bold">2</div>
          <strong class="text-amber-300 text-lg block mb-1">Bước 2: AI so sánh Thực tế vs. Kế hoạch (Đảo 3)</strong>
          <p class="text-slate-400 text-sm mb-3">So sánh kết quả thực tế với KPI đã đặt trong Kế hoạch tổng (Đảo 3), xác định khoảng cách và nguyên nhân.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-amber-400 font-mono font-bold">step_2_plan_vs_actual.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178] space-y-2">
              <p>KPI tôi đặt ra theo Kế hoạch tổng (Đảo 3): [<span class="text-amber-300">Dán KPIs từ Đảo 3 vào</span>]</p>
              <p class="mt-2">Kết quả thực tế tháng vừa qua: [<span class="text-amber-300">Dán số liệu thực tế</span>]</p>
              <p class="text-slate-500 mt-2"># Yêu cầu: Tạo bảng Plan vs. Actual. Chỉ ra chỉ số nào đạt, vượt, chưa đạt. Đề xuất 3 hành động điều chỉnh cụ thể cho tháng tiếp theo.</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-2 border-l-2 border-violet-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-emerald-600 border-2 border-emerald-400 flex items-center justify-center text-white text-xs font-bold">3</div>
          <strong class="text-emerald-300 text-lg block mb-1">Bước 3: Vòng lặp hoàn chỉnh - Đo xong thì làm gì?</strong>
          <div class="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-4">
            <p class="text-emerald-400 font-semibold mb-2">🔗 Kết nối 8 Đảo lại với nhau:</p>
            <p class="text-slate-300 text-sm">Những gì học được từ báo cáo Đảo 8 sẽ <strong class="text-white">phản hồi ngược</strong> vào Đảo 3 để cập nhật kế hoạch. Từ kế hoạch mới, điều chỉnh Lịch nội dung (Đảo 4) → Phân phối đa kênh (Đảo 6) → Email chăm sóc (Đảo 7). Đây là vòng lặp <strong class="text-white">Plan → Execute → Measure → Adjust</strong> chạy liên tục - nền tảng của mọi team marketing hiệu quả.</p>
          </div>
        </div>

      </div>

      <h3 id="ai-case-study-8" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-16 scroll-mt-24">8.6 Demo: Case Study Shop Thời Trang</h3>
      <p class="text-slate-300 mb-6">Xem cách AI giúp một shop thời trang nữ online tìm đúng nguyên nhân thất bại của chiến dịch - thay vì họp hành đổ lỗi cho nhau.</p>

      <div class="bg-[#1B2332] border border-violet-500/30 rounded-2xl p-6 max-w-2xl">
        <div class="flex items-center gap-3 mb-6">
          <div class="text-4xl drop-shadow-md">🛒</div>
          <div>
            <p class="text-xs text-slate-400 uppercase font-bold tracking-wider">Case Study — E-commerce</p>
            <strong class="text-violet-400 text-xl block mt-1">Shop Thời Trang Nữ Online</strong>
          </div>
        </div>
        <div class="space-y-5 text-sm">
          <div class="space-y-1.5">
            <p class="text-violet-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-xs">B1</span> Bối cảnh & Vấn đề</p>
            <p class="text-slate-300 pl-8">Shop đổ 50 triệu chạy ads xả kho nhưng số đơn lẹt đẹt. Trong công ty, đội Ads đổ tại sản phẩm không hút mắt, đội Sản phẩm cãi lại vì Ads nhắm sai tệp khách. Không ai biết thực sự lỗi ở đâu.</p>
          </div>
          <div class="space-y-1.5">
            <p class="text-violet-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-xs">B2</span> Ứng dụng AI</p>
            <p class="text-slate-300 pl-8">Tải file báo cáo .CSV từ Shopee và Meta Ads vào AI (Claude/GPT-4). Prompt: <em>"Đóng vai Giám đốc tăng trưởng, tìm cho tôi điểm hở trong phễu bán hàng."</em></p>
          </div>
          <div class="space-y-1.5">
            <p class="text-violet-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-xs">B3</span> Kết quả phân tích</p>
            <p class="text-slate-300 pl-8">
              • <strong>AI chỉ ra:</strong> Tỷ lệ Click (CTR) vào gian hàng rất cao - nghĩa là Ads làm tốt việc kéo traffic. Nhưng tỷ lệ chốt đơn (CVR) chỉ đạt 0.5%, thấp hơn trung bình ngành 3-4 lần. Lỗi không phải ở Ads - lỗi nằm ở trang sản phẩm.<br/>
              • <strong>Sửa chữa:</strong> Bổ sung bảng size chart chi tiết và 3 ảnh review thực tế từ khách đã mua lên trang sản phẩm.
            </p>
          </div>
          <div class="space-y-1.5">
            <p class="text-violet-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center text-xs">B4</span> Kết quả & Bài học</p>
            <p class="text-violet-300 pl-8 font-medium">CVR tăng từ 0.5% lên 3.8% - đội Ads được minh oan. Bài học: Đừng họp cãi nhau bằng cảm giác. Hãy để dữ liệu chỉ ra lỗi thực sự ở đâu.</p>
          </div>
        </div>
      </div>

    </div>
  `,
  sources: [],
  quiz: [
    {
      id: 1,
      question: "Dấu hiệu rõ nhất của một 'chỉ số phù du' (Vanity Metric) là gì?",
      options: ["Chỉ số đó rất khó đo lường chính xác", "Con số trông đẹp (nhiều like, nhiều view) nhưng không giúp bạn quyết định phải làm gì tiếp theo để tăng doanh thu", "Chỉ số đó không thể hiển thị trên Google Analytics", "Chỉ đo được trên Facebook chứ không đo được trên TikTok"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Một doanh nghiệp marketing 'bền vững' khi tỷ lệ CAC và LTV đạt mức nào?",
      options: ["CAC = LTV (hòa vốn là đủ)", "CAC lớn hơn LTV (chi nhiều thì thu nhiều)", "LTV ≥ 3 lần CAC (cứ bỏ 1 đồng ra lấy khách, khách mang về ít nhất 3 đồng)", "Không cần quan tâm nếu doanh thu đang tăng"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Việc cài Tracking Pixel (FB/TikTok) vào website chủ yếu giúp làm gì?",
      options: ["Tăng tốc độ load trang web", "Theo dõi hành trình của khách qua từng bước (xem sản phẩm → thêm giỏ → thanh toán) để tối ưu quảng cáo và nhắc nhở khách bỏ giỏ hàng quay lại", "Giúp website xuất hiện cao hơn trên Google Search", "Theo dõi nhân viên đang làm việc gì trên máy tính"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Khi team cãi nhau 'nút CTA màu đỏ hay màu xanh hiệu quả hơn', cách giải quyết tốt nhất là gì?",
      options: ["Hỏi ý kiến sếp và làm theo", "Chạy A/B Test: chia traffic thành 2 nhóm, một nhóm thấy nút đỏ, một nhóm thấy nút xanh — để dữ liệu thực tế phán quyết sau 1-2 tuần", "Làm theo cảm giác của đa số trong team", "Thuê chuyên gia tư vấn bên ngoài"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "Trong case study shop thời trang, AI phát hiện vấn đề thực sự nằm ở đâu?",
      options: ["Ngân sách quảng cáo quá thấp", "Ads nhắm sai tệp khách hàng mục tiêu", "Trang sản phẩm thiếu thông tin (size chart, ảnh review) khiến khách không yên tâm mua — dù Ads kéo traffic rất tốt", "Giá sản phẩm cao hơn đối thủ"],
      correctAnswer: 2
    }
  ]
};
