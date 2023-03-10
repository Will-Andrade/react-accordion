import classes from './AccordionItem.styles.module.css';

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
  <article className={classes.card} data-testid={`accItem-${id}`}>
    <div className={classes['card-content']}>
      <h3 className={classes['card-title']}>{title}</h3>
      <button 
        type='button' 
        className={classes['toggle-btn']}
        data-testid={`acc-toggle-${id}`}
        onClick={() => onClickHandler(id)} 
      >
        {id === selectedItem ? '-' : '+'}
      </button>
    </div>
    {id === selectedItem && <p className={classes.content} data-testid={`acc-content-${id}`}>{content}</p>}
  </article>
  );
};
