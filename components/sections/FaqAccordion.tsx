import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion defaultValue={['0']} className="mt-8 w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={String(index)}>
          <AccordionTrigger className="py-4 text-base font-medium text-left">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-4 text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
