// src/FAQ.js
import React, { useState } from 'react';
import '../Components/faq.css'

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase for a full refund.",
      open: false
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes 5-7 business days.",
      open: false
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship internationally. Shipping costs will apply.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, i) => (
        <div
          className={"faq-item " + (faq.open ? 'open' : '')}
          key={i}
          onClick={() => toggleFAQ(i)}
        >
          <div className="faq-question">
            {faq.question}
          </div>
          <div className="faq-answer">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
