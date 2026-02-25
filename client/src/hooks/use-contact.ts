import { useMutation } from "@tanstack/react-query";
import { api, type ContactInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactInput) => {
      const validated = api.contact.create.input.parse(data);
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.contact.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to submit message");
      }

      return api.contact.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Vielen Dank!",
        description: "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze.",
      });
    },
    onError: (error) => {
      toast({
        title: "Fehler",
        description: error.message || "Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    }
  });
}
