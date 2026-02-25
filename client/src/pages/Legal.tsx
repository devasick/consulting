import { Layout } from "@/components/layout/Layout";

export function Impressum() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold font-display mb-8">Impressum</h1>
        
        <div className="prose prose-lg prose-slate text-muted-foreground max-w-none">
          <p>Angaben gemäß § 5 TMG:</p>
          
          <h3 className="text-foreground font-bold mt-8 mb-4">Vivek Padghan Consulting</h3>
          <p>
            Knoopstraße 40<br />
            21074 Hamburg
          </p>

          <h3 className="text-foreground font-bold mt-8 mb-4">Vertreten durch:</h3>
          <p>Vivek Padghan (Consultant)</p>

          <h3 className="text-foreground font-bold mt-8 mb-4">Kontakt:</h3>
          <p>
            Telefon: +49 (0) 174 282 30 31<br />
            E-Mail: info@vivek-padghan.de
          </p>

          <h3 className="text-foreground font-bold mt-8 mb-4">Umsatzsteuer-ID:</h3>
          <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />DE 123 456 789</p>

          <h3 className="text-foreground font-bold mt-8 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen:</h3>
          <p>
            Die gesetzliche Berufsbezeichnung Steuerberater wurde in der Bundesrepublik Deutschland verliehen.
          </p>
          <p>
            Zuständige Kammer:<br />
            Steuerberaterkammer Hamburg<br />
            Nederlinger Straße 9<br />
            80638 Hamburg
          </p>
        </div>
      </div>
    </Layout>
  );
}

export function Datenschutz() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold font-display mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg prose-slate text-muted-foreground max-w-none">
          <h3 className="text-foreground font-bold mt-8 mb-4">1. Datenschutz auf einen Blick</h3>
          <p><strong>Allgemeine Hinweise</strong></p>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3 className="text-foreground font-bold mt-8 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h3>
          <p><strong>Datenschutz</strong></p>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-foreground font-bold mt-8 mb-4">3. Datenerfassung auf dieser Website</h3>
          <p><strong>Kontaktformular</strong></p>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
          </p>
        </div>
      </div>
    </Layout>
  );
}
