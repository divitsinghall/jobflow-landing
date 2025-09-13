import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is my data private?", a: "Yes. JobFlow is privacy-first. Your data stays with you." },
  { q: "How much will it cost?", a: "Core features will be free for students." },
  { q: "Is it open source?", a: "We plan to open up parts of the codebase and welcome PRs." },
  { q: "How will reminders work?", a: "You’ll be able to set follow-up dates and get gentle nudges." },
  { q: "Roadmap?", a: "Timeline view, resume tailoring engine, integrations, and more." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10">
              <AccordionTrigger className="py-4">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-4 text-sm text-zinc-600 dark:text-zinc-300">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

