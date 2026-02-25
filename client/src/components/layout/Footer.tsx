import { Link } from "wouter";
import { useI18n } from "@/lib/i18n";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-foreground text-background py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none">Vivek Padghan Consulting</span>
                <span className="text-xs text-white/60 font-medium uppercase tracking-wider">Consulting & Beratung</span>
              </div>
            </div>
            <p className="text-white/60 max-w-sm mb-6 leading-relaxed">
              Kompetente und persönliche Beratung für Unternehmen und Privatpersonen im Herzen von Hamburg.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground shrink-0 mt-0.5" />
                <span>Knoopstraße 40<br/>21074 Hamburg</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground shrink-0" />
                <span>+49 (0) 174 282 30 31</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground shrink-0" />
                <span>info@vivek-padghan.de</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Rechtliches</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors">
                  {t("legal.impressum")}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition-colors">
                  {t("legal.privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Vivek Padghan Consulting. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
