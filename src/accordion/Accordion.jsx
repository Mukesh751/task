import React, { useState } from 'react';
import './Accordion.css';

const faqs = [
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update and render changes when the application state changes.'
  },
  {
    question: 'How do I install React?',
    answer: 'You can install React using npm (Node Package Manager) by running the command: npm install react. Additionally, you may want to install react-dom and other dependencies based on your project needs.'
  },
  {
    question: 'What are React components?',
    answer: 'React components are reusable, self-contained building blocks for UI elements. They can be class components or functional components and encapsulate their own state and behavior.'
  },
  {
    question: 'What is JSX?',
    answer: 'JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It allows you to write HTML-like code in your JavaScript files, making it more convenient to describe UI components.'
  },
  {
    question: 'How to handle state in React?',
    answer: 'State in React is managed using the useState hook for functional components or this.state for class components. You can update the state using the setState function, triggering a re-render of the component.'
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
        <h2>FAQs - Get Answers Here!</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="accordion-title">
            <span>{faq.question}</span>
            <div className="arrow">&#9650;</div>
          </div>
          <div className="accordion-content">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
