// src/CV.js

import React, { useState, useEffect } from 'react';
import { FaEnvelope } from "react-icons/fa";       // Font Awesome
import { IoMdCheckmark } from "react-icons/io"; // Ionicons
import { MdCheck } from "react-icons/md";       // Material Design
import { GoCheck } from "react-icons/go";       // Github Octicon

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
              <tr className='toppage'>
                <td></td>
              </tr>
              <tr className='name'>
                <td>Alexandre Martins Paiva</td>
              </tr>
              <tr className='role'>
                <td>Engineering Manager | Senior Backend Engineer</td>
              </tr>
              <tr className='contact'>
                <table>
                  <tr>
                    <td><FaEnvelope /><a href="mailto:ampaiva@gmail.com"> ampaiva@gmail.com</a></td>
                    <td><FaEnvelope /><a href="tel:+5531988122060"> +5531988122060</a></td>
                    <td><FaEnvelope /><a href="geo:-19.4583,-44.2412?q=Sete%20Lagoas,%20MG,%20Brazil"> Brazil</a></td></tr>
                </table>
              </tr>
              <tr>
                <td>
                  <div class='body'>
                    <div class="section">
                      <table>
                        <tr>
                          <div class="title">
                            <div class="column"><div class="icon"><FaEnvelope /></div></div>
                            <div class="column"><div class="title">Objective</div></div>
                            <div class="column"><div class="filler"></div></div>
                          </div>
                        </tr>
                        <tr>
                          <div class="contents">
                            To leverage my Engineering Manager and contribute effectively to a dynamic organization, where I can continuously enhance my abilities, collaborate with a diverse team, and drive impactful results.
                          </div>
                        </tr>
                      </table>
                    </div>
                    <div class="section">
                      <div class="title">
                        <div class="column"><div class="icon"><FaEnvelope /></div></div>
                        <div class="column"><div class="title">Summary</div></div>
                        <div class="column"><div class="filler"></div></div>
                      </div>
                      <div class="contents">
                        Computer Science MSc in Software Engineering with a thesis on code clone. Extensive experience as an Electrical Engineer specializing in the development of mission-critical systems. Proficient in Python, Java, C, C++, and C#, having consistently contributed to the success of diverse projects.
                        <p />As an Engineering Manager, led multiple teams, overseeing an average of eight Engineers as direct reports. Key responsibilities included providing actionable feedback, nurturing their career growth, and actively participating in crucial technical project decisions. Achieved a perfect score of 100 out of 100 in the recent feedback survey, as reported anonymously by direct reports, encompassing eight key management aspects.

                        <p />Selected for international assignments leading development teams on projects in the United States, China, India, and Canada. These selections involved rigorous processes, incorporating practical tests and various technical interviews, showcasing competence and versatility.

                        <p />Remote work over seven years. Embracing a complete agile process through Scrum or Kanban has been integral to successful project management in a remote setting.
                      </div>
                    </div>
                    <div class="section">
                      <div class="title">
                        <div class="column"><div class="icon"><FaEnvelope /></div></div>
                        <div class="column"><div class="title">Skills</div></div>
                        <div class="column"><div class="filler"></div></div>
                      </div>
                      <div class="contents">
                      Stakeholder Management
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '90%' }}></div>
                        </div>
                        Team Building
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '95%' }}></div>
                        </div>
                        Software Development
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '95%' }}></div>
                        </div>
                        Software Engineering
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '95%' }}></div>
                        </div>
                        C++
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '95%' }}></div>
                        </div>
                        Java
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '98%' }}></div>
                        </div>
                        Python
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '90%' }}></div>
                        </div>
                        Django
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '80%' }}></div>
                        </div>
                        Linux
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '80%' }}></div>
                        </div>
                        Embedded Systems
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '70%' }}></div>
                        </div>
                        Agile Methodologies
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '90%' }}></div>
                        </div>
                        Engineering Management
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '85%' }}></div>
                        </div>
                        Portuguese
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '100%' }}></div>
                        </div>
                        English
                        <div class="skill">
                          <div class="skill-bar" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
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