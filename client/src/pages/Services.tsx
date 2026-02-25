import { Layout } from "@/components/layout/Layout";
import { Calculator, PieChart, Briefcase, Users, FileText, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const servicesList = [
    {
      id: "finanzbuchhaltung",
      icon: Calculator,
      title: "Finanzbuchhaltung",
      description: "Wir übernehmen Ihre komplette Finanzbuchhaltung – digital, rechtssicher und effizient. So haben Sie stets den vollen Überblick über Ihre Finanzen.",
      features: ["Belegerfassung digital", "Umsatzsteuervoranmeldungen", "Betriebswirtschaftliche Auswertungen (BWA)"]
    },
    {
      id: "lohnbuchhaltung",
      icon: Users,
      title: "Lohnbuchhaltung",
      description: "Pünktliche und korrekte Lohn- und Gehaltsabrechnungen für Ihre Mitarbeiter unter Berücksichtigung aller aktuellen gesetzlichen Vorgaben.",
      features: ["Lohn- und Gehaltsabrechnungen", "Meldungen an Sozialversicherungsträger", "Begleitung bei Lohnsteuerprüfungen"]
    },
    {
      id: "jahresabschluss",
      icon: FileText,
      title: "Jahresabschluss",
      description: "Wir erstellen Ihre Jahresabschlüsse nach Handels- und Steuerrecht und übernehmen die notwendigen Veröffentlichungen im Bundesanzeiger.",
      features: ["Bilanzen & Einnahmenüberschussrechnungen", "Anhang und Lagebericht", "Offenlegung"]
    },
    {
      id: "steuererklaerung",
      icon: PieChart,
      title: "Steuererklärung",
      description: "Wir erstellen Steuererklärungen für Privatpersonen und Unternehmen und prüfen Ihre Steuerbescheide auf Richtigkeit.",
      features: ["Einkommensteuer", "Körperschaft- und Gewerbesteuer", "Erbschaft- und Schenkungsteuer"]
    },
    {
      id: "unternehmensberatung",
      icon: TrendingUp,
      title: "Unternehmensberatung",
      description: "Steuerliche und betriebswirtschaftliche Beratung zur Optimierung Ihrer Unternehmensprozesse und Rechtsformwahl.",
      features: ["Rechtsformwahl & Umwandlung", "Liquiditätsplanung", "Nachfolgeplanung"]
    },
    {
      id: "existenzgruendung",
      icon: Briefcase,
      title: "Existenzgründung",
      description: "Wir begleiten Sie von der ersten Idee über den Businessplan bis hin zur Anmeldung beim Finanzamt und Gewerbeamt.",
      features: ["Businessplanprüfung", "Fördermittelberatung", "Steuerliche Erstberatung"]
    }
  ];

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-20 lg:py-28 rounded-b-[3rem] mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Umfassende Leistungen</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/80">
            Wir bieten Ihnen maßgeschneiderte Lösungen für alle steuerlichen und betriebswirtschaftlichen Herausforderungen.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="bg-card rounded-3xl p-8 shadow-lg shadow-black/5 border border-border/50 hover:shadow-xl hover:border-border transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact" 
                className="w-full py-4 rounded-xl font-semibold bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-colors duration-200 text-center flex items-center justify-center gap-2 mt-auto"
              >
                Beratung anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
