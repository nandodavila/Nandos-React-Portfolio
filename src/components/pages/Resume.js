import React from 'react';

export default function Resume() {
  return (
    <div className='container-md resume-page'>
      <h1>Resume Page</h1>
      <a href='https://docs.google.com/document/d/1_NB-d6XLrCP09Sm4jxuKSZU5XbBZb3m3sRRoeUEreAw/edit?usp=sharing' className='resume-link'>Find my Resume here!</a>
      <h2>Below is a list of my skills</h2>
      <div className='resume-list'>
        <h3>Front-End</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>JavaScript</li>
          <li>BootStrap</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>Angular.js</li>
        </ul>
        <h3>Back-End</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>C#</li>
          <li>.NET</li>
        </ul>
      </div>
    </div>
  );
}
