'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';

export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

export default function Quiz({ questions, islandName }: { questions: Question[], islandName: string }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswersChecked, setIsAnswersChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // We show 20 questions in a real scenario, this component handles any N questions.
  const handleSelect = (index: number) => {
    if (isAnswersChecked) return;
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswersChecked(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswersChecked(false);
    setScore(0);
    setShowResult(false);
  };

  if (questions.length === 0) return null;

  if (showResult) {
    const bountyIncrease = score * 50000; // 50k Beri per correct answer
    const passed = score >= questions.length / 2;

    return (
      <div className="mt-12 bg-[#f4e4bc] border-[8px] border-[#8b5a2b] p-8 md:p-12 rounded-sm shadow-2xl relative bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#3d2314] tracking-widest uppercase mb-2" style={{ fontFamily: 'Impact, sans-serif' }}>
          Wanted
        </h2>
        <p className="text-[#5c3a21] font-bold text-lg mb-8 tracking-widest uppercase">Dead or Alive</p>
        
        {/* Placeholder Avatar inside poster */}
        <div className="w-48 h-48 mx-auto border-4 border-[#3d2314] mb-8 bg-white/50 flex flex-col items-center justify-center p-4">
           <Award className={`w-20 h-20 ${passed ? 'text-yellow-600' : 'text-gray-400'} mb-2`} />
           <p className="font-bold text-[#3d2314]">{passed ? 'Tân Binh Đáng Gờm' : 'Hải Tặc Tập Sự'}</p>
        </div>

        <h3 className="text-2xl font-bold text-[#3d2314] mb-2">{islandName} Thử Thách</h3>
        <p className="text-[#5c3a21] font-bold text-lg mb-4">
          Điểm số: {score} / {questions.length}
        </p>

        <div className="text-[#3d2314] mb-8">
          <p className="text-xl md:text-3xl font-black tracking-tighter flex items-center justify-center gap-2" style={{ fontFamily: 'Impact, sans-serif' }}>
            <span className="text-2xl">฿</span> {bountyIncrease.toLocaleString('vi-VN')}
          </p>
          <p className="text-sm font-bold text-red-700 mt-2 tracking-widest">
            Tiền thưởng Lệnh truy nã đã tăng!
          </p>
        </div>

        <button 
          onClick={resetQuiz}
          className="inline-flex items-center gap-2 bg-[#3d2314] hover:bg-[#2a180e] text-[#f4e4bc] px-6 py-3 rounded font-bold transition-colors"
        >
          <RotateCcw className="w-5 h-5" /> Thử sức lại
        </button>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="mt-16 relative bg-[#1c140d] rounded-sm shadow-[0_8px_30px_rgba(0,0,0,0.5)] border-2 border-[#4a3b2c] p-8 overflow-hidden">
      {/* Texture nền giấy cổ */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] opacity-20 pointer-events-none mix-blend-overlay" />
      
      {/* 4 Góc viền */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#8b7355] opacity-50 m-2" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#8b7355] opacity-50 m-2" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#8b7355] opacity-50 m-2" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#8b7355] opacity-50 m-2" />

      <div className="relative z-10 flex justify-between items-center mb-8 border-b border-[#4a3b2c] pb-4">
        <h3 className="text-2xl font-serif font-black text-[#e8dcc7] flex items-center gap-2">
          <span className="text-3xl">⚔️</span> Thử Thách Cướp Biển
        </h3>
        <span className="bg-[#5c4a3d]/50 border border-[#8b7355] text-[#d4c3b3] text-sm font-bold px-3 py-1 rounded-sm">
          Câu {currentQuestion + 1} / {questions.length}
        </span>
      </div>

      <div className="relative z-10 mb-8">
        <h4 className="text-xl font-medium text-[#d1baa2] mb-6">{q.question}</h4>
        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            const isSelected = selectedAnswer === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left px-5 py-4 rounded-sm border-2 transition-all flex items-center justify-between ${
                  isSelected 
                    ? 'border-[#8b7355] bg-[#5c4a3d]/40 text-[#fef9f2]' 
                    : 'border-[#3a2d20] hover:border-[#5c4a3d] bg-[#110d0a]/50 hover:bg-[#1a140f] text-[#b5a38f]'
                }`}
              >
                <span className="font-medium text-[15px]">{opt}</span>
                {isSelected && <CheckCircle2 className="w-5 h-5 text-[#8b7355]" />}
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 flex justify-end pt-4 border-t border-[#4a3b2c]">
        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="bg-gradient-to-r from-[#8b7355] to-[#5c4a3d] hover:contrast-125 disabled:opacity-50 disabled:cursor-not-allowed text-[#fef9f2] font-bold px-8 py-3 rounded-sm transition-all border border-[#8b7355]/50 shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
        >
          {currentQuestion + 1 === questions.length ? 'Hoàn thành & Nhận Lệnh Truy Nã' : 'Kế tiếp'}
        </button>
      </div>
    </div>
  );
}
