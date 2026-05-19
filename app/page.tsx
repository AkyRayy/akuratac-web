"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Cpu, BarChart3 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-context";

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { value: "99.7%", label: "Detection Accuracy", icon: BarChart3 },
    { value: "<1%", label: "CPU Usage", icon: Cpu },
    { value: "0", label: "False Positives", icon: Shield },
    { value: "24/7", label: "Real-time Protection", icon: Zap },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-medium">v3.0 — Latest Release</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
                {t("hero.title")}
                <br />
                <span className="text-primary/70">{t("hero.subtitle")}</span>
              </h1>

              <p className="text-lg lg:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto text-balance">
                {t("hero.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/download">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:shadow-lg flex items-center gap-2"
                  >
                    {t("hero.cta")}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <Link href="/features">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-all"
                  >
                    {t("hero.secondary")}
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="text-center p-6 rounded-2xl border border-border bg-card/30"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary/70" />
                  <div className="text-2xl lg:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                {t("features.title")}
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                {t("features.subtitle")}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-border bg-card/30 hover:bg-card/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <div className="w-6 h-6 rounded-full bg-primary/30" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`feature.${i}.title` as any)}
                  </h3>
                  <p className="text-foreground/60">
                    {t(`feature.${i}.desc` as any)}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/features">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  View all features
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}