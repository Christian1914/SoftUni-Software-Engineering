import "./App.css";
import React, { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  // State to track the open item
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle item clicks
  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the current item
    } else {
      setOpenIndex(index); // Open the new item
    }
  };

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div
          className={`item ${openIndex === index ? "open" : ""}`}
          key={index}
          onClick={() => toggleItem(index)}
        >
          <span className="number">{index + 1}</span>
          <span className="title">{faq.title}</span>
          {/* Update the icon based on open state */}
          <span className="icon">{openIndex === index ? "-" : "+"}</span>
          {openIndex === index && (
            <div className="content-box">
              <ul>
                <li className="text">{faq.text}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

