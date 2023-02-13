import React, { useState } from 'react';
import './App.css';

// pass through props later
const FAQData = [
  { 
    id: 0,
    title: 'Is this a good product?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed vel quasi!'
  },
  { 
    id: 1,
    title: 'How much does it cost?',
    content: 'Esse, sed debitis voluptatum perferendis repellendus inventore quasi, molestias corrupti voluptas laudantium, labore alias beatae fugit natus ipsam.'
  },
  { 
    id: 2,
    title: 'When can I get it?',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }, 
];

function App() {
  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  const onButtonClickHandler = (id: number) => {
    if (selectedItem === id) return setSelectedItem(null);
    setSelectedItem(id);
  };

  return (<main>
    <h1>React Accordion</h1>

    <section>
      <h2>Frequently Asked Questions</h2>
      {FAQData.map(({ id, title, content }) => (
        <article key={id}>
          <div>
            <h3>{title}</h3>
            <button type='button' onClick={() => onButtonClickHandler(id)}>
              {id === selectedItem ? '-' : '+'}
            </button>
          </div>
          {id === selectedItem && <p>{content}</p>}
        </article>
      ))}
    </section>
  </main>);
};

export default App;
