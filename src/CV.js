// src/CV.js

import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './CV.css'; // Import your CSS file

const CV = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Fetch your Markdown content (for demonstration purposes, let's assume it's stored locally)
    fetch('/cv-content.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error fetching CV content:', error));
  }, []);

  return (
    <div className="cv-container">
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
    </div>
  );
};

export default CV;
