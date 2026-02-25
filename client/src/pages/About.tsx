import { Layout } from "@/components/layout/Layout";
import { CheckCircle2, Award, BookOpen } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
            {/* professional headshot placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop" 
              alt="Steuerberater Profil" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Die Kanzlei</h4>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground mb-6">Wir verstehen Zahlen. Und Menschen.</h1>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                Hinter jeder Bilanz und jeder Steuererklärung stehen Menschen, Unternehmen und Lebenswerke. Als moderne Steuerkanzlei in Hamburg kombinieren wir fachliche Exzellenz mit persönlicher Nähe.
              </p>
              <p>
                Unser Ziel ist es nicht nur, Ihre steuerlichen Pflichten zu erfüllen, sondern Ihre wirtschaftliche Zukunft aktiv und positiv zu gestalten. Wir setzen auf digitale Prozesse, transparente Kommunikation und proaktive Beratung.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-muted/50 p-6 rounded-2xl border border-border/50">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" /> Erfahrung
                </h3>
                <p className="text-sm text-muted-foreground">Über 15 Jahre Expertise im deutschen Steuerrecht.</p>
              </div>
              <div className="bg-muted/50 p-6 rounded-2xl border border-border/50">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" /> Fortbildung
                </h3>
                <p className="text-sm text-muted-foreground">Kontinuierliche Weiterbildung unseres gesamten Teams.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Unsere Philosophie</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-primary-foreground/90">
              "Steuerberatung ist Vertrauenssache. Wir begegnen unseren Mandanten auf Augenhöhe, sprechen eine verständliche Sprache und finden Lösungen, die rechtlich sicher und wirtschaftlich sinnvoll sind."
            </p>
          </div>
        </div>

      </div>
    </Layout>
  );
}
