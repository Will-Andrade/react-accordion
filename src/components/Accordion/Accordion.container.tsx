import { useState } from "react";
import { AccordionData } from "../../types";
import AccordionComponent from "./Accordion.component";

type AccordionContainerProps = {
  data: AccordionData[];
}

export default function AccordionContainer(props: AccordionContainerProps) {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  const onButtonClickHandler = (id: number) => {
    if (selectedItem === id) {
      setSelectedItem(null);
      return
    }

    setSelectedItem(id);
  };

  return (
    <AccordionComponent
      accordionContent={props.data}
      selectedItem={selectedItem}
      onButtonClickHandler={onButtonClickHandler}
    />
  );
};
