import React, { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLength: number;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const displayText = expanded ? text : text.slice(0, maxLength);

  return (
    <div>
      <p>{displayText}</p>
      {text.length > maxLength && (
        <button onClick={toggleExpand}>
          {expanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
