import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Landing from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TourDeWheel — Your bicycle. Your property. In 12 months." },
      {
        name: "description",
        content:
          "Bike-leasing in Strasbourg that makes you the owner after 12 months. Maintenance, insurance and accessories included.",
      },
      { property: "og:title", content: "TourDeWheel — Your bike, your property in 12 months" },
      {
        property: "og:description",
        content:
          "All-inclusive bike leasing in Strasbourg. Save up to €1,704 and own your bike.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Landing />
    </LanguageProvider>
  );
}
