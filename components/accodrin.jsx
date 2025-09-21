

// Example imports for shadcn/ui accordion (adjust path to match your project setup)
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
export default function TesseraFaqAccordion() {
    return (
        <Accordion type="single" collapsible className="space-y-2">
            {faqs
                .map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left px-4 py-3 rounded-md ">
                            <div className="flex items-center justify-between w-full">
                                <span className="font-medium">{faq.question}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4 pt-2 text-sm leading-6 text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
        </Accordion>
    );
}

