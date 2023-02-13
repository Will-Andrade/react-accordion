import { AccordionData } from "../../types";
import AccordionItem from "../AccordionItem";

type AccordionComponentProps = {
  selectedItem: null | number;
  accordionContent: AccordionData[];
  onButtonClickHandler: (id: number) => void;
}

export default function AccordionComponent({
  selectedItem,
  accordionContent,
  onButtonClickHandler
}: AccordionComponentProps): JSX.Element {
  
  
  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      {accordionContent.map(({ id, title, content }: AccordionData) => (
        <AccordionItem 
          id={id} 
          key={`${title}-${id}`}
          title={title} 
          content={content} 
          selectedItem={selectedItem}
          onClickHandler={onButtonClickHandler} 
        />
      ))}
    </section>
  );
};
