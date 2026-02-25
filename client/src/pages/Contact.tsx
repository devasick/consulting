import { Layout } from "@/components/layout/Layout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type ContactInput } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  const mutation = useSubmitContact();
  
  const form = useForm<ContactInput>({
    resolver: zodResolver(api.contact.create.input),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: ContactInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">{t("contact.title")}</h1>
          <p className="text-muted-foreground text-lg">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <h3 className="font-display font-bold text-2xl mb-8">Kanzlei Schneider</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Adresse</p>
                    <p className="text-muted-foreground mt-1">Maximilianstraße 12<br/>80539 München</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Telefon</p>
                    <p className="text-muted-foreground mt-1">+49 (0) 89 123 456 78</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">E-Mail</p>
                    <p className="text-muted-foreground mt-1">info@kanzlei-schneider.de</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Bürozeiten</p>
                    <p className="text-muted-foreground mt-1">Mo - Do: 08:00 - 17:00 Uhr<br/>Fr: 08:00 - 14:00 Uhr</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-muted rounded-3xl overflow-hidden relative border border-border">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-gray-100">
                <MapPin className="w-8 h-8 mb-2 opacity-50" />
                <span className="font-medium">Google Maps Integration</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 border border-border/50">
              <h3 className="font-display font-bold text-2xl mb-8">Schreiben Sie uns</h3>
              
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.name")}
                  </label>
                  <input
                    {...form.register("name")}
                    className="w-full px-5 py-4 rounded-xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                    placeholder="Max Mustermann"
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm mt-2">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.email")}
                    </label>
                    <input
                      {...form.register("email")}
                      type="email"
                      className="w-full px-5 py-4 rounded-xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                      placeholder="max@beispiel.de"
                    />
                    {form.formState.errors.email && (
                      <p className="text-destructive text-sm mt-2">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.phone")}
                    </label>
                    <input
                      {...form.register("phone")}
                      className="w-full px-5 py-4 rounded-xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                      placeholder="+49 ..."
                    />
                    {form.formState.errors.phone && (
                      <p className="text-destructive text-sm mt-2">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.message")}
                  </label>
                  <textarea
                    {...form.register("message")}
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-sm mt-2">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full px-8 py-4 rounded-xl font-bold text-lg bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200"
                  >
                    {mutation.isPending ? t("contact.submitting") : t("contact.submit")}
                  </button>
                </div>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Ihre Daten werden vertraulich behandelt und verschlüsselt übertragen. Beachten Sie unsere <a href="/datenschutz" className="underline hover:text-primary">Datenschutzerklärung</a>.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
