import './App.css';
import Accordion from './components/Accordion';
import { AccordionData } from './types';

const FAQData: AccordionData[] = [
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
  return (
    <main>
      <h1 data-testid="proj-title">React Accordion</h1>    
      <Accordion data={FAQData} />
    </main>
  );
};

export default App;
