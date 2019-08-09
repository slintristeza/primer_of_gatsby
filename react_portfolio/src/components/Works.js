import React from 'react'

import WorkItem from './WorkItem';

const Works = () => {
  return (
    <section className="section" id="works">
      <h2 className="section-title">Works</h2>
      <ul>
        <WorkItem title="React.js" category="2019/7 - Frontend" />
        <WorkItem title="Vue.js" category="2019/8 - Frontend" />
      </ul>
    </section>
  )
};

export default Works;