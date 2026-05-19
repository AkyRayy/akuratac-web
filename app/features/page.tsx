"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Cpu, BarChart3, RefreshCw, Code, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/components/language-context";

export default function FeaturesPage() {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, titleKey: "feature.1.title", descKey: "feature.1.desc", highlight: true },
    { icon: BarChart3, titleKey: "feature.2.title", descKey: "feature.2.desc", highlight: true },
    { icon: Zap, titleKey: "feature.3.title", descKey: "feature.3.desc", highlight: false },
    { icon: Cpu, titleKey: "feature.4.title", descKey: "feature.4.desc", highlight: false },
    { icon: RefreshCw, titleKey: "feature.5.title", descKey: "feature.5.desc", highlight: false },
    { icon: Code, titleKey: "feature.6.title", descKey: "feature.6.desc", highlight: false },
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
              {t("features.title")}
            </h1>
            <p className="text-lg text-foreground/60">
              {t("features.subtitle")}
            </p>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`group p-8 rounded-2xl border transition-all ${
                  feature.highlight
                    ? "border-primary/20 bg-card/50 hover:border-primary/40"
                    : "border-border bg-card/30 hover:border-border"
                }`}
              >
                <feature.icon className="w-12 h-12 mb-4 text-primary/70 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">
                  {t(feature.titleKey as any)}
                </h3>
                <p className="text-foreground/60 leading-relaxed">
                  {t(feature.descKey as any)}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technical Specs */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-card/30 p-8 lg:p-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-6 text-center">
              Technical Specifications
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">Java 17+ & Kotlin support</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">Native C++ core for performance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">MySQL / MongoDB support</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">Redis caching for high-scale</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">Packet-level analysis</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">Customizable punishment system</span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}