import { BookOpen } from 'lucide-react';

export const island4 = {
  id: 4,
  title: "#4: Thư Viện Cổ",
  slug: "thu-vien-co",
  icon: BookOpen,
  description: `<div class="font-bold text-[#e8dcc7] mb-2 border-b border-[#4a3b2c] pb-1">Thư Viện Cổ Ohara</div>
  <ul class="space-y-1.5 list-none text-[13px] mt-2">
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Ma trận Phễu Nội dung: TOFU/MOFU/BOFU</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Nghệ thuật Kể Chuyện Storytelling</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Công Thức Copywriting</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Brand Voice</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Kế Hoạch Nội Dung</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Ứng Dụng AI: Xây Content Calendar 30 Ngày</li>
  </ul>`,
  color: "from-amber-900 to-orange-800",
  videoUrl: "",
  toc: [
    { id: 'content-matrix', title: '4.1 Ma trận Phễu Nội dung: TOFU/MOFU/BOFU' },
    { id: 'storytelling-frameworks', title: '4.2 Nghệ thuật Kể Chuyện (Storytelling) & Khung Hook' },
    { id: 'copywriting-formulas', title: '4.3 Công Thức Ngôn Từ (Copywriting Formulas)' },
    { id: 'brand-voice', title: '4.4 Hồn Thương Hiệu (Brand Voice)' },
    { id: 'content-plan-theory', title: '4.5 Kế Hoạch Nội Dung (Content Plan): Pillar → Angle → Calendar' },
    { id: 'ai-content-engine', title: '4.6 Ứng Dụng AI: Xây Content Calendar 30 Ngày' },
    { id: 'ai-case-study-4', title: '4.7 Thực Chiến: 2 Case Study (Spa & Homestay)' }
  ],
  contentHtml: `
    <div class="space-y-12">
      <p class="text-lg leading-relaxed text-slate-300">"Nếu Thông điệp/ Cốt truyện là ngôi nhà, thì Bối cảnh chính là khu vườn nên thơ bao quanh tạo nên 1 câu chuyện thu hút. <br>Thay vì chỉ mải mê ca ngợi những lớp bông êm ái của chiếc nệm lò xo, một người làm content hiểu nghề sẽ kể về một đêm bình yên - nơi người cha nhẹ nhàng ôm thiên thần nhỏ, cả hai cùng chìm vào giấc ngủ sâu không một lần thức giấc. <br>Hãy cùng bước vào không gian kể chuyện đầy cảm xúc này nhé!"</p>

      <h3 id="content-matrix" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">4.1 Ma Trận Phễu Nội Dung: Đưa Khách Khám Phá Từ Cửa Lâu Đài Tới Tận Ngai Vàng</h3>
      <p class="text-slate-300 mb-6">Bạn không thể gặp một cô gái lần đầu và lập tức đề nghị tiến tới kết hôn. Content cũng vậy, bạn không thể suốt ngày đăng bài Bán Hàng. Hãy dìu dắt khách hàng qua 3 giai đoạn kết thân:</p>
      
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-900/40 to-transparent p-6 rounded-2xl border-l-4 border-amber-500 shadow-md">
          <h4 class="font-bold text-amber-400 text-xl mb-2 flex items-center gap-2">👋 1. TOFU (Top of Funnel - Tầng nhận thức)</h4>
          <p class="text-slate-300 text-sm mb-2"><strong>Mục Đích:</strong> Mang lại tiếng cười, chia sẻ điều bổ ích, lan toả lượng Traffic để mọi người biết bạn là ai.</p>
          <p class="text-slate-400 text-sm"><strong>Hình Thức:</strong> Đăng 1 chiếc Meme vui nhộn kể về nỗi khổ kế toán cuối tháng, 1 video ngắn 15s mẹo vặt máy tính. Đừng có vội bán hàng giai đoạn này.</p>
        </div>
        <div class="bg-gradient-to-r from-orange-900/40 to-transparent p-6 rounded-2xl border-l-4 border-orange-500 shadow-md w-[95%]">
          <h4 class="font-bold text-orange-400 text-xl mb-2 flex items-center gap-2">🤔 2. MOFU (Middle of Funnel - Tầng cân nhắc)</h4>
          <p class="text-slate-300 text-sm mb-2"><strong>Mục Đích:</strong> Cung cấp Giải pháp Chuyên Sâu, chứng minh sự uy tín và xây lòng tin.</p>
          <p class="text-slate-400 text-sm"><strong>Hình Thức:</strong> Tặng E-book "10 Bước Cân Bằng Dinh Dưỡng", Video phân tích chi tiết "Cách chọn chất vải an toàn cho da em bé".</p>
        </div>
        <div class="bg-gradient-to-r from-red-900/40 to-transparent p-6 rounded-2xl border-l-4 border-red-500 shadow-md w-[90%]">
          <h4 class="font-bold text-red-500 text-xl mb-2 flex items-center gap-2">🎯 3. BOFU (Bottom of Funnel - Điểm nhấn chốt đơn)</h4>
          <p class="text-slate-300 text-sm mb-2"><strong>Mục Đích:</strong> Cung cấp một lý do cực kì cấp bách để khách hàng móc ví thanh toán hôm nay thay vì ngày mai.</p>
          <p class="text-slate-400 text-sm"><strong>Hình Thức:</strong> Flash Sale tri ân cuối tuần chỉ đúng 50 hộp mứt, Lời Chứng Thực (Testimonial), Miễn phí vận chuyển cho 10 đơn đầu.</p>
          </div>
          <p class="text-slate-300 mb-6">Lưu ý: Với xu hướng nội dung ngắn/ short video bán hàng, hãy đọc lại Mục 3.2 Đảo Chiến Lược để kết hợp hiệu quả lúc nào cần nhanh, lúc nào cần chậm nhé!</p>
      </div>

      <h3 id="storytelling-frameworks" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">4.2 Sách Phép Kể Chuyện (Storytelling): Chìa Khóa Mở Trái Tim Và Móc Ví</h3>
      <p class="text-slate-300 mb-4">Công thức của Joseph Campbell thống trị mọi cốt truyện phim Hollywood. Dùng sườn truyện này sẽ giúp bài viết thương hiệu lôi cuốn vô cùng, vì con người sống nhờ Lời Kể Chuyện (Storytelling).</p>
      
      <div class="bg-black/40 border border-slate-800 rounded-2xl p-6 text-sm text-slate-300">
         <p className="mb-3">🔥 <strong>Thế Giới Khởi Điểm:</strong> Chàng trai rất gầy gò, đi học luôn mắc cỡ về thân hình 45kg.</p>
         <p className="mb-3">⚡ <strong>Tiếng Gọi Đánh Thức:</strong> Được cô gái anh ấy thầm thương rủ tham gia vào một CLB Thể thao.</p>
         <p className="mb-3">🧙‍♂️ <strong>Gặp Gỡ Minh Sư:</strong> Đăng ký khoá Gym, lóng ngóng sợ sệt nhưng may mắn gặp được người PT (Huấn Luyện Viên Tận Tình).</p>
         <p className="mb-3">⚔️ <strong>Thử Thách Vực Thẳm (Cực Điểm):</strong> Rách cơ tay, nôn mửa muốn bỏ cuộc trong tháng đầu tiên, bạn bè chê cười.</p>
         <p className="mb-3">🏆 <strong>Chiến Thắng Rạng Rỡ:</strong> Sau 1 năm, lấp đầy chiếc áo sơ mi bằng bờ vai thái bình dương khỏe mạnh, tự tin tỏ tình.</p>
         <p className="italic text-yellow-500 mt-4 px-2">=> Bài học: Thay vì viết "Gói tập Gym 6 tháng của phòng tôi rất xịn, rảnh qua đăng ký", hãy viết nên một "Câu chuyện hành trình lột xác".</p>
      </div>

      <h3 id="copywriting-formulas" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">4.3 Công Thức Ngôn Từ (Copywriting Formulas)</h3>
      <p class="text-slate-300 mb-4">Để viết Status cuốn hút, hãy ngừng rập khuôn. Dưới đây là hai cấu trúc đúc kết từ hàng thập kỷ của ngành quảng cáo.</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-6 text-slate-300 text-sm">
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
           <strong class="text-emerald-400 text-lg uppercase tracking-wider block mb-3 font-mono">1. Kỹ thuật AIDA (Truyền Cảm Hứng)</strong>
           <ul class="space-y-3">
             <li><strong class="text-white">A - Attention (Gợi chú ý):</strong> "Nếu bạn cảm thấy học IELTS thật mệt mỏi, dừng lại 3 giây."</li>
             <li><strong class="text-white">I - Interest (Giữ sự thích thú):</strong> "Bạn không cần thuộc lòng hàng ngàn từ vựng tĩnh. Thẻ Flash Card 3D mới sẽ giúp mắt ảnh hóa trí nhớ."</li>
             <li><strong class="text-white">D - Desire (Khao khát thay đổi):</strong> "Chỉ 1 tuần thử qua, những từ vựng khó nhớ bỗng dưng in dấu như một bộ phim."</li>
             <li><strong class="text-white">A - Action (Hành động):</strong> "Nhấp link Dùng thử miễn phí bên dưới!"</li>
           </ul>
        </div>
        
        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-inner">
           <strong class="text-rose-400 text-lg uppercase tracking-wider block mb-3 font-mono">2. Mô hình P.A.S (Xoáy Cơn Đau)</strong>
           <ul class="space-y-3">
             <li><strong class="text-white">P - Problem (Gọi tên vấn đề):</strong> "Gáy và phần lưng lúc nào cũng nhức mỏi sau 8 tiếng gõ laptop."</li>
             <li><strong class="text-white">A - Agitate (Xát Muối Nỗi Đau):</strong> "Cơn đau này để lâu qua hàng tháng, tay bạn có thể hay bị tê rần, ngủ đêm dễ trằn trọc làm cạn kiệt sinh lực kiếm tiền!"</li>
             <li><strong class="text-white">S - Solution (Vị cứu tinh xuất hiện):</strong> "Giải pháp ngồi êm ái: Mời bạn dùng thử chiếc Ghế Công Thái Học ngả 135 độ trị liệu cột sống."</li>
           </ul>
        </div>
      </div>

      <h3 id="brand-voice" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">4.4 Hồn Thương Hiệu (Brand Voice): 100 Bài Đăng Đều Như Một Người Viết</h3>
      <p class="text-slate-300 mb-4">Chỉ bảo AI "hãy viết bài quảng cáo" là tự sát, vì thứ AI trả về sẽ là ngôn ngữ mớ hỗn độn "Chào mừng bạn, giải mã, nâng tầm, tuyệt vời...". Viết bằng AI không khó, cái khó là làm sao để AI hiểu được <strong>Brand Voice (Hồn Thương Hiệu - Tone & Giọng Điệu)</strong> của riêng bạn.</p>
      
      <div class="bg-emerald-900/10 border border-emerald-900/50 p-6 rounded-2xl space-y-6">
        <div>
          <h4 class="text-emerald-400 font-bold mb-3 flex items-center gap-2">🗣️ Tuyệt Kỹ Mồi Giọng (Tone Mimicry)</h4>
          <p class="text-slate-300 text-sm mb-4">Đừng giải thích rườm rà. Hãy copy một đoạn văn mẫu Mộc Mạc NHẤT do chính tay bạn từng viết ở quá khứ, ném cho AI phân tích và Dạy Nó Bắt Chước!</p>
          <div class="bg-black/90 p-5 rounded-xl border border-slate-800 font-mono text-sm text-slate-400 leading-relaxed overflow-x-auto">
            [LỆNH HUẤN LUYỆN 1 VÒNG]:<br/>
            Dưới đây là một đoạn văn do chính tay tôi viết mẫu. Nó mang năng lượng rất chữa lành, dùng từ ngữ ngắn gọn, thủ thỉ, rụt rè nhưng đáng yêu.<br/><br/>
Khán giả đọc Phễu: Các bà mẹ cực kỳ mệt mỏi, stress vì con gắt ngủ quấy đêm. Dễ cáu gắt, mất sức đề kháng tâm lý.</span>

<span class="text-[#569cd6]"># TASK (Nhiệm vụ Viết Bài Status)</span>
<span class="text-[#ce9178]">Hãy viết một bài đăng Facebook dài khoảng 300 chữ (Không quá dài). 
Áp dụng cấu trúc AIDA. Thay vì nói sản phẩm của tôi rất tốt, hãy Lấy Cảm Hứng Kể Chuyện (Storytelling) về Bức Tranh tương lai: Khi con ngủ yên tĩnh ở góc giường, 2 vợ chồng lần đầu tiên có 2 tiếng nằm xem 1 phim Netflix cùng nhau sau 6 tháng trời vật lộn. 
Sau khi đẩy cảm xúc hạnh phúc đó lên chóp, mới khéo léo chèn Lời Kêu Gọi lấy File PDF E-Book Dưới phần Bình luận.</span>

<span class="text-[#569cd6]"># NEGATIVE PROMPT (Lệnh Cấm Tránh Chữ AI)</span>
<span class="text-[#ce9178]">Tuyệt đối không dùng các từ sáo ngữ: Giải pháp, Tuyệt diệu, Nâng Tầm, Hé Lộ, Bật Mí, Hãy Cùng Xem Nhé. Đừng chèn Emoji rập khuôn sặc sỡ ở mọi đầu dòng.</span></code></pre>
        </div>
      </div>

    </div>

      <h3 id="content-plan-theory" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">4.5 Kế Hoạch Nội Dung (Content Plan): Pillar → Angle → Calendar</h3>
      <p class="text-slate-300 mb-6">Hầu hết Marketer viết content theo cảm hứng như người đi lạc không bản đồ. <strong>Content Plan bài bản</strong> chính là bản đồ đó và nó phải bắt nguồn từ Thông điệp Cốt lõi (Đảo 3), không phải từ bộ não của Marketer lúc cảm hứng.</p>

      <div class="space-y-6">

        <div class="bg-slate-900/60 border border-amber-500/20 rounded-2xl p-6">
          <h4 class="text-amber-400 font-bold text-lg mb-4 flex items-center gap-2">⚡ Giải phẫu Content Plan đúng nghĩa</h4>
          <div class="grid md:grid-cols-4 gap-4 text-sm">
            <div class="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4">
              <p class="text-amber-400 font-bold mb-2 text-center">1️⃣ PILLAR<br/>(Trụ Cột)</p>
              <p class="text-slate-300 text-center text-xs">3-5 chủ đề lớn bao quát toàn bộ thương hiệu.<br/>VD: <em>Kinh nghiệm, Sản phẩm, Hậu trường, Khuyến mãi, Cộng đồng</em></p>
            </div>
            <div class="bg-orange-900/20 border border-orange-500/30 rounded-xl p-4">
              <p class="text-orange-400 font-bold mb-2 text-center">2️⃣ ANGLE<br/>(Góc Nhìn)</p>
              <p class="text-slate-300 text-center text-xs">Mỗi Pillar được kể bằng nhiều góc khác nhau.<br/>VD Pillar “Kinh nghiệm”: Góc thất bại, thành công, hậu trường, FAQ</p>
            </div>
            <div class="bg-rose-900/20 border border-rose-500/30 rounded-xl p-4">
              <p class="text-rose-400 font-bold mb-2 text-center">3️⃣ FORMAT<br/>(Định Dạng)</p>
              <p class="text-slate-300 text-center text-xs">Cùng 1 Angle, dùng đa dạng hình thức.<br/>VD: Video rắn, Carousel, Reels, Blog dài, Tweet ngắn</p>
            </div>
            <div class="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-4">
              <p class="text-emerald-400 font-bold mb-2 text-center">4️⃣ CALENDAR<br/>(Lịch Đăng)</p>
              <p class="text-slate-300 text-center text-xs">Sắp xếp theo Tầng Phễu (TOFU/MOFU/ BOFU) và khung giờ phù hợp từng kênh.</p>
            </div>
          </div>
        </div>

        <div class="bg-rose-900/10 border border-rose-500/20 rounded-2xl p-6">
          <h4 class="text-rose-400 font-bold text-lg mb-3 flex items-center gap-2">🧵 Nguyên tắc Sợi Chỉ Đỏ (từ Đảo 3)</h4>
          <p class="text-slate-300 text-sm mb-4"><strong class="text-white">Quy luật vàng:</strong> Mọi Pillar Content, mọi bài viết, dù đăng kênh nào, cũng phải hỏi một câu: <em>“Bài này có phục vụ Thông điệp Cốt lõi không?”</em></p>
          <div class="grid md:grid-cols-3 gap-3 text-sm">
            <div class="bg-black/30 rounded-lg p-3 border border-slate-700">
              <p class="text-rose-400 font-semibold mb-1">Đảo 3 xác định:</p>
              <p class="text-slate-300 text-xs">Thông điệp cốt lõi<br/>+ Phân khúc khách hàng<br/>+ USP</p>
            </div>
            <div class="bg-black/30 rounded-lg p-3 border border-slate-700 text-center">
              <p class="text-amber-400 text-2xl">→</p>
              <p class="text-slate-400 text-xs mt-1">Đảo 4 phân rã thành</p>
            </div>
            <div class="bg-black/30 rounded-lg p-3 border border-slate-700">
              <p class="text-amber-400 font-semibold mb-1">Đảo 4 thực thi:</p>
              <p class="text-slate-300 text-xs">3-5 Pillar<br/>+ Angles đa dạng<br/>+ Lịch 30 ngày</p>
            </div>
          </div>
          <div class="mt-4 p-3 bg-amber-900/20 rounded-lg border border-amber-500/20">
            <p class="text-amber-300 text-sm"><strong>💡 Ví dụ thực tế:</strong> Nếu Thông điệp từ Đảo 3 là <em>“Spa giúp chị em văn phòng tìm lại sự thư giãn thực sự”</em> thì mọi Pillar phải xây quanh “sự thư giãn”: Hậu phòng trị liệu (TOFU), So sánh tác dụng (MOFU), Ưu đãi gói thư giãn cuối tuần (BOFU).</p>
          </div>
        </div>

      </div>

      <div id="ai-sep-4" class="flex items-center gap-3 mt-16 mb-8">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        <span class="px-4 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full">Phần 2 — Ứng Dụng AI Chuyên Sâu</span>
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      </div>

      <h3 id="ai-content-engine" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">4.6 Ứng Dụng AI: Xây Content Calendar 30 Ngày</h3>
      <p class="text-slate-300 mb-6">Bài toán: Đội ngũ hết ý tưởng sau 2 tuần. AI giúp bạn xây cả bộ máy sản xuất nội dung <strong>30 ngày liên tục</strong> - mỗi bài có tiêu đề rõ, format rõ, góc viết rõ - không cần phải nghĩ.</p>

      <div class="space-y-6">

        <div class="relative pl-10 pb-8 border-l-2 border-amber-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-amber-600 border-2 border-amber-400 flex items-center justify-center text-white text-xs font-bold">1</div>
          <strong class="text-amber-300 text-lg block mb-1">Bước 1: Nạp Thông điệp Cốt lõi từ Đảo 3 và Yêu cầu AI Xây 3 Pillar</strong>
          <p class="text-slate-400 text-sm mb-3">Dán Key Message và Persona(Đảo 3) vào, cho AI phát triển thành 3 Trụ Cột nội dung đủ đại diện cho thương hiệu.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-amber-400 font-mono font-bold">step_1_build_3_pillars.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178]">
              <p>Thương hiệu: [<span class="text-amber-300">Ngành hàng</span>]</p>
              <p class="mt-2">Thông điệp cốt lõi (Đảo 3): [<span class="text-amber-300">Dán vào</span>]</p>
              <p class="mt-2">Khách hàng mục tiêu: [<span class="text-amber-300">Phân khúc + Nỗi đau lớn nhất</span>]</p>
              <p class="mt-3 text-slate-500"># Nhiệm vụ: Đề xuất 3 Pillar Nội dung, mỗi Pillar:
# - Tên Pillar
# - Mục đích: Tiếp cận / Giữ chân / Chốt đơn
# - 2 Góc viết gợi ý (Angle) cho mỗi Pillar.</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-8 border-l-2 border-amber-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-indigo-600 border-2 border-indigo-400 flex items-center justify-center text-white text-xs font-bold">2</div>
          <strong class="text-indigo-300 text-lg block mb-1">Bước 2: AI Sinh Lịch 30 Ngày Chi Tiết đến Từng Tiêu đề</strong>
          <p class="text-slate-400 text-sm mb-3">Dựa vào 3 Pillar đã xây, cho AI tạo Lịch Nội dung hoàn chỉnh với tầng Phễu và hình thức đa dạng.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-indigo-400 font-mono font-bold">step_2_30day_calendar.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178] space-y-2">
              <p>Dựa vào 3 Pillar trên, hãy xuất <span class="text-indigo-300">Lịch Nội Dung 30 Ngày</span> dạng bảng:</p>
              <p class="text-slate-500 mt-2"># CÔT 1: Ngày (1-30)</p>
              <p class="text-slate-500"># CÔT 2: Pillar (được phân bố 7-7-3 theo TOFU-MOFU-BOFU)</p>
              <p class="text-slate-500"># CÔT 3: Tiêu đề bài viết (cụ thể, đầy đủ, có Hook mạnh)</p>
              <p class="text-slate-500"># CÔT 4: Định dạng (Video/Carousel/Story/Blog)</p>
              <p class="text-slate-500"># CÔT 5: Công thức viết (AIDA / PAS / Hero’s Journey)</p>
              <p class="mt-2">Lưu ý: <span class="text-rose-300">10 ngày TOFU</span> (giáo dục) + <span class="text-amber-300">5 ngày MOFU</span> (so sánh) + <span class="text-emerald-300">3 ngày BOFU</span> (chốt đơn) → lặp lại 2 vòng/tháng.</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-2 border-l-2 border-amber-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-rose-600 border-2 border-rose-400 flex items-center justify-center text-white text-xs font-bold">3</div>
          <strong class="text-rose-300 text-lg block mb-1">Bước 3: AI Viết Bài + Sinh Prompt Hình Ảnh Hỗ Trợ</strong>
          <p class="text-slate-400 text-sm mb-3">Chọn một tiêu đề từ Lịch, cho AI viết hoàn chỉnh và tự động xuất Prompt hình ảnh tương ứng (đưa sang Đảo 5 để tạo visual).</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-rose-400 font-mono font-bold">step_3_write_and_image.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178] space-y-2">
              <p>Viết bài cho Tiêu đề: [<span class="text-rose-300">Dán tiêu đề từ Lịch</span>]</p>
              <p class="text-slate-500 mt-2"># Công thức: [PAS / AIDA / Hero’s Journey — chọn từ Lịch]</p>
              <p class="text-slate-500"># Brand Voice: [Dán giọng từ Đảo 4.4]</p>
              <p class="text-slate-500"># Dài: 200-300 chữ (Facebook) hoặc 60s script (TikTok)</p>
              <p class="mt-2 text-slate-400">Sau khi viết xong, hãy xuất thêm 1 <span class="text-rose-300">Prompt ảnh Midjourney/Gemini</span> phù hợp với bài viết này để đưa qua Đảo 5 tạo visual.</p>
            </div>
          </div>
          <div class="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-4 mt-4">
            <p class="text-emerald-400 font-semibold mb-2">🔗 Kết nối Đảo 4 → Đảo 5:</p>
            <p class="text-slate-300 text-sm">Prompt ảnh được xuất từ Bước 3 sẽ được đưa thẳng vào <strong class="text-white">Workflow Đảo 5</strong> (Midjourney/Gemini + Canva Bulk Create) để tạo toàn bộ bộ banner kèm bài trong 1 lượt.</p>
          </div>
        </div>

      </div>

      <h3 id="ai-case-study-4" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-16 scroll-mt-24">4.7 Demo: 2 Case Study Ngành Việt Nam</h3>
      <p class="text-slate-300 mb-6">Workflow 3 bước được áp dụng cho 2 ngành để tạo ra Content Calendar chính xác, xuất phát từ Thông điệp (Kế Hoạch Tổng Đảo 3) và phục vụ Đa Kênh (Đảo 6).</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Case 01 -->
        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-amber-500/40 transition-all flex flex-col">
          <div class="flex items-center gap-3 mb-6">
            <div class="text-4xl drop-shadow-md">💆</div>
            <div>
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider">Case Study 01 — Wellness</p>
              <strong class="text-amber-400 text-xl block mt-1">Chuỗi Spa Gội Trị Liệu</strong>
            </div>
          </div>
          <div class="space-y-4 text-sm flex-1">
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B1</span> Bối cảnh & Vấn đề</p>
              <p class="text-slate-300 pl-8">Fanpage suốt 6 tháng chỉ lặp đi lặp lại điệp khúc chụp ảnh Giường + Bảng giá khô khan. Khách lướt qua như người vô hình, tương tác chạm đáy lèo tèo vài lượt Like ảo hoặc nhân viên tự like.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B2</span> Giải pháp ứng dụng AI</p>
              <p class="text-slate-300 pl-8">Tiêm Key Message (Đảo 3) <em>"Nơi chị em văn phòng tìm lại hơi thở"</em> vào não bộ AI. AI tự đưa ra Lịch đăng thành 3 Pillar cân đối: Hậu trường thư giãn (TOFU), So sánh trị liệu (MOFU), Điểm chốt deal (BOFU).</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B3</span> Bản đồ triển khai (Vòng lặp Phễu)</p>
              <p class="text-slate-300 pl-8">
                • <strong>TOFU (Bài Phễu)</strong>: Tiêu đề Storytelling <em>"90 phút xoa dịu đôi vai đã phải gồng gánh quá nhiều."</em><br/>
                • <strong>BOFU (Bài Chốt)</strong>: Flash Deal liền tay <em>"Chỉ 5 suất Combo 60p Đá Nóng trước 17h chiều nay."</em>
              </p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B4</span> Kết quả & Bài học</p>
              <p class="text-amber-300 pl-8 font-medium">Khách chủ động Inbox đặt chỗ trước (Booking in advance) tăng 60%. Bài học: Khi Content Plan có mồi câu đủ tầng Phễu, khách sẽ bị hút dần từ "Xem cho vui" sang "Thèm khát muốn đi".</p>
            </div>
          </div>
        </div>

        <!-- Case 02 -->
        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-indigo-500/40 transition-all flex flex-col">
          <div class="flex items-center gap-3 mb-6">
            <div class="text-4xl drop-shadow-md">🏕️</div>
            <div>
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider">Case Study 02 — Lưu trú Homestay</p>
              <strong class="text-indigo-400 text-xl block mt-1">Homestay Núi Đà Lạt</strong>
            </div>
          </div>
          <div class="space-y-4 text-sm flex-1">
            <div class="space-y-1.5">
              <p class="text-indigo-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">B1</span> Bối cảnh & Vấn đề</p>
              <p class="text-slate-300 pl-8">Quản lý bận rộn dọn dẹp, "tiện gì chụp nấy" quăng lên Mạng một mớ lá cây sương mù lộn xộn, không có tiêu điểm. Tỉ lệ chốt phòng thấp vì khách có IB mỏi mồm xong... seen.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-indigo-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">B2</span> Giải pháp ứng dụng AI</p>
              <p class="text-slate-300 pl-8">Đóng khung Key Message bằng AI: <em>"Không phải chỗ để ngủ, là chỗ để dệt kỷ niệm"</em>. AI sinh ra Lịch 30 ngày bài bản thay quản lý suy nghĩ, tạo mạch truyện liền lạc (Sequencing) gieo thương nhớ.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-indigo-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">B3</span> Bản đồ triển khai (Vòng lặp Phễu)</p>
              <p class="text-slate-300 pl-8">
                • <strong>TOFU (Bài Nhấn)</strong>: Viết bằng Hook thơ thẩn <em>"Sáng mở rèm cửa. Sương lạnh ngấm vào má. Không cất nổi bước chân..."</em><br/>
                • <strong>MOFU (Bài Neo)</strong>: Bài so sánh bẻ khóa logic não trái <em>"4 người ở 2 đêm. Đổi lại bằng đúng 1 bữa lẩu trung tâm SG."</em>
              </p>
            </div>
            <div class="space-y-1.5">
              <p class="text-indigo-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">B4</span> Kết quả & Bài học</p>
              <p class="text-indigo-300 pl-8 font-medium">Tỉ lệ lấp đầy (Occupancy Rate) cuối tuần chạm kịch khung 90% liên tiếp 3 tháng. Bài học: Content Plan tốt không chỉ là có bài để đăng, mà là Lộ trình "bắt mạch" dẫn dắt Cảm xúc của khách hàng.</p>
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
      question: "Theo kỹ năng 'Chunking Method' khi dùng AI (Gemini/ChatGPT), điều gì là CẤM KỴ nhất?",
      options: ["Bẻ nhỏ bài văn ra thành từng đoạn nhỏ", "Cung cấp tông giọng cụ thể", "Ra lệnh cho Cỗ Máy viết tràng giang đại hải 2000 chữ bằng 1 câu lệnh ngắn cộc lốc", "Chia yêu cầu thành dàn ý và thân bài"],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "Chữ 'A' đầu tiên trong Mô hình viết tự nhiên A.I.D.A mang ý nghĩa gì?",
      options: ["Action (Hành động gọi điện)", "Attention (Gợi sự chú ý, phanh khách lại)", "Attitude (Thái độ phục vụ)", "Agitate (Xoáy sâu nỗi đau)"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Trong cấu trúc Phễu (Content Matrix), bài viết có chứa nội dung Flash Sale Khẩn Cấp Bấm Link Mua Ngay thuộc Tầng Nào?",
      options: ["Tầng Giữa (MOFU) - Giáo dục", "Tầng Đáy (BOFU) - Điểm chốt đơn", "Tầng Trên Cùng (TOFU) - Nhận thức", "Không Màng Tầng Nào Cả"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Trong Mô hình The Hero's Journey (Hành trình Anh hùng), khoảnh khắc nào khiến khán giả rơi nước mắt, đồng cảm mạnh mẽ nhất?",
      options: ["Phút giây Nhận Quà Từ Thầy (Bảo vật)", "Thử thách vực thẳm cọ xát thất bại (Sự vấp ngã đau đớn muốn bỏ cuộc)", "Chỉ kể toàn chiến thắng dễ dàng", "Khúc đầu giới thiệu tên tuổi Vua Chói Lọi"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "Làm thế nào để AI bắt được Tone Văn Phong 'Brand Voice' không bị sáo rỗng (robotic)?",
      options: ["Nói với nó: Hãy viết thật hay vào nhé!", "Copy ném cho nó 1 đoạn văn bạn từng viết tốt nhất, ra lệnh cho nó hấp thụ và đóng vai bắt chước giọng điệu mộc mạc đó", "Nhấn nút F5 nạp lại điện", "Cứ để máy tự Generate ngẫu nhiên"],
      correctAnswer: 1
    }
  ]
};
