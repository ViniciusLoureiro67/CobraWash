import Head from "next/head";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>CobraWash — Lavagem & Detalhamento de Motos</title>
        <meta
          name="description"
          content="CobraWash · Lavagem, detalhamento e proteção para motos em Maceió. Agende pelo WhatsApp."
        />
        <meta
          property="og:title"
          content="CobraWash — Lavagem & Detalhamento de Motos"
        />
        <meta
          property="og:description"
          content="Lavagem, detalhamento e proteção para motos em Maceió. Agende pelo WhatsApp."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/cobrawashicone.png" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="icon" href="/cobrawashicone.png" />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-black text-white p-4 sm:p-6 relative overflow-hidden">
        {/* Marca d’água na tela toda */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <Image
            src="/cobrawashicone.png"
            alt="CobraWash Marca d’água"
            width={800}
            height={800}
            className="object-contain"
          />
        </div>

        {/* Card principal */}
        {/* Ajustado max-w-sm para telas pequenas e p-6 para p-4 em mobile */}
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-[#121212]/95 border border-yellow-500/20 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center relative z-10">
          {/* Logo + título */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-yellow-500/40 shadow-lg">
              <Image
                src="/cobrawashicone.png"
                alt="CobraWash Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            {/* Reduzido text-5xl para text-4xl em telas pequenas */}
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg leading-tight">
              CobraWash
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 mt-2">
              Lavagem • Detalhamento • Proteção (Maceió)
            </p>
            <span className="inline-flex items-center gap-2 text-yellow-400 border border-yellow-400 rounded-full px-3 py-1 text-xs sm:text-sm font-semibold mt-3">
              🐍 Agenda aberta
            </span>
          </div>

          {/* Botões */}
          <div className="flex flex-col gap-3 sm:gap-4 mt-6">
            {/* WhatsApp principal */}
            <a
              href="https://wa.me/5582993060696?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20CobraWash"
              target="_blank"
              className="flex items-center justify-center gap-2 sm:gap-3 w-full text-center bg-yellow-500 hover:bg-yellow-600 text-black text-base sm:text-lg font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-md transition"
            >
              <FaWhatsapp className="text-xl sm:text-2xl" />
              Fale conosco no WhatsApp
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/cobrawash_/"
              target="_blank"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-[#1a1a1a] border border-white/20 hover:border-yellow-400/50 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg transition"
            >
              <FaInstagram className="text-xl sm:text-2xl text-pink-500" />
              Instagram{" "}
              <span className="ml-1 sm:ml-2 text-gray-400 text-xs sm:text-sm">
                @cobrawash_
              </span>
            </a>

            {/* Localização */}
            <a
              href="https://maps.app.goo.gl/gQFJUyTnnRKK7uhk7" // Corrigir este link para um real!
              target="_blank"
              className="flex items-center justify-center gap-2 sm:gap-3 bg-[#1a1a1a] border border-white/20 hover:border-yellow-400/50 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg transition"
            >
              <FaMapMarkerAlt className="text-xl sm:text-2xl text-red-500" />
              Localização{" "}
              <span className="ml-1 sm:ml-2 text-gray-400 text-xs sm:text-sm">
                Google Maps
              </span>
            </a>
          </div>

          {/* Serviços */}
          <div className="mt-8 sm:mt-10 bg-yellow-500/10 border border-yellow-500 rounded-xl p-4 sm:p-6 text-left">
            <h3 className="font-bold text-yellow-400 text-base sm:text-lg mb-2 sm:mb-3 uppercase">
              Serviços rápidos
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-200 text-sm sm:text-base">
              <li>✔ Lavagem padrão — R$ 40</li>
              <li>✔ Lavagem premium — R$ 60</li>
              <li>
                ✔ Vitrificação —{" "}
                <a
                  href="https://wa.me/5582993060696?text=Olá!%20Quero%20agendar%20uma%20vitrificação"
                  target="_blank"
                  className="text-yellow-400 underline hover:text-yellow-300"
                >
                  agendar via WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Footer */}
          {/* Ajustado flex-col para sm:flex-row para melhor responsividade em mobile */}
          <footer className="mt-6 flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-500 items-center gap-2 sm:gap-2">
            <span className="order-last sm:order-first">
              © {new Date().getFullYear()} CobraWash
            </span>

            <div className="flex flex-col sm:flex-row items-center gap-1">
              <span>Site desenvolvido por:</span>
              <a
                href="https://www.linkedin.com/in/vsloureiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300 font-medium"
              >
                <FaLinkedin className="text-sm sm:text-lg" />
                Vinicius Loureiro
              </a>
            </div>

            <a
              href="mailto:contato@cobrawash.com.br"
              className="hover:text-yellow-400"
            >
              Mande um Email
            </a>
          </footer>
        </div>

        {/* Botão flutuante WhatsApp */}
        <a
          href="https://wa.me/5582993060696?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20CobraWash"
          target="_blank"
          className="fixed bottom-4 right-4 bg-yellow-500 hover:bg-yellow-600 text-black p-3 sm:p-4 rounded-full shadow-lg z-50"
          aria-label="Fale conosco no WhatsApp"
        >
          <FaWhatsapp className="text-2xl sm:text-3xl" />
        </a>
      </main>
    </>
  );
}
