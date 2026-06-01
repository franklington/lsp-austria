interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="faq-accordion">
      {items.map((item, index) => (
        <details key={index} className="faq-item" open={index === 0}>
          <summary>
            {item.q}
            <span className="faq-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  )
}
