import { Paintbrush } from 'lucide-react';

export const island5 = {
  id: 5,
  title: "#5: Xưởng Sáng Tạo",
  slug: "xuong-sang-tao",
  icon: Paintbrush,
  description: `<div class="font-bold text-[#e8dcc7] mb-2 border-b border-[#4a3b2c] pb-1">Xưởng Sáng Tạo Đồ Họa</div>
  <ul class="space-y-1.5 list-none text-[13px] mt-2">
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Quy luật Não Bộ (Neuro-Marketing)</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Typography</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Tâm lý học Điểm Màu (Color Theory)</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Sản xuất đồ hoạ Hàng Loạt với Canva Bulk Create</li>
    <li class="flex items-start gap-2"><span class="text-amber-500 mt-0.5">✦</span> Ứng Dụng AI: Xây Bộ Đồng Nhất Visual Thương Hiệu</li>
  </ul>`,
  color: "from-teal-900 to-emerald-800",
  videoUrl: "",
  toc: [
    { id: 'neuromarketing-design', title: '5.1 Bắt mắt ngay từ giây đầu: Quy luật Não Bộ (Neuro-Marketing)' },
    { id: 'typography', title: '5.2 Typography: Gọn Gàng Chữ Nghĩa, Say Đắm Lòng Người' },
    { id: 'color-psychology', title: '5.3 Tâm lý học Điểm Màu (Color Theory)' },
    { id: 'ai-canva-bulk', title: '5.4 Sản xuất đồ hoạ Hàng Loạt với Canva Bulk Create' },
    { id: 'ai-visual-brand', title: '5.5 Ứng Dụng AI: Xây Bộ Đồng Nhất Visual Thương Hiệu' },
    { id: 'ai-case-study-5', title: '5.6 Thực Chiến: 2 Case Study Ngành VN' }
  ],
  contentHtml: `
    <div class="space-y-12">
      <p class="text-lg leading-relaxed text-slate-300">Khách hàng lướt qua một bài đăng chỉ tốn đúng 0.3 giây. Nếu hình ảnh của bạn khó nhìn, rối mắt hoặc quá nhạt nhòa, họ sẽ lập tức lướt đi mà không kịp đọc. <br>Xưởng Sáng Tạo này không dạy bạn vẽ vời như một hoạ sĩ, mà hướng dẫn bạn cách xếp hình theo hệ thống "Tâm lý học thị giác" và mượn Đôi Tay của AI để tạo ra hàng trăm mẫu thiết kế đẹp mắt và phù hợp cho thương hiệu!</p>

      <h3 id="neuromarketing-design" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">5.1 Neuro-Marketing: Ánh nhìn của Khách hàng đi về đâu?</h3>
      <p class="text-slate-300 mb-6">Não bộ con người được lập trình quét hình ảnh theo bản năng sinh tồn. Dẫn dụ đôi mắt khách hàng nhìn đúng vào Nút Mua Hàng là một kỹ thuật tuyệt mật.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 mb-8">
        <div class="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-pink-500 shadow-md">
          <strong class="text-pink-400 text-lg mb-2 block">1. Quy luật "Ánh mắt Nhìn Cùng Nhau" (Leading Lines)</strong>
          <p class="leading-relaxed mb-2">Đừng để cô người mẫu nhìn chằm chằm "Ra Ngoài Màn Hình" nhìn bạn! Ánh mắt con người có tính lây lan sự thu hút.</p>
          <p class="leading-relaxed">=> <strong>Mẹo Thiết Kế:</strong> Hãy xoay ánh mắt Gương Mặt người mẫu <em>nhìn nghiêng hướng về phía Nút Đăng Ký hoặc Câu Tiêu Đề của bạn</em>. Theo bản năng, khách hàng sẽ vô thức "Nhìn theo hướng nhìn" của người mẫu và đọc trúng điểm rơi tử huyệt do bạn bày ra!</p>
          <img src="https://img.freepik.com/free-psd/flat-design-business-template-design_23-2151076798.jpg" class="rounded-xl border border-slate-700">
        </div>
        <div class="bg-slate-900 border border-slate-800 p-5 rounded-xl border-t-2 border-t-blue-500 shadow-md">
          <strong class="text-blue-400 text-lg mb-2 block">2. Mô hình Chữ F (Chuẩn Đọc Phương Tây)</strong>
          <p class="leading-relaxed mb-2">Khi nhìn vào một bức ảnh nhiều chữ, mắt người Việt có thói quen quét ra hình chữ F: Mục kích Bờ Trái, Lướt sang Phải mép trên, rồi thụt lùi quét giật lùi biên biên trái.</p>
          <p class="leading-relaxed">=> <strong>Mẹo Thiết Kế:</strong> Đặt <em>Câu Tiêu Đề Sock (Giật Gân Tò Mò Nhất)</em> chễm chệ ngay phần GÓC TRÁI TRÊN CÙNG của hình. Góc Phải Dưới Cùng là nơi kết thúc ánh nhìn, chỗ đó hãy nhét cái Số Điện Thoại Nút Gọi (Call To Action).</p>
          <img src="https://img.freepik.com/free-psd/digital-marketing-agency-corporate-facebook-cover-template-design_84443-24501.jpg?semt=ais_rp_50_assets&w=740&q=80" class="rounded-xl border border-slate-700">
        </div>
      </div>

      <h3 id="typography" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">5.2 Typography: Cởi Lớp Áo Màu Mè Rối Mắt</h3>
      <p class="text-slate-300 mb-4">Lỗi thường gặp nhất của "Lính Mới" thiết kế PPT/ Canva là Ốp Font Chữ Thư Pháp Uốn Lượn Gió Đẩy Mây Bay lên một cái nền đầy Hoạ tiết. Dùng font chữ rất tuỳ hứng, thấy cái nào đẹp mắt là dùng mà không hiểu những nguyên tắc căn bản (Tui cũng từng thế)</p>
      
      <div class="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col md:flex-row gap-6 mb-6 items-center">
         <div class="flex-1 space-y-4">
           <div>
             <span class="text-blue-400 font-bold text-lg">2 Hệ Phái Nguyên Tắc Chữ Căn bản:</span>
             <ul class="text-slate-300 text-sm mt-3 space-y-4 list-disc pl-5">
               <li><strong>Serif (Chữ Có Chân):</strong> (Vd: Times New Roman, Playfair). Mang đậm tính Cổ Điển Nhã Nhặn Sang Trọng của Báo Chí. Hãy dùng Làm Chữ Tiêu Đề Logo. Kiểu chữ này khá nặng nề, cổ điển, sang chảnh, style báo chí in.</li>
               <li><strong>Sans-serif (Chữ Không Chân):</strong> (Vd: Arial, Roboto, Montserrat). Sinh ra để hiển thị trên màn hình Điện thoại, Hiện đại Trơn Tru Tối giản, Lướt mắt Nhẹ nhàng! Đừng bao giờ làm đoạn Body Text Dài thòng bằng font Có Chân sẽ gây rối mắt hơn.</li>
               <img src="https://itplus-academy.edu.vn/upload/3_31.jpg" class="rounded-xl border border-slate-700">
             </ul>
           </div>
         </div>
      </div>
      
      <div class="bg-pink-900/10 border-l-4 border-pink-500 p-4 rounded-r-xl">
         <strong class="text-pink-400">Luật The White Space (Khoảng Trống Tự Do):</strong> <em>Sang Trọng = Chừa Sự Trống Trải (Không Gian Âm). Thấy hình trống trống, ráng cắm miếng Logo bự chà bá vào cho mọi người dễ thấy -> Trông Kém Sang lắm. Hãy học Apple, Một Trái Táo Nhỏ giữa những mảng lớn trắng/ xám đơn giản nhưng lại cực kỳ ấn tượng, sang trọng!</em>
         <img src="https://cdn.tgdd.vn/Files/2020/12/21/1315186/hero_large_2x_800x450.jpg" class="rounded-xl border border-slate-700">
      </div>

      <h3 id="color-psychology" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-12 scroll-mt-24">5.3 Tâm lý của Điểm Màu: Vị Mã Lệnh Tiềm Thức</h3>
      <div class="space-y-4 text-slate-300 text-sm mt-6">
         <div class="bg-black/30 p-4 rounded-lg border border-slate-800 flex items-center gap-4">
           <div class="w-12 h-12 rounded-full bg-blue-600 shadow-lg shadow-blue-500/20 flex-shrink-0"></div>
           <div><strong class="text-blue-400">Xanh Dương Blue - Sự Tin Cậy & Chuyên Nghiệp:</strong> Xanh dương là lựa chọn hàng đầu của các lĩnh vực Ngân hàng (Vietcombank), Công nghệ (Facebook, Intel) và Y tế. Màu sắc này đại diện cho sự điềm tĩnh, tính logic và minh bạch, giúp xây dựng niềm tin tuyệt đối và phong cách làm việc chuyên nghiệp, bền vững.</div>
           

           </div>
         <div class="bg-black/30 p-4 rounded-lg border border-slate-800 flex items-center gap-4">
           <div class="w-12 h-12 rounded-full bg-red-600 shadow-lg shadow-red-500/20 flex-shrink-0"></div>
           <div><strong class="text-red-400">Màu Đỏ & Vàng - Năng Lượng & Kích Thích Thị Giác</strong> Sự kết hợp giữa Đỏ và Vàng thường thấy ở các thương hiệu F&B như KFC hay Jollibee. Màu đỏ kích thích sự thèm ăn và cảm giác hối thúc, trong khi màu vàng mang lại sự ấm áp, vui vẻ. Bộ đôi này thúc đẩy khách hàng ra quyết định nhanh và tạo cảm giác năng động.</div>
         </div>
         <div class="bg-black/30 p-4 rounded-lg border border-slate-800 flex items-center gap-4">
           <div class="w-12 h-12 rounded-full bg-slate-900 border-2 border-slate-600 shadow-inner flex-shrink-0"></div>
           <div><strong class="text-slate-200">Đen & Trắng - Quyền Lực & Sự Sang Trọng Tối Giản:</strong> Các thương hiệu xa xỉ như Gucci, Chanel thường tối giản hóa màu sắc với tông Đen - Trắng. Sự lược bỏ các màu sắc rực rỡ giúp tôn vinh khối hình và chất lượng sản phẩm. Đây là biểu tượng của quyền lực ngầm, sự tinh tế và đẳng cấp không bao giờ lỗi mốt.</div>
         </div>
      </div>

     

      <div id="ai-sep-5" class="flex items-center gap-3 mt-16 mb-8">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
        <span class="px-4 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest rounded-full">Phần 2 — Ứng Dụng AI Chuyên Sâu</span>
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      </div>

      <h3 id="ai-visual-brand" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 scroll-mt-24">5.4 Ứng Dụng AI: Xây Bộ Đồng Nhất Visual Thương Hiệu</h3>
      <p class="text-slate-300 mb-6">Bài toán: Design freelancer nhà bạn vừa nghỉ việc, khách yêu cầu 30 banner trong tuần. AI + Canva Bulk Create giúp bạn xuất 30 banner <strong>nhất quán giọng điệu thương hiệu</strong> trong 2 giờ, kết nối với bảng màu đã xác định ở Đảo 3.</p>

      <div class="space-y-6">

        <div class="relative pl-10 pb-8 border-l-2 border-teal-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-teal-700 border-2 border-teal-400 flex items-center justify-center text-white text-xs font-bold">1</div>
          <strong class="text-teal-300 text-lg block mb-1">Bước 1: Xây Bộ Quy Định Visual AI (Brand Style Guide)</strong>
          <p class="text-slate-400 text-sm mb-3">Yêu cầu AI xây bản tóm tắt Brand Style Guide trước, rồi paste vào mọi prompt tiếp theo để AI hiểu được đồng nhất.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-teal-400 font-mono font-bold">step_1_brand_style_guide.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178]">
              <p>Xây cho tôi một <span class="text-teal-300">Brand Style Guide ngắn gọn</span> cho thương hiệu sau:</p>
              <p class="mt-2">- Tên thương hiệu: [<span class="text-teal-300">Nhập vào</span>] | Ngành: [<span class="text-teal-300">Nhập vào</span>]</p>
              <p>- Khách hàng mục tiêu: [<span class="text-teal-300">Đặc điểm chính</span>]</p>
              <p>- Cảm xúc thương hiệu muốn truyền tải: [<span class="text-teal-300">VD: Tin cậy, trẻ trung, nấu ăn chân thực</span>]</p>
              <p class="mt-2 text-slate-500"># Output: Bảng màu chính, font chữ, phong cách ảnh, tone &amp; mood.</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-8 border-l-2 border-teal-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-amber-600 border-2 border-amber-400 flex items-center justify-center text-white text-xs font-bold">2</div>
          <strong class="text-amber-300 text-lg block mb-1">Bước 2: Viết Prompt Midjourney/DALL-E/Gemini (tuỳ tool bạn xài) Chuẩn Phong Cách</strong>
          <p class="text-slate-400 text-sm mb-3">Dán Brand Style Guide vào prompt để AI sinh ra ảnh đồng nhất với thương hiệu.</p>
          <div class="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700/80">
            <div class="flex items-center px-4 py-2 bg-[#2d2d2d] border-b border-[#404040]">
              <div class="flex space-x-1.5"><div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div><div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div><div class="w-3 h-3 rounded-full bg-[#27c93f]"></div></div>
              <span class="ml-4 text-xs text-amber-400 font-mono font-bold">step_2_image_prompt.txt</span>
            </div>
            <div class="p-4 font-mono text-sm leading-relaxed text-[#ce9178] space-y-2">
              <p>[Brand Style Guide] như trên. Hãy viết cho tôi 5 <span class="text-amber-300">Prompt Midjourney/DALL-E</span> để chụp ảnh thương hiệu sản phẩm.</p>
              <p class="text-slate-500 mt-2"># Yêu cầu mỗi prompt: Nhiều góc chụp (overhead, flat-lay, 45°, lifestyle, close-up). Kết thúc: --ar 1:1 --v 6 --style raw.</p>
            </div>
          </div>
        </div>

        <div class="relative pl-10 pb-2 border-l-2 border-teal-500/30">
          <div class="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-rose-600 border-2 border-rose-400 flex items-center justify-center text-white text-xs font-bold">3</div>
          <strong class="text-rose-300 text-lg block mb-1">Bước 3: Canva Bulk Create — Xuất 30 Banner trong 1 Click</strong>
          <p class="text-slate-400 text-sm mb-3">Dùng ảnh AI đã tạo + Template Canva + Bulk Create để render toàn bộ set banner bài trong một lượt.</p>
          <div class="bg-rose-900/20 border border-rose-500/20 rounded-xl p-4">
            <ol class="text-slate-300 text-sm space-y-1 list-decimal list-inside">
              <li>Upload ảnh AI vào Canva → chọn Template phù hợp Brand Style</li>
              <li>Mở Bulk Create → kết nối với Google Sheet có chứa nội dung biến đổi</li>
              <li>Canva tự động xuất toàn bộ 30 banner đúng kích thước từng nền tảng</li>
            </ol>
          </div>
        </div>

      </div>

      <h3 id="ai-case-study-5" class="text-2xl font-bold text-slate-100 border-b border-slate-800 pb-2 mt-16 scroll-mt-24">5.5 Demo: 2 Case Study Ngành Việt Nam</h3>
      <p class="text-slate-300 mb-6">AI hỗ trợ 2 thương hiệu xây được bộ Visual nhất quán, thương hiệu rõ ràng.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Case 01 -->
        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-teal-500/40 transition-all flex flex-col">
          <div class="flex items-center gap-3 mb-6">
            <div class="text-4xl drop-shadow-md">☕</div>
            <div>
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider">Case Study 01 — F&B</p>
              <strong class="text-teal-400 text-xl block mt-1">Chuỗi Trà Sữa Địa Phương</strong>
            </div>
          </div>
          <div class="space-y-4 text-sm flex-1">
            <div class="space-y-1.5">
              <p class="text-teal-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs">B1</span> Bối cảnh & Vấn đề</p>
              <p class="text-slate-300 pl-8">Menu và Fanpage thiết kế lộn xộn, không đồng bộ tone màu. Thuê Freelancer hoặc Agency thì phản hồi chậm, tốn 3 ngày cho 1 thiết kế chương trình mới, bỏ lỡ dịp Lễ.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-teal-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs">B2</span> Giải pháp ứng dụng AI</p>
              <p class="text-slate-300 pl-8">Sử dụng ChatGPT/ Gemini tạo một <strong>Brand Style Guide</strong> rõ ràng (mã Hex Vàng-Đen, Font chữ hiện đại). Yêu cầu AI tạo 30 kịch bản prompt ảnh Lifestyle giới trẻ cầm ly trà.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-teal-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs">B3</span> Bản đồ triển khai AI</p>
              <p class="text-slate-300 pl-8">
                • <strong>Midjourney/Gemini:</strong> Ném 30 kịch bản prompt vào xuất một loạt ảnh chất lượng cao.<br/>
                • <strong>Canva Bulk Create:</strong> Cho dữ liệu (Ảnh + Text Tiêu đề) lên Template Canva sẵn, xuất một loạt 30 Banner động/tranh nhanh chóng.
              </p>
            </div>
            <div class="space-y-1.5">
              <p class="text-teal-400 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-xs">B4</span> Kết quả & Bài học</p>
              <p class="text-teal-300 pl-8 font-medium">Giảm tiến độ 3 ngày xuống còn 2 giờ đồng hồ. Giao diện Fanpage lột xác chuyên nghiệp như Chuỗi lớn. Bài học: AI giúp dân "không chuyên" chuẩn hóa (Standardize) thương hiệu mà không tốn phí hay phức tạp.</p>
            </div>
          </div>
        </div>

        <!-- Case 02 -->
        <div class="bg-[#1B2332] border border-slate-700/80 rounded-2xl p-6 hover:border-amber-500/40 transition-all flex flex-col">
          <div class="flex items-center gap-3 mb-6">
            <div class="text-4xl drop-shadow-md">💪</div>
            <div>
              <p class="text-xs text-slate-400 uppercase font-bold tracking-wider">Case Study 02 — Thể thao</p>
              <strong class="text-amber-400 text-xl block mt-1">CLB Yoga/Thiền Quy mô Nhỏ</strong>
            </div>
          </div>
          <div class="space-y-4 text-sm flex-1">
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B1</span> Bối cảnh & Vấn đề</p>
              <p class="text-slate-300 pl-8">CLB không có ngân sách chụp bộ ảnh mẫu giáo viên/hội viên chuyên nghiệp do giá thuê Studio quá cao. Đăng ảnh điện thoại mờ căm hoặc lấy ảnh Tây trên mạng ghép chữ.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B2</span> Giải pháp ứng dụng AI</p>
              <p class="text-slate-300 pl-8">Nạp Key Message Đảo 3 vào <strong>tool AI tạo ảnh</strong>: <em>"Tạo ảnh hội viên Yoga nữ Việt Nam tuổi 35, tập mồ hôi lấm tấm trán, khung cảnh ngập nắng ấm chân thực mộc mạc."</em></p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B3</span> Bản đồ triển khai AI</p>
              <p class="text-slate-300 pl-8">Ảnh đầu ra của AI được đẩy lên Canva. Bố cục theo luật 1/3 (Neuro-marketing), ghép <strong>Quote của hội viên</strong> lên phần khoảng trống (White Space) của ảnh.</p>
            </div>
            <div class="space-y-1.5">
              <p class="text-amber-500 font-bold flex items-center gap-2"><span class="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">B4</span> Kết quả & Bài học</p>
              <p class="text-amber-300 pl-8 font-medium">Tiết kiệm chi phí chụp ảnh. Khách hàng vẫn cảm thấy "Gần gũi" (Relatable) nên tương tác hỏi giá tăng 60%. Bài học: Ngành dịch vụ không cần bóng bẩy, cần chạm đúng người thật cảm xúc thật.</p>
               <p class="text-amber-300 pl-8 font-medium">Lưu ý: Check kỹ hình ảnh AI rất dễ mắc lỗi</p>
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
      question: "Theo khoa học Neuro-Marketing, khi thiết kế Banner Quảng cáo có hình Người Mẫu, ánh mắt cô gái Hướng Tới Đâu là chuẩn nhất để tăng Bán Hàng?",
      options: ["Nhìn chằm chằm ra ngoài dọa người xem", "Nhìn nghiêng chĩa góc Mắt và Đầu Mũi Mũi Mũi Hướng Trỏ Thẳng Vào Dòng Chữ/Sản Phẩm trọng điểm", "Nhìn xuống đất buồn rầu", "Xóa mắt đi quấn băng cướp biển"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Câu nào miêu tả đúng nhất thảm họa 'Sợ Khoảng Trống' của dân tự mài dũa Thiết kế Newbie?",
      options: ["Họ giữ lại 50% diện tích Ảnh Tĩnh chừa không gian đễ não phân giải (Khoảng trắng The White Space)", "Họ làm chữ to nhất", "Họ có xu hướng Nhấp Nháy Nhồi Nhét lấp kín bằng Viền, Logo nhỏ Góc, và Hoa Văn Lủng Củng che đặc Bông Phế Không Khí Thở Sang Trọng", "Họ xài màu Trắng Đen"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Font chữ Sans-Serif (Chữ Trơn Không Chân Cụt Đuôi) được khuyên dùng ưu tiên ở Đỉnh Điểm Nào thời Công Nghệ Số Hóa?",
      options: ["Viết chữ tiêu đề thiệp cưới cổ trang lãng mạn", "Viết Tên Tập Thơ Khắc Trên Đá", "Viết đoạn văn mô tả bài bán hàng trên Màn Hình Điện Thoại (Do cấu trúc Mượt dễ lướt mắt không vấp viền nét rách đốm hiển thị Web)", "Viết Thư Gửi Mẹ Thư Chữ Nho"],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "Khi bạn tạo lệnh Prompt Midjourney vẽ ra Gái xinh công sở chụp hình xóa mờ lốp mờ nhòe đằng nền Đáy (Lấp Phông ảo xoá điểm), từ khoá Thần Chú Bám Kính Nào dưới đây hay xài?",
      options: ["Make it shiny and colorful", "Bokeh background, 85mm lens f/1.4", "Draw a fast line 2D Anime", "Photoshop background please remove it boss"],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "Tính năng siêu phàm nhất giúp biến Canva thành Công Xưởng Đúc Nội Dung Chục Tấm/Lần Sản phẩm Đồng Loạt Tiết Kiệm Nghìn Giờ?",
      options: ["Ứng dụng 'Bulk Create' (Tạo Hàng Loạt ép Trộn Dữ Liệu Bảng Dòng Cột AI Cung Cấp Mẫu Phôi Một Cú)", "Tẩy Nền Trắng Ảnh Nhanh Đoán AI", "Nút Lọc Filter Trắng Đen Vintage Lưng Mát Xoa", "Xóa người khỏi khung"],
      correctAnswer: 0
    }
  ]
};
