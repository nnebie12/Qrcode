import { useState } from 'react';
import Header from './components/Header';
import QRDisplay from './components/QRDisplay';
import { Globe, ShieldCheck, Info } from 'lucide-react';

const DEFAULT_URL = 'https://alstom-ehs-metro-2/';
const DEFAULT_LABEL = 'Plateforme EHS — Accueil';

export default function App() {
  const [url, setUrl] = useState(DEFAULT_URL);
  const [label, setLabel] = useState(DEFAULT_LABEL);
  const [applied, setApplied] = useState(false);
  const [liveUrl, setLiveUrl] = useState(DEFAULT_URL);
  const [liveLabel, setLiveLabel] = useState(DEFAULT_LABEL);

  function handleApply() {
    if (!url.trim()) return;
    setLiveUrl(url.trim());
    setLiveLabel(label.trim() || DEFAULT_LABEL);
    setApplied(true);
    setTimeout(() => setApplied(false), 2000);
  }

  const presets = [
    { label: 'Accueil', path: '' },
    { label: 'Maîtrise Opérationnelle', path: '?page=2' },
    { label: 'Inspection Équipements', path: '?page=3' },
    {
      label: 'Signalement EHS',
      path: 'https://forms.microsoft.com/Pages/ResponsePage.aspx?id=0zqZDXP6GkKxKR_lWQED85saOM4Xwt1Pu2ZJGopsz61UQkpGMFZDS1JHTEo4Tzc2UEpJSUtRNkpaWS4u',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F5F7]" style={{ fontFamily: 'Barlow, sans-serif' }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&family=Barlow+Condensed:wght@600;700;800&display=swap"
        rel="stylesheet"
      />

      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#fff0f2] border border-[#ffcdd2] text-[#E2001A] text-[10px] font-bold uppercase tracking-[2px] px-4 py-1.5 rounded-full mb-4">
            <ShieldCheck size={11} />
            Accès rapide sécurisé
          </div>
          <h1
            className="text-4xl font-black text-[#003057] mb-3 leading-tight"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            GÉNÉRATEUR DE <span className="text-[#E2001A]">QR CODE</span>
          </h1>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Configurez l'URL de votre plateforme EHS, puis imprimez ou téléchargez le QR code pour
            permettre un accès instantané depuis un smartphone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-sm font-bold text-[#003057] uppercase tracking-wider mb-5 flex items-center gap-2">
                <Globe size={15} className="text-[#0F5CA3]" />
                Configuration du QR Code
              </h2>

              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  URL de la plateforme
                </label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://votre-plateforme.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0F5CA3] focus:outline-none text-sm text-[#003057] font-medium transition-colors"
                />
              </div>

              <div className="mb-5">
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Libellé du QR Code
                </label>
                <input
                  type="text"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  placeholder="Ex: Plateforme EHS — Accueil"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0F5CA3] focus:outline-none text-sm text-[#003057] font-medium transition-colors"
                />
              </div>

              <button
                onClick={handleApply}
                className="w-full py-3 rounded-xl bg-[#003057] text-white text-sm font-bold uppercase tracking-wider transition-all hover:bg-[#0F5CA3] active:scale-[0.98]"
              >
                {applied ? '✓ QR Code mis à jour' : 'Générer le QR Code'}
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-sm font-bold text-[#003057] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Info size={15} className="text-[#0F5CA3]" />
                Raccourcis pages
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {presets.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => {
                      const target = p.path.startsWith('http')
                        ? p.path
                        : DEFAULT_URL + p.path;
                      setUrl(target);
                      setLabel(p.label);
                    }}
                    className="text-left px-3 py-2.5 rounded-lg border-2 border-gray-100 hover:border-[#0F5CA3] hover:bg-[#EEF4FA] transition-all group"
                  >
                    <div className="text-xs font-semibold text-[#003057] group-hover:text-[#0F5CA3] leading-tight">
                      {p.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#FFF8E1] border border-[#FFE082] rounded-xl p-4 flex gap-3">
              <div className="text-[#F57F17] mt-0.5 flex-shrink-0">⚠</div>
              <div>
                <div className="text-xs font-bold text-[#7B4800] mb-1">Important</div>
                <div className="text-xs text-[#9A5C00] leading-relaxed">
                  Assurez-vous que l'URL saisie est celle de votre site WordPress/Elementor où le
                  widget EHS est publié. Le QR code pointera directement vers cette adresse.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <QRDisplay url={liveUrl} label={liveLabel} />

            <div className="mt-6 w-full max-w-sm">
              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                <div className="text-xs font-bold text-[#003057] uppercase tracking-wider mb-3">
                  Instructions d'utilisation
                </div>
                <ol className="space-y-2">
                  {[
                    "Saisissez l'URL de votre plateforme EHS publiée",
                    'Cliquez sur "Générer le QR Code"',
                    'Téléchargez ou imprimez le QR code',
                    'Affichez-le sur site (chantier, bureau, entrée)',
                    'Les agents scannent avec leur smartphone pour accéder directement',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#0F5CA3] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-xs text-gray-500 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0F5CA3] mt-16 py-6 text-center">
        <div className="text-xs text-white/40 uppercase tracking-widest">
          © 2026 Alstom Metro d'Abidjan — EHS Extranet — Tous droits réservés
        </div>
      </footer>

      <style>{`
        @media print {
          header, footer, form, button:not(.no-print) { display: none !important; }
          .print-area { display: flex !important; box-shadow: none !important; }
        }
      `}</style>
    </div>
  );
}
