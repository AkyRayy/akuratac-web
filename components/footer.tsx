"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "./language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold tracking-tight mb-4">
              Akurat<span className="text-primary/70">AC</span>
            </h3>
            <p className="text-sm text-foreground/60 max-w-md">
              Professional anti-cheat solution for Minecraft servers. 
              Built with precision, powered by machine learning.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="/features" className="hover:text-primary transition-colors">{t("nav.features")}</Link></li>
              <li><Link href="/download" className="hover:text-primary transition-colors">{t("nav.download")}</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t("footer.docs")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">{t("footer.support")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t("footer.github")}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-foreground/50">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}