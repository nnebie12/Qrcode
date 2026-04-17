export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#003057] rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm tracking-tight" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              EHS
            </span>
          </div>
          <div>
            <div className="font-black text-[#003057] text-lg leading-none" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '1px' }}>
              ALST<span className="text-[#E2001A]">O</span>M
            </div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">EHS Plateforme</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400 uppercase tracking-widest">Projet Signalisation Maroc</div>
          <div className="text-xs font-semibold text-[#0F5CA3]">Metro d'Abidjan — Ligne 1</div>
        </div>
      </div>
    </header>
  );
}
