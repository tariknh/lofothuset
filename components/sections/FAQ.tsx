import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import questions from "@/app/Static/faq.json";

export function FAQ() {
  console.log(questions);
  return (
    <Accordion type="single" collapsible className="my-16 p-8 lg:p-16">
      <h2 className="text-center mb-8 sm:text-left lg:text-4xl text-3xl ">
        Ofte stilte spørsmål
      </h2>
      {questions.accordionItems.map((question, key) => (
        <AccordionItem
          className="md:text-xl sm:py-4"
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
