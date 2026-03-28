import { Map } from 'lucide-react';

export const island1 = {
  id: 1,
  title: "#1: Đảo Bình Minh",
  slug: "dao-binh-minh",
  icon: Map,
  description: `<div class="font-bold text-[#e8dcc7] mb-2 border-b border-[#4a3b2c] pb-1">Khởi Đầu Hành Trình</div>
  <ul class="space-y-1.5 list-none text-[13px] mt-2">
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Nền tảng Tư duy Philip Kotler & Maslow</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Khai mở Mô hình 4C & STP</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Nghệ thuật Trinh sát Đối thủ</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Brand Equity & Điểm Bán Khác Biệt (USP)</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Ứng Dụng AI: Định Hình Sản Phẩm & Chuyển Đổi Ngôn Từ</li>
  </ul>`,
  color: "from-amber-700 to-yellow-600",
  videoUrl: "",
  toc: [
    { id: 'ban-chat-marketing', title: '1.1 Bản chất của Marketing & Tháp Maslow' },
    { id: 'marketing-mix-4p-7p', title: '1.2 Từ Góc nhìn Bán (7P) sang Mua (4C)' },
    { id: 'phan-tich-doi-thu', title: '1.3 Biết người biết ta: Phân tích đối thủ' },
    { id: 'khai-niem-sai-lam-thuong-gap', title: '1.4 Brand Equity & Điểm Bán Khác Biệt (USP)' },
    { id: 'mo-hinh-stp', title: '1.5 La bàn định vị: Mô hình STP' },
    { id: 'ai-workflow-island1', title: '1.6 Ứng Dụng AI: Định Hình Sản Phẩm & Chuyển Đổi Ngôn Từ' },
    { id: 'ai-case-study-1', title: '1.7 Thực Chiến: 2 Case Study Ngành VN' }
  ],
  contentHtml: `
    <div class="space-y-12">
      <p class="text-lg leading-relaxed text-slate-300"><strong>Chào mừng bạn đến với hòn đảo đầu tiên!</strong> </p>
      <p class="text-lg leading-relaxed text-slate-300">Rất nhiều người nghĩ <em>"Marketing chỉ là chạy quảng cáo trên Facebook hay Tiktok"</em>. <br>Nhưng thực tế, Marketing giống như việc bạn mở một quán phở: Từ việc chọn vị phở thế nào cho hợp khẩu vị xóm mình, mở quán ở đâu, bán menu bao tiền, trang trí rồi phát tờ rơi làm sao, có ưu đãi gì, ...đến lúc bưng tô phở ra sao để khách khen ngon và sau gọi thêm bạn bè qua ăn lại. Từ A đến Z đúng nghĩa luôn. <br>Hãy cùng đi những bước đầu tiên nhé!</p>
      
      <h3 id="ban-chat-marketing" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">1.1 Nhu cầu, Mong muốn và Tháp Maslow</h3>
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 my-6 p-6 bg-slate-900/50 rounded-2xl border border-slate-700/60 not-prose">
        <div class="shrink-0 w-48 sm:w-56">
          <img src="/philip-kotler.png" alt="Philip Kotler — Cha đẻ Marketing hiện đại" class="w-full h-auto rounded-xl object-contain shadow-lg" />
          <p class="text-xs text-center text-slate-500 mt-2 italic">Ông Philip Kotler - "Cha đẻ" Marketing hiện đại. Ông được coi là người đặt nền móng cho Marketing hiện đại, chuyển dịch nó từ một hoạt động bán hàng đơn thuần thành một chiến lược quản trị cốt lõi. Các cuốn giáo trình của ông (như Marketing Management) là "sách gối đầu giường" của hầu hết các marketers.</p>
        </div>
        <div class="flex-1">
          <p class="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">Cha đẻ Marketing Hiện Đại</p>
          <p class="text-lg text-slate-300 leading-relaxed">Ông Philip Kotler, người được mệnh danh là cha đẻ của Marketing hiện đại, đã nói: <em class="text-slate-200">"Marketing là làm sao để đáp ứng những nhu cầu của khách hàng một cách có lợi." (Tiếng Anh: "Meeting needs profitably")</em> Nghe thật đơn giản đúng không? Vậy hãy phân biệt 3 khái niệm quan trọng này:</p>
        </div>
      </div>
      
      <div class="bg-blue-900/20 p-6 rounded-2xl border border-blue-900/50 my-6 space-y-4 text-slate-300">
         <ul class="list-disc pl-5 space-y-4">
           <li><strong class="text-blue-400 font-semibold text-lg">Needs (Nhu cầu cốt lõi):</strong> Đây là những thứ cơ bản nhất để tồn tại (đói, khát, quần áo mặc, chỗ ở và sex). Marketing <strong>không tạo ra</strong> Needs. Bạn đói vì bụng trống rỗng, không phải vì quảng cáo làm bạn đói. <em>(Khoan khoan, chỗ này cân cấn đúng không? Bình tĩnh, bên dưới tôi sẽ tâm sự thêm nhé)</em></li>
           <li><strong class="text-emerald-400 font-semibold text-lg">Wants (Mong muốn):</strong> Khi bạn đói (Nhu cầu), bạn có thể chọn ăn hủ tiếu gõ hoặc vào nhà hàng steak sang trọng. Hình dáng của nhu cầu được định hình bởi văn hóa, sở thích cá nhân chính là Mong muốn. <em>Và đây là lúc Marketing xuất hiện để gợi ý món ăn cho bạn!</em></li>
           <li><strong class="text-amber-400 font-semibold text-lg">Demands (Nhu cầu có khả năng thanh toán):</strong> Rất nhiều người (trong đó có tôi) "Muốn" (Want) sở hữu một chiếc xe Mercedes, nhưng chỉ những ai đút ví đủ số tiền đó thì mới tạo thành "Demand" cho hãng xe. <em>Còn tôi không có tiền đủ thì cũng chịu, vẫn chỉ là khách hàng tiềm năng dự bị :D</em></li>
         </ul>
      </div>

      <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl mt-6">
        <h4 class="text-amber-400 font-bold mb-4">Ứng dụng Tháp Nhu cầu Maslow vui vẻ vào điểm chạm khách hàng</h4>
        <div class="mb-6 rounded-xl bg-[#f0f4f8] overflow-hidden border-2 border-slate-800/80 shadow-2xl p-4 flex justify-center flex-col items-center">
           <img src="/maslow.svg" alt="Tháp nhu cầu Maslow" class="w-full max-w-xl mx-auto h-auto object-contain hover:scale-105 transition-all duration-500 rounded-lg p-2" />
           <p class="text-xs text-slate-500 mt-2 text-center italic">Nguồn: Wikipedia Commons</p>
        </div>
        <p class="text-slate-300 mb-4">Để bán được sản phẩm giá trị cao, bạn cần chạm vào các tầng cao hơn của tháp Maslow:</p>
        <ol class="list-decimal pl-5 space-y-2 text-slate-300 marker:text-amber-500">
          <li><strong>Sinh lý:</strong> Bán nước giải khát ở quán tạp hoá, quán trà đá vỉa hè -> Hết khát: Khách quan tâm khi khát và giá cả rẻ nhất.</li>
          <li><strong>An toàn:</strong> Chai nước suối có thương hiệu, có tem chống hàng giả -> Sức khoẻ: Khách quan tâm sự an tâm, không sợ bị ngộ độc.</li>
          <li><strong>Xã hội:</strong> Chai nước thuỷ tinh đẹp mắt, trong quán cafe sang trọng, nhà hàng 5 sao -> Sự kết nối & Lối sống: Khách đến để gặp mặt đối tác, check-in cùng bạn bè, tôi muốn thể hiện gu sành điệu, hợp không gian và các mối quan hệ cao cấp.</li>
          <li><strong>Được Tôn trọng:</strong> Chai nước Evian/ Voss thiết kế bởi các nhà mốt hàng đầu, thời trang -> Đẳng cấp ít người có: Khách hàng đang mua sự ngưỡng mộ từ người khác, khẳng định vị thế cá nhân.</li>
          <li><strong>Thể hiện Bản thân:</strong> Nước đóng lon nhôm bảo vệ môi trường, thương hiệu trích lợi nhuận làm CSR thiện nguyện... -> Triết lý sống: Tôi là người có ý thức, tôi sống vì cộng đồng.</li>
        </ol>
      </div>

      <div class="bg-indigo-900/20 border border-indigo-500/30 p-6 rounded-xl mt-8 space-y-4">
        <h4 class="text-indigo-400 font-bold text-xl mb-2 flex items-center gap-2">
          <span>💡</span> Góc nhìn mở rộng: Marketing CÓ THỂ tạo ra nhu cầu?
        </h4>
        <p class="text-slate-300 italic mb-4">
          Thực tế, quan điểm "Marketing không tạo ra nhu cầu" của Philip Kotler là nhìn dưới góc độ Bản chất con người (Human Nature). Để tôi phản biện lại và làm rõ góc nhìn "tạo ra nhu cầu" của Apple hay Sony (Walkman):
        </p>
        
        <div class="space-y-4">
          <div>
            <strong class="text-slate-100 text-lg block mb-1">1. Nhu cầu tiềm ẩn (Latent Needs) vs. Nhu cầu hiển hiện</strong>
            <p class="text-slate-300">Marketing thực sự không tạo ra một "loại tâm lý/sinh lý" hoàn toàn mới, mà nó đánh thức những nhu cầu tiềm ẩn mà chính khách hàng cũng chưa gọi tên được.</p>
            <ul class="list-disc pl-5 mt-2 space-y-2 text-slate-400">
              <li><strong class="text-slate-200">Với Walkman:</strong> Trước đó, con người đã có nhu cầu "nghe nhạc" và nhu cầu "sự tự do/di động". Sony không tạo ra nhu cầu nghe nhạc, họ tạo ra một Wants (Mong muốn) quá mãnh liệt cho việc "nghe nhạc mọi lúc mọi nơi" đến mức người ta tưởng đó là một nhu cầu mới.</li>
              <li><strong class="text-slate-200">Với Apple (iPhone):</strong> Trước iPhone, chúng ta đã có nhu cầu "kết nối", "giải trí" và "khẳng định vị thế". Apple gom tất cả vào một thiết bị vuốt chạm mượt mà. Họ không tạo ra nhu cầu giao tiếp, họ tạo ra một tiêu chuẩn mới cho việc giao tiếp.</li>
            </ul>
          </div>

          <div class="pt-2">
            <strong class="text-slate-100 text-lg block mb-1">2. Marketing tạo ra "Nhu cầu phái sinh" (Derived Needs)</strong>
            <p class="text-slate-300">Trong thế giới hiện đại, Marketing có thể tạo ra các lớp nhu cầu mới dựa trên nền tảng cũ:</p>
            <ul class="list-disc pl-5 mt-2 space-y-2 text-slate-400">
              <li><strong class="text-slate-200">Nhu cầu khẳng định bản thân (Tầng cao nhất tháp Maslow):</strong> Apple cực giỏi việc này. Họ biến một món đồ công nghệ thành một biểu tượng lối sống. Lúc này, "nhu cầu sở hữu iPhone" trở thành một nhu cầu thực sự để cá nhân đó cảm thấy mình thuộc về một cộng đồng thượng lưu/sáng tạo.</li>
              <li><strong class="text-slate-200">Sự tiến hóa của Needs:</strong> Có những thứ vốn là "Wants" (Mong muốn), nhưng qua thời gian và sự phổ biến của Marketing, nó trở thành "Needs" (Nhu cầu thiết yếu). Ví dụ: 20 năm trước, Internet là thứ xa xỉ (Want), giờ đây Internet là nhu cầu cơ bản để tồn tại trong xã hội (Need).</li>
            </ul>
          </div>

          <div class="pt-2">
            <strong class="text-slate-100 text-lg block mb-1">3. Công thức Steve Jobs: "Khách hàng không biết mình muốn gì cho đến khi ta cho họ thấy"</strong>
            <p class="text-slate-300">Thay vì đi hỏi khách hàng "Bạn cần gì?" (Nghiên cứu thị trường truyền thống), Apple dùng Marketing và Sản phẩm để:</p>
            <ul class="list-disc pl-5 mt-2 space-y-1 text-slate-400">
              <li><strong class="text-slate-200">Định nghĩa lại nỗi đau:</strong> "Bạn có thấy phiền khi phải mang theo cả máy nghe nhạc, điện thoại và máy ảnh riêng biệt không?"</li>
              <li><strong class="text-slate-200">Cung cấp giải pháp tối thượng:</strong> iPhone.</li>
              <li><strong class="text-slate-200">Tạo ra Demand (Cầu):</strong> Khi "Wants" + "Khả năng chi trả" = "Demand". Apple tạo ra một cơn thèm khát (Desire) lớn đến mức ép thị trường phải thay đổi hành vi.</li>
            </ul>
          </div>
        </div>

        <div class="mt-6 p-5 bg-indigo-900/40 rounded-lg border border-indigo-500/50">
          <strong class="text-amber-400 block mb-2 font-bold text-lg">🎯 Kết luận của Thuyền Trưởng:</strong>
          <p class="text-slate-300 mb-2">Chúng ta có thể thống nhất thế này để dễ dạy và dễ học:</p>
          <ul class="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong class="text-slate-100">Về mặt Sinh học/Tâm lý:</strong> Marketer không tạo ra "cơn đói" hay "sự cô đơn".</li>
            <li><strong class="text-slate-100">Về mặt Xã hội/Thương mại:</strong> Marketer (như Apple) hoàn toàn có thể tạo ra những Nhu cầu mới về giải pháp. Họ tạo ra "cơn đói" đối với một trải nghiệm mà trước đó thế giới chưa từng hình dung ra.</li>
          </ul>
        </div>
      </div>
      
      <h3 id="marketing-mix-4p-7p" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">1.2 Cuộc Dịch Chuyển Góc Nhìn: Từ Bán (7P) sang Mua (4C)</h3>
      <p class="text-lg text-slate-300 mb-6">Marketing Mix (4P/7P) là hệ tư duy kinh điển đứng từ góc độ <strong>Doanh Nghiệp (Người Bán)</strong>, giúp ta kiểm soát Nguồn lực. Nhưng trong kỷ nguyên lấy khách hàng làm trung tâm, giáo sư Robert Lauterborn đã lật ngược thế cờ với mô hình <strong>4C đứng từ góc độ Người Mua</strong>:</p>
      
      <div class="my-8 rounded-2xl bg-white overflow-hidden border-2 border-slate-700/50 shadow-2xl p-4 flex justify-center">
         <img src="/4p-4c-model.png" alt="Mô hình 4P sang 4C" class="w-full max-w-2xl mx-auto h-auto rounded-lg object-contain" />
      </div>
      
      <div class="grid md:grid-cols-2 gap-4 text-slate-300 mt-6 mb-8">
        <div class="bg-slate-900 p-5 rounded-lg border border-slate-800">
          <strong class="text-blue-400 text-lg">1. Product ➡️ Customer Solutions (Giải pháp cho khách hàng)</strong>
          <p class="mt-2 text-sm">Người ta không mua 1 cái khoan tường (Product), họ mua 1 cái lỗ trên tường. Thay vì nói sản phẩm của tôi có công nghệ lõi gì, hãy trả lời việc nó giải quyết nỗi đau nào của họ.</p>
        </div>
        <div class="bg-slate-900 p-5 rounded-lg border border-slate-800">
          <strong class="text-red-400 text-lg">2. Price ➡️ Cost to User (Chi phí của khách hàng)</strong>
          <p class="mt-2 text-sm">Không chỉ là Tiền mặt, Cost bao gồm cả Thời gian học cách dùng, Chi phí đi lại, Nỗi lo sợ hàng giả. Điện thoại iPhone giá mắc (Price) nhưng rủi ro giật lag ít, thời gian bảo quản dài lâu (Cost thấp).</p>
        </div>
        <div class="bg-slate-900 p-5 rounded-lg border border-slate-800">
          <strong class="text-emerald-400 text-lg">3. Place ➡️ Convenience (Sự tiện lợi)</strong>
          <p class="mt-2 text-sm">Thay vì tìm xem đặt cửa hàng ở đâu, hãy hỏi: "Khách hàng muốn mua hàng dễ dàng nhất bằng cách nào?". Thanh toán Apple Pay 1 chạm, Giao hỏa tốc 2H trên Shopee chính là Convenience.</p>
        </div>
        <div class="bg-slate-900 p-5 rounded-lg border border-slate-800">
          <strong class="text-amber-400 text-lg">4. Promotion ➡️ Communication (Giao tiếp 2 chiều)</strong>
          <p class="mt-2 text-sm">Quảng cáo (Promotion) xưa kia là chiếc loa phóng thanh ép khách hàng nghe. Giao tiếp (Communication) mạng xã hội là bạn đăng bài, khách hàng có quyền thả phẫn nộ hoặc bình luận bóc phốt, và bạn phải đối thoại với họ.</p>
        </div>
        <div class="bg-indigo-900/20 p-5 rounded-lg border border-indigo-900/50 col-span-1 md:col-span-2 mt-2">
          <strong class="text-indigo-400 text-lg block mb-3">Ôn lại: 3P Mở Rộng Dành Cho Dịch Vụ (Ngành-không-thể-cầm-nắm)</strong>
          <ul class="list-disc pl-5 space-y-2 text-sm">
            <li><strong class="text-slate-100">5. People (Con người):</strong> Cô nhân viên trực tổng đài cau có khó ở sẽ phá nát 1 Tour du lịch ngàn đô.</li>
            <li><strong class="text-slate-100">6. Process (Quy trình):</strong> Việc cho khách tự quét mã QR gọi món tại bàn không đợi nhân viên chính là Process rất tuyệt cho các nhà hàng quy mô lớn và đông.</li>
            <li><strong class="text-slate-100">7. Physical Evidence (Bằng chứng vật lý):</strong> Mùi hương chanh sả, bản nhạc thiền, chiếc rèm sạch sẽ ở Spa là thứ khiến khách tin tưởng, dễ dàng xuống tiền.</li>
          </ul>
        </div>
      </div>

      <h3 id="phan-tich-doi-thu" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">1.3 Biết người biết ta: Phân Tích Đối Thủ Trực Tiếp & Gián Tiếp</h3>
      <p class="text-slate-300 mb-4">Ra khơi mà không có ống nhòm nhìn thuyền kẻ địch thì rất ngây thơ. Bạn cần nhận diện đúng tệp Địch để không đấu nhầm hạng cân. Hehe</p>
      <div class="bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-xl space-y-4">
         <p class="text-slate-300 text-sm">Giả sử bạn bán <strong>Trà Sữa Khoai Môn</strong> trước cổng đại học. Ai là đối thủ của bạn?</p>
         <ul class="list-disc pl-5 space-y-2 text-sm text-slate-300">
           <li><strong class="text-red-400">Đối thủ trực tiếp:</strong> Tiệm Trà Sữa Trân Châu kế bên. (Cùng sản phẩm, cùng tập khách). Cuộc đấu ở đây là: Ai ngon hơn, ai rẻ hơn, ai ly đẹp hơn.</li>
           <li><strong class="text-orange-400">Đối thủ gián tiếp:</strong> Quán Cà Phê Bọt Biển cuối ngõ. (Khác sản phẩm, nhưng cùng lấy đi số tiền ăn vặt 40K của sinh viên). Cuộc đấu ở đây là: Việc học bài cần tỉnh táo (cafe) hay cần vui vẻ ngọt ngào (Trà sữa).</li>
           <li><strong class="text-amber-400">Đối thủ vô hình (Thay thế):</strong> Nước lọc chanh đường tự pha ở ký túc xá! (Thay thế hoàn toàn).</li>
         </ul>
      </div>

      <h3 id="khai-niem-sai-lam-thuong-gap" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">1.4 Giá Trị Thương Hiệu & Điểm Bán Khác Biệt (USP)</h3>
      <div class="space-y-6 mt-6">
        <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl">
           <h4 class="text-blue-400 font-bold text-lg mb-2">📌 Brand Equity (Tài sản Thương hiệu)</h4>
           <p class="text-slate-300 text-sm leading-relaxed mb-4">Câu chuyện vui là thế này: Cùng là một chiếc áo thun trắng tốt như nhau, chiếc ở chợ giá 50.000 VNĐ, chiếc in chữ Gucci giá 5.000.000 VNĐ. Số tiền 4.950.000 VNĐ chênh lệch đó chính là sức mạnh vô hình của Tài sản Thương hiệu! Xây dựng thương hiệu là quá trình tạo niềm tin vững chắc vào tâm trí khách hàng.</p>
           
           <h4 class="text-emerald-400 font-bold text-lg mb-2">📌 USP (Unique Selling Proposition) - Điểm Bán Khác Biệt</h4>
           <p class="text-slate-300 text-sm leading-relaxed">Khi bị hỏi: <em>"Tại sao tôi nên mua của shop bạn mà không phải shop bên đường?"</em>, câu trả lời chính là USP. Hãng Domino's Pizza từng nổi tiếng toàn cầu vì USP cực đơn giản: <em>"Giao bánh nóng tận cửa trong 30 phút, nếu muộn sẽ miễn phí"</em>. Khách hàng đôi khi không cần ngon nhất, họ cần nhanh nhất!</p>
        </div>
      </div>

      <h3 id="mo-hinh-stp" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">1.5 La bàn tìm lối đi: Phân tích S.T.P Chuyên Sâu</h3>
      <p class="text-slate-300 mb-4">Việc cố gắng bán hàng cho "tất cả mọi người" là con đường ngắn nhất dẫn đến phá sản. Cũng như việc bạn cố gắng muốn "yêu tất cả phụ nữ" vậy :D Hãy làm theo công thức STP để nhắm trúng đối tượng!</p>
      
      <div class="space-y-6 text-slate-300 mt-6 mb-8 relative before:absolute before:inset-y-0 before:left-7 before:w-0.5 before:bg-slate-800 pl-4">
        <div class="relative pl-12">
          <div class="absolute left-0 top-0 bg-blue-900/80 text-blue-400 font-bold text-xl h-14 w-14 flex items-center justify-center rounded-2xl shadow-lg border border-blue-500/30 z-10">S</div>
          <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm mt-2">
            <strong class="text-blue-400 text-xl block mb-2">Segmentation (Phân đoạn Thị trường - Cắt bánh)</strong>
            <p class="text-sm text-slate-400 mb-3">Hành động đập tan cả một thị trường vĩ mô thành những mảnh ghép nhỏ hơn. 4 Tiêu chí "cắt bánh" kinh điển:</p>
            <ul class="list-disc pl-5 space-y-1 text-sm text-slate-300">
              <li><strong>Địa lý:</strong> Đồng bằng, Miền núi, Khí hậu lạnh (Bán áo phao béo ở Sapa sẽ dễ hơn ở Cần Thơ).</li>
              <li><strong>Nhân khẩu học:</strong> Tuổi tác, Giới tính, Nghề nghiệp, Thu nhập (Giới hạn túi tiền).</li>
              <li><strong>Tâm lý học:</strong> Lối sống (Ăn chay, yêu thiên nhiên, tối giản), Cá tính.</li>
              <li><strong>Hành vi mua:</strong> Mua theo dịp Lễ Tết, Mua vì săn mã Freeship, Lòng trung thành cực đoan với thương hiệu.</li>
            </ul>
          </div>
        </div>

        <div class="relative pl-12 mt-8">
          <div class="absolute left-0 top-0 bg-orange-900/80 text-orange-400 font-bold text-xl h-14 w-14 flex items-center justify-center rounded-2xl shadow-lg border border-orange-500/30 z-10">T</div>
          <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm mt-2">
            <strong class="text-orange-400 text-xl block mb-2">Targeting (Lựa chọn mục tiêu - Đánh cá đúng ao)</strong>
            <p class="text-sm text-slate-400 mb-3">Sau khi đã có 10 phân khúc, đừng ham hố ôm cả. Đánh giá sức mình (Tài chính, Kênh bán, Sở trường) để chọn ra 1-2 đại tệp có sức mua lớn nhất.</p>
            <p class="text-sm font-medium italic text-slate-300">"Tôi quyết định chỉ dồn TOÀN BỘ tiền chạy quảng cáo vào nhóm Nữ Nhân viên văn phòng 25-30 tuổi, lương 15tr, thích uống trà chiều và hay stress vì sếp."</p>
          </div>
        </div>

        <div class="relative pl-12 mt-8">
          <div class="absolute left-0 top-0 bg-emerald-900/80 text-emerald-400 font-bold text-xl h-14 w-14 flex items-center justify-center rounded-2xl shadow-lg border border-emerald-500/30 z-10">P</div>
          <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-sm mt-2">
            <strong class="text-emerald-400 text-xl block mb-2">Positioning (Định vị thương hiệu - Đóng đinh tâm trí)</strong>
            <p class="text-sm text-slate-400 mb-3">Làm thế nào để các mẹ bỉm nhớ tới thương hiệu của bạn? Hãy ghim vào đầu họ một "từ khóa". Ví dụ 1 vài từ khoá quen thuộc:</p>
            <ul class="list-disc pl-5 space-y-1 text-sm text-slate-300">
              <li><strong>Volvo:</strong> "Xe hơi an toàn nhất thế giới cho gia đình nhỏ của tôi".</li>
              <li><strong>Shopee:</strong> "Freeship mọi đơn hàng từ 1k".</li>
              <li>Thương hiệu của bạn muốn người ta nhớ tới từ nào? "Sạch nhất", "Rẻ nhất", hay "Chăm sóc khách đỉnh nhất"?</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 id="prompt-library-1" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">Prompt Library Khởi Nguyên</h3>
      <p class="text-slate-300 mb-4">Để AI (ChatGPT, Claude) không "ngáo" đưa ra những câu văn mẫu, bạn hãy tham khảo các khối prompt dưới đây, giữ nguyên cấu trúc Format chữ, và điền ngoặc vuông vào Trợ lý AI nhé!</p>
      
      <div id="ai-sep-1" class="flex items-center gap-3 mt-16 mb-8">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        <span class="px-4 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest rounded-full">Phần 2 — Ứng Dụng AI Chuyên Sâu</span>
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
      </div>

      <h3 id="ai-workflow-island1" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">1.6 Ứng Dụng AI: Định Hình Sản Phẩm & Chuyển Đổi Ngôn Từ</h3>
      <p class="text-slate-300 mb-6">Bài toán: Bạn có sản phẩm tốt nhưng không ai mua. Lý do thường là vì bạn đang nói <strong>ngôn ngữ của Nhà sản xuất</strong> (tính năng kỹ thuật) thay vì <strong>ngôn ngữ của Người mua</strong> (lợi ích cảm xúc và nhu cầu). AI sẽ giúp bạn dịch từ ngôn ngữ này sang ngôn ngữ kia trong vài phút.</p>

      <div class="space-y-6">

        <div class="relative pl-10 pb-8 border-l-2 border-indigo-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-indigo-600 border-2 border-indigo-400 flex items-center justify-center text-white text-xs font-bold">1</div>
          <strong class="text-indigo-300 text-lg block mb-1">Bước 1: Liệt kê Tính năng (7P) — Dữ liệu đầu vào thô</strong>
          <p class="text-slate-400 text-sm mb-3">Bạn chỉ cần ngồi viết tất cả những gì sản phẩm/dịch vụ có. Đừng lo nghĩ về ngôn từ, cứ viết thô thật thà nhất.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-indigo-400 font-mono font-bold">step_1_features_list.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178]">
              <p>Sản phẩm/Dịch vụ của tôi: [<span class="text-indigo-300">Nhập tên sản phẩm</span>]</p>
              <p class="mt-2">Danh sách Tính năng (Feature) tôi muốn quảng bá:</p>
              <p>- [<span class="text-indigo-300">Tính năng 1: VD - Chất liệu vải Tencel cao cấp chống hôi 24h</span>]</p>
              <p>- [<span class="text-indigo-300">Tính năng 2</span>]</p>
              <p>- [<span class="text-indigo-300">Tính năng 3</span>]</p>
              <p class="mt-3 text-slate-500"># Giá bán: [X VNĐ] — Đối tượng khách hàng: [Mô tả nhân khẩu học]</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-8 border-l-2 border-indigo-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-amber-600 border-2 border-amber-400 flex items-center justify-center text-white text-xs font-bold">2</div>
          <strong class="text-amber-300 text-lg block mb-1">Bước 2: Yêu cầu AI dịch 7P sang 4C & bóc tách tầng Maslow</strong>
          <p class="text-slate-400 text-sm mb-3">Đây là lúc AI làm phép màu — chuyển hóa ngôn từ kỹ thuật sang ngôn từ cảm xúc chạm đúng tầng Maslow của khách hàng.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-amber-400 font-mono font-bold">step_2_translate_4c_maslow.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178] space-y-2">
              <p>Dựa vào thông tin sản phẩm trên, hãy thực hiện 2 nhiệm vụ:</p>
              <p class="text-slate-500 mt-2"># NHIỆM VỤ 1: DỊCH TỪ 7P SANG 4C</p>
              <p>Với mỗi Tính năng tôi liệt kê, hãy "dịch" nó thành <span class="text-amber-300">Lợi ích mà Khách hàng thực sự cảm nhận</span>. Dùng ngôn từ cảm xúc, không dùng thuật ngữ kỹ thuật.</p>
              <p>Ví dụ: "Chất liệu Tencel" → "Cả ngày hội họp không lo mùi, tự tin như chưa đi làm."</p>
              <p class="text-slate-500 mt-2"># NHIỆM VỤ 2: GÁN TẦNG MASLOW</p>
              <p>Xác định sản phẩm này đang đánh vào <span class="text-amber-300">Tầng Maslow nào</span> chủ yếu? Và đề xuất 1 Thông điệp ngắn (dưới 10 từ) khai thác đúng tầng đó.</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-2 border-l-2 border-indigo-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-rose-600 border-2 border-rose-400 flex items-center justify-center text-white text-xs font-bold">3</div>
          <strong class="text-rose-300 text-lg block mb-1">Bước 3: Sinh Ngân hàng Thông điệp đa kênh</strong>
          <p class="text-slate-400 text-sm mb-3">Từ thông điệp cốt lõi vừa tìm được, yêu cầu AI tạo ra các biến thể phù hợp cho từng kênh (TikTok Hook, Caption FB, Tiêu đề Google Ads).</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-rose-400 font-mono font-bold">step_3_message_bank.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178]">
              <p>Từ Thông điệp cốt lõi vừa tìm, hãy viết <span class="text-rose-300">3 phiên bản</span> cho 3 kênh:</p>
              <p class="mt-2">1. <span class="text-yellow-300">TikTok Hook (3 giây đầu):</span> Câu mở đầu giật mình, bắt người xem khựng lại khi đang lướt.</p>
              <p class="mt-1">2. <span class="text-blue-300">Caption Facebook:</span> Đoạn 50-80 từ, kể câu chuyện ngắn, kết bằng câu hỏi kéo Bình luận.</p>
              <p class="mt-1">3. <span class="text-emerald-300">Tiêu đề Google Ads:</span> Câu ngắn dưới 30 ký tự, có từ khóa tìm kiếm, thể hiện lợi ích rõ ràng.</p>
            </div>
          </div>
        </div>

      </div>

      <h3 id="ai-case-study-1" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-16 scroll-mt-24">1.7 Demo: 2 Case Study Ngành Việt Nam</h3>
      <p class="text-slate-300 mb-6">Xem Workflow trên được áp dụng thực tế để chuyển hóa ngôn từ sản phẩm của 2 thương hiệu quen thuộc tại Việt Nam.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-amber-500/40 transition-all">
          <div class="flex items-center gap-3 mb-4">
            <div class="text-3xl">🐟</div>
            <div>
              <p class="text-xs text-slate-500 uppercase font-bold">Case Study 01 — FMCG</p>
              <strong class="text-amber-400 text-lg block">Nước mắm Phú Quốc Truyền Thống</strong>
            </div>
          </div>
          <div class="space-y-3 text-sm">
            <div class="p-3 bg-slate-900/50 rounded-lg">
              <p class="text-slate-400 mb-1 text-xs font-semibold uppercase">Cách nói cũ (7P - Tính năng)</p>
              <p class="text-slate-300 italic">"Độ đạm 40N, ủ chượp 18 tháng truyền thống, không chất bảo quản."</p>
            </div>
            <div class="p-3 bg-amber-900/20 rounded-lg border border-amber-500/20">
              <p class="text-amber-400 mb-1 text-xs font-semibold uppercase">AI dịch sang 4C (Tầng 2 & 3 Maslow)</p>
              <p class="text-slate-200 font-semibold italic">"Bữa cơm gia đình an toàn tuyệt đối - mùi thơm của ký ức quê nhà, không lo hóa chất."</p>
            </div>
            <div class="p-3 bg-slate-900/50 rounded-lg">
              <p class="text-slate-400 mb-1 text-xs font-semibold uppercase">Hook TikTok AI đề xuất</p>
              <p class="text-rose-300 italic font-semibold">"Tại sao tô canh chua nhà tôi ngon hơn nhà hàng? Bí mật nằm ở con mắm này..."</p>
            </div>
          </div>
        </div>

        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-indigo-500/40 transition-all">
          <div class="flex items-center gap-3 mb-4">
            <div class="text-3xl">🏭</div>
            <div>
              <p class="text-xs text-slate-500 uppercase font-bold">Case Study 02 — B2B</p>
              <strong class="text-indigo-400 text-lg block">Bất động sản Khu Công nghiệp</strong>
            </div>
          </div>
          <div class="space-y-3 text-sm">
            <div class="p-3 bg-slate-900/50 rounded-lg">
              <p class="text-slate-400 mb-1 text-xs font-semibold uppercase">Cách nói cũ (7P - Tính năng)</p>
              <p class="text-slate-300 italic">"Diện tích 50.000m2, hạ tầng điện 3 pha, đường nội khu 25m, gần cảng biển 15km."</p>
            </div>
            <div class="p-3 bg-indigo-900/20 rounded-lg border border-indigo-500/20">
              <p class="text-indigo-400 mb-1 text-xs font-semibold uppercase">AI dịch sang 4C (Tầng 4 & 5 Maslow)</p>
              <p class="text-slate-200 font-semibold italic">"Hệ sinh thái logistics hoàn chỉnh - Doanh nghiệp giảm 30% chi phí vận chuyển, mở rộng quy mô không lo tắc nghẽn."</p>
            </div>
            <div class="p-3 bg-slate-900/50 rounded-lg">
              <p class="text-slate-400 mb-1 text-xs font-semibold uppercase">Caption LinkedIn AI đề xuất</p>
              <p class="text-rose-300 italic font-semibold">"CFO của bạn đang cắt giảm chi phí? Chúng tôi đã giúp 37 doanh nghiệp FDI giảm 28% logistics trong 6 tháng đầu..."</p>
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
      question: "Nếu tiệm Bánh mì đầu ngõ tự nhiên decor màu hường, bật nhạc Trịnh và bán ổ bánh mì kẹp chả giá 100K. Quán này đang đánh vào chữ P nào trong 7P dịch vụ?",
      options: ["Product (Chả lụa hảo hạng)", "Physical Evidence (Yếu tố Không gian hữu hình)", "Promotion (Quảng cáo bằng màu hường)", "Place (Phân phối ở đầu ngõ)"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Theo góc nhìn của Lauterborn (4C), chữ PRICE (Giá cả) của doanh nghiệp được dịch chuyển thành khái niệm gì đối với người mua?",
      options: ["Customer Solutions (Giải pháp)", "Convenience (Tuận tiện)", "Cost to User (Chi phí tổng thể bao gồm giá, thời gian, sự rủi ro)", "Communication (Giao tiếp)"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Bạn đang bán xôi gà đối diện cổng trường 50K/suất. Một đối thủ GIÁN TIẾP của bạn là ai?",
      options: ["Cô bán xôi mặn 45K bến cạnh", "Bà bán bánh mì Pate 35K và ly cafe sữa đá 15K", "Ông bán xôi bắp 10K", "Cửa hàng gà rán KFC 200K/combo"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Trong bộ quy tắc STP, hành động 'Chia mâm thị trường thành các miếng nhỏ (Theo độ tuổi, vị trí, tâm lý)' được gọi là gì?",
      options: ["Segmentation (Phân đoạn)", "Targeting (Ghim mục tiêu)", "Positioning (Định vị)", "Processing (Quy trình)"],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "USP (Unique Selling Proposition) của chuỗi giao hàng Domino's Pizza vang danh một thời là gì?",
      options: ["Bánh ngon nhất thế giới phô mai Pháp", "Giao bánh nóng tận cửa trong 30 phút, muộn hoàn tiền", "Nhân viên nữ mặc đồng phục đẹp giao hàng", "Bánh To Gấp Đôi đối thủ"],
      correctAnswer: 1
    }
  ]
};
