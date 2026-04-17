import { useState, useRef } from 'react';
import { Download, Printer, RefreshCw, CheckCircle, Link } from 'lucide-react';

interface QRDisplayProps {
  url: string;
  label: string;
}

function buildQRUrl(url: string, size: number) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}&color=003057&bgcolor=FFFFFF&qzone=1&format=png`;
}

export default function QRDisplay({ url, label }: QRDisplayProps) {
  const [copied, setCopied] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const qrSrc = buildQRUrl(url, 300);
  const qrLargeSrc = buildQRUrl(url, 600);

  function handleCopy() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  function handleDownload() {
    const link = document.createElement('a');
    link.href = qrLargeSrc;
    link.download = 'alstom-ehs-qrcode.png';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        ref={printRef}
        className="print-area bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 flex flex-col items-center gap-4 w-full max-w-sm"
        style={{ boxShadow: '0 20px 60px rgba(0,48,87,0.15)' }}
      >
        <div className="flex flex-col items-center gap-1 w-full">
          <div className="text-[10px] uppercase tracking-[3px] text-[#E2001A] font-bold">Alstom EHS</div>
          <div
            className="text-xl font-black text-[#003057] text-center leading-tight"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            {label}
          </div>
        </div>

        <div className="relative p-3 bg-white rounded-xl border-2 border-[#E8ECF0]">
          <img
            src={qrSrc}
            alt="QR Code"
            width={220}
            height={220}
            className="block rounded"
            style={{ imageRendering: 'pixelated' }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
              <span
                className="text-[#003057] font-black text-xs"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                EHS
              </span>
            </div>
          </div>
        </div>

        <div className="text-center space-y-1">
          <p className="text-xs text-gray-500 font-medium">Scannez ce QR code pour accéder à la plateforme</p>
          <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#F4F5F7] rounded-lg">
            <Link size={10} className="text-[#0F5CA3] flex-shrink-0" />
            <span className="text-[10px] text-[#0F5CA3] font-medium truncate max-w-[220px]">{url}</span>
          </div>
        </div>

        <div className="w-full pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="text-[9px] text-gray-300 uppercase tracking-wider">© 2026 Alstom</div>
          <div className="text-[9px] text-gray-300 uppercase tracking-wider">Metro d'Abidjan</div>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-center">
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg border-2 border-[#003057] text-[#003057] text-sm font-semibold transition-all hover:bg-[#003057] hover:text-white"
        >
          {copied ? <CheckCircle size={15} /> : <RefreshCw size={15} />}
          {copied ? 'Lien copié !' : 'Copier le lien'}
        </button>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0F5CA3] text-white text-sm font-semibold transition-all hover:bg-[#003057]"
        >
          <Download size={15} />
          Télécharger
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#E2001A] text-white text-sm font-semibold transition-all hover:bg-[#c0001a]"
        >
          <Printer size={15} />
          Imprimer
        </button>
      </div>
    </div>
  );
}
