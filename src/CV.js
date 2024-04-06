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
    <div className="container">
      <table>
        <tr>
          <td className="menu">Menu</td>
          <td>
            <table>
              <tr className='x'><td><h1></h1></td>
              </tr>
              <tr className='name'>
                <td>Alexandre Martins Paiva</td>
              </tr>
              <tr className='role'>
                <td><h2>Engineering Manager | Senior Backend Engineer</h2></td>
              </tr>
              <tr className='contact'>
                <table>
                  <tr><td>ampaiva@gmail.com</td><td>+5531988122060</td><td>Brazil</td></tr>
                </table>
              </tr>
              <tr>
                <td>
                  <div className='markdown'>
                    <div className="column" dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
                  </div>
                </td>
              </tr>
            </table>
          </td>
          <td className="help">
          </td>
        </tr>
      </table>
    </div>


  );
};

export default CV;
