type AccordionItemProps = {
  id: number;
  title: string;
  content: string;
  selectedItem: null | number;
  onClickHandler: (id: number) => void;
};

export default function AccordionItemComponent({
  id,
  title,
  content,
  selectedItem,
  onClickHandler
}: AccordionItemProps) {
  return (
  <article>
    <div>
      <h3>{title}</h3>
      <button type='button' onClick={() => onClickHandler(id)}>
        {id === selectedItem ? '-' : '+'}
      </button>
    </div>
    {id === selectedItem && <p>{content}</p>}
  </article>
  );
};
