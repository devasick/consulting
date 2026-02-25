import { Layout } from "@/components/layout/Layout";
import { useI18n } from "@/lib/i18n";
import { Link } from "wouter";
import { ArrowRight, Calculator, PieChart, Briefcase, Users, FileText, TrendingUp, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useI18n();

  const services = [
    { icon: Calculator, title: "Finanzbuchhaltung", desc: "Digital & GoBD-konform" },
    { icon: Users, title: "Lohnbuchhaltung", desc: "Sicher & Termingerecht" },
    { icon: FileText, title: "Jahresabschluss", desc: "Bilanz & EÜR" },
    { icon: PieChart, title: "Steuererklärung", desc: "Privat & Betrieblich" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Digitale Steuerkanzlei
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground leading-[1.1] mb-6 text-balance"
              >
                {t("hero.title")}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg"
              >
                {t("hero.subtitle")}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="/contact" 
                  className="px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center flex items-center justify-center gap-2"
                >
                  {t("hero.cta")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 rounded-xl font-semibold bg-white border border-border text-foreground hover:bg-gray-50 transition-all duration-200 text-center"
                >
                  {t("hero.secondary")}
                </Link>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-black/10"
            >
              {/* hero abstract office scene */}
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=1600&fit=crop" 
                alt="Modern tax consulting office" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
              
              {/* Floating trust badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Zertifizierte Kanzlei</p>
                    <p className="text-sm text-muted-foreground">Nach höchsten Qualitätsstandards</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">{t("services.title")}</h2>
            <p className="text-muted-foreground text-lg">{t("services.subtitle")}</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-display mb-2 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground mb-6">{s.desc}</p>
                <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
                  {t("services.learn_more")} <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Trust */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Warum Vivek Padghan Consulting?</h2>
              <div className="space-y-8 mt-10">
                {[
                  { title: "Persönliche Betreuung", desc: "Bei uns sind Sie keine Nummer. Sie haben einen festen Ansprechpartner, der Ihr Unternehmen kennt." },
                  { title: "Digitale Prozesse", desc: "Wir nutzen modernste DATEV-Lösungen für effiziente, papierlose und sichere Abläufe." },
                  { title: "Proaktive Beratung", desc: "Wir verwalten nicht nur die Vergangenheit, sondern gestalten aktiv Ihre steuerliche Zukunft." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-3 scale-105 opacity-10"></div>
              <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl relative border border-border">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                </div>
                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-foreground mb-8">
                  "Vivek Padghan Consulting hat uns bei der Existenzgründung perfekt begleitet. Die digitalen Prozesse sparen uns wöchentlich mehrere Stunden Zeit."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl">
                    M
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Michael Weber</p>
                    <p className="text-sm text-muted-foreground">Geschäftsführer, TechStart GmbH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
