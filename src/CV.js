// src/CV.js

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { MdOutlineTopic } from "react-icons/md";


import { TbTargetArrow } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";


import Objective from './parser/objective';
import ExperienceList from './parser/experiences';

import './CV.css';

const CV = () => {
  const [data, setMarkdown] = useState(null);

  useEffect(() => {
    fetch('/mycv/cv.json')
      .then(response => response.text())
      .then(text => setMarkdown(JSON.parse(text)))
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
              </tr>
              <tr className='name'>
                {data && (<td>{data?.header?.name}</td>)}
              </tr>
              <tr className='role'>
                {data && (<td>{data.header.roles.join(' | ')}</td>)}
              </tr>
              <tr className='contact'>
                <table>
                  <tr>
                    <td><FaEnvelope /><a href="mailto:ampaiva@gmail.com"> ampaiva@gmail.com</a></td>
                    <td><FaWhatsapp /><a href="tel:+5531988122060"> +5531988122060</a></td>
                    <td><FaLocationDot /><a href="geo:-19.4583,-44.2412?q=Sete%20Lagoas,%20MG,%20Brazil"> Brazil</a></td></tr>
                </table>
              </tr>
              <tr>
                <td>
                  <div class='body'>
                    <Objective objective={data?.objective} />
                    <div class="section">
                      <div class="title">
                        <div class="column"><div class="icon"><MdOutlineTopic /></div></div>
                        <div class="column"><div class="text">Summary</div></div>
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
                        <div class="column"><div class="icon"><GiSkills /></div></div>
                        <div class="column"><div class="text">Skills</div></div>
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
                    <ExperienceList experiences={data?.experiences} />
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