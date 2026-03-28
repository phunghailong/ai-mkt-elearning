import { Eye } from 'lucide-react';

export const island2 = {
  id: 2,
  title: "#2: Đảo Thấu Cảm",
  slug: "dao-thau-cam",
  icon: Eye,
  description: `<div class="font-bold text-[#e8dcc7] mb-2 border-b border-[#4a3b2c] pb-1">Trạm Thấu Cảm Tối Thượng</div>
  <ul class="space-y-1.5 list-none text-[13px] mt-2">
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Tìm hiểu Insight ẩn sâu</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Tâm lý học Hành Vi: Vì sao khách xuống tiền?</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Phương pháp Jobs-to-be-Done (JTBD)</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Tại sao Marketer cần học Sử, Xã hội, Văn hóa?</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Ứng Dụng AI: Bóc Điểm Yếu Đối Thủ & Tìm Insight Vàng</li>
  </ul>`,
  color: "from-rose-900 to-red-800",
  videoUrl: "",
  toc: [
    { id: 'pain-points-va-insight', title: '2.1 Nỗi đau (Pain Points) và Cú vỡ lẽ Insight' },
    { id: 'tam-ly-hoc-hanh-vi', title: '2.2 Tâm lý học Hành Vi: Vì sao khách xuống tiền?' },
    { id: 'mo-hinh-tam-ly', title: '2.3 Vũ khí: Các Mô hình Tâm lý mồi nhử' },
    { id: 'jobs-to-be-done', title: '2.4 Phương pháp Jobs-to-be-Done (JTBD)' },
    { id: 'bai-hoc-xa-hoi', title: '2.5 Tại sao Marketer cần học Sử, Xã hội, Văn hóa?' },
    { id: 'ai-workflow-island2', title: '2.6 Ứng Dụng AI: Bóc Điểm Yếu Đối Thủ & Tìm Insight Vàng' },
    { id: 'ai-case-study-2', title: '2.7 Thực Chiến: 2 Case Study Ngành VN' }
  ],
  contentHtml: `
    <div class="space-y-12">
      <p class="text-lg leading-relaxed text-slate-300">Không có một chiến dịch nào thành công nếu ta chỉ ngồi đoán mò trong phòng kính máy lạnh. Mọi quyết định hay ho nhất đều đến từ việc chúng ta lang thang ra ngoài cửa hàng, hay social, quan sát và lắng nghe tâm tư, văn hóa của người mua.</p>

      <h3 id="pain-points-va-insight" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">2.1 Nỗi đau (Pain Points) và Kho báu ngầm (Insight)</h3>
      <p class="text-slate-300 mb-4">Để bán được thuốc, bạn phải biết khách hàng đang đau ở đâu. <strong>Pain Points (Nỗi đau khách hàng)</strong> chính là rào cản, cái gai trong mắt ngăn cản họ tận hưởng cuộc sống.</p>
      
      <div class="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
        <h4 class="text-red-400 font-bold text-lg mb-2">4 Loại Nỗi Đau Phổ Biến Nhất:</h4>
        <ul class="list-disc pl-5 space-y-2 text-sm text-slate-300">
          <li><strong>Nỗi đau Tài chính (Financial Pain):</strong> "Giá cái máy này đắt quá so với lương tháng của tôi!" -> Giải pháp: Cho trả góp 0%.</li>
          <li><strong>Nỗi đau Năng suất (Productivity Pain):</strong> "Kế toán chốt sổ cuối tháng bằng Excel làm tôi tốn nguyên 3 ngày thức đêm" -> Giải pháp: Bán phần mềm ERP tự động.</li>
          <li><strong>Nỗi đau Mối quan hệ/Xã hội (Social Pain):</strong> "Mặc váy này sợ bị bạn bè chê mập" -> Giải pháp: Thiết kế che khuyết điểm bụng phệ.</li>
          <li><strong>Nỗi đau Quy trình (Process Pain):</strong> "Trời ơi, cái Web này bắt đăng nhập 5 bước rối rắm quá, tôi thoát luôn!" -> Giải pháp: Nút Login by Google 1 giây.</li>
        </ul>
      </div>

      <p class="text-slate-300 mb-4 mt-6 text-justify">Đào sâu hơn Nỗi đau, ta sẽ tìm thấy <strong>Insight (Sự thật ngầm hiểu)</strong> - thứ khách khao khát cháy bỏng nhưng không bao giờ nói ra mặt! (Vì có thể chính họ cũng khó gọi tên)</p>
      
      <div class="bg-slate-900 border border-slate-800 p-6 rounded-2xl mt-6">
         <h4 class="text-blue-400 font-bold text-xl mb-4">Sự Thật vs Insight?</h4>
         <div class="space-y-4 text-slate-300 text-sm">
            <div class="bg-black/30 p-4 rounded-lg border border-slate-700">
              <span class="text-red-400 font-bold">Thực trạng bề nổi (Sự Thật):</span> 
              <p class="mt-1">"Đàn ông đi mua quà 8/3 cho người yêu cảm thấy rất lóng ngóng và tốn thời gian chọn lựa."</p>
            </div>
            
            <div class="bg-black/30 p-4 rounded-lg border border-slate-700">
              <span class="text-emerald-400 font-bold">Insight Bậc Thầy:</span>
              <p class="mt-1 font-medium text-white italic">"Đàn ông bỏ ra 2 triệu mua thỏi son Tom Ford không phải vì họ phân biệt được màu Đỏ Thuần hay Đỏ Đất. Họ mua mức GIÁ ĐÓ và THƯƠNG HIỆU ĐÓ để đổi lấy <strong>sự vỡ òa an toàn</strong> - tức là cô bạn gái mở ra chắc chắn sẽ phải hú lên vui sướng, không lo bị giận bù lu bù loa vì chê quà rẻ tiền."</p>
            </div>
         </div>
      </div>

      <h3 id="tam-ly-hoc-hanh-vi" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">2.2 Tâm lý học Hành vi (Behavioral Psychology - đây là chủ đề tôi mê nhất nên là mới có mấy kênh Anh thợ Marketing Tâm lý đó :D)</h3>
      <p class="text-slate-300 mb-4">Các nhà kinh tế học cổ điển cho rằng: Con người rất lý trí. <br/> Nhưng Tâm lý học hành vi chứng minh: <strong>Con người là sinh vật Vô lý, hành động bằng cảm xúc rồi mới dùng lý trí để ráng bào chữa.</strong></p>
      <p class="text-slate-300 mb-4">Sức ép vô hình từ não bò sát khiến con người quyết định mua sắm phụ thuộc cực nhiều vào môi trường, hoàn cảnh, âm nhạc và những con số mồi nhử. Nắm được tâm lý, Content (Bài viết) của bạn sẽ sắc tựa dao cạo - chọt thẳng vào trái tim người đọc mà họ không thể kháng lại sức hút!</p>

      <h3 id="mo-hinh-tam-ly" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">2.3 04 Mô hình Tâm Lý phổ biến trong Marketing</h3>
      
      <div class="grid md:grid-cols-2 gap-6 my-6 text-slate-300">
        <div class="bg-slate-900 p-6 rounded-xl border border-dashed border-amber-500/50">
          <strong class="text-amber-400 text-lg flex items-center gap-2">🦆 The Decoy Effect (Hiệu ứng Chim Mồi)</strong>
          <p class="mt-2 text-sm leading-relaxed">
            Pháp sư mồi chài vĩ đại!
            <br/>Cốc Bắp rang <strong>Nhỏ: 30K</strong>. (Bạn sẽ mua).
            <br/>Tuỳ chọn <strong>Vừa: 50K</strong> và <strong>Lớn: 55K</strong>.
            <br/>Đột nhiên ly Lớn dường như trở thành BẤT NGỜ CỰC LỜI. Ly Vừa (50K) sinh ra không phải để bán, mà để đun lót, biến ly Lớn thành sự lựa chọn thông minh nhất.
          </p>
        </div>
        <div class="bg-slate-900 p-6 rounded-xl border border-dashed border-indigo-500/50">
          <strong class="text-indigo-400 text-lg flex items-center gap-2">⏳ Scarcity & FOMO (Sự Khan Hiếm)</strong>
          <p class="mt-2 text-sm leading-relaxed">
            Nỗi sợ bị bỏ lỡ (Fear Of Missing Out) thao túng lý trí. 
            <br/><em>"Chỉ còn đúng 2 phòng trên Agoda với mức giá này"</em> hay <em>"Flash Sale dọn kho đếm ngược 13 phút nữa kết thúc"</em>. Bộ não sẽ báo động đỏ: Phải xuống tiền ngay lập tức nếu không sẽ gánh chịu tổn thất.
          </p>
        </div>
        <div class="bg-slate-900 p-6 rounded-xl border border-dashed border-emerald-500/50">
          <strong class="text-emerald-400 text-lg flex items-center gap-2">⚓ Anchoring (Hiệu ứng Mỏ Neo)</strong>
          <p class="mt-2 text-sm leading-relaxed">
            Con số ĐẦU TIÊN khách nhìn thấy sẽ thành tiêu chuẩn phán xét. 
            <br/>Ví dụ một chiếc áo niêm yết <strong>2.000.000 VNĐ</strong> (Mỏ neo). Sau đó Gạch chéo bự chà bá -> <strong>Giảm còn 700.000 VNĐ</strong>. Mặc dù 700k vẫn mắc cho một cái áo thun, nhưng não bạn đã bị "neo" bởi số 2 Triệu, khiến vụ chốt Sale này tự nhiên biến thành "một món hời khổng lồ".
          </p>
        </div>
        <div class="bg-slate-900 p-6 rounded-xl border border-dashed border-pink-500/50">
          <strong class="text-pink-400 text-lg flex items-center gap-2">🎁 Reciprocity (Sự Có đi Có lại)</strong>
          <p class="mt-2 text-sm leading-relaxed">
            Luật nhân quả của Marketing! Khi bạn tặng miễn phí 1 cuốn E-book giá trị, hay mời khách ăn thử 1 thớ bánh mì phô mai nóng hổi trong siêu thị. Họ sẽ nảy sinh <em>Trách nhiệm mắc nợ vô hình</em> và tỷ lệ mua ngay hộp bánh đó tăng lên 400% vì CẢ NỂ và BIẾT ƠN.
          </p>
        </div>
      </div>

      <h3 id="jobs-to-be-done" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">2.4 Phương pháp Jobs-to-be-Done (JTBD)</h3>
      <p class="text-slate-300 mb-4">Khách hàng không mua mũi khoan tường, họ "Thuê" (Hire) mũi khoan để đục một cái lỗ (Job To Be Done) treo bằng khen cho con. <em>Hãy đọc kỹ lại câu này, nó thật sự vi diệu đấy!</em></p>
      <ul class="list-decimal pl-6 space-y-4 text-slate-300">
        <li class="pl-2">
          <strong>Nhiệm vụ Chức năng vật lý:</strong> Giải quyết tính tiện dụng.
          <span class="block text-slate-400 text-sm mt-1">VD: Mua sổ tay để chép việc.</span>
        </li>
        <li class="pl-2">
          <strong>Nhiệm vụ Cảm xúc cá nhân:</strong> Món đồ xoa dịu tôi thế nào?
          <span class="block text-slate-400 text-sm mt-1">VD: Mua chậu cây Sen đá đặt bàn để thấy "mình có một sinh linh nhỏ để chăm sóc sau giờ làm mệt nhọc cô đơn".</span>
        </li>
        <li class="pl-2">
          <strong>Nhiệm vụ Xã hội học (Social Job):</strong> Thể hiện Cái Tôi với thế giới?
          <span class="block text-slate-400 text-sm mt-1">VD: Đeo khoe chiếc nhẫn cầu hôn Kim Cương tự nhiên 2 Tỷ để bạn gái đăng lên Story, chứng minh Tình yêu và Địa vị xã hội của gia tộc.</span>
        </li>
      </ul>

      <h3 id="bai-hoc-xa-hoi" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">2.5 Lời khuyên: Nâng cấp não bộ bằng Lịch sử & Văn hoá</h3>
      <div class="bg-blue-900/10 border border-blue-900/50 p-6 rounded-2xl">
        <p class="text-slate-300 text-sm leading-relaxed mb-4">Một Marketer nếu chỉ học cách chạy Ads, viết Content giật gân thì mãi là thợ rèn. Để trở thành một Bậc Thầy (Master), bạn cần dấn thân vào <strong class="text-slate-100">Xã hội học, Khảo cổ Văn hóa, Lịch sử và Tôn giáo</strong>.</p>
        <p class="text-slate-300 text-sm leading-relaxed">
          Tại sao người Hà Nội ăn phở phải có quẩy, thích vị thanh tao trầm mặc, cafe phin tí tách cả ngày; trong khi người Sài Gòn uống cafe sữa đá như giải khát, ăn phở kèm cả rổ rau tương đen béo ngậy? Sự khác biệt giao thoa từ ngàn năm lịch sử, khí hậu thời tiết sẽ quyết định Insight Vùng Miền. Nếu bạn không hiểu Văn Hóa, bạn sẽ dễ dàng tạo ra những chiến dịch... thất bại thảm hại, thậm chí drama đập tan thương hiệu của chính bạn (như rất nhiều người đã làm)!
        </p>
      </div>

      <h3 id="prompt-library-2" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">Bonus: Prompt Library Mồi Nhử Tâm Lý</h3>
      <p class="text-slate-300 mb-4">Tặng Thuyền trưởng mã lệnh biến GPT/Claude thành một Bác sĩ tâm lý siêu việt. Copy đoạn Code dưới đây thẳng vào AI nhé:</p>
      
      <div class="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-slate-700">
        <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
          <div class="flex space-x-2">
            <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <span class="ml-4 text-xs text-slate-400 font-mono">Psychology_Hacker.chat</span>
        </div>
        <div class="p-4 text-sm font-mono leading-relaxed overflow-x-auto text-[#d4d4d4]">
<pre><code><span class="text-[#569cd6]"># ROLE (Vai trò)</span>
<span class="text-[#ce9178]">Bạn là Nhà Tâm lý học hành vi siêu hạng, học trò của Daniel Kahneman (tác giả Tư Duy Nhanh và Chậm). Bạn căm ghét những bài bán hàng khuôn mẫu sáo rỗng. Bạn chỉ thích khoét sâu vào nỗi đau tột cùng của con người.</span>

<span class="text-[#569cd6]"># CONTEXT (Bối cảnh)</span>
<span class="text-[#ce9178]">Đối tượng khách hàng của tôi: [Nhập TA - VD: Nam giới 30-45 tuổi, đã có gia đình, đang bị béo phì do nhậu nhẹt tiếp khách]
Sản phẩm/Dịch vụ: [VD: Liệu trình Gym trị liệu cam kết giảm 5kg trong 2 tháng, giá thẻ 20 triệu]</span>

<span class="text-[#569cd6]"># TASK (Nhiệm vụ)</span>
<span class="text-[#ce9178]">Vì giá trị cao, tao cần mổ xẻ tâm lý thật sâu để xây kịch bản quảng cáo. Hãy liệt kê cho tôi:
1. Xác định 3 Vùng Nỗi Đau Lớn (Pain points) của anh ta: Pain Tài chính, Pain Sức khỏe (Sinh lý), Pain Xã hội (Ánh mắt của vợ, hoặc lòng tự trọng với đối tác).
2. Xây dựng 2 Kịch bản mồi nhử Tâm lý học: 
  - Kịch bản 1 dùng HIỆU ỨNG MỎ NEO (Anchoring) để làm cho giá 20 Triệu trông có vẻ rẻ bèo.
  - Kịch bản 2 dùng NỖI SỢ MẤT MÁT (FOMO/Loss Aversion) mạnh mẽ để đánh vào việc nếu anh ta trì hoãn không đi tập thì sẽ mất cái gì quý giá nhất đời người.</span>

<span class="text-[#569cd6]"># TONE & STYLE</span>
<span class="text-[#ce9178]">Giọng văn tối cường, hơi hắc ám, sâu cay, chọc trúng tim đen.</span></code></pre>
        </div>
      </div>

      <div id="ai-sep-2" class="flex items-center gap-3 mt-16 mb-8">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"></div>
        <span class="px-4 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-widest rounded-full">Phần 2 — Ứng Dụng AI Chuyên Sâu</span>
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"></div>
      </div>

      <h3 id="ai-workflow-island2" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">2.6 Ứng Dụng AI: Bóc Điểm Yếu Đối Thủ & Tìm Insight Vàng</h3>
      <p class="text-slate-300 mb-6">Bài toán: Bạn không có ngân sách nghiên cứu thị trường 200 triệu. AI sẽ giúp bạn thực hiện điều đó trong <strong>2-3 giờ ngồi cafe</strong> bằng cách biến mọi Review công khai của đối thủ thành mỏ vàng Insight chưa ai khai thác.</p>

      <div class="space-y-6">

        <div class="relative pl-10 pb-8 border-l-2 border-rose-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-rose-700 border-2 border-rose-400 flex items-center justify-center text-white text-xs font-bold">1</div>
          <strong class="text-rose-300 text-lg block mb-1">Bước 1: Thu thập Dữ liệu Thô (Cào Review Đối thủ)</strong>
          <p class="text-slate-400 text-sm mb-3">Sao chép 50-100 bình luận/đánh giá của Đối thủ từ Google Maps, Shopee, Facebook, TikTok vào một file text. Đây là Nguyên liệu thô quý giá nhất.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-rose-400 font-mono font-bold">step_1_collect_reviews.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178]">
              <p>Đây là <span class="text-rose-300">100 Reviews</span> của [Tên đối thủ] thu thập từ [Nguồn: Google/Shopee/Facebook]:</p>
              <p class="mt-2">[Dán toàn bộ nội dung Reviews thô vào đây]</p>
              <p class="mt-3 text-slate-500"># Lưu ý: Càng nhiều Reviews thật, kết quả phân tích càng chính xác.</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-8 border-l-2 border-rose-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-amber-600 border-2 border-amber-400 flex items-center justify-center text-white text-xs font-bold">2</div>
          <strong class="text-amber-300 text-lg block mb-1">Bước 2: AI Phân tích & Tìm Lỗ Hổng Thị Trường</strong>
          <p class="text-slate-400 text-sm mb-3">Chuyển AI thành nhà Phân tích Thị trường khắc nghiệt để khai quật Nỗi đau ngầm chưa ai giải quyết.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-amber-400 font-mono font-bold">step_2_market_analysis.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178] space-y-2">
              <p>Phân tích toàn bộ Reviews trên với tư cách là <span class="text-amber-300">Chuyên gia Nghiên cứu Thị trường</span>. Trả lời 3 câu hỏi:</p>
              <p class="text-slate-500 mt-2"># CÂU HỎI 1: NỖI ĐAU THẬT SỰ</p>
              <p>Liệt kê <span class="text-amber-300">Top 5 Nỗi đau/Than phiền</span> được nhắc đến nhiều nhất. Phân loại theo: Process Pain / Financial Pain / Support Pain.</p>
              <p class="text-slate-500 mt-2"># CÂU HỎI 2: LỖ HỔNG THỊ TRƯỜNG</p>
              <p>Từ các than phiền trên, đối thủ đang <span class="text-amber-300">để trống khoảng trống thị trường nào</span> chưa ai lấp đầy? Đây chính là cơ hội của tôi.</p>
              <p class="text-slate-500 mt-2"># CÂU HỎI 3: INSIGHT ẨN SÂU</p>
              <p>Người ta nói họ muốn gì, nhưng thực ra họ cần gì? Hãy <span class="text-amber-300">bóc tách 1 Insight sâu nhất</span> mà chính khách hàng không thể tự diễn đạt được.</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-2 border-l-2 border-rose-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-emerald-600 border-2 border-emerald-400 flex items-center justify-center text-white text-xs font-bold">3</div>
          <strong class="text-emerald-300 text-lg block mb-1">Bước 3: Chuyển hóa Insight thành Thông điệp - Gửi cho Đảo 3 và các Đảo sau</strong>
          <p class="text-slate-400 text-sm mb-3">Insight hay mà không hành động được thì vô nghĩa. Đây là bước kết nối: Output của Đảo 2 chính là Input (Nguyên liệu đầu vào) cho Đảo 3 xây Kế hoạch Tổng.</p>
          <div class="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-4">
            <p class="text-emerald-400 font-semibold mb-2">🔗 Liên kết Đảo 2 → Đảo 3:</p>
            <p class="text-slate-300 text-sm">Lấy <strong class="text-white">Insight Vàng</strong> vừa khai quật được ở Bước 2, dán trực tiếp vào ô "Bối cảnh khách hàng" trong Prompt Bước 1 của Đảo 3. AI sẽ dùng Insight đó để tạo ra <strong class="text-white">Thông điệp Cốt lõi (Key Message)</strong> đúng hướng ngay từ đầu, không phải đoán mò.</p>
          </div>
        </div>

      </div>

      <h3 id="ai-case-study-2" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-16 scroll-mt-24">2.7 Demo: 2 Case Study Ngành Việt Nam</h3>
      <p class="text-slate-300 mb-6">Demo cách AI giúp 2 thương hiệu khai quật Insight Vàng từ đại dương Reviews, tìm ra Lỗ hổng thị trường và xây dựng vị thế độc quyền. <em>(Nhớ đây chỉ là Demo thôi đấy, nên cũng sương sương thôi)</em></p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Case 01 -->
        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-rose-500/40 transition-all flex flex-col">
          <div class="flex items-center gap-3 mb-6">
            <div class="text-4xl drop-shadow-md">💄</div>
            <div>
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider">Case Study 01 — Mỹ Phẩm</p>
              <strong class="text-rose-400 text-xl block mt-1">Kem Trị Mụn Tệp GenZ</strong>
            </div>
          </div>
          <div class="space-y-4 text-sm flex-1">
            <div class="space-y-1.5">
              <p class="text-rose-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-xs">B1</span> Bối cảnh & Vấn đề</p>
              <p class="text-slate-300 pl-8">Thị trường kem trị mụn Gen Z cạnh tranh khốc liệt như chảo lửa. Hãng nào cũng hô hào "sạch mụn 7 ngày, tinh chất ngừa mụn". Khách hàng trở nên vô cảm và liên tục đổi sản phẩm sau mỗi liệu trình.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-rose-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-xs">B2</span> Giải pháp ứng dụng AI</p>
              <p class="text-slate-300 pl-8">Sử dụng AI cào 50.000 bình luận trên Shopee Mall của đối thủ. AI tìm ra Keyword ẩn đau đớn nhất: <em>"để lại sẹo thâm", "da yếu hẳn đi"</em>. AI quét trúng <strong>Lỗ hổng "Hậu trị mụn"</strong> chưa ai đụng tới.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-rose-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-xs">B3</span> Bản đồ triển khai</p>
              <p class="text-slate-300 pl-8">Quay xe truyền thông: Ngừng bán Kem trị mụn đơn lẻ. Sinh ra <strong>Combo Mụn & Thâm Tích Hợp</strong>. Đánh rát thông điệp: <em>"Hết mụn mới chỉ là nửa chặng đường trận chiến - Phục hồi sẹo lồi lõm mới trả lại thanh xuân cho bạn."</em></p>
            </div>
            <div class="space-y-1.5">
              <p class="text-rose-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-xs">B4</span> Kết quả & Bài học</p>
              <p class="text-rose-300 pl-8 font-medium">Bán Combo (Upsell) đẩy Giá trị Đơn Hàng (AOV) tăng 45%. Bài học: Nghiên cứu đối thủ không phải làm tốt hơn họ, mà là lấp vào chỗ Nhu cầu Ẩn (Unmet Need) khách đang than khóc.</p>
            </div>
          </div>
        </div>

        <!-- Case 02 -->
        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-amber-500/40 transition-all flex flex-col">
          <div class="flex items-center gap-3 mb-6">
            <div class="text-4xl drop-shadow-md">🥛</div>
            <div>
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider">Case Study 02 — Healthy F&B</p>
              <strong class="text-amber-400 text-xl block mt-1">Sữa Hạt Dinh Dưỡng Cao Cấp</strong>
            </div>
          </div>
          <div class="space-y-4 text-sm flex-1">
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B1</span> Bối cảnh & Vấn đề</p>
              <p class="text-slate-300 pl-8">Định vị ban đầu là "Sữa thay thế sữa bò, nhiều canxi". Hậu quả bị so sánh giá trực tiếp với các dòng sữa bịch công nghiệp giá siêu rẻ, bị đè bẹp tỷ suất lợi nhuận, không thể giáo dục khách hàng.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B2</span> Giải pháp ứng dụng AI</p>
              <p class="text-slate-300 pl-8">AI phân tích hội nhóm Thuần Chay/Yoga. Quét ra Cảm xúc Chủ đạo: Người dùng chọn uống Hạt không phải vì đói, mà là khát khao <strong>Thanh lọc lối sống, xoa dịu Áp lực đô thị</strong>. Lỗ hổng: Đừng bán Đồ ăn, hãy bán Lối sống (Lifestyle).</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B3</span> Bản đồ triển khai</p>
              <p class="text-slate-300 pl-8">Re-branding sang Vibe "Zen/Chữa lành". Bao bì tối giản mộc mạc. Thông điệp xuyên suốt: <em>"Mỗi ngụm sữa hạt là một lần bạn chọn nhẹ nhàng hơn - cho cơ thể và tâm trí, cởi trói nhịp sống hối hả."</em></p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B4</span> Kết quả & Bài học</p>
              <p class="text-amber-300 pl-8 font-medium">Lệnh giá (Premium Pricing) cao hơn thị trường 30% vẫn đứt hàng. Bài học: Khi chạm được đúng Cõi Khát Khao Cảm Xúc, khách hàng sẽ trung thành và bỏ qua rào cản Giá cả.</p>
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
      question: "Câu đố Pain Point: Khách hàng lên án 'Trời ơi, app bên em để nút giỏ hàng giấu tuốt luốt trong menu 3 cấp ai mà mua được'. Đây là nỗi đau (Pain point) loại gì?",
      options: ["Financial Pain (Tài chính)", "Productivity Pain (Năng suất)", "Process Pain (Quy trình/Trải nghiệm rườm rà)", "Social Pain (Xã hội)"],
      correctAnswer: 2
    },
    {
      id: 2,
      question: "Một chiếc Tivi Sony có giá gốc 15 Tr. Siêu thị điện máy cố tình bày cạnh bên 1 chiếc màn hình Y chang nhưng của hãng vô danh với giá 14 Tr (Không khác biệt mấy). Khiến khách lập tức chốt Sony vì nghĩ 'Thêm 1 Triệu mà được chính hãng tội gì'. Siêu thị đã dùng loại ma thuật tâm lý nào?",
      options: ["Tặng quà có đi có lại", "Hiệu ứng Chim Mồi (The Decoy Effect)", "Hiệu ứng Hào Quang (Halo Effect)", "Cảm giác Khan hiếm"],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Thương hiệu nào nổi tiếng dội bom não bộ khách hàng bằng hiệu ứng FOMO (Khan hiếm khẩn cấp)?",
      options: ["Shopee (Flash Sale nửa đêm nhảy số)", "Rolex", "Highland Coffee", "Apple"],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "Sự khác biệt rõ nét nhất giữa Nghiên cứu Định Lượng và Định Tính là gì?",
      options: ["Định lượng đếm CÓ BAO NHIÊU người. Định tính hỏi sâu CẢM XÚC/LÝ DO VÌ SAO của một vài người.", "Định lượng rẻ, Định tính tốn tiền", "Định lượng làm mất 1 ngày, Định tính mất 1 tháng", "Không có sự khác biệt"],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "Một Marketer đỉnh cao để chạm đến Cảnh Rắn (Insight Đỉnh) thì luôn phải bổ sung kiến thức về lĩnh vực ngoại lai nào?",
      options: ["Code Game", "Vật lý lượng tử", "Thiết kế kiến trúc", "Lịch sử, Tôn Giáo, Xã Hội Học, Văn Hóa vùng miền"],
      correctAnswer: 3
    }
  ]
};
