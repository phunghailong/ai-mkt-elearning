'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Search, BookOpen, Lightbulb } from 'lucide-react';
import { courses } from '@/data/courses';
import Link from 'next/link';

type Message = {
  id: string;
  type: 'bot' | 'user';
  content: string | React.ReactNode;
};

export default function ChatNami() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      type: 'bot',
      content: (
        <div className="space-y-4">
          <p className="font-medium text-slate-200">Xin chào Thủy Thủ! Tôi là Hoa Tiêu Nami 🍊. Tôi có thể giúp bạn:</p>
          
          <div className="space-y-4 text-sm mt-4">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-lg mb-2 text-slate-100">
                <Search className="w-5 h-5 text-blue-400" /> Tra cứu & Tìm kiếm tài liệu
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Tìm thông tin trong giáo trình Đại Hải Trình</li>
                <li>Giải đáp các thuật ngữ Marketing & AI</li>
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-bold text-lg mb-2 text-slate-100 mt-4">
                <BookOpen className="w-5 h-5 text-purple-400" /> Hỗ trợ theo chủ đề
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-slate-300">
                <li>Marketing Mix (4P), STP, Phân tích SWOT</li>
                <li>Insight, Jobs-to-be-Done (JTBD)</li>
                <li>Content, Copywriting (PAS), Thiết kế Visual</li>
                <li>Tự động hóa CRM, Data Analytics (CAC/LTV)</li>
              </ul>
            </div>

            <div>
              <h4 className="flex items-center gap-2 font-bold text-lg mb-2 text-slate-100 mt-4">
                <Lightbulb className="w-5 h-5 text-amber-400" /> Ví dụ câu hỏi
              </h4>
              <ul className="list-none space-y-2 text-slate-300">
                <li className="bg-slate-800 p-2 rounded cursor-pointer hover:bg-slate-700 transition" onClick={() => setInput("Insight là gì?")}>👉 "Insight là gì?"</li>
                <li className="bg-slate-800 p-2 rounded cursor-pointer hover:bg-slate-700 transition" onClick={() => setInput("Có công cụ AI nào để viết Content?")}>👉 "Có công cụ AI nào để viết Content?"</li>
                <li className="bg-slate-800 p-2 rounded cursor-pointer hover:bg-slate-700 transition" onClick={() => setInput("Giải thích 4P")}>👉 "Giải thích 4P"</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Thuật toán giả lập AI: Tìm kiếm Keywords trong courses.ts
  const handleSimulateAI = (query: string) => {
    const q = query.toLowerCase();
    let found = false;
    let responseNodes: React.ReactNode[] = [];

    // Simple keyword mapping
    const keywordMap = [
      { keywords: ['4p', 'marketing mix', 'product', 'price', 'place', 'promotion'], islandSlug: 'dao-khoi-nguyen', title: 'Marketing Mix 4P' },
      { keywords: ['stp', 'segmentation', 'targeting', 'positioning', 'định vị'], islandSlug: 'dao-khoi-nguyen', title: 'Mô hình STP' },
      { keywords: ['insight', 'định tính', 'định lượng', 'jobs-to-be-done', 'jtbd'], islandSlug: 'dao-thau-cam', title: 'Nghiên cứu & Insight' },
      { keywords: ['swot', 'pestle', 's.m.a.r.t', 'mục tiêu', 'kế hoạch'], islandSlug: 'dao-chien-luoc', title: 'Chiến Lược & SWOT' },
      { keywords: ['content', 'copywriting', 'pas', 'aida', 'viết bài'], islandSlug: 'thu-vien-co', title: 'Content & Copywriting' },
      { keywords: ['thiết kế', 'visual', 'màu sắc', 'midjourney', 'canva'], islandSlug: 'xuong-sang-tao', title: 'Thiết kế Visual' },
      { keywords: ['viral', 'mxh', 'tiktok', 'stepps', 'thuật toán'], islandSlug: 'quan-dao-ket-noi', title: 'Social Media & Viral' },
      { keywords: ['crm', 'zapier', 'tự động', 'agent'], islandSlug: 'dao-tuong-lai', title: 'MarTech Automation' },
      { keywords: ['cac', 'ltv', 'roas', 'roi', 'data', 'cro', 'a/b test'], islandSlug: 'kho-bau-toi-uu', title: 'Data Analytics' },
      { keywords: ['chatgpt', 'gemini', 'perplexity', 'claude', 'prompt', 'ai'], generalAi: true }
    ];

    let matchedIslandSlugs = new Set<string>();
    let isGeneralAi = false;

    for (const mapping of keywordMap) {
      if (mapping.keywords.some(k => q.includes(k))) {
        if (mapping.islandSlug) matchedIslandSlugs.add(mapping.islandSlug);
        if (mapping.generalAi) isGeneralAi = true;
        found = true;
      }
    }

    if (found) {
      responseNodes.push(
        <p key="intro" className="mb-3 whitespace-pre-line">
          Nami đã tìm thấy thông tin bạn cần trong Hải Trình! Dưới đây là các tài liệu liên quan:
        </p>
      );
      
      const links = Array.from(matchedIslandSlugs).map(slug => {
        const c = courses.find(course => course.slug === slug);
        if (!c) return null;
        return (
          <Link key={slug} href={`/island/${c.slug}`} onClick={() => setIsOpen(false)} className="block bg-slate-800 hover:bg-slate-700 border border-slate-700 p-3 rounded-xl mb-2 transition-colors">
            <span className="font-bold text-blue-400 block mb-1">{c.title}</span>
            <span className="text-sm text-slate-400" dangerouslySetInnerHTML={{ __html: c.description }} />
          </Link>
        );
      });

      responseNodes.push(<div key="links">{links}</div>);

      if (isGeneralAi) {
        responseNodes.push(
          <div key="ai" className="mt-4 p-3 border-l-2 border-emerald-500 bg-emerald-900/10 text-slate-300 text-sm">
            💡 <strong>Mẹo Vũ Khí AI:</strong> Để tìm hiểu kỹ năng dùng Prompt, Gemini Deep Research hay Canva Bulk Create, bạn hãy vào đọc mục <strong>"Vũ Khí AI" ở cuối mỗi bài giảng</strong> nhé! Nó rất chi tiết!
          </div>
        );
      }
    } else {
      responseNodes.push(
        <p key="notfound">
          Xin lỗi, Hoa Tiêu Nami chưa quét thấy tư liệu về "{query}". Bạn có thể thử dùng các từ khóa khác như <strong>Insight, Khách hàng, 4P, SWOT, Content</strong> không?
        </p>
      );
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', content: <div className="space-y-2 text-slate-200">{responseNodes}</div> }]);
    }, 600); // Giả lập độ trễ AI
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages: Message[] = [
      ...messages,
      { id: Date.now().toString(), type: 'user', content: input.trim() }
    ];
    setMessages(newMessages);
    const userQuery = input.trim();
    setInput('');

    // Trigger basic AI
    handleSimulateAI(userQuery);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-transform hover:scale-105 flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold">Chat vs Nami</span>
      </button>

      {/* Chat Modal / Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm sm:p-6" onClick={() => setIsOpen(false)}>
          <div 
            className="w-full max-w-2xl bg-[#0A0A0A] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden h-[85vh] sm:h-[600px] animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#111]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                  <span className="text-xl">🍊</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-100">Chat vs Nami</h3>
                  <p className="text-xs text-slate-400">AI Assistant miễn phí (Local Search)</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-4 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'user' ? 'bg-blue-600' : 'bg-orange-500'}`}>
                    {msg.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`max-w-[85%] rounded-2xl p-4 ${msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-[#1A1A1A] border border-slate-800'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#111] border-t border-slate-800">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Hỏi Nami về Marketing & AI..."
                  className="w-full bg-[#1A1A1A] border border-slate-800 text-slate-200 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors placeholder:text-slate-500"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 p-2 rounded-lg text-slate-400 hover:text-orange-500 hover:bg-slate-800 disabled:opacity-50 disabled:hover:text-slate-400 disabled:hover:bg-transparent transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-center text-[11px] text-slate-500 mt-3">
                AI can be inaccurate, please verify the answers. Local Search Edition.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
