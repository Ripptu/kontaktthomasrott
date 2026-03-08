import { motion } from "motion/react";
import { Download, Mail, MessageCircle, Phone, Star, Globe, ArrowUpRight } from "lucide-react";

export default function App() {
  const phoneNumber = "+4917667580812";
  const email = "info@thomasrott.de";
  const myHammerUrl =
    "https://www.my-hammer.de/auftragnehmer/facility-management-rott";
  const websiteUrl = "https://thomasrott.de"; // Placeholder
  const profilePicUrl =
    "https://www.my-hammer.de/images/sp/thumbnail_medium/9e6c0b42-1f11-459e-adf1-e2b591e073ce.jpg";

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Thomas Rott
ORG:Facility Management
TEL;TYPE=WORK,VOICE:${phoneNumber}
EMAIL;TYPE=PREF,INTERNET:${email}
URL:${websiteUrl}
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Thomas_Rott.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Agency-grade easing
  const smoothEase = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: smoothEase },
    },
  };

  return (
    <div className="h-[100dvh] w-full bg-[#f2f2f2] text-[#111111] font-sans selection:bg-[#111111] selection:text-white overflow-hidden flex justify-center">
      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[420px] h-full p-3 sm:p-4 flex flex-col gap-3 relative z-10"
      >
        {/* 1. Main Profile Card (Flex 3.5) */}
        <motion.div
          variants={itemVariants}
          className="flex-[3.5] bg-white rounded-[2rem] p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.04] flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-zinc-100 to-transparent rounded-bl-full opacity-50 pointer-events-none" />
          
          <div className="flex justify-between items-start">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-sm bg-zinc-100 shrink-0">
              <img
                src={profilePicUrl}
                alt="Thomas Rott"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Verfügbar
            </div>
          </div>

          <div className="space-y-1 relative z-10">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111] leading-none">
              Thomas Rott
            </h1>
            <p className="text-[#666] text-[11px] sm:text-xs font-medium uppercase tracking-[0.15em]">
              Facility Management
            </p>
            <p className="text-[#555] text-[11px] sm:text-xs leading-relaxed mt-2 line-clamp-2">
              Gartenpflege & Objektbetreuung in München & Freising. Werterhalt durch Präzision.
            </p>
          </div>
        </motion.div>

        {/* 2. Primary CTA: Save Contact (Flex 1.5) */}
        <motion.div
          variants={itemVariants}
          className="flex-[1.5] bg-[#111] text-white rounded-[2rem] p-1 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden group"
        >
          <button
            onClick={handleDownloadVCard}
            className="w-full h-full rounded-[1.75rem] flex items-center justify-center gap-3 relative z-10 transition-transform duration-500 group-hover:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
              <Download className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span className="text-base sm:text-lg font-semibold tracking-tight">Kontakt hinzufügen</span>
          </button>
          {/* Agency Shine Effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
        </motion.div>

        {/* 3. Quick Actions (Flex 2) */}
        <motion.div variants={itemVariants} className="flex-[2] grid grid-cols-3 gap-3">
          <motion.a
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${phoneNumber}`}
            className="bg-emerald-500 text-white rounded-[2rem] shadow-[0_8px_20px_-6px_rgba(16,185,129,0.4)] flex flex-col items-center justify-center gap-1.5 relative overflow-hidden"
          >
            <Phone className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wide">Anrufen</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${phoneNumber.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white rounded-[2rem] shadow-[0_8px_20px_-6px_rgba(37,211,102,0.4)] flex flex-col items-center justify-center gap-1.5 relative overflow-hidden"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wide">WhatsApp</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${email}`}
            className="bg-blue-500 text-white rounded-[2rem] shadow-[0_8px_20px_-6px_rgba(59,130,246,0.4)] flex flex-col items-center justify-center gap-1.5 relative overflow-hidden"
          >
            <Mail className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wide">E-Mail</span>
          </motion.a>
        </motion.div>

        {/* 4. Links (Flex 2.5) */}
        <motion.div variants={itemVariants} className="flex-[2.5] grid grid-cols-2 gap-3">
          {/* MyHammer */}
          <motion.a
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.95 }}
            href={myHammerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-[2rem] p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.04] flex flex-col justify-between group"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0 group-hover:bg-yellow-100 transition-colors">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-[#111] transition-colors" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-[#111] leading-tight group-hover:text-yellow-600 transition-colors">MyHammer</p>
              <p className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-0.5">Bewertungen</p>
            </div>
          </motion.a>

          {/* Website */}
          <motion.a
            whileHover={{ scale: 0.97 }}
            whileTap={{ scale: 0.95 }}
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-[2rem] p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.04] flex flex-col justify-between group"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-zinc-200 transition-colors">
                <Globe className="w-5 h-5 text-zinc-600" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-[#111] transition-colors" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-[#111] leading-tight group-hover:text-blue-600 transition-colors">Website</p>
              <p className="text-[10px] sm:text-xs text-zinc-500 font-medium mt-0.5">Besuchen</p>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
