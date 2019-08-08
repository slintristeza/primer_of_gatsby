import React from 'react'

const Works = () => {
  return (
    <>
    <section className="section" id="works">
      <h2 className="section-title">Works</h2>
      <ul>
        <li className="workItem">
          <img
            className="workItem-image"
            src="https://dummyimage.com/600x300/eee/ccc"
            alt="work 1"
          />
          <h3 className="workItem-category">2019/07 - Frontend</h3>
          <h3 className="workItem-title">React.js</h3>
        </li>
        <li className="workItem-image">
          <img
            className="workItem-image"
            src="https://dummyimage.com/600x300/eee/ccc"
            alt="work 2"
          />
          <h3 className="workItem-category">2019/06 - Frontend</h3>
          <h3 className="workItem-title">Vue.js</h3>
        </li>
      </ul>
    </section>
    </>
  );
};

export default Works;
