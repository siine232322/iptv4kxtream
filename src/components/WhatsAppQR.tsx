import QRCode from "qrcode";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/LGAJJMCZOAZYI1";

export default async function WhatsAppQR() {
  const svg = await QRCode.toString(WHATSAPP_URL, {
    type: "svg",
    margin: 1,
    color: { dark: "#10233F", light: "#00000000" },
  });

  return (
    <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-white p-6 text-center shadow-[0_10px_40px_-20px_rgba(16,35,63,0.25)] sm:p-8">
      <span className="inline-flex items-center gap-2 rounded-full bg-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue">
        <MessageCircle className="h-3.5 w-3.5" />
        WhatsApp
      </span>
      <h2 className="text-xl font-extrabold text-foreground">
        Discutez avec nous sur WhatsApp
      </h2>
      <p className="max-w-xs text-sm text-muted">
        Scannez ce code QR avec votre téléphone pour ouvrir directement notre
        conversation WhatsApp, ou utilisez le bouton ci-dessous.
      </p>
      <div
        className="h-48 w-48 rounded-xl border border-border p-2 [&_svg]:h-full [&_svg]:w-full"
        role="img"
        aria-label="Code QR pour ouvrir la conversation WhatsApp de StreamCrest"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_10px_30px_-10px_rgba(8,120,217,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-dark"
      >
        <MessageCircle className="h-4 w-4" />
        Ouvrir WhatsApp
      </a>
    </div>
  );
}
