import React from 'react';
import Header from '../components/Header';
import FloorPlan from '../components/FloorPlan';
import FormPerson from '../components/FormPerson';
import FormShapes from '../components/FormShapes';
import List from '../components/List';

function Home() {
  return (
    <div>
      <Header />
      <div className="page">
        <div className="plan-list">
          <FloorPlan />
          <List />
        </div>
        <div className="forms">
          <FormPerson />
          <hr className="divider" />
          <FormShapes />
        </div>
      </div>
    </div>
  )
}

export default Home;