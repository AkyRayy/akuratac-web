"use client";

import { motion } from "framer-motion";
import { Download, Server, Package, Terminal, Settings } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-context";

export default function DownloadPage() {
  const { t } = useLanguage();

  const versions = [
    { name: t("download.spigot"), desc: t("download.spigot.desc"), icon: Server, color: "bg-blue-500/10" },
    { name: t("download.bungee"), desc: t("download.bungee.desc"), icon: Package, color: "bg-purple-500/10" },
    { name: t("download.waterfall"), desc: t("download.waterfall.desc"), icon: Terminal, color: "bg-green-500/10" },
  ];

  const steps = [
    { icon: Download, text: t("download.step1") },
    { icon: Package, text: t("download.step2") },
    { icon: Server, text: t("download.step3") },
    { icon: Settings, text: t("download.step4") },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              {t("download.title")}
            </h1>
            <p className="text-lg text-foreground/60">
              {t("download.subtitle")}
            </p>
          </motion.div>
        </section>

        {/* Version Cards */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-6">
            {versions.map((version, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl border border-border bg-card/30 hover:border-primary/30 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl ${version.color} flex items-center justify-center mb-4`}>
                  <version.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{version.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{version.desc}</p>
                <button className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Download <Download size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Installation Guide */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card/30 p-8 lg:p-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-8 text-center">
              {t("download.instruction")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-primary font-bold text-lg">{idx + 1}</span>
                  </div>
                  <step.icon className="w-6 h-6 text-primary/70 mb-2" />
                  <p className="text-sm text-foreground/70">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-xs text-foreground/50 font-mono bg-muted p-3 rounded-lg inline-block">
                /plugins/AkuratAC/config.yml
              </p>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-3">Need help?</h3>
            <p className="text-foreground/60 mb-6">
              Join our Discord server for support and updates
            </p>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all">
              Join Discord
            </button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}