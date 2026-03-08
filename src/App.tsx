import { motion } from "motion/react";
import { Download, Mail, MessageCircle, Phone } from "lucide-react";

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

  // Ultra-smooth Apple-like easing
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <div className="min-h-[100dvh] bg-[#F5F5F7] flex items-center justify-center p-4 font-sans text-black relative overflow-hidden selection:bg-black/10">
      {/* Subtle ambient background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_white_0%,_transparent_70%)] opacity-60 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(12px)", scale: 0.95 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1, ease: smoothEase }}
        className="w-full max-w-[320px] bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-white flex flex-col items-center relative z-10"
      >
        {/* Profile Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: smoothEase }}
          className="relative"
        >
          <div className="absolute inset-0 bg-black/5 rounded-full blur-xl transform translate-y-2" />
          <img
            src={profilePicUrl}
            alt="Thomas Rott"
            className="w-24 h-24 rounded-full object-cover border-[3px] border-white shadow-sm relative z-10"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Name & Role */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: smoothEase }}
          className="text-center mt-5"
        >
          <h1 className="text-[22px] font-semibold tracking-tight text-black/90">
            Thomas Rott
          </h1>
          <p className="text-[9px] font-bold tracking-[0.25em] text-black/40 uppercase mt-1.5">
            Facility Management
          </p>
        </motion.div>

        {/* Quick Actions (Minimalist Circles) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: smoothEase }}
          className="flex gap-4 mt-8"
        >
          {[
            { icon: Phone, href: `tel:${phoneNumber}` },
            { icon: MessageCircle, href: `https://wa.me/${phoneNumber.replace("+", "")}` },
            { icon: Mail, href: `mailto:${email}` },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.icon === MessageCircle ? "_blank" : "_self"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.06)" }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-black/[0.03] flex items-center justify-center text-black/70 transition-colors"
            >
              <item.icon className="w-[18px] h-[18px]" strokeWidth={2} />
            </motion.a>
          ))}
        </motion.div>

        {/* Primary Action (Save Contact) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: smoothEase }}
          className="w-full mt-8"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownloadVCard}
            className="w-full h-12 bg-black text-white rounded-full flex items-center justify-center gap-2 text-[13px] font-medium tracking-wide relative overflow-hidden group shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-[15px] h-[15px]" strokeWidth={2.5} />
              Kontakt speichern
            </span>
            {/* Continuous Shine Effect */}
            <motion.div
              animate={{ x: ["-100%", "250%"] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "linear",
                repeatDelay: 1,
              }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0"
            />
          </motion.button>
        </motion.div>

        {/* Secondary Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="flex items-center gap-6 mt-8"
        >
          <a
            href={myHammerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-black/40 hover:text-black transition-colors"
          >
            MyHammer
          </a>
          <div className="w-1 h-1 rounded-full bg-black/10" />
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium text-black/40 hover:text-black transition-colors"
          >
            Website
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
