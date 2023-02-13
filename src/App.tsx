import React from 'react';
import './App.css';

function App() {
  return (<main>
    <h1>React Accordion</h1>

    <section>
      <h2>Frequently Asked Questions</h2>
      <article>
        <div>
          <h3>Is this a good product?</h3>
          <button type='button'>+</button>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sed vel quasi! Esse, sed debitis voluptatum perferendis repellendus inventore quasi, molestias corrupti voluptas laudantium, labore alias beatae fugit natus ipsam.
        </p>
      </article>
      <article>
        <div>
          <h3>How much does it cost?</h3>
          <button type='button'>+</button>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit dolorem minima culpa nemo dolor quod iusto quae dolorum cupiditate molestias nobis aliquid facilis amet similique, maiores sint saepe consequatur.
        </p>
      </article>
      <article>
        <div>
          <h3>When can I get it?</h3>
          <button type='button'>+</button>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque suscipit dolorem minima culpa nemo dolor quod iusto quae dolorum cupiditate molestias nobis aliquid facilis amet similique, maiores sint saepe consequatur.
        </p>
      </article>
    </section>
  </main>);
}

export default App;
