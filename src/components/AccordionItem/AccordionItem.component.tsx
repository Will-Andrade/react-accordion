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
  <article className={classes.card}>
    <div className={classes['card-content']}>
      <h3 className={classes['card-title']}>{title}</h3>
      <button 
        type='button' 
        className={classes['toggle-btn']}
        onClick={() => onClickHandler(id)} 
      >
        {id === selectedItem ? '-' : '+'}
      </button>
    </div>
    {id === selectedItem && <p className={classes.content}>{content}</p>}
  </article>
  );
};
