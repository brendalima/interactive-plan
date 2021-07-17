import React from 'react';
import Header from '../components/Header';
import FloorPlan from '../components/FloorPlan';
import FormPerson from '../components/FormPerson';
import FormShapes from '../components/FormShapes';

function Home() {
  return (
    <div>
      <Header />
      <FloorPlan />
      <FormPerson />
      <FormShapes />
    </div>
  )
}

export default Home;