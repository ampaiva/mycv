// src/CV.js

import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './CV.css';

const CV = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/mycv/cv-content.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error fetching CV content:', error));
  }, []);

  return (
    <div className="cv-container">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  );
};

export default CV;
