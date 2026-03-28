import { Coffee, Anchor } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tiếp Lương - AI MKT Đại Hải Trình',
};

export default function DonatePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <Coffee className="w-16 h-16 mx-auto text-amber-500 mb-6" />
        <h1 className="text-4xl font-extrabold text-slate-100 mb-4">Trạm Tiếp Lương Thực</h1>
        <p className="text-xl text-slate-400">
          Đây là 1 dự án hoàn toàn <strong className="text-amber-500">MIỄN PHÍ</strong>. Nhưng để hành trình này đi xa, rất vui nếu nhận được sự ủng hộ của anh em lan toả dự án đến những người cần nó!
        </p>
      </div>

      <div className="max-w-md mx-auto bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-amber-900/50">
        <div className="bg-amber-900/20 p-6 text-center border-b border-amber-900/50">
          <h2 className="text-2xl font-bold text-amber-500">Mời tôi 1 ly Cafe nếu thấy hữu ích. Trân trọng cảm ơn anh em!</h2>
        </div>

        <div className="p-8 pb-10 flex flex-col items-center">
          <div className="mb-8 p-1 bg-gradient-to-br from-amber-500 rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <img
              src="/qr-donate.png"
              alt="Mã QR Tiếp Lương Thực"
              className="w-64 h-64 object-cover rounded-xl border-4 border-[#1e293b] bg-white p-2"
            />
          </div>

          <div className="w-full bg-slate-800/50 rounded-xl p-6 text-center space-y-3 border border-slate-700">
            <div>
              <p className="text-sm text-slate-400 uppercase font-semibold">Ngân hàng</p>
              <p className="text-lg font-bold text-slate-100">VPBank</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 uppercase font-semibold mt-4">Số Tài Khoản</p>
              <p className="text-2xl font-black text-amber-500 tracking-wider">0916656634</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 uppercase font-semibold mt-4">Tên Tài Khoản</p>
              <p className="text-lg font-bold text-slate-100">PHUNG HAI LONG</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
