import React, { useState } from 'react';
import { 
  Settings2, Facebook, Instagram, Send, Target, Zap, Globe, 
  Users2, MapPin, Calendar, VenusMars, Heart, Search, X,
  Phone, MessageCircle, Share2
} from 'lucide-react';

export default function KurdAgencyFinal() {
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [gender, setGender] = useState('all');
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(65);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const phoneNumber = "07510386174";
  const tiktokUrl = "https://www.tiktok.com/@kurd.agency?_r=1&_t=ZS-95s7zv3rfgT";
  const facebookUrl = "https://www.facebook.com/share/1AwxhzsMUN/?mibextid=wwXIfr";

  const allLocations = [
    "هەموو ئێراق", "هەموو کوردستان", "سلێمانی", "هەولێر", "دهۆک", "کەرکوک", "هەڵەبجە",
    "سۆران", "زاخۆ", "ئاکرێ", "ڕانیە", "قەڵادزێ", "کەلار", "چمچماڵ", "بەغداد"
  ];

  const addLocation = (loc: string) => {
    if (!selectedLocations.includes(loc)) {
      setSelectedLocations([...selectedLocations, loc]);
      setLocationQuery('');
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 p-4 md:p-8 font-sans" dir="rtl">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-10 border-b border-slate-800 pb-6 flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="text-right">
          <h1 className="text-4xl font-black text-blue-500 tracking-tight">کورد ئەجێنسی</h1>
          <p className="text-slate-500 mt-1 font-medium">پڕۆفیشناڵترین سیستەمی سپۆنسەر لە کوردستان</p>
        </div>
        
        {/* Social & Contact Actions */}
        <div className="flex flex-wrap justify-center gap-3">
          <a href={tiktokUrl} target="_blank" className="bg-white/5 border border-white/10 p-2 rounded-xl hover:bg-black transition-all">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13 3.45-.2 6.9-.58 10.35-.33 2.19-1.4 4.3-3.37 5.39-2.3 1.4-5.46 1.4-7.74-.03-2.12-1.29-3.33-3.8-3.05-6.26.16-2.07 1.25-4.04 3.07-5.05 1.34-.78 2.92-1.05 4.45-.87v4.13c-.93-.11-1.89.07-2.69.58-.8.51-1.34 1.41-1.38 2.36-.08 1.4.92 2.75 2.27 3.05 1.05.22 2.21-.04 2.96-.82.68-.71.91-1.74.88-2.73V.02z"/></svg>
          </a>
          <a href={facebookUrl} target="_blank" className="bg-blue-600/10 border border-blue-600/50 p-2 rounded-xl text-blue-500 hover:bg-blue-600 hover:text-white transition-all">
            <Facebook size={20} />
          </a>
          <a href={`https://wa.me/${phoneNumber.replace('0', '964')}`} className="bg-green-600/10 border border-green-600/50 px-4 py-2 rounded-xl text-green-500 flex items-center gap-2 hover:bg-green-600 hover:text-white transition-all text-sm font-bold">
            <MessageCircle size={18} /> وەتسئەپ
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Main Targeting Form */}
          <section className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 shadow-xl text-right backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
              <Target className="text-blue-500" />
              <h2 className="text-xl font-bold font-kurdish">ڕێکخستنی سپۆنسەر</h2>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <label className="text-sm text-slate-400 mb-2 block tracking-wide">گەڕان بۆ شار و شارۆچکە</label>
                <div className="relative">
                  <Search className="absolute right-3 top-3.5 text-slate-500" size={18} />
                  <input 
                    type="text" 
                    placeholder="بۆ نموونە: سلێمانی، سۆران، کەلار..." 
                    className="w-full bg-slate-800/50 border border-slate-700 pr-10 py-3 rounded-xl outline-none focus:border-blue-500 transition-all"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                </div>
                {locationQuery && (
                  <div className="absolute z-20 w-full mt-2 bg-slate-800 border border-slate-700 rounded-xl max-h-48 overflow-y-auto shadow-2xl">
                    {allLocations.filter(l => l.includes(locationQuery)).map(loc => (
                      <button key={loc} onClick={() => addLocation(loc)} className="w-full text-right p-3 hover:bg-blue-600 border-b border-slate-700 last:border-0">{loc}</button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedLocations.map(loc => (
                  <span key={loc} className="bg-blue-500/10 border border-blue-500/40 text-blue-400 px-3 py-1 rounded-full text-xs flex items-center gap-2">
                    {loc} <X size={14} className="cursor-pointer hover:text-white" onClick={() => setSelectedLocations(selectedLocations.filter(l => l !== loc))} />
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Social Media Connect Box */}
          <section className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 text-right relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-2">کورد ئەجێنسی لە سۆشیاڵ میدیا</h2>
              <p className="text-slate-400 mb-6">بۆ بینینی نوێترین کارەکانمان و فێرکاری سپۆنسەر، فۆڵۆمان بکەن.</p>
              <div className="flex flex-wrap gap-4">
                <a href={tiktokUrl} target="_blank" className="flex-1 bg-black border border-white/10 p-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform font-bold">
                   تیکتۆکی ئێمە
                </a>
                <a href={facebookUrl} target="_blank" className="flex-1 bg-[#1877F2] p-4 rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform font-bold">
                  <Facebook size={20} /> فەیسبووکی ئێمە
                </a>
              </div>
            </div>
            <Share2 className="absolute -left-10 -bottom-10 w-40 h-40 text-white/5 rotate-12" />
          </section>
        </div>

        {/* Sidebar Summary */}
        <div className="space-y-6">
          <div className="bg-blue-600 rounded-3xl p-6 shadow-2xl sticky top-8 text-white border border-blue-400/30">
            <h3 className="text-xl font-bold mb-6 border-b border-blue-400 pb-4 flex items-center justify-between">
              <span>پوختەی داواکاری</span>
              <Zap size={18} className="animate-pulse" />
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-blue-500 pb-2">
                <span className="opacity-70">شوێنەکان:</span>
                <span className="font-bold text-left">{selectedLocations.length > 0 ? selectedLocations.join('، ') : 'دیاری نەکراوە'}</span>
              </div>
              <div className="flex justify-between border-b border-blue-500 pb-2">
                <span className="opacity-70">ڕەگەز:</span>
                <span className="font-bold">{gender === 'all' ? 'هەموو' : gender === 'male' ? 'نێر' : 'مێ'}</span>
              </div>
            </div>
            <button className="w-full mt-8 bg-white text-blue-600 font-black py-4 rounded-2xl hover:bg-slate-100 active:scale-95 transition-all shadow-lg">
              ناردن بۆ کورد ئەجێنسی 🚀
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-20 text-center text-slate-600 text-sm border-t border-slate-800 pt-10 pb-10">
        <p className="mb-2 tracking-widest font-bold">KURD AGENCY | 2026</p>
        <p>هەموو مافەکان پارێزراوە بۆ Kurd Agency </p>
      </footer>
    </div>
  );
}
