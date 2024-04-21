import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Paragraphs from './components/Paragraphs';
import { GlobalContextProvider } from './state/GlobalContext';

import './CV.css';
import { getRichObject } from './parser/RichObject';

const CV = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/mycv/cv.json')
      .then(response => response.text())
      .then(text => setData(getRichObject(text)))
      .catch(error => console.error('Error fetching CV content:', error));
  }, []);

  return (
    <GlobalContextProvider>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td className="menu">Menu</td>
              <td>
                <table>
                  <tbody>
                    <tr className='toppage'>
                    </tr>
                    <tr className='name'>
                      {data && (<td>{data?.header?.name}</td>)}
                    </tr>
                    <tr className='role'>
                      {data && (<td>{data?.header?.roles.join(' | ')}</td>)}
                    </tr>
                    <tr className='contact'>
                      <td>
                        <table>
                          <tbody>
                            <tr>
                              <td><FaEnvelope /> <a href={"mailto:" + data?.header?.email}>{" " + data?.header?.email}</a></td>
                              <td><FaWhatsapp /> <a href={"tel:+5531988122060" + data?.header?.phone}>{data?.header?.phone}</a></td>
                              <td><FaLocationDot /> <a href={"geo:" + data?.header?.location?.geo}>{data?.header?.location?.display}</a></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="body">
                          <Paragraphs paragraphs={data} className={"sections"} />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="help">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </GlobalContextProvider>
  );
};

export default CV;