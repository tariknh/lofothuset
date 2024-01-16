import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import questions from "@/app/Static/faq.json";
import { AnimatedLetters, AnimatedLines } from "../ui/Animations/AnimatedHero";

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="my-16 p-3 lg:p-4 w-full">
      <h2 className="text-[clamp(32px,9.6vw,36px)] md:text-[clamp(42px,3.3vw,48px)] tracking-tighter my-8">
        <AnimatedLetters text="Ofte stilte spørsmål" />
      </h2>
      {questions.accordionItems.map((question, key) => (
        <AccordionItem
          className="md:text-xl  sm:py-4"
          key={key}
          value={question.question}
        >
          <AccordionTrigger>{question.question}</AccordionTrigger>
          <AccordionContent className="md:text-lg mb-8">
            {question.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
