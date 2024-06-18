import { useState } from "react";

// const faqs = [
//   {
//     title: "Where are these chairs assembled?",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
//   },
//   {
//     title: "How long do I have to return my chair?",
//     text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
//   },
//   {
//     title: "Do you ship to countries outside the EU?",
//     text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
//   },
// ];

// function App() {
//   return (
//     <div>
//       <Accordion data={faqs} />
//     </div>
//   );
// }

// function Accordion({ data }) {
//   return data.map((item, i) => (
//     <AccordionItem
//       className="accordion"
//       title={item.title}
//       text={item.text}
//       num={i}
//       key={item.text}
//     />
//   ));
// }

// function AccordionItem({ num, title, text }) {
//   const [isOpen, setIsOpen] = useState(null);

//   function handleToggle() {
//     setIsOpen((isOpen) => !isOpen);
//   }

//   return (
//     <div className={`item ${isOpen ? "open" : ""}`}>
//       <p className="number">{num < 10 ? ` 0${num + 1}` : `${num + 1}`}</p>
//       <p className="title">{title}</p>
//       <p className="icon" onClick={handleToggle}>
//         {isOpen ? "-" : "+"}
//       </p>
//       {isOpen && <div className="content-box"> {text}</div>}
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayedText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <div>
      <div>{displayedText}</div>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
